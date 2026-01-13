document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav');

    toggleButton.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // FAQ Toggle Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Close all other answers and remove active classes
            faqQuestions.forEach((q) => {
                const otherAnswer = q.nextElementSibling;
                if (otherAnswer && otherAnswer !== answer) {
                    otherAnswer.classList.add('d-none');
                    otherAnswer.classList.remove('bg-warning');
                }
                q.classList.remove('btn-warning');
            });

            // Toggle the clicked question and its answer
            if (answer) {
                answer.classList.toggle('d-none');
                answer.classList.toggle('bg-warning');
            }
            question.classList.toggle('btn-warning');
        });
    });
});