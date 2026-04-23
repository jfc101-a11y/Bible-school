/* ═══════════════════════════════════════
   AUTH.JS — Authentication module
   ═══════════════════════════════════════ */

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach((t, i) =>
    t.classList.toggle('active', (i === 0 && tab === 'login') || (i === 1 && tab === 'signup'))
  );
  document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
  document.getElementById('signupForm').classList.toggle('hidden', tab !== 'signup');
}

async function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPassword').value;
  if (!email || !pass) { toast('Please fill in all fields.', 'error'); return; }
  const btn = document.getElementById('loginBtn');
  btn.disabled = true; btn.textContent = 'Signing in…';
  const { data, error } = await sb.auth.signInWithPassword({ email, password: pass });
  btn.disabled = false; btn.textContent = 'Sign In →';
  if (error) { toast(error.message, 'error'); return; }
  await bootApp(data.user);
}

async function handleSignup() {
  const name  = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const pass  = document.getElementById('signupPassword').value;
  if (!name || !email || !pass) { toast('Please fill in all fields.', 'error'); return; }
  if (pass.length < 6) { toast('Password must be at least 6 characters.', 'error'); return; }
  const btn = document.getElementById('signupBtn');
  btn.disabled = true; btn.textContent = 'Creating account…';
  const { data, error } = await sb.auth.signUp({
    email, password: pass, options: { data: { full_name: name } }
  });
  btn.disabled = false; btn.textContent = 'Create Account →';
  if (error) { toast(error.message, 'error'); return; }
  toast('Account created! Welcome to Aletheia Seminary.', 'success');
  await bootApp(data.user);
}

async function handleSignout() {
  await sb.auth.signOut();
  currentUser = null;
  document.getElementById('authScreen').style.display = 'flex';
  document.getElementById('appShell').style.display = 'none';
  stopTimer();
}
