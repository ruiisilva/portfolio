/* ================================================
   CURSOR.JS — Cursor personalizado
   Substitui o cursor padrão do browser por um
   ponto + anel animado que segue o rato
   ================================================ */

const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');

// Posição atual do rato
let mx = 0, my = 0;
// Posição atual do anel (segue o rato com atraso)
let rx = 0, ry = 0;

// Atualiza a posição do ponto central imediatamente
document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

// O anel segue o rato com um pequeno atraso (efeito suave)
(function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

// O anel fica maior ao passar em cima de links e fotos
document.querySelectorAll('a, .work-item').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});
