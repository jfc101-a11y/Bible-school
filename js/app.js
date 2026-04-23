/* ═══════════════════════════════════════
   APP.JS — Core: Supabase, state, routing, timer
   ═══════════════════════════════════════ */

// ── Supabase ──────────────────────────────────────────────────
const { createClient } = supabase;
const sb = createClient(
  'https://edjmdcnqewrkscfajgrk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkam1kY25xZXdya3NjZmFqZ3JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1ODk3MTQsImV4cCI6MjA5MjE2NTcxNH0.q-fYt3PZpKreZLVXjMN8ZyIOnHTqBadCI3YsO5JEKHI'
);

// ── Global state ──────────────────────────────────────────────
let currentUser   = null;
let userProgress  = [];
let activeLesson  = null;
let sessionStart  = null;
let timerInterval = null;
let currentSection = 0;
let currentQ      = 0;
let quizScore     = 0;
let answered      = false;

// ── Toast ─────────────────────────────────────────────────────
function toast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className   = 'show' + (type ? ' ' + type : '');
  setTimeout(() => t.className = '', 3200);
}

// ── Boot app after login ──────────────────────────────────────
async function bootApp(user) {
  currentUser = user;
  document.getElementById('authScreen').style.display = 'none';
  document.getElementById('appShell').style.display   = 'block';
  const name = user.user_metadata?.full_name || user.email.split('@')[0];
  document.getElementById('navName').textContent   = name;
  document.getElementById('navAvatar').textContent = name[0].toUpperCase();
  document.getElementById('dashName').textContent  = name;
  await loadProgress();
  buildDashboard();
}

// ── Progress: load ────────────────────────────────────────────
async function loadProgress() {
  if (!currentUser) return;
  const { data } = await sb.from('progress').select('*').eq('user_id', currentUser.id);
  userProgress = data || [];
}

// ── Progress: save ────────────────────────────────────────────
async function saveProgress(week, day, language, sectionCompleted, qScore, completed) {
  if (!currentUser) return;
  await sb.from('progress').upsert({
    user_id: currentUser.id, week, day, language,
    section_completed: sectionCompleted,
    quiz_score: qScore, completed,
    completed_at: completed ? new Date().toISOString() : null
  }, { onConflict: 'user_id,week,day,language' });
  await loadProgress();
  updateDashStats();
}

// ── Session: save ─────────────────────────────────────────────
async function saveSession(week, day, language, durationSeconds) {
  if (!currentUser) return;
  await sb.from('study_sessions').insert({
    user_id: currentUser.id, week, day, language,
    duration_seconds: durationSeconds,
    ended_at: new Date().toISOString()
  });
}

// ── Page routing ──────────────────────────────────────────────
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page === 'dashboard' ? 'dashPage' : 'lessonPage').classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById(page === 'dashboard' ? 'navDash' : 'navLesson').classList.add('active');
  document.getElementById('sessionTimer').classList.toggle('hidden', page !== 'lesson');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Timer ─────────────────────────────────────────────────────
function startTimer() {
  let secs = 0;
  sessionStart = Date.now();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secs++;
    document.getElementById('timerVal').textContent =
      String(Math.floor(secs / 60)).padStart(2, '0') + ':' + String(secs % 60).padStart(2, '0');
    const ft = document.getElementById('finalTime'); if (ft) ft.textContent = Math.floor(secs / 60);
  }, 1000);
}
function stopTimer() { clearInterval(timerInterval); }

// ── Init ──────────────────────────────────────────────────────
(async () => {
  const { data: { session } } = await sb.auth.getSession();
  if (session?.user) await bootApp(session.user);
  sb.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN'  && session) await bootApp(session.user);
    if (event === 'SIGNED_OUT') {
      document.getElementById('authScreen').style.display = 'flex';
      document.getElementById('appShell').style.display   = 'none';
    }
  });
})();
