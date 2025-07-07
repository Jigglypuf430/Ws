// grab elements
const accountBtn   = document.getElementById('accountBtn');
const backBtn      = document.getElementById('backBtn');
const toolsScreen  = document.getElementById('tools');
const accountScreen= document.getElementById('account');

// helper to switch screens
function showScreen(show, hide) {
  document.getElementById(show).classList.add('screen--active');
  document.getElementById(show).removeAttribute('aria-hidden');
  document.getElementById(hide).classList.remove('screen--active');
  document.getElementById(hide).setAttribute('aria-hidden', 'true');
}

// header icon opens account details:
accountBtn.addEventListener('click', () => showScreen('account', 'tools'));

// back button returns to tools:
backBtn.addEventListener('click', () => showScreen('tools', 'account'));
