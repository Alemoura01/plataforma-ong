// script.js
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('navToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      const nav = document.getElementById('mainNav');
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if (nav) {
        nav.style.display = expanded ? '' : 'flex';
        nav.style.flexDirection = 'column'; // mobile default
      }
    });
  }
});
