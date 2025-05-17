// Initialize EmailJS
(function() {
    // Replace with your EmailJS public key
    emailjs.init("5PXYQrxKY6_JXast5");
})();

document.addEventListener('DOMContentLoaded', function() {
    // Article expansion functionality
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const article = this.closest('article');
            const preview = article.querySelector('.article-preview');
            const full = article.querySelector('.article-full');
            
            if (preview.style.display !== 'none') {
                preview.style.display = 'none';
                full.style.display = 'block';
                this.textContent = 'Show Less';
            } else {
                preview.style.display = 'block';
                full.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading spinner
            const submitButton = this.querySelector('button[type="submit"]');
            const spinner = submitButton.querySelector('.spinner-border');
            submitButton.disabled = true;
            spinner.classList.remove('d-none');
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Send email using EmailJS
            emailjs.send("YUVALTY - contact", "template_e8f45p9", formData)
                .then(function() {
                    // Show success message
                    alert('Thank you for your message! I will get back to you soon.');
                    // Reset form
                    contactForm.reset();
                })
                .catch(function(error) {
                    // Show error message
                    alert('Sorry, there was an error sending your message. Please try again later.');
                    console.error('EmailJS error:', error);
                })
                .finally(function() {
                    // Hide loading spinner
                    submitButton.disabled = false;
                    spinner.classList.add('d-none');
                });
        });
    }
}); 