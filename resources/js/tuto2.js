document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DA BARRA DE PROGRESSO ---
    const steps = document.querySelectorAll('.tutorial-step');
    const progressBar = document.querySelector('.progress-fill');

    // Inicializa a barra em 0% ou mantém o padrão do CSS
    // progressBar.style.width = '0%'; 

    steps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            // Calcula a porcentagem: (Indice atual + 1) / Total de passos * 100
            const totalSteps = steps.length;
            const currentStep = index + 1;
            const percentage = (currentStep / totalSteps) * 100;

            // Aplica a nova largura com uma transição suave (já definida no CSS)
            progressBar.style.width = `${percentage}%`;
        });
    });

    // --- LÓGICA DO PLAYER DE ÁUDIO (PASSO 4) ---
    const playBtn = document.querySelector('.control-btn.play'); // Botão original com classe play
    // Seleciona todos os botões dentro do container de controles
    const allControls = document.querySelectorAll('.editor-controls .control-btn');
    const waveSegments = document.querySelectorAll('.waveform-segment');

    // Mapeando os botões (Assumindo ordem: 0=Play, 1=Pause, 2=Stop)
    const btnPlay = allControls[0];
    const btnPause = allControls[1];
    const btnStop = allControls[2];

    // Função para atualizar a aparência dos botões
    function setActiveButton(activeBtn) {
        // Remove a classe 'active' e 'play' (caso exista) de todos
        allControls.forEach(btn => {
            btn.classList.remove('active');
            btn.classList.remove('play'); // Remove a classe original do HTML se houver
        });
        
        // Adiciona a classe active no botão clicado
        activeBtn.classList.add('active');
    }

    // Função para controlar a animação (Running ou Paused)
    function setAnimationState(state) {
        waveSegments.forEach(segment => {
            segment.style.animationPlayState = state;
        });
    }

    // Evento PLAY
    btnPlay.addEventListener('click', () => {
        setActiveButton(btnPlay);
        setAnimationState('running'); // Retoma/Inicia a animação
    });

    // Evento PAUSE
    btnPause.addEventListener('click', () => {
        setActiveButton(btnPause);
        setAnimationState('paused'); // Congela a animação onde estiver
    });

    // Evento STOP
    btnStop.addEventListener('click', () => {
        setActiveButton(btnStop);
        setAnimationState('paused'); // Pausa a animação
        
        // Opcional: Resetar visualmente a altura ou opacidade se desejar "zerar"
        // Aqui apenas pausamos para atender ao pedido de "parar de piscar"
    });

    // Inicialização: Vamos garantir que o botão Play comece como "active" visualmente
    // mas a animação comece pausada (opcional, se quiser que comece parada)
    btnPlay.classList.add('active');
    // Se quiser que a animação comece parada, descomente a linha abaixo:
    // setAnimationState('paused'); 
});

document.addEventListener('DOMContentLoaded', () => {
    // ==================================================
    // 1. LÓGICA DA BARRA DE PROGRESSO
    // ==================================================
    const steps = document.querySelectorAll('.tutorial-step');
    const progressBar = document.querySelector('.progress-fill');
    
    // --- NOVO CÓDIGO: Resetar barra ao subir o mouse ---
    const header = document.querySelector('.header');
    const progressSection = document.querySelector('.progress-section');

    // Função que força a barra voltar para 2%
    const resetBar = () => {
        if(progressBar) progressBar.style.width = '2%';
    };

    // Adiciona o evento ao Header e à Faixa Preta da barra
    if(header) header.addEventListener('mouseenter', resetBar);
    if(progressSection) progressSection.addEventListener('mouseenter', resetBar);
    // ---------------------------------------------------

    // Lógica original: Preencher barra ao passar pelos passos
    steps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            const totalSteps = steps.length;
            const currentStep = index + 1;
            const percentage = (currentStep / totalSteps) * 100;
            progressBar.style.width = `${percentage}%`;
        });
    });

    // ==================================================
    // 2. LÓGICA DO PLAYER DE ÁUDIO (PASSO 4)
    // ==================================================
    const allControls = document.querySelectorAll('.editor-controls .control-btn');
    const waveSegments = document.querySelectorAll('.waveform-segment');

    // Verificação de segurança para garantir que os elementos existem
    if (allControls.length >= 3) {
        const btnPlay = allControls[0];
        const btnPause = allControls[1];
        const btnStop = allControls[2];

        // Função para atualizar a aparência dos botões
        function setActiveButton(activeBtn) {
            allControls.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.remove('play'); 
            });
            activeBtn.classList.add('active');
        }

        // Função para controlar a animação
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

        // Inicialização: Botão Play ativo visualmente
        btnPlay.classList.add('active');
    }
});