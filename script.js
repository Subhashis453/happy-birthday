document.addEventListener('DOMContentLoaded', () => {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');

    const toSliderButton = document.getElementById('to-slider');
    const toNoteButton = document.getElementById('to-note');

    // Load Lottie Animation for Cat
    const catAnimation = lottie.loadAnimation({
        container: document.getElementById('cat-animation'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'cat-animation.json',
    });

    // Show "Click Here" button after animation completes
    catAnimation.addEventListener('complete', () => {
        toSliderButton.classList.remove('hidden');
    });

    // Navigate to Slider Page
    toSliderButton.addEventListener('click', () => {
        page1.classList.remove('active');
        page2.classList.add('active');
    });

    // Navigate to Final Note Page
    toNoteButton.addEventListener('click', () => {
        page2.classList.remove('active');
        page3.classList.add('active');
    });

    // Slider Functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    document.getElementById('prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Show the first slide initially
    showSlide(currentSlide);

    // Load Lottie Animation for Background
    lottie.loadAnimation({
        container: document.getElementById('background-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'cat-animation.json',
    });
});
