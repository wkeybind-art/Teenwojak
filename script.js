// script.js

document.addEventListener('DOMContentLoaded', () => {
  // защита, если env.js не подключен
  const env = window.ENV || {};

  // Кнопка X (открываем ссылку в новой вкладке)
  const xButton = document.getElementById('xButton');
  if (xButton && env.X_URL) {
    xButton.addEventListener('click', () => {
      window.open(env.X_URL, '_blank');
    });
  }

  // Клик по стрелке вниз — скролл к секции About
  const scrollDownHero = document.getElementById('scrollDownHero');
  const aboutSection = document.getElementById('section-about');

  if (scrollDownHero && aboutSection) {
    scrollDownHero.addEventListener('click', () => {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Проставляем ссылку для графика Dexscreener
  const chartFrame = document.getElementById('dexscreenerFrame');
  if (chartFrame && env.DEXSCREENER_URL) {
    chartFrame.src = env.DEXSCREENER_URL;
  }
});
