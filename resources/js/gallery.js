// Seleção dos elementos
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const closeModal = document.getElementById("closeModal");

// Abrir modal ao clicar na imagem
document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        modalCaption.textContent = img.alt;
    });
});

// Fechar modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar clicando fora da imagem
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
