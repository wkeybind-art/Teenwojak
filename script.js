

document.addEventListener('DOMContentLoaded', () => {

  const env = window.ENV || {};

  const xButton = document.getElementById('xButton');
  if (xButton && env.X_URL) {
    xButton.addEventListener('click', () => {
      window.open(env.X_URL, '_blank');
    });
  }

  const scrollDownHero = document.getElementById('scrollDownHero');
  const aboutSection = document.getElementById('section-about');

  if (scrollDownHero && aboutSection) {
    scrollDownHero.addEventListener('click', () => {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const chartFrame = document.getElementById('dexscreenerFrame');
  if (chartFrame && env.DEXSCREENER_URL) {
    chartFrame.src = env.DEXSCREENER_URL;
  }
});

