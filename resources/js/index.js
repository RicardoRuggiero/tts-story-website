document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // SELETOR DE TEMAS (LÓGICA UI)
    // ==========================================
    
    const themeBtn = document.getElementById('theme-btn');
    const themePopup = document.getElementById('theme-popup');
    const themeContainer = document.querySelector('.theme-container');
    const themeOptions = document.querySelectorAll('.theme-option');

    // 1. Abrir/Fechar o Menu ao clicar no Sol
    if (themeBtn && themePopup) {
        themeBtn.addEventListener('click', (e) => {
            // Impede que o clique propague para o documento (para não fechar imediatamente)
            e.stopPropagation();
            themePopup.classList.toggle('show');
        });
    }

    // 2. Fechar o Menu ao clicar fora dele
    document.addEventListener('click', (e) => {
        // Se o menu estiver aberto E o clique NÃO foi dentro do container do tema
        if (themePopup && themePopup.classList.contains('show') && !themeContainer.contains(e.target)) {
            themePopup.classList.remove('show');
        }
    });

    // 3. Lógica de Seleção das Bolinhas (Troca o "Riscado")
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Se já estiver ativo, não faz nada
            if (this.classList.contains('active')) return;

            // Remove a classe 'active' e o atributo 'disabled' de todas as opções
            themeOptions.forEach(opt => {
                opt.classList.remove('active');
                opt.removeAttribute('disabled');
            });

            // Adiciona a classe 'active' e 'disabled' na opção clicada
            this.classList.add('active');
            this.setAttribute('disabled', 'true');

            // 4. Aplicação do Tema (Placeholder)
            // Aqui é onde você colocará a lógica para mudar as cores do site
            const themeType = getThemeType(this);
            console.log(`Tema alterado para: ${themeType}`);
            applyTheme(themeType);
        });
    });

    // Função auxiliar para identificar qual botão foi clicado
    function getThemeType(element) {
        if (element.classList.contains('theme-darker')) return 'darker';
        if (element.classList.contains('theme-lighter')) return 'lighter';
        return 'current';
    }

    // Função para aplicar as cores usando Classes CSS (MUITO MELHOR)
    function applyTheme(type) {
        const body = document.body;
        
        // 1. Limpa estilos inline antigos (caso existam de versões anteriores)
        body.style.background = '';
        body.style.color = '';

        // 2. Remove todas as classes de tema
        body.classList.remove('theme-mode-darker', 'theme-mode-lighter', 'theme-mode-current');

        // 3. Adiciona a classe correta
        if (type === 'darker') {
            body.classList.add('theme-mode-darker');
            // Opcional: Se quiser forçar o preto via JS ainda, ou faça no CSS:
            body.style.background = '#000000'; 
            
        } else if (type === 'lighter') {
            body.classList.add('theme-mode-lighter');
            
        } else {
            body.classList.add('theme-mode-current');
            // Remove qualquer estilo inline para voltar ao padrão do CSS
            body.removeAttribute('style');
        }
    }
});