const botaoSideBar = document.getElementById('botaoSideBar');
const sidebar = document.getElementById('sidebar');
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('foot');

botaoSideBar.addEventListener('click', () => {
    sidebar.classList.toggle('encolhida');
    header.classList.toggle('sidebarEncolhida');
    main.classList.toggle('sidebarEncolhida');
    footer.classList.toggle('sidebarEncolhida');
});