((top) => {
  console.log('Am rulat si am plecat, insa semnul mi-am lasat.');
  top.myName = 'Dragos';
})(top || global);

console.log((top || global).myName);
