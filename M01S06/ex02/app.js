const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
let message = 'Nu stim ce browser folosesti';

if (userAgentString.toLowerCase().includes('chrome')) {
  message = 'Navighezi folosind Chrome';
  var browser = 'Chrome';
}

paragraphElement.innerText = message;

document.body.appendChild(paragraphElement);

setTimeout(() => {
  const userName = prompt(`${browser} vrea sa stie cum te cheama.`);
  const headingElement = document.createElement('h1');
  const message = `Salut ${userName}`;

  if (userName === null) {
    return;
  }

  if (userName === '') {
    return;
  }

  headingElement.innerText = message;
  document.body.append(headingElement);

  setTimeout(() => {
    paragraphElement.remove();
  });
});
