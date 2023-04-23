export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-number]');
  if (numeros) {
    limpaNumeros(numeros);

    function animaNumeros() {
      numeros.forEach((numero) => {
        const total = +numero.dataset.number;
        const incremento = Math.ceil(total / 100);
        let start = 0;

        const timer = setInterval(() => {
          start += incremento;
          numero.innerText = start;

          if (start > total) {
            numero.innerText = total;
            clearInterval(timer);
          }
        }, 50);
      });
    }

    function handleMutation(mutation) {
      const mudou = mutation[0].target.classList.contains('ativo');
      if (mudou) {
        observer.disconnect();
        animaNumeros();
      }
    }

    const observerTarget = document.querySelector('.numero-contador');
    const observer = new MutationObserver(handleMutation);

    observer.observe(observerTarget, { attributes: true });
  }
}

function limpaNumeros(numeros) {
  numeros.forEach((numero) => {
    numero.innerText = 0;
  });
}
