document.addEventListener('DOMContentLoaded', () => {

    /* 1. FUNCIONALIDADE: COPIAR CÓDIGO */
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Encontra o container pai
            const container = this.closest('.code-block-container');
            if (!container) return;

            // Encontra o bloco de texto dentro do <pre>
            const codeBlock = container.querySelector('.code-block pre');
            if (!codeBlock) return;

            const codeText = codeBlock.textContent;
            
            // Usa a API de Clipboard do navegador
            navigator.clipboard.writeText(codeText).then(() => {
                const originalHTML = this.innerHTML;
                
                // Feedback visual para o usuário
                this.innerHTML = '<i class="fas fa-check"></i> Copiado!';
                this.style.color = '#4ade80'; // Opcional: muda cor para verde temporariamente
                
                // Restaura o botão original após 2 segundos
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.style.color = ''; // Remove cor inline
                }, 2000);
            }).catch(err => {
                console.error('Erro ao copiar: ', err);
                alert('Não foi possível copiar o texto automaticamente.');
            });
        });
    });

    /* 2. FUNCIONALIDADE: MENU MOBILE (HAMBÚRGUER) */
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.querySelector('.sidebar');

    // Verifica se os elementos existem para evitar erros no console
    if (mobileBtn && sidebar) {
        
        // Evento de clique no botão hambúrguer
        mobileBtn.addEventListener('click', (e) => {
            // Impede que o clique propague para o document (evita fechar imediatamente)
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });

        // Evento para fechar ao clicar fora da sidebar
        document.addEventListener('click', (e) => {
            // Se a sidebar estiver aberta...
            if (sidebar.classList.contains('active')) {
                // E o clique NÃO foi dentro da sidebar...
                // E o clique NÃO foi no botão (ou ícone dentro dele)...
                if (!sidebar.contains(e.target) && !mobileBtn.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            }
        });
    }
});