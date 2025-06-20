document.addEventListener('DOMContentLoaded', function() {
    // --- Hamburger Menu for Mobile ---
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Toggle active class on the question for icon change
            question.classList.toggle('active');

            const answer = question.nextElementSibling;
            if (answer.style.maxHeight) {
                // If it's open, close it
                answer.style.maxHeight = null;
                answer.style.padding = '0 15px';
            } else {
                // If it's closed, open it
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.padding = '0 15px 15px';
            }
        });
    });
});