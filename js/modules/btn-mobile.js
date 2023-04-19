export default function initBtnMobile() {
  const btnMobile = document.getElementById('btn-mobile');

  if (btnMobile) {
    function handleClick(event) {
      // TouchStart tem o evento de click no final que se nao for tirado vai bugar o codigo
      if (event.type === 'touchstart') {
        event.preventDefault();
      }
      const nav = document.getElementById('nav');
      nav.classList.toggle('active');
      const active = nav.classList.contains('active');
      event.currentTarget.setAttribute('aria-expanded', active);
      if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
      } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
      }
    }

    btnMobile.addEventListener('click', handleClick);
    btnMobile.addEventListener('touchstart', handleClick);
  }
}
