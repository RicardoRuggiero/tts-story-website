document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");
    const closeModal = document.getElementById("closeModal");

    // Abre o modal ao clicar na imagem
    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            modalCaption.textContent = img.alt;
        });
    });

    // Fecha ao clicar no X
    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Fecha clicando no fundo do modal
    if (modal) {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});