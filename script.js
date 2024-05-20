// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Existing navigation code
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove('active');
        });
    }

    function showSection(sectionId) {
        hideAllSections();
        const section = document.querySelector(sectionId);
        if (section) {
            section.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            showSection(targetId);
        });
    });

    // Show home section by default
    showSection('#home');

    // Photo gallery sliding functionality
    let currentIndex = 0;

    function updateSlide() {
        const photos = document.querySelector('.photos');
        const photoWidth = document.querySelector('.photo-container').offsetWidth;
        photos.style.transform = `translateX(-${photoWidth * currentIndex}px)`;
    }

    function slideLeft() {
        const photos = document.querySelector('.photos');
        const totalPhotos = photos.children.length;

        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalPhotos - 1;
        }
        updateSlide();
    }

    function slideRight() {
        const photos = document.querySelector('.photos');
        const totalPhotos = photos.children.length;

        if (currentIndex < totalPhotos - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlide();
    }

    // Add event listeners for the slide buttons
    const slideLeftButton = document.querySelector('.slide-button.left');
    const slideRightButton = document.querySelector('.slide-button.right');

    if (slideLeftButton && slideRightButton) {
        slideLeftButton.addEventListener('click', slideLeft);
        slideRightButton.addEventListener('click', slideRight);
    }

    // Update slide position on window resize
    window.addEventListener('resize', updateSlide);

    // Initialize the first slide
    updateSlide();
});
