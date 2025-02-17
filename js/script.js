document.getElementById("year").innerHTML = new Date().getFullYear();

window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    
    if (window.scrollY > 0) {
        // If scrolled, add the "scrolled" class and remove "transparent"
        header.classList.add('scrolled');
        header.classList.remove('transparent');
    } else {
        // If at the top, add the "transparent" class
        header.classList.add('transparent');
        header.classList.remove('scrolled');
    }
});

// Initialize header with transparent class when the page loads
window.addEventListener('load', function() {
    const header = document.getElementById('header');
    header.classList.add('transparent');
});