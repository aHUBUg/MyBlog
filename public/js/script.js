


/* changing theme */

// Get the saved theme preference from localStorage (if available)
const savedTheme = localStorage.getItem('theme');
const icon = document.getElementById('toggleDark').querySelector('i');
const body = document.body;

// Check if a theme preference is saved
if (savedTheme) {
    // Apply the saved theme preference to the body element and icon
    body.classList.toggle('dark-theme', savedTheme === 'dark');
    icon.classList.toggle('bx-sun', savedTheme === 'dark');
    icon.classList.toggle('bx-moon', savedTheme !== 'dark');
}

// Function to toggle the theme
function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
        // Save the theme preference to localStorage
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
        // Save the theme preference to localStorage
        localStorage.setItem('theme', 'dark');
    }
}

// Add a click event listener to the toggle button
document.getElementById('toggleDark').addEventListener('click', toggleTheme);








$(document).ready(function() {
    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 580,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });    
}); 



/* toggle icon navbar */

let toggle = document.getElementById('nav-menu');

toggle.addEventListener('click', function () {
    const icon = this.querySelector('i');

    if (icon.classList.contains('bx-menu')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
        document.querySelector('.navbar').classList.add('active');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
        document.querySelector('.navbar').classList.remove('active');
    }
});



/* Search input */
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');

// Add a click event listener to the search icon
searchIcon.addEventListener('click', function () {
    // Toggle the visibility of the search input
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'flex';
    } else {
        searchInput.style.display = 'none';
    }
});




/* typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Freelance Web Developer', 'Blogger', 'Environmental Specialist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

/* Replyfoam */
document.addEventListener('DOMContentLoaded', function () {
    const replyButtons = document.querySelectorAll('.reply-button');

    replyButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const commentId = this.getAttribute('data-comment-id');
            const replyForm = document.querySelector(`.hidden[data-comment-id="${commentId}"]`);
            
            if (replyForm.style.display === 'none' || replyForm.style.display === '') {
                replyForm.style.display = 'block';
            } else {
                replyForm.style.display = 'none';
            }
        });
    });
});



/* Removing navbar */
const menuItems = document.querySelectorAll('.navbar li a');
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        // Remove the active class from the navbar when a menu item is clicked
        navbar.classList.remove('active');
    });
});


/* Active page highlighted */
document.addEventListener('DOMContentLoaded', function () {
    var currentPageURL = window.location.href;

    var menuItems = document.querySelectorAll('.header .navbar .nav-links a');

    menuItems.forEach(function (item) {
        if (item.href === currentPageURL) {
            item.parentElement.classList.add('current');
        }
    });
});

/* Make header appear as one scrols upwards */
let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        header.classList.remove('show');
        header.classList.add('hide');
    } else {
        // Scrolling up
        header.classList.remove('hide');
        header.classList.add('show');
    }

    prevScrollPos = currentScrollPos;
});
 
/* Whatsapp floating chatbot */
// JavaScript code for chatbot functionality
const whatsappButton = document.getElementById('whatsapp-button');
const chatbotContainer = document.getElementById('chatbot-container');

// Add a click event listener to the WhatsApp button
whatsappButton.addEventListener('click', function () {
    // Toggle the visibility of the chatbot container
    if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
        chatbotContainer.style.display = 'flex'; 
    } else {
        chatbotContainer.style.display = 'none';
    }
});

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', function () {
    // Close the chatbot container when the close button is clicked
    chatbotContainer.style.display = 'none';
});






