/* ═══════════════════════════════════════
   ENGINE.JS — Lesson rendering engine
   Renders any lesson data object into the UI.
   Never needs editing when adding new lessons.
   ═══════════════════════════════════════ */

const TOTAL_SECS = 7;

// ── Open a lesson by key ──────────────────────────────────────
function openLesson(week, day, lang) {
  const key = `${week}-${day}-${lang}`;
  const ld  = LESSONS[key];
  if (!ld) { toast('This lesson is coming soon!', 'error'); return; }
  activeLesson = { week, day, lang, data: ld };
  currentSection = 0; currentQ = 0; quizScore = 0; answered = false;
  renderLesson(ld);
  showPage('lesson');
  document.getElementById('navLesson').classList.remove('hidden');
  startTimer();
}

// ── Render full lesson ────────────────────────────────────────
function renderLesson(d) {
  const ib = d.color === 'blue';
  // Sidebar — section nav
  document.getElementById('sidebarTitle').textContent = d.subtitle;
  const sNav = document.getElementById('sidebarSections');
  sNav.innerHTML = '';
  d.sections.forEach((s, i) => {
    const btn = document.createElement('button');
    btn.className = 's-nav-item' + (i === 0 ? ' s-active' : ' s-locked');
    btn.id = 'snav-' + i;
    btn.onclick = () => gotoSection(i);
    btn.innerHTML = `<span class="s-dot" style="background:${ib ? 'var(--blue)' : 'var(--gold)'}"></span>${s}`;
    sNav.appendChild(btn);
  });
  // Sidebar — week nav
  const sWeek = document.getElementById('sidebarWeek');
  sWeek.innerHTML = '';
  CURRICULUM[0].days.forEach(day => {
    const isCur = activeLesson.day === day.day && activeLesson.lang === day.lang;
    const btn   = document.createElement('button');
    btn.className = 's-nav-item' + (isCur ? ' s-active' + (ib ? ' blue-active' : '') : ' s-locked');
    const dc = day.lang === 'Hebrew' ? 'var(--gold)' : day.lang === 'Greek' ? 'var(--blue)' : 'var(--green)';
    btn.innerHTML = `<span class="s-dot" style="background:${dc}"></span>Day ${day.day} · ${day.lang}`;
    sWeek.appendChild(btn);
  });
  // Progress bar
  const pbar = document.getElementById('lessonProgressFill');
  pbar.className = 'lesson-progress-fill' + (ib ? ' blue' : '');
  pbar.style.width = '0%';
  // Build panels
  const main = document.getElementById('lessonMain');
  main.innerHTML = '';
  [
    buildIntro(d, ib),
    buildAlpha(d, ib),
    buildFocus(d, ib),
    buildWriting(d, ib),
    buildVocab(d, ib),
    buildQuizPanel(d, ib),
    buildComplete(d, ib),
  ].forEach(p => main.appendChild(p));
  document.getElementById('lsec-0').classList.add('active');
}

// ── Panel factory ─────────────────────────────────────────────
function mkPanel(id) {
  const d = document.createElement('div');
  d.className = 'lesson-section-panel';
  d.id = 'lsec-' + id;
  return d;
}
const B  = ib => ib ? ' blue' : '';
const BN = ib => 'btn-next' + (ib ? ' blue' : '');

// ── Panel 0: Introduction ─────────────────────────────────────
function buildIntro(d, ib) {
  const p = mkPanel(0);
  p.innerHTML = `
    <div class="eyebrow${B(ib)}">${d.subtitle}</div>
    <h1 class="lesson-h1">${d.title}</h1>
    <p class="lesson-intro${B(ib)}">${d.intro}</p>
    <div class="lesson-h2${B(ib)}">What You'll Cover Today</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:1.5rem;">
      <div class="box box-note"><strong>Part 1 · 30 min</strong><br>The ${ib?'Greek':'Hebrew'} alphabet — overview</div>
      <div class="box box-note"><strong>Part 2 · 30 min</strong><br>Your first 5 letters with writing practice</div>
      <div class="box box-note"><strong>Part 3 · 20 min</strong><br>First ${ib?'Greek':'Hebrew'} words</div>
      <div class="box box-note"><strong>Part 4 · 10 min</strong><br>Quiz to lock in today's learning</div>
    </div>
    <div class="lesson-h2${B(ib)}">Before You Begin</div>
    ${d.beforeYouBegin}
    <button class="${BN(ib)}" onclick="advanceSection(1)">Begin Lesson →</button>`;
  return p;
}

// ── Panel 1: Full Alphabet ────────────────────────────────────
function buildAlpha(d, ib) {
  const p   = mkPanel(1);
  let grid  = '<div class="alphabet-grid">';
  d.alphabet.forEach(l => {
    const cls = l.t ? (ib ? 'today-grk' : 'today-heb') : '';
    grid += `<div class="alpha-card${cls?' '+cls:''}"><span class="alpha-num">${l.n}</span><span class="alpha-char">${l.ch}</span><span class="alpha-name">${l.name}</span><span class="alpha-snd">${l.sound}</span></div>`;
  });
  grid += '</div>';
  p.innerHTML = `
    <div class="eyebrow${B(ib)}">Part 1 · Overview</div>
    <h1 class="lesson-h1">The ${ib?'Greek':'Hebrew'} Alphabet</h1>
    <p class="lesson-intro${B(ib)}">${d.alphabetIntro}</p>
    <div class="lesson-h2${B(ib)}">All ${d.alphabet.length} Letters</div>
    ${grid}
    ${d.alphabetNotes}
    <button class="btn-back" onclick="advanceSection(0)">← Back</button>
    <button class="${BN(ib)}" onclick="advanceSection(2)">Today's Letters →</button>`;
  return p;
}

// ── Panel 2: Focus Letters ────────────────────────────────────
function buildFocus(d, ib) {
  const p     = mkPanel(2);
  let cards   = '<div class="focus-grid">';
  d.focusLetters.forEach(l => {
    cards += `<div class="focus-card${ib?' grk':''}"><span class="focus-char">${l.ch}</span><span class="focus-name">${l.name}</span><span class="focus-trans">${l.trans}</span><span class="focus-desc">${l.desc}</span><span class="focus-ex">${l.ex}</span></div>`;
  });
  cards += '</div>';
  p.innerHTML = `
    <div class="eyebrow${B(ib)}">Part 1 · Letters</div>
    <h1 class="lesson-h1">Today's Five Letters</h1>
    <p class="lesson-intro${B(ib)}">Today: ${d.focusLetters.map(l=>l.name).join(', ')}. Study each carefully.</p>
    ${cards}
    <div class="lesson-h2${B(ib)}">Deep Dive</div>
    ${d.deepDive}
    <button class="btn-back" onclick="advanceSection(1)">← Back</button>
    <button class="${BN(ib)}" onclick="advanceSection(3)">Writing Practice →</button>`;
  return p;
}

// ── Panel 3: Writing Practice ─────────────────────────────────
function buildWriting(d, ib) {
  const p   = mkPanel(3);
  let boxes = '';
  d.writing.forEach(l => {
    const ch    = l.ch.split('/')[0];
    const steps = l.steps.map(s => `<li>${s}</li>`).join('');
    boxes += `<div class="write-box"><div class="lesson-h3" style="margin-top:0;">${ch} ${l.name}</div><span class="write-char${ib?' grk':''}">${ch}</span><ul class="stroke-list">${steps}</ul></div>`;
  });
  p.innerHTML = `
    <div class="eyebrow${B(ib)}">Part 2 · Practice</div>
    <h1 class="lesson-h1">Writing the Letters</h1>
    <p class="lesson-intro${B(ib)}">Get a pen and paper. Writing by hand is the fastest way to cement letter shapes in memory.</p>
    <div class="box box-tip"><strong>💡 You need:</strong> A notebook and a pen. ${ib?'Greek is written left to right.':'Hebrew is written right to left.'}</div>
    <div class="lesson-h2${B(ib)}">Stroke Guides</div>
    ${boxes}
    <div class="box box-fact"><strong>✍ Final practice:</strong> Write all five letters in sequence ${ib?'— Α Β Γ Δ Ε — five times across':'— right to left, five times'}. Then try from memory.</div>
    <button class="btn-back" onclick="advanceSection(2)">← Back</button>
    <button class="${BN(ib)}" onclick="advanceSection(4)">First Words →</button>`;
  return p;
}

// ── Panel 4: Vocabulary ───────────────────────────────────────
function buildVocab(d, ib) {
  const p    = mkPanel(4);
  let rows   = '';
  d.vocab.forEach(v => {
    rows += `<tr><td class="v-char${ib?' grk':''}">${v.ch}</td><td class="v-word">${v.trans}</td><td>${v.meaning}</td><td class="v-note">${v.note}</td></tr>`;
  });
  p.innerHTML = `
    <div class="eyebrow${B(ib)}">Part 3 · Vocabulary</div>
    <h1 class="lesson-h1">Your First ${ib?'Greek':'Hebrew'} Words</h1>
    <p class="lesson-intro${B(ib)}">Seven words using today's letters. Spot the letters you know inside each word.</p>
    <div class="lesson-h2${B(ib)}">Words Containing Today's Letters</div>
    <table class="v-table">
      <thead><tr><th>${ib?'Greek':'Hebrew'}</th><th>Pronunciation</th><th>Meaning</th><th>Connection</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="lesson-h2${B(ib)}">${d.scriptureRef} — The Opening Verse</div>
    <p class="lesson-p">Here is the opening verse of ${ib?'the Gospel of John':'the Bible'} in the original language. Spot the letters you learned today:</p>
    <div class="scripture-box">
      <span class="scripture-orig${ib?' grk':''}">${d.scripture.orig}</span>
      <div class="scripture-trans">${d.scripture.trans}</div>
      <div class="scripture-eng">${d.scripture.eng}</div>
    </div>
    <p class="lesson-p">${d.scriptureNote}</p>
    <div class="box box-tip">${d.scriptureTip}</div>
    <button class="btn-back" onclick="advanceSection(3)">← Back</button>
    <button class="${BN(ib)}" onclick="advanceSection(5)">Take the Quiz →</button>`;
  return p;
}

// ── Panel 5: Quiz ─────────────────────────────────────────────
function buildQuizPanel(d, ib) {
  const p = mkPanel(5);
  p.innerHTML = `
    <div class="eyebrow${B(ib)}">Part 4 · Review</div>
    <h1 class="lesson-h1">Knowledge Check</h1>
    <p class="lesson-intro${B(ib)}">Five questions. The feedback explains every answer whether you are right or wrong.</p>
    <div class="quiz-wrap">
      <div class="quiz-header${B(ib)}">Question <span id="qNum">1</span> of 5</div>
      <div class="quiz-q" id="qText"></div>
      <div class="quiz-char${ib?' grk':''}" id="qChar"></div>
      <div class="quiz-options" id="qOpts"></div>
      <div class="q-feedback" id="qFeedback"></div>
      <button class="${BN(ib)}" id="qNextBtn" style="display:none" onclick="nextQ()">Next Question →</button>
    </div>
    <button class="btn-back" onclick="advanceSection(4)">← Back</button>`;
  setTimeout(() => renderQ(0), 60);
  return p;
}

// ── Panel 6: Complete ─────────────────────────────────────────
function buildComplete(d, ib) {
  const p = mkPanel(6);
  p.innerHTML = `
    <div class="complete-box">
      <div style="font-size:2.5rem;margin-bottom:1rem;">✦</div>
      <div class="eyebrow${B(ib)}" style="justify-content:center;display:flex;margin-bottom:.5rem;">${ib?'Greek':'Hebrew'} · Lesson Complete</div>
      <div class="complete-h2">${d.subtitle}</div>
      <div class="xp-row">
        <span class="xp-chip${ib?' blue':''}">✦ ${ib?'Greek':'Hebrew'} · ${d.subtitle}</span>
        <span class="xp-chip${ib?' blue':''}" id="quizScoreChip">Quiz: —/5</span>
      </div>
      <p class="complete-p">${d.completionNote}</p>
      <div class="stat-row">
        <div class="stat-chip"><span class="val">5</span><span class="lbl">Letters</span></div>
        <div class="stat-chip"><span class="val">7</span><span class="lbl">Words</span></div>
        <div class="stat-chip"><span class="val" id="finalScore">—</span><span class="lbl">Quiz</span></div>
        <div class="stat-chip"><span class="val" id="finalTime">0</span><span class="lbl">Minutes</span></div>
      </div>
      <div style="text-align:left;max-width:460px;margin:0 auto 1.5rem;">
        <div class="lesson-h2${B(ib)}">Before Your Next Session</div>
        <p class="lesson-p"><strong>Daily review (5–10 min):</strong> Write the five letters from memory each morning. Repetition is the mechanism of memory.</p>
        <p class="lesson-p"><strong>Next up:</strong> ${d.nextDay}</p>
      </div>
      <button class="btn-dash" onclick="finishLesson()">← Dashboard</button>
      <button class="${BN(ib)}" onclick="finishLesson()">${d.nextDay}</button>
    </div>`;
  return p;
}

// ═══════════════════════════════════════
// QUIZ ENGINE
// ═══════════════════════════════════════
function renderQ(idx) {
  const quiz = activeLesson.data.quiz;
  if (idx >= quiz.length) { advanceSection(6); return; }
  const q    = quiz[idx];
  answered   = false;
  const qn   = document.getElementById('qNum');      if (qn) qn.textContent = idx + 1;
  const qt   = document.getElementById('qText');     if (qt) qt.textContent = q.q;
  const qc   = document.getElementById('qChar');     if (qc) { qc.textContent = q.ch; qc.style.display = q.ch ? 'block' : 'none'; }
  const fb   = document.getElementById('qFeedback'); if (fb) fb.className = 'q-feedback';
  const nb   = document.getElementById('qNextBtn');  if (nb) nb.style.display = 'none';
  const wrap = document.getElementById('qOpts');     if (!wrap) return;
  wrap.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const b    = document.createElement('button');
    b.className = 'q-btn';
    b.textContent = opt;
    b.onclick  = () => checkAns(i, q, b);
    wrap.appendChild(b);
  });
}

function checkAns(chosen, q, btn) {
  if (answered) return;
  answered = true;
  document.querySelectorAll('.q-btn').forEach((b, i) => { b.disabled = true; if (i === q.ans) b.classList.add('correct'); });
  const fb = document.getElementById('qFeedback');
  if (chosen === q.ans) {
    quizScore++;
    btn.classList.add('correct');
    if (fb) { fb.textContent = '✓ ' + q.ok; fb.className = 'q-feedback show good'; }
  } else {
    btn.classList.add('wrong');
    if (fb) { fb.textContent = '✗ ' + q.no; fb.className = 'q-feedback show bad'; }
  }
  const nb = document.getElementById('qNextBtn'); if (nb) nb.style.display = 'inline-flex';
}

function nextQ() {
  currentQ++;
  if (currentQ >= activeLesson.data.quiz.length) {
    const sc = document.getElementById('quizScoreChip'); if (sc) sc.textContent = `Quiz: ${quizScore}/5`;
    const fs = document.getElementById('finalScore');    if (fs) fs.textContent = quizScore + '/5';
    advanceSection(6);
  } else {
    renderQ(currentQ);
  }
}

// ═══════════════════════════════════════
// SECTION NAVIGATION
// ═══════════════════════════════════════
function advanceSection(to) {
  const prev = document.getElementById('snav-' + currentSection);
  if (prev) { prev.classList.remove('s-active'); prev.classList.add('s-done'); prev.classList.remove('s-locked'); }
  const curP = document.getElementById('lsec-' + currentSection); if (curP) curP.classList.remove('active');
  currentSection = to;
  const newP = document.getElementById('lsec-' + currentSection); if (newP) newP.classList.add('active');
  const next = document.getElementById('snav-' + currentSection);
  if (next) { next.classList.remove('s-locked', 's-done'); next.classList.add('s-active'); }
  if (currentSection + 1 < TOTAL_SECS) {
    const u = document.getElementById('snav-' + (currentSection + 1)); if (u) u.classList.remove('s-locked');
  }
  const pct = Math.round(currentSection / (TOTAL_SECS - 1) * 100);
  document.getElementById('lessonProgressFill').style.width = pct + '%';
  if (activeLesson) saveProgress(activeLesson.week, activeLesson.day, activeLesson.lang, currentSection, null, false);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function gotoSection(idx) {
  const n = document.getElementById('snav-' + idx);
  if (n && n.classList.contains('s-locked')) return;
  advanceSection(idx);
}

async function finishLesson() {
  const elapsed = Math.round((Date.now() - sessionStart) / 1000);
  if (activeLesson) {
    await saveProgress(activeLesson.week, activeLesson.day, activeLesson.lang, TOTAL_SECS, quizScore, true);
    await saveSession(activeLesson.week, activeLesson.day, activeLesson.lang, elapsed);
  }
  await loadProgress();
  buildDashboard();
  stopTimer();
  showPage('dashboard');
  document.getElementById('navLesson').classList.add('hidden');
  toast('Lesson saved! Great work.', 'success');
}
