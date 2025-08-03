document.querySelector('.input-group button').addEventListener('click', function() {
    const emailInput = this.previousElementSibling;
    const email = emailInput.value.trim();
    
    if (email && email.includes('@')) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});