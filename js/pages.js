document.addEventListener("DOMContentLoaded", function() {
    fetch("pages/home.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("home-section").innerHTML = data;

            let homeCss = document.createElement("link");
            homeCss.rel = "stylesheet";
            homeCss.href = "scss/components/_home.scss";
            document.head.appendChild(homeCss);

            let homeJs = document.createElement("script");
            homeJs.src = "js/home.js";
            document.body.appendChild(homeJs);
        })
        .catch(error => console.error("Error Load home.html:", error));
});