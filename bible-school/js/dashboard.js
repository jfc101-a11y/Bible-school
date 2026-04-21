/* ═══════════════════════════════════════
   DASHBOARD.JS — Dashboard module
   ═══════════════════════════════════════ */

const CURRICULUM = [
  { week:1, title:'Week 1 — Alphabet Foundations', days:[
    { day:1, name:'Hebrew I',    sub:'Letters 1–5: Aleph to He',        lang:'Hebrew', icon:'HEB', hasLesson:true  },
    { day:2, name:'Greek I',     sub:'Letters 1–5: Alpha to Epsilon',   lang:'Greek',  icon:'GRK', hasLesson:true  },
    { day:3, name:'Hebrew II',   sub:'Letters 6–10: Vav to Yod',        lang:'Hebrew', icon:'HEB', hasLesson:true },
    { day:4, name:'Greek II',    sub:'Letters 6–10: Zeta to Kappa',     lang:'Greek',  icon:'GRK', hasLesson:true },
    { day:5, name:'Hebrew III',  sub:'Letters 11–15: Kaf to Samekh',    lang:'Hebrew', icon:'HEB', hasLesson:true },
  ]},
  { week:2, title:'Week 2 — Completing the Alphabet', days:[
    { day:1, name:'Hebrew IV',   sub:'Letters 16–22 + Final Forms',     lang:'Hebrew', icon:'HEB', hasLesson:true },
    { day:2, name:'Greek III',   sub:'Letters 11–17: Lambda to Rho',    lang:'Greek',  icon:'GRK', hasLesson:true },
    { day:3, name:'Hebrew V',    sub:'Vowel Points (Niqqud)',            lang:'Hebrew', icon:'HEB', hasLesson:true },
    { day:4, name:'Greek IV',    sub:'Letters 18–24 (Complete)',         lang:'Greek',  icon:'GRK', hasLesson:true },
    { day:5, name:'Hebrew VI',   sub:'Reading First Hebrew Sentences',   lang:'Hebrew', icon:'HEB', hasLesson:true },
  ]},
  { week:3, title:'Week 3 — Latin Begins + Reading', days:[
    { day:1, name:'Latin I',     sub:'Latin Alphabet & Pronunciation',  lang:'Latin',  icon:'LAT', hasLesson:false },
    { day:2, name:'Greek V',     sub:'First Greek Words',               lang:'Greek',  icon:'GRK', hasLesson:false },
    { day:3, name:'Hebrew VII',  sub:'Simple Hebrew Sentences',         lang:'Hebrew', icon:'HEB', hasLesson:false },
    { day:4, name:'Latin II',    sub:'1st & 2nd Declensions',           lang:'Latin',  icon:'LAT', hasLesson:false },
    { day:5, name:'Greek VI',    sub:'Noun Declensions',                lang:'Greek',  icon:'GRK', hasLesson:false },
  ]},
  { week:4, title:'Week 4 — Grammar Foundations', days:[
    { day:1, name:'Hebrew VIII', sub:'The Qal Verb (Perfect)',          lang:'Hebrew', icon:'HEB', hasLesson:false },
    { day:2, name:'Greek VII',   sub:'The Greek Verb (Present Active)', lang:'Greek',  icon:'GRK', hasLesson:false },
    { day:3, name:'Latin III',   sub:'Verb Conjugation',                lang:'Latin',  icon:'LAT', hasLesson:false },
    { day:4, name:'Hebrew IX',   sub:'The Qal Verb (Imperfect)',        lang:'Hebrew', icon:'HEB', hasLesson:false },
    { day:5, name:'Review',      sub:'All Three Languages — Week 1–4',  lang:'Hebrew', icon:'HEB', hasLesson:false },
  ]},
];

function buildDashboard() {
  updateDashStats();
  const grid = document.getElementById('curriculumGrid');
  grid.innerHTML = '';
  CURRICULUM.forEach((wk, wi) => {
    const done = userProgress.filter(p => p.week === wk.week && p.completed).length;
    const prevOk = wi === 0 || userProgress.filter(p => p.week === CURRICULUM[wi-1].week && p.completed).length >= 5;
    const status = done >= wk.days.length ? 'complete' : (wi === 0 || prevOk) ? 'current' : 'locked';
    const card = document.createElement('div');
    card.className = 'week-card';
    card.innerHTML = `
      <div class="week-card-header">
        <span class="week-card-title">${wk.title}</span>
        <span class="week-status status-${status}">${status === 'complete' ? '✓ Done' : status === 'current' ? 'In Progress' : 'Locked'}</span>
      </div>
      <div class="week-days" id="wdays-${wk.week}"></div>`;
    grid.appendChild(card);
    const wrap = card.querySelector('#wdays-' + wk.week);
    wk.days.forEach(d => {
      const isDone     = userProgress.some(p => p.week === wk.week && p.day === d.day && p.completed);
      const isLocked   = status === 'locked';
      const canOpen    = !isLocked && d.hasLesson;
      const isUnavail  = !isLocked && !d.hasLesson;
      const iconCls    = isDone ? 'icon-done' : d.lang === 'Hebrew' ? 'icon-heb' : d.lang === 'Greek' ? 'icon-grk' : 'icon-lat';
      const row        = document.createElement('div');
      row.className    = 'day-row' + (isLocked ? ' locked' : isUnavail ? ' unavailable' : '');
      row.innerHTML    = `
        <div class="day-icon ${iconCls}">${isDone ? '✓' : d.icon}</div>
        <div class="day-info">
          <div class="day-name">${d.name}</div>
          <div class="day-sub">${d.sub}${isUnavail ? ' &nbsp;<span style="color:var(--text-dim);font-size:.7rem;">· Coming soon</span>' : ''}</div>
        </div>
        ${isDone ? '<span style="color:var(--green);font-size:.75rem;">✓</span>' : ''}`;
      if (canOpen) row.onclick = () => openLesson(wk.week, d.day, d.lang);
      wrap.appendChild(row);
    });
  });
}

function updateDashStats() {
  const completed = userProgress.filter(p => p.completed).length;
  const total     = CURRICULUM.reduce((a, w) => a + w.days.length, 0);
  const pct       = Math.round(completed / total * 100);
  document.getElementById('overallPct').textContent    = pct + '%';
  document.getElementById('statLessons').textContent   = completed;
  document.getElementById('statWords').textContent     = completed * 7;
  document.getElementById('statHours').textContent     = Math.round(completed * 1.5 * 10) / 10;

  const hD = userProgress.filter(p => p.completed && p.language === 'Hebrew').length;
  const gD = userProgress.filter(p => p.completed && p.language === 'Greek').length;
  const lD = userProgress.filter(p => p.completed && p.language === 'Latin').length;
  const hp = Math.round(hD / 16 * 100);
  const gp = Math.round(gD / 14 * 100);
  const lp = Math.round(lD / 10 * 100);
  document.getElementById('barHeb').style.width  = hp + '%'; document.getElementById('pctHeb').textContent = hp + '%';
  document.getElementById('barGrk').style.width  = gp + '%'; document.getElementById('pctGrk').textContent = gp + '%';
  document.getElementById('barLat').style.width  = lp + '%'; document.getElementById('pctLat').textContent = lp + '%';
}
