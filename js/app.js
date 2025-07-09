// ---------- bottom-nav routing ----------
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    // change active state on nav buttons
    document
      .querySelectorAll('.nav-item')
      .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // swap visible page
    const target = btn.dataset.target;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

// ---------- dynamic greeting ----------
function updateGreeting() {
  const hour = new Date().getHours();
  const headline = document.querySelector('.headline');
  const msg =
    hour < 12
      ? 'HOW CAN WE HELP YOU THIS MORNING?'
      : hour < 17
      ? 'HOW CAN WE HELP YOU THIS AFTERNOON?'
      : 'HOW CAN WE HELP YOU THIS EVENING?';
  headline.textContent = msg;
}
updateGreeting();

// ---------- stub buttons ----------
document.getElementById('contactBtn')?.addEventListener('click', () =>
  alert('Contact-us screen coming soon…')
);

document.getElementById('micBtn')?.addEventListener('click', () =>
  alert('Voice input not implemented in this demo.')
);

// service-worker registration (optional – comment out if you already have it elsewhere)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(err =>
    console.error('SW registration failed:', err)
  );
}
