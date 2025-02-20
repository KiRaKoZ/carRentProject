const images = [
    { src: '/assets/images/car1.png', info: 'Car Model: Volvo XC90', },
    { src: '/assets/images/car2.png', info: 'Car Model: BMW X5' },
    { src: '/assets/images/car3.png', info: 'Car Model: Audi Q7' }
];

let index = 0;
let autoSlideInterval;
const slide = document.getElementById('slide');
// const info = document.getElementById('info');
const bulletsContainer = document.getElementById('bullets');

function createBullets() {
    bulletsContainer.innerHTML = '';
    images.forEach((_, i) => {
        const bullet = document.createElement('div');
        bullet.classList.add('nav-bullet');
        bullet.addEventListener('click', () => {
            index = i; 
            updateSlide();
            resetAutoSlide();
        });
        bulletsContainer.appendChild(bullet);
    });
}

function updateBullets() {
    document.querySelectorAll('.nav-bullet').forEach((bullet, i) => {
        bullet.classList.toggle('active', i === index);
    });
}

function updateSlide() {
    slide.style.backgroundImage = `url(${images[index].src})`;
    // info.textContent = images[index].info;
    updateBullets();
}

function changeSlide(direction) {
    index = (index + direction + images.length) % images.length;
    updateSlide();
    resetAutoSlide();
}

function autoSlide() {
    changeSlide(1);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 8000);
}

createBullets();
updateSlide(); 
autoSlideInterval = setInterval(autoSlide, 8000);