document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.btn');

  if (button) {
    button.addEventListener('click', () => {
      alert('Ótimo! Você está no caminho certo para transformar sua carreira.');
    });
  }
});
