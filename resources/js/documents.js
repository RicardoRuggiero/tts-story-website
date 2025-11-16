// Script para suportar múltiplos botões de cópia
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Encontra o container pai e, dentro dele, o bloco <pre>
        const container = this.closest('.code-block-container');
        if (!container) return;

        const codeBlock = container.querySelector('.code-block pre');
        if (!codeBlock) return;

        const codeText = codeBlock.textContent;
        
        navigator.clipboard.writeText(codeText).then(() => {
            const originalHTML = this.innerHTML;
            // TRADUÇÃO: Texto do botão após copiar
            this.innerHTML = '<i class="fas fa-check"></i> Copiado!';
            
            setTimeout(() => {
                this.innerHTML = originalHTML;
            }, 2000);
        });
    });
});