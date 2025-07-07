// js/app.js
const accountBtn   = document.getElementById('accountBtn');
const toolsScreen  = document.getElementById('tools-screen');
const accountScreen = document.getElementById('account-screen');
const backBtn       = document.getElementById('backBtn');

// Show account details when icon tapped
accountBtn.addEventListener('click', () => {
  toolsScreen.classList.remove('active');
  accountScreen.classList.add('active');
});

// Back to tools
backBtn.addEventListener('click', () => {
  accountScreen.classList.remove('active');
  toolsScreen.classList.add('active');
});