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

const colors = ["#735043", "#373948", "#405FF2"];
const cars = [
    {
        image: "/assets/images/car1.png",
        title: "Mercedes-Benz, C Class",
        description: "2023 C300e AMG Line Night Ed Premium Plus 5dr 9G-Tronic",
        mileage: "72,925 miles",
        fuel: "Petrol",
        transmission: "Automatic",
        price: "$400",
    },
    {
        image: "/assets/images/car2.png",
        title: "BMW 5 Series",
        description: "2022 M550i xDrive Sedan",
        mileage: "58,000 miles",
        fuel: "Diesel",
        transmission: "Automatic",
        price: "$380",
    },
    {
        image: "/assets/images/car3.png",
        title: "BMW 5 Series",
        description: "2022 M550i xDrive Sedan",
        mileage: "58,000 miles",
        fuel: "Diesel",
        transmission: "Automatic",
        price: "$380",
    },
   

];

const carList = document.getElementById("carList");

cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.classList.add("car-card");
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    carCard.style.backgroundColor = randomColor;

    
    carCard.innerHTML = `
        <div class="car-image" style="background-image: url(${car.image});"></div>
        <div class="car-content">
            <span class="car-title">${car.title}</span>
            <span class="car-description">${car.description}</span>
            <div class="car-info">
                <div>
                    <img src="/assets/icons/speedometer%201.svg" alt="Mileage">
                    <span class="text-14-24 ">${car.mileage}</span>
                </div>
                <div>
                    <img src="/assets/icons/gasoline-pump%201.svg" alt="Fuel">
                    <span class="text-14-24">${car.fuel}</span>
                </div>
                <div>
                    <img src="/assets/icons/gearbox%201.svg" alt="Transmission">
                    <span class="text-14-24">${car.transmission}</span>
                </div>
            </div>
            <div class="car-footer">
                <span>${car.price}</span>
                <a href="#">დეტალები</a>
            </div>
        </div>
    `;

    carList.appendChild(carCard);
});