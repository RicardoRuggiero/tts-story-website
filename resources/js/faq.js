// FAQ Accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        
        // Close all items
        faqItems.forEach(faq => faq.classList.remove('open'));
        
        // Open clicked item if it wasn't open
        if (!isOpen) {
            item.classList.add('open');
        }
    });
});

// Category tabs functionality
const categoryTabs = document.querySelectorAll('.category-tab');

categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});