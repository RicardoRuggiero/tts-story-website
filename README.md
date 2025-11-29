# TTS-Story-Website | An App LocaL&&online

# 1. Introdução

Este documento apresenta uma implementação do site **TTS-Story-App**, hospedado em:

🔗 **https://ricardoruggiero.github.io/tts-story-website/**

# x. Notas

### # Aqui estão os 3 aspectos mais relevantes sobre o "peso" desse trecho de código, considerando performance e boas práticas:

# 1. Custo de Renderização (Paint/Layout) - 70%
O peso real. O HTML em si é leve, mas uma "waveform" (onda sonora) implica animação.

### `->` Se você animar essas 25 `spans` alterando propriedades como `height` ou `margin`, o navegador terá que recalcular o layout da página a cada frame (caro para CPU). 
### `->` Se usar `transform: scaleY`, o peso vai para a GPU (mais leve), mas ainda consome recursos gráficos simultâneos.

# 2. Manutenibilidade (Cognitive Load) - 25%
O peso técnico. O código viola o princípio DRY (Don't Repeat Yourself).

### `->` Ter 25 linhas idênticas "pesa" na leitura e manutenção. 
### `->` Se você decidir mudar para 50 barras ou adicionar uma classe, terá que editar linha por linha.

# 3. Tamanho do DOM/Rede - 5%
O peso estrutural. Irrelevante neste contexto.

### `->` Explicação: Em bytes transferidos (network), isso é menor que 1KB. 
### `->` Em memória RAM (árvore DOM), 27 nós (1 section + 1 div + 25 spans) são insignificantes para qualquer navegador moderno.