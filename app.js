const correctAnswer = 'Madri';
const options = document.querySelectorAll('.option');
const result = document.getElementById('result');

options.forEach(option => {
  option.addEventListener('click', () => {
    if (option.getAttribute('data-answer') === correctAnswer) {
      result.textContent = 'Correto!';
      result.style.color = 'green';
    } else {
      result.textContent = 'Incorreto. A resposta correta é Madri.';
      result.style.color = 'red';
    }
  });
});
