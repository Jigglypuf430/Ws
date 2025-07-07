// js/app.js

const accountsCard  = document.getElementById('accountsCard');
const toolsScreen   = document.getElementById('tools-screen');
const accountScreen = document.getElementById('account-screen');
const backBtn       = document.getElementById('backBtn');

// Navigate to account details
accountsCard.addEventListener('click', () => {
  toolsScreen.classList.remove('active');
  toolsScreen.style.display = 'none';
  accountScreen.classList.add('active');
});

// Back button handler
backBtn.addEventListener('click', () => {
  accountScreen.classList.remove('active');
  toolsScreen.style.display = 'block';
  toolsScreen.classList.add('active');
});