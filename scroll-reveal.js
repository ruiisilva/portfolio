/* ================================================
   SCROLL-REVEAL.JS — Animação ao fazer scroll
   Os elementos com a classe "reveal" aparecem
   gradualmente quando ficam visíveis no ecrã
   ================================================ */

// IntersectionObserver deteta quando um elemento entra no ecrã
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Lê o atraso definido no HTML com style="--delay: 80ms"
      const delay = entry.target.style.getPropertyValue('--delay') || '0ms';
      setTimeout(() => {
        entry.target.classList.add('visible'); // adiciona classe que ativa a animação
      }, parseInt(delay));
      observer.unobserve(entry.target); // para de observar depois de aparecer
    }
  });
}, { threshold: 0.12 }); // 12% do elemento tem de estar visível para ativar

// Aplica o observer a todos os elementos com classe "reveal"
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
