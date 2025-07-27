document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS - Animate On Scroll Library
    AOS.init({
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 900, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element should trigger the animation
    });

    // Select elements for mobile navigation functionality
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle active class for burger menu on click
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Close mobile navigation when a link is clicked (for single-page navigation)
    // This ensures the menu closes after navigating to a section
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Check if the nav menu is active (open)
            if (navLinks.classList.contains('nav-active')) {
                // Remove active class to close the menu
                navLinks.classList.remove('nav-active');
                // Remove burger toggle class to reset icon to its original state
                burger.classList.remove('toggle');
            }
        });
    });

    // Sticky Navbar functionality
    // Adds a 'sticky' class to the navbar when the user scrolls down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adjust '50' based on when you want the sticky effect to kick in
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
});