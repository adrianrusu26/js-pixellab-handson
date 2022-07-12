const button = document.getElementById('clicker');
const removeButton = document.getElementById('remove');
const ageCheck = document.getElementById('query');
const paragraphElement = document.getElementById('message');
const eventListener = () => {
  alert('ai apasat butonul');
};

const ageCheckListener = () => {
  const age = prompt('Care este varsta ta?');
  const message = `Ai ${age} ani.`;

  console.log(message);
  paragraphElement.innerText = message;
};

ageCheck.addEventListener('click', ageCheckListener);

button.addEventListener('click', eventListener);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', eventListener);
});
