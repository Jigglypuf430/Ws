// js/app.js

// Grab screen containers
const toolsSec    = document.getElementById('tools');
const accountSec  = document.getElementById('account');

// Grab buttons
const openAccount = document.getElementById('openAccount');
const btnAccounts = document.getElementById('btnAccounts');
const backBtn     = document.getElementById('backBtn');
const supportBtn  = document.getElementById('supportBtn');
const navButtons  = document.querySelectorAll('.nav-btn');

/**
 * Show one screen (tools or account) and hide the other
 * @param {'tools'|'account'} screenId
 */
function showScreen(screenId) {
  if (screenId === 'account') {
    toolsSec.classList.remove('screen--active');
    toolsSec.setAttribute('aria-hidden', 'true');
    accountSec.classList.add('screen--active');
    accountSec.removeAttribute('aria-hidden');
  } else {
    accountSec.classList.remove('screen--active');
    accountSec.setAttribute('aria-hidden', 'true');
    toolsSec.classList.add('screen--active');
    toolsSec.removeAttribute('aria-hidden');
  }
}

// === Account Details toggles ===
// Top‐right icon
openAccount.addEventListener('click', () => showScreen('account'));
// “Accounts” card
btnAccounts.addEventListener('click', () => showScreen('account'));
// Back button
backBtn.addEventListener('click', () => showScreen('tools'));

// === Customer Support button ===
supportBtn.addEventListener('click', () => {
  // Replace with your real support URL/modal
  alert('Redirecting to customer support…');
  // e.g. window.location.href = '/support.html';
});

// === Bottom navigation bar ===
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Toggle active state
    document.querySelector('.nav-btn.active').classList.remove('active');
    btn.classList.add('active');

    const target = btn.dataset.screen;
    if (target === 'tools') {
      showScreen('tools');
    } else {
      // Stub for future tabs
      alert(`${btn.textContent.trim()} coming soon!`);
    }
  });
});
