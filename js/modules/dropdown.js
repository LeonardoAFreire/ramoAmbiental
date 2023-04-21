export default function initDropDown() {}

const dropdown = document.querySelector('[data-dropdown]');

dropdown.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  event.currentTarget.classList.toggle('ativo');
}

const html = document.documentElement;

html.addEventListener('click', clickOutside);

function clickOutside(event) {
  console.log(event.target);
}
