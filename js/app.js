/***********************
 *  Navigation helpers *
 ***********************/
function showPage(id) {
  // hide every page
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  // highlight the corresponding bottom-nav button (if any)
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-item[data-target="${id}"]`);
  if (navBtn) navBtn.classList.add('active');
}

/***********************************
 *  Wire up UI interactions on load *
 ***********************************/
document.addEventListener('DOMContentLoaded', () => {
  /* bottom-nav buttons */
  document.querySelectorAll('.nav-item').forEach(btn =>
    btn.addEventListener('click', () => showPage(btn.dataset.target))
  );

  /* avatar / profile icon (in the hero header) */
  document.getElementById('profileBtn')?.addEventListener('click', () =>
    showPage('profile')
  );

  /* back arrow on the Profile page */
  document.getElementById('backBtn')?.addEventListener('click', () =>
    showPage('home')
  );

  /* stub buttons */
  document.getElementById('contactBtn')?.addEventListener('click', () =>
    alert('Contact-us screen coming soon…')
  );
  document.getElementById('micBtn')?.addEventListener('click', () =>
    alert('Voice input not implemented in this demo.')
  );

  /* greeting message */
  const hour = new Date().getHours();
  const headline = document.querySelector('.headline');
  headline.textContent =
    hour < 12
      ? 'HOW CAN WE HELP YOU THIS MORNING?'
      : hour < 17
      ? 'HOW CAN WE HELP YOU THIS AFTERNOON?'
      : 'HOW CAN WE HELP YOU THIS EVENING?';
});

/****************************
 *  (Optional) PWA service-worker
 ****************************/
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .catch(err => console.error('SW registration failed:', err));
}
