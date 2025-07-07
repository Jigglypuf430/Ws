// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

// Dark Mode Toggle
const darkBtn = document.getElementById('darkModeBtn');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('dark', document.body.classList.contains('dark'));
});
// Load saved theme
if (localStorage.getItem('dark') === 'true') {
  document.body.classList.add('dark');
}

// Skeleton loader simulation
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('tools-skeleton').style.display = 'none';
    const content = document.getElementById('tools-content');
    content.style.display = 'flex';
    content.classList.add('active');
  }, 1000);
});

// Navigation between tools and account screens
const accountBtn = document.getElementById('accountBtn');
const backBtn = document.getElementById('backBtn');
const screens = document.querySelectorAll('.screen');

function showScreen(id) {
  screens.forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

accountBtn.addEventListener('click', () => showScreen('account-screen'));
backBtn.addEventListener('click', () => showScreen('tools-screen'));

// Bottom nav handling
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.nav-btn.active').classList.remove('active');
    btn.classList.add('active');
    const target = btn.dataset.screen;
    if (target === 'tools-screen') showScreen('tools-screen');
    else alert('Coming soon');
  });
});

// Quick Action Button
const fab = document.getElementById('quick-action');
fab.addEventListener('click', () => alert('Quick action tapped!'));