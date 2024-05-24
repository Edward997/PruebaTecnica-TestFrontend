var openModalButton = document.getElementById('openModal');
var closeModalButton = document.getElementById('closeModal');
var modalBackdrop = document.getElementById('modalBackdrop');
var modal = document.getElementById('modal');
var pdfViewer = document.getElementById('pdfViewer');
var toggleDarkModeButton = document.getElementById('toggleDarkMode');
openModalButton.addEventListener('click', function () {
    pdfViewer.src = './assets/files/DevJR-CV.pdf';
    modalBackdrop.style.display = 'flex';
});
closeModalButton.addEventListener('click', function () {
    closeModal();
});
modalBackdrop.addEventListener('click', function (event) {
    if (event.target === modalBackdrop) {
        closeModal();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
function closeModal() {
    modalBackdrop.style.display = 'none';
    pdfViewer.src = ''; // Limpia el src del iframe cuando se cierra el modal
}
toggleDarkModeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
// Comprobar y aplicar el tema guardado
window.addEventListener('DOMContentLoaded', function () {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
