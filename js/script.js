document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector('.header__menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const burgerIcon = document.querySelector('.burger-icon');

    menuBtn.addEventListener('click', function() {
        mobileMenu.style.display = 'block';
    });

    mobileMenu.addEventListener('click', function(event) {
        if (event.target === mobileMenu) {
            mobileMenu.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const subscribeForm = document.getElementById('subscribeForm');

    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value;

        if (isValidEmail(emailValue)) {
            subscribe(emailValue);
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function subscribe(email) {
        fetch('/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => {
            if (response.ok) {
                alert('Successfully subscribed!');
            } else {
                alert('Subscription failed. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

