# Projeto: website - TTS-Story-App

Este é um projeto de estudo focado no desenvolvimento *frontend* (JavaScript, HTML e CSS) para a recriação de uma interface de usuário (UI) moderna para um aplicativo de clonagem de voz e Text-to-Speech (TTS).

O objetivo principal não é a funcionalidade de *backend*, mas sim a replicação precisa do design, layout e interatividade de um website.

## 📄 Páginas Implementadas

O projeto está estruturado em várias páginas estáticas que simulam a navegação de um usuário real:

1.  **Landing Page (`index.html`)**: A página principal de marketing e apresentação do produto.
2.  **Login (`login.html`)**: Página de autenticação com um background animado complexo.
3.  **Configurações da Conta (`settings.html`)**: O painel principal do usuário para gerenciar perfil, senha e assinatura.
4.  **Preferências (`preferences.html`)**: Painel de configurações de comportamento da aplicação (idioma, notificações, etc.).

## 🚀 Tecnologias Utilizadas

* **HTML5** (Foco em estrutura semântica: `<header>`, `<main>`, `<aside>`)
* **CSS3** (Layout moderno com Flexbox e Grid, Animações `@keyframes`, Variáveis)
* **JavaScript (Vanilla)** (Usado para interatividade, como toggles de senha, partículas de background e navegação simulada)

---

## 🧐 Destaques Técnicos e Análise Não Convencional

Durante o desenvolvimento, foram aplicadas diversas técnicas que vão além do HTML/CSS básico, focadas em resolver problemas de design moderno:

### 1. SVG (Scalable Vector Graphics) em Linha

Uma das características mais notáveis do painel de controle (`settings.html`) é o uso de ícones.

* **Técnica:** Em vez de usar arquivos de imagem (`.png`, `.jpg`) ou bibliotecas de fontes (como Font Awesome), os ícones da barra lateral foram implementados diretamente no HTML usando **SVG em linha**.
* **Análise:** Tive a oportunidade de analisar a estrutura de um SVG. Observei que ele é, essencialmente, "código como imagem".
    * **Tags de Desenho:** Analisei as tags de SVG como `<line>`, `<circle>` e `<path>`.
    * **Manutenção Humana vs. Máquina:** Comparamos o `path d="..."` (uma string de dados complexa gerada por software de design gráfico, como Illustrator ou Figma) com tags semanticamente legíveis por humanos (como `<circle>` ou `<rect>`), entendendo a diferença entre código otimizado para máquinas e código legível.

### 2. Gerenciamento de Conflito de Overflow e `z-index`

A página de login (`login.html`) implementa um background animado complexo, com esferas flutuantes e um efeito de partículas reativo ao mouse.

* **O Conflito:** Isso criou um desafio técnico significativo. O `<body>` precisava de `overflow: hidden;` para "prender" as animações de background e impedir a rolagem horizontal, mas o card de login (conteúdo) precisava de `overflow-y: auto;` para ser rolável em telas menores.
* **A Solução:** O conflito foi resolvido desacoplando as responsabilidades. Criamos um `<div class="page-wrapper">` que envolve todo o conteúdo (header, main).
    1.  O `<body>` manteve o `overflow: hidden;` para gerenciar o background.
    2.  O `.page-wrapper` (com `z-index` maior) recebeu `overflow-y: auto;` e `height: 100vh;`, tornando-se o contêiner rolável para o conteúdo, resolvendo o "corte" do formulário.

### 3. Reutilização de CSS e Estilização Avançada

O projeto focou em manter o CSS limpo e reutilizável (princípio D.R.Y. - Don't Repeat Yourself).

* **CSS Unificado:** As páginas `settings.html` e `preferences.html` utilizam **exatamente o mesmo arquivo CSS** (`settings.css`). O estilo muda contextualmente (ex: qual item de menu está `.active`), mas a base de código é a mesma, facilitando a manutenção.
* **Navegação Simulada (Frontend-Only):** Para simular um fluxo de login sem *backend*, usamos tags `<a>` (links) estilizadas para parecerem exatamente como botões (`<button>`), permitindo a navegação entre as páginas estáticas.
* **Estilização de Elementos Nativos:** Foram criados estilos personalizados para elementos HTML que são notoriamente difíceis de customizar, como os menus dropdown (`<select>`) e os botões "toggle" (criados a partir de `<input type="checkbox">`), para que se alinhassem perfeitamente à identidade visual (UI) do design.



    <!-- importar as bibliotecas primeiro -->

    <!-- importar os meus scripts depois das bibliotecas -->
    https://github.com/romuloreis/DWDM/blob/master/sticky_navigation.md


<!-- http://imakewebthings.com/waypoints/guides/getting-started/ -->
