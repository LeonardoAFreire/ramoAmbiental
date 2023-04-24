export default function initDropDownMenu() {
  const dropdown = document.querySelector('[data-dropdown');

  if (dropdown) {
    dropdown.addEventListener('click', handleClick);
    function handleClick(event) {
      this.classList.toggle('ativo');
      event.preventDefault();
      outsideClick(this);
    }
  }

  function outsideClick(element) {
    const html = document.documentElement;

    if (!element.hasAttribute('data-dropativo')) {
      element.setAttribute('data-dropativo', '');
      html.addEventListener('click', handleOutsideClick);
    }
    function handleOutsideClick(event) {
      const isOutside = !element.contains(event.target);
      if (isOutside) {
        element.classList.remove('ativo');
        element.removeAttribute('data-dropativo');
      }
    }
  }
}
