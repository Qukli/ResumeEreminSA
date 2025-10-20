// Мобильное меню
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
}

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      menu?.classList.remove('open');
      burger?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Год в футере
document.getElementById('year').textContent = new Date().getFullYear();

// Копирование email
const copyBtn = document.getElementById('copyEmail');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('sergyereminn@gmail.com');
      copyBtn.textContent = 'Скопировано!';
      setTimeout(() => (copyBtn.textContent = 'Скопировать email'), 1400);
    } catch {
      alert('Скопируйте вручную: sergyereminn@gmail.com');
    }
  });
}