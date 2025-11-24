document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const openBtn = document.querySelector('.mobile-menu-toggle');
    const closeBtn = document.querySelector('.close-menu-btn');
    
    // Cria o fundo escuro (overlay) dinamicamente
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    function toggleMenu() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    // Adiciona os eventos de clique
    if(openBtn) openBtn.addEventListener('click', toggleMenu);
    if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
});