async function loadComponent(url, target) {
    const response = await fetch(url);
    const html = await response.text();
    document.getElementById(target).innerHTML = html;
}

loadComponent('pages/home.html', 'home');