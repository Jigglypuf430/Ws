// js/app.js
const toolsSec    = document.getElementById('tools');
const accountSec  = document.getElementById('account');
const openAccount = document.getElementById('openAccount');
const backBtn     = document.getElementById('backBtn');
const btnAccounts = document.getElementById('btnAccounts');

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
