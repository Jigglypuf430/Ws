// js/app.js
const toolsSec    = document.getElementById('tools');
const accountSec  = document.getElementById('account');
const openAccount= document.getElementById('openAccount');
const backBtn     = document.getElementById('backBtn');
const btnAccounts = document.getElementById('btnAccounts');
const navButtons  = document.querySelectorAll('.nav-btn');

function show(screen) {
  toolsSec.classList.toggle('screen--active', screen==='tools');
  accountSec.classList.toggle('screen--active', screen==='account');
}

openAccount.addEventListener('click', () => show('account'));
backBtn    .addEventListener('click', () => show('tools'));
btnAccounts.addEventListener('click', () => show('account'));

navButtons.forEach(btn => btn.addEventListener('click', () => {
  document.querySelector('.nav-btn.active').classList.remove('active');
  btn.classList.add('active');
  const target = btn.dataset.screen;
  if (target==='tools') show('tools');
  else alert(`${target} coming soon!`);
}));