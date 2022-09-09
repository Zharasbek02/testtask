const faqs = document.querySelectorAll(".tenth-faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
}); 