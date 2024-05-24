// const openModalButton = document.getElementById('openModal') as HTMLButtonElement;
// const closeModalButton = document.getElementById('closeModal') as HTMLButtonElement;
// const modalBackdrop = document.getElementById('modalBackdrop') as HTMLDivElement;
// const modal = document.getElementById('modal') as HTMLDivElement;
// const pdfViewer = document.getElementById('pdfViewer') as HTMLIFrameElement;
// const toggleDarkModeButton = document.getElementById('toggleDarkMode') as HTMLButtonElement;

// openModalButton.addEventListener('click', () => {
//     pdfViewer.src = './assets/files/DevJR-CV.pdf';
//     modalBackdrop.style.display = 'flex';
// });

// closeModalButton.addEventListener('click', () => {
//     closeModal();
// });

// modalBackdrop.addEventListener('click', (event) => {
//     if (event.target === modalBackdrop) {
//         closeModal();
//     }
// });

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//         closeModal();
//     }
// });

// function closeModal() {
//     modalBackdrop.style.display = 'none';
//     pdfViewer.src = ''; // Limpia el src del iframe cuando se cierra el modal
// }

// toggleDarkModeButton.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
// });

// // Comprobar y aplicar el tema guardado
// window.addEventListener('DOMContentLoaded', () => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//         document.body.classList.add('dark-mode');
//     }
// });

// Comente el codigo por que me daba error al subirlo a git