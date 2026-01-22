const open = document.getElementById('open')
const open1 = document.getElementById('open1')
const close = document.getElementById('close')
const modalContainer = document.getElementById('modalContainer')

open.addEventListener('click', () => {
    modalContainer.classList.add('show');
})

open1.addEventListener('click', () => {
    modalContainer.classList.add('show');
})

close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})

const form = document.getElementById("res-id");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  console.log(data);
});
