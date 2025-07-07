// js/app.js
const toolsSec    = document.getElementById('tools');
const accountSec  = document.getElementById('account');
const openAccount= document.getElementById('openAccount');
const backBtn     = document.getElementById('backBtn');
const btnAccounts = document.getElementById('btnAccounts');
const darkBtn     = document.getElementById('darkModeBtn');
const navButtons  = document.querySelectorAll('.nav-btn');

// Screen toggle
function show(screen) {
  if (screen === 'account') {
    toolsSec.classList.remove('screen--active');
    accountSec.classList.add('screen--active');
    accountSec.removeAttribute('aria-hidden');
  } else {
    accountSec.classList.remove('screen--active');
    toolsSec.classList.add('screen--active');
    accountSec.setAttribute('aria-hidden','true');
  }
}
openAccount.addEventListener('click', () => show('account'));
backBtn    .addEventListener('click', () => show('tools'));
btnAccounts.addEventListener('click', () => show('account'));

// Dark mode toggle
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('dark', document.body.classList.contains('dark'));
});
if (localStorage.getItem('dark') === 'true') {
  document.body.classList.add('dark');
}

// Bottom nav (alerts for inactive)
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.nav-btn.active').classList.remove('active');
    btn.classList.add('active');
    const target = btn.dataset.screen;
    if (target === 'tools') show('tools');
    else alert(`${target} coming soon!`);
  });
});