export default function initAnimaScroll() {
  const contents = document.querySelectorAll('[data-anime="scroll"]');

  if (contents.length) {
    const windowMetade = window.innerHeight * 0.55;

    function animaScroll() {
      contents.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;

        if (isSectionVisible) {
          item.classList.add('ativo');
        }
      });
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll, { passive: true });
  }
}
