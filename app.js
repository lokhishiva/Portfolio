/**
 * Shivam Singh Patel - Portfolio Interactive Control Script
 * File: app.js
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Dynamic Header Scroll Effect ---
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
            header.style.padding = '0.5rem 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '1.25rem 0';
        }
    });

    // --- 2. Active Navigation Scroll-Spy ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Checks if the user is currently looking at this section block area
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // --- 3. Simple Dynamic Element Fade-In Alert (Optional Check) ---
    console.log("Shivam's portfolio application script successfully initialized.");
});
