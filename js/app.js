const btn     = document.getElementById('accessBtn');
const balance = document.getElementById('balanceInfo');

btn.addEventListener('click', () => {
  btn.style.display     = 'none';
  balance.style.display = 'block';
});
