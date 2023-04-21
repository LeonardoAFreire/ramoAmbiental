export default function initDropDownMenu() {
  const dropdown = document.querySelector('[data-dropdown');

  ['click', 'touchstart'].forEach((userEvent) => {
    dropdown.addEventListener(userEvent, handleClick);
  });

  function handleClick() {
    this.classList.toggle('ativo');
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
