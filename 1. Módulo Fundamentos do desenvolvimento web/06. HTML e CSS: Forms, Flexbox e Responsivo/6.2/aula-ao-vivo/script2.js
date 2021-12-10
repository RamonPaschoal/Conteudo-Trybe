let myModal = new bootstrap.Modal(document.getElementById('myModal'));
let button = document.querySelector('#nao-clique');

button.addEventListener('click', () => {
    myModal.show()
})