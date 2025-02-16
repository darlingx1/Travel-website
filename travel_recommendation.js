const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting the default way
        form.reset(); // Reset the form fields after submission
        alert('Your message has been sent!');
    });