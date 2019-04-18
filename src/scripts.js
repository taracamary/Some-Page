

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector('.click'),
  modal = document.querySelector('.modal'),
  modalClose = document.querySelector('.modal__close'); 
console.log(document);
btn && btn.addEventListener('click', () => {
modal.style.display = 'flex';
});

modalClose && modalClose.addEventListener('click', () => {
modal.style.display = 'none';
});
});