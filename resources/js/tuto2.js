document.addEventListener('DOMContentLoaded', () => {
    // ==================================================
    // 1. LÓGICA DA BARRA DE PROGRESSO
    // ==================================================
    const steps = document.querySelectorAll('.tutorial-step');
    const progressBar = document.querySelector('.progress-fill');
    
    // Elementos que, ao passar o mouse, devem ZERAR a barra
    const header = document.querySelector('.header');
    const progressSection = document.querySelector('.progress-section');
    const heroSection = document.querySelector('.hero-section'); // Adicionei o Hero também para ficar mais fluido

    // Função que força a barra voltar para 1% (estado inicial)
    const resetBar = () => {
        if(progressBar) progressBar.style.width = '1%';
    };

    // Adiciona o evento "mouseenter" para resetar a barra nas áreas superiores
    if(header) header.addEventListener('mouseenter', resetBar);
    if(progressSection) progressSection.addEventListener('mouseenter', resetBar);
    if(heroSection) heroSection.addEventListener('mouseenter', resetBar);

    // Lógica para preencher a barra ao passar pelos passos (1 a 4)
    steps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            const totalSteps = steps.length;
            const currentStep = index + 1;
            const percentage = (currentStep / totalSteps) * 100;
            
            if(progressBar) progressBar.style.width = `${percentage}%`;
        });
    });

    // ==================================================
    // 2. LÓGICA DO PLAYER DE ÁUDIO (PASSO 4)
    // ==================================================
    const allControls = document.querySelectorAll('.editor-controls .control-btn');
    const waveSegments = document.querySelectorAll('.waveform-segment');

    // Verificação de segurança para garantir que os botões existem
    if (allControls.length >= 3) {
        const btnPlay = allControls[0];
        const btnPause = allControls[1];
        const btnStop = allControls[2];

        // Função para atualizar a aparência (cor azul) dos botões
        function setActiveButton(activeBtn) {
            allControls.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.remove('play'); // Remove classe legado se houver
            });
            activeBtn.classList.add('active');
        }

        // Função para controlar a animação (piscar)
        function setAnimationState(state) {
            waveSegments.forEach(segment => {
                segment.style.animationPlayState = state;
            });
        }

        // Evento PLAY
        btnPlay.addEventListener('click', () => {
            setActiveButton(btnPlay);
            setAnimationState('running');
        });

        // Evento PAUSE
        btnPause.addEventListener('click', () => {
            setActiveButton(btnPause);
            setAnimationState('paused');
        });

        // Evento STOP
        btnStop.addEventListener('click', () => {
            setActiveButton(btnStop);
            setAnimationState('paused');
        });

        // Inicialização: Botão Play começa ativo visualmente
        btnPlay.classList.add('active');
    }
});