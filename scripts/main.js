// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners, form validation, or other JavaScript functionality here
    
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message. We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Add other JavaScript functionality as needed
});
