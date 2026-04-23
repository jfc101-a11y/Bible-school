/* ═══════════════════════════════════════
   DASHBOARD.JS — Dashboard module
   Visibility: completed weeks + current + 2 ahead
   Progression: strict — all 5 days required
   to unlock the next week
   ═══════════════════════════════════════ */

const CURRICULUM = [
  { week:1, title:'Week 1 — Alphabet Foundations', days:[
    { day:1, name:'Hebrew I',    sub:'Letters 1–5: Aleph to He',          lang:'Hebrew', icon:'HEB', hasLesson:true },
    { day:2, name:'Greek I',     sub:'Letters 1–5: Alpha to Epsilon',     lang:'Greek',  icon:'GRK', hasLesson:true },
    { day:3, name:'Hebrew II',   sub:'Letters 6–10: Vav to Yod',          lang:'Hebrew', icon:'HEB', hasLesson:true },
    { day:4, name:'Greek II',    sub:'Letters 6–10: Zeta to Kappa',       lang:'Greek',  icon:'GRK', hasLesson:true },
    { day:5, name:'Hebrew III',  sub:'Letters 11–15: Kaf to Samekh',      lang:'Hebrew', icon:'HEB', hasLesson:true },
  ]},
  { week:2, title:'Week 2 — Completing the Alphabet', days:[
    { day:1, name:'Hebrew IV',   sub:'Letters 16–22 + Final Forms',       lang:'Hebrew', icon:'HEB', hasLesson:true },
    { day:2, name:'Greek III',   sub:'Letters 11–17: Lambda to Rho',      lang:'Greek',  icon:'GRK', hasLesson:true },
    { day:3, name:'Hebrew V',    sub:'Vowel Points (Niqqud)',              lang:'Hebrew', icon:'HEB', hasLesson:true },
    { day:4, name:'Greek IV',    sub:'Letters 18–24 (Complete)',           lang:'Greek',  icon:'GRK', hasLesson:true },
    { day:5, name:'Hebrew VI',   sub:'Reading First Hebrew Sentences',     lang:'Hebrew', icon:'HEB', hasLesson:true },
  ]},
  { week:3, title:'Week 3 — Latin Begins + Reading', days:[
    { day:1, name:'Latin I',     sub:'Latin Alphabet & Pronunciation',    lang:'Latin',  icon:'LAT', hasLesson:true },
    { day:2, name:'Greek V',     sub:'Greek Grammar I — Nouns & Cases',   lang:'Greek',  icon:'GRK', hasLesson:true },
    { day:3, name:'Hebrew VII',  sub:'Hebrew Grammar I — The Qal Verb',   lang:'Hebrew', icon:'HEB', hasLesson:true },
    { day:4, name:'Latin II',    sub:'Latin Grammar I — Noun Declensions',lang:'Latin',  icon:'LAT', hasLesson:true },
    { day:5, name:'Reading',     sub:'John 1:1 in Hebrew, Greek & Latin', lang:'Hebrew', icon:'HEB', hasLesson:true },
  ]},
  { week:4, title:'Week 4 — Grammar Foundations', days:[
    { day:1, name:'Hebrew VIII', sub:'The Qal Imperfect Verb',            lang:'Hebrew', icon:'HEB', hasLesson:true },
    { day:2, name:'Greek VI',    sub:'The Greek Verb — Present Active',   lang:'Greek',  icon:'GRK', hasLesson:true },
    { day:3, name:'Latin III',   sub:'Latin Verbs — Present Tense',       lang:'Latin',  icon:'LAT', hasLesson:true },
    { day:4, name:'Hebrew IX',   sub:'Construct Chains & Possession',     lang:'Hebrew', icon:'HEB', hasLesson:true },
    { day:5, name:'Review',      sub:'All Three Languages — Weeks 1–4',   lang:'Hebrew', icon:'HEB', hasLesson:true },
  ]},
  { week:5, title:'Week 5 — Reading Scripture', days:[
    { day:1, name:'Hebrew X',    sub:'Psalm 23 — Full Reading',           lang:'Hebrew', icon:'HEB', hasLesson:false },
    { day:2, name:'Greek VIII',  sub:'John 1:1–5 — Word by Word',         lang:'Greek',  icon:'GRK', hasLesson:false },
    { day:3, name:'Latin IV',    sub:'The Lord\'s Prayer in Latin',       lang:'Latin',  icon:'LAT', hasLesson:false },
    { day:4, name:'Hebrew XI',   sub:'Genesis 1:1–5 — Full Reading',      lang:'Hebrew', icon:'HEB', hasLesson:false },
    { day:5, name:'Greek IX',    sub:'Romans 3:21–26 — Justification',    lang:'Greek',  icon:'GRK', hasLesson:false },
  ]},
  { week:6, title:'Week 6 — The Verb Deepens', days:[
    { day:1, name:'Hebrew XII',  sub:'Niphal Stem — Passive Voice',       lang:'Hebrew', icon:'HEB', hasLesson:false },
    { day:2, name:'Greek X',     sub:'Greek Aorist — Simple Past',        lang:'Greek',  icon:'GRK', hasLesson:false },
    { day:3, name:'Latin V',     sub:'Latin Imperfect & Future',          lang:'Latin',  icon:'LAT', hasLesson:false },
    { day:4, name:'Hebrew XIII', sub:'Piel Stem — Intensive Active',      lang:'Hebrew', icon:'HEB', hasLesson:false },
    { day:5, name:'Greek XI',    sub:'Participles — Introduction',        lang:'Greek',  icon:'GRK', hasLesson:false },
  ]},
  { week:7, title:'Week 7 — Pronouns & Prepositions', days:[
    { day:1, name:'Hebrew XIV',  sub:'Hebrew Pronouns & Suffixes',        lang:'Hebrew', icon:'HEB', hasLesson:false },
    { day:2, name:'Greek XII',   sub:'Greek Pronouns',                    lang:'Greek',  icon:'GRK', hasLesson:false },
    { day:3, name:'Latin VI',    sub:'Latin Pronouns & Adjectives',       lang:'Latin',  icon:'LAT', hasLesson:false },
    { day:4, name:'Hebrew XV',   sub:'Hebrew Prepositions in Context',    lang:'Hebrew', icon:'HEB', hasLesson:false },
    { day:5, name:'Reading II',  sub:'Psalm 1 in Hebrew & Greek (LXX)',   lang:'Hebrew', icon:'HEB', hasLesson:false },
  ]},
  { week:8, title:'Week 8 — Syntax & Sentence Structure', days:[
    { day:1, name:'Hebrew XVI',  sub:'The Vav-Consecutive Narrative',     lang:'Hebrew', icon:'HEB', hasLesson:false },
    { day:2, name:'Greek XIII',  sub:'Greek Subordinate Clauses',         lang:'Greek',  icon:'GRK', hasLesson:false },
    { day:3, name:'Latin VII',   sub:'Latin Subordinate Clauses',         lang:'Latin',  icon:'LAT', hasLesson:false },
    { day:4, name:'Hebrew XVII', sub:'Hebrew Poetry — Parallelism',       lang:'Hebrew', icon:'HEB', hasLesson:false },
    { day:5, name:'Reading III', sub:'Isaiah 53 — Servant Song',          lang:'Hebrew', icon:'HEB', hasLesson:false },
  ]},
];

// Full 2-year programme totals for progress bar scaling
const TOTAL_HEB_LESSONS = 80;
const TOTAL_GRK_LESSONS = 70;
const TOTAL_LAT_LESSONS = 50;

// ── Find current active week index ───────────────────────────
function getCurrentWeekIndex() {
  for (let i = 0; i < CURRICULUM.length; i++) {
    const done = userProgress.filter(p => p.week === CURRICULUM[i].week && p.completed).length;
    if (done < CURRICULUM[i].days.length) return i;
  }
  return CURRICULUM.length - 1;
}

// ── Strict unlock check ───────────────────────────────────────
function isWeekUnlocked(weekIndex) {
  if (weekIndex === 0) return true;
  const prev     = CURRICULUM[weekIndex - 1];
  const prevDone = userProgress.filter(p => p.week === prev.week && p.completed).length;
  return prevDone >= prev.days.length; // all 5 must be done
}

// ── Build dashboard ───────────────────────────────────────────
function buildDashboard() {
  updateDashStats();
  const grid = document.getElementById('curriculumGrid');
  grid.innerHTML = '';

  const currentIdx = getCurrentWeekIndex();

  // Always show completed weeks + current week + 2 weeks ahead
  // But only up to the last week in CURRICULUM
  const showTo = Math.min(currentIdx + 2, CURRICULUM.length - 1);

  for (let wi = 0; wi <= showTo; wi++) {
    const wk       = CURRICULUM[wi];
    const done     = userProgress.filter(p => p.week === wk.week && p.completed).length;
    const unlocked = isWeekUnlocked(wi);
    const status   = done >= wk.days.length ? 'complete'
                   : unlocked               ? 'current'
                   :                          'locked';

    const card = document.createElement('div');
    card.className = 'week-card';
    card.innerHTML = `
      <div class="week-card-header">
        <span class="week-card-title">${wk.title}</span>
        <span class="week-status status-${status}">
          ${status === 'complete' ? '✓ Done' : status === 'current' ? 'In Progress' : '🔒 Locked'}
        </span>
      </div>
      <div class="week-days" id="wdays-${wk.week}"></div>`;
    grid.appendChild(card);

    const wrap = card.querySelector('#wdays-' + wk.week);
    wk.days.forEach(d => {
      const isDone   = userProgress.some(p => p.week === wk.week && p.day === d.day && p.completed);
      const canOpen  = unlocked && d.hasLesson;
      const isUnavail = unlocked && !d.hasLesson;
      const iconCls  = isDone          ? 'icon-done'
                     : d.lang==='Hebrew' ? 'icon-heb'
                     : d.lang==='Greek'  ? 'icon-grk'
                     :                     'icon-lat';

      const row = document.createElement('div');
      row.className = 'day-row'
        + (!unlocked ? ' locked' : '')
        + (isUnavail ? ' unavailable' : '');

      const subNote = !unlocked
        ? ' &nbsp;<span style="color:var(--text-dim);font-size:.7rem;">· Complete previous week first</span>'
        : isUnavail
        ? ' &nbsp;<span style="color:var(--text-dim);font-size:.7rem;">· Coming soon</span>'
        : '';

      row.innerHTML = `
        <div class="day-icon ${iconCls}">${isDone ? '✓' : d.icon}</div>
        <div class="day-info">
          <div class="day-name">${d.name}</div>
          <div class="day-sub">${d.sub}${subNote}</div>
        </div>
        ${isDone ? '<span style="color:var(--green);font-size:.75rem;flex-shrink:0;">✓</span>' : ''}`;

      if (canOpen) row.onclick = () => openLesson(wk.week, d.day, d.lang);
      wrap.appendChild(row);
    });
  }

  // Teaser card — one more week beyond visible range
  if (showTo < CURRICULUM.length - 1) {
    const next    = CURRICULUM[showTo + 1];
    const teaser  = document.createElement('div');
    teaser.className = 'week-card';
    teaser.style.cssText = 'opacity:0.4;pointer-events:none;';
    teaser.innerHTML = `
      <div class="week-card-header">
        <span class="week-card-title">${next.title}</span>
        <span class="week-status status-locked">🔒 Locked</span>
      </div>
      <div style="padding:.85rem 1.25rem;font-size:.82rem;color:var(--text-dim);font-style:italic;">
        Complete the current week to unlock.
      </div>`;
    grid.appendChild(teaser);
  }
}

// ── Update stats ──────────────────────────────────────────────
function updateDashStats() {
  const completed     = userProgress.filter(p => p.completed).length;
  const totalPossible = CURRICULUM.reduce((a, w) => a + w.days.length, 0);
  const pct           = totalPossible > 0 ? Math.round(completed / totalPossible * 100) : 0;

  document.getElementById('overallPct').textContent  = pct + '%';
  document.getElementById('statLessons').textContent = completed;
  document.getElementById('statWords').textContent   = completed * 7;
  document.getElementById('statHours').textContent   = Math.round(completed * 1.5 * 10) / 10;

  const hD = userProgress.filter(p => p.completed && p.language === 'Hebrew').length;
  const gD = userProgress.filter(p => p.completed && p.language === 'Greek').length;
  const lD = userProgress.filter(p => p.completed && p.language === 'Latin').length;
  const hp = Math.min(100, Math.round(hD / TOTAL_HEB_LESSONS * 100));
  const gp = Math.min(100, Math.round(gD / TOTAL_GRK_LESSONS * 100));
  const lp = Math.min(100, Math.round(lD / TOTAL_LAT_LESSONS * 100));

  document.getElementById('barHeb').style.width = hp + '%'; document.getElementById('pctHeb').textContent = hp + '%';
  document.getElementById('barGrk').style.width = gp + '%'; document.getElementById('pctGrk').textContent = gp + '%';
  document.getElementById('barLat').style.width = lp + '%'; document.getElementById('pctLat').textContent = lp + '%';
}
