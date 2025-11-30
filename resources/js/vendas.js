const toggleBtns = document.querySelectorAll('.toggle-btn');
const prices = document.querySelectorAll('.price-amount');

// Dados dos preços (Preço Mensal vs Preço Anual com desconto)
const pricingData = [
    { monthly: "R$ 49", annual: "R$ 39" },   // Hobbyist
    { monthly: "R$ 129", annual: "R$ 103" }, // Creator
    { monthly: "R$ 249", annual: "R$ 199" }, // Pro
    { monthly: "R$ 1.500", annual: "R$ 1.200" } // Studio
];

toggleBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // 1. Lógica Visual (A que você já fez)
        toggleBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // 2. Lógica de Atualizar Preços
        const isAnnual = this.textContent.includes('Anual');
        
        prices.forEach((price, index) => {
            // Efeito suave de sumir/aparecer
            price.style.opacity = '0';
            
            setTimeout(() => {
                price.textContent = isAnnual ? pricingData[index].annual : pricingData[index].monthly;
                price.style.opacity = '1';
            }, 200); // Espera 0.2s para trocar o texto
        });
    });
});