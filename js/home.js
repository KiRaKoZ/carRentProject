function initSlider() {
    let currentIndex = 0; // Local variable to track the current slide index

    const slides = document.querySelectorAll('.slide');
    const navBtns = document.querySelectorAll('.nav-btn');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    if (!slides.length || !prevBtn || !nextBtn || !navBtns.length) return;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });

        // Update active navigation button
        navBtns.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Add click event listeners for navigation dots
    navBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            const index = parseInt(this.dataset.slide);
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    // Auto-slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Initialize the first slide
    showSlide(currentIndex);
}

// Initialize the slider only once
initSlider();