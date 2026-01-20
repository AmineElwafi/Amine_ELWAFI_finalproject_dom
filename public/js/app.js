const open = document.getElementById('open')
const close = document.getElementById('close')
const modalContainer = document.getElementById('modalContainer')

open.addEventListener('click', () => {
    modalContainer.classList.add('show');
})
close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})