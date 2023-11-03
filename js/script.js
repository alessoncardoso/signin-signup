// Função para abrir a tela
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('boxModal');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    setTimeout(() => {
        modal.style.height = '100%';
        modal.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);
});

closeModalBtn.addEventListener('click', () => {
    modal.style.height = '0';
    modal.querySelector('.modal-content').style.transform = 'translateY(100%)';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
});

function mostrarOcultarSenha() {
    var senhaInput = document.getElementById("senha");
    var iconeSenha = document.getElementById("iconeSenha");

    if (senhaInput.type == "password") {
        senhaInput.type = "text";
        iconeSenha.className = "bi bi-eye-slash-fill";
    } else {
        senhaInput.type = "password";
        iconeSenha.className = "bi bi-eye-fill";
    }
}