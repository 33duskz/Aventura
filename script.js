const avancaButtons = document.querySelectorAll('.btn-proximo');

avancaButtons.forEach(button => {
  button.addEventListener('click', function() {
    const currentActiveElement = document.querySelector('.ativo');
    const nextStepId = `passo-${this.getAttribute('data-proximo')}`;
    const nextStepElement = document.getElementById(nextStepId);

    currentActiveElement.classList.remove('ativo');
    nextStepElement.classList.add('ativo');
  });
});