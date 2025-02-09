async function loadLanguageFile(lang) {
    try {
        const response = await fetch(`data/${lang}.json`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Error loading language file:", error);
        return {};
    }
}

async function updateLanguage(lang) {
    const translations = await loadLanguageFile(lang);
    if (Object.keys(translations).length === 0) return;

    // Loop through elements with class 'lang-text' and update their content
    const textElements = document.querySelectorAll('.lang-text');
    
    textElements.forEach(element => {
        const key = element.getAttribute('data-key'); // Get key from data attribute
        if (translations[key]) {
            element.textContent = translations[key]; // Update text with translation
        }
    });

    // Update font family based on language
    let font = "Arial, sans-serif"; // Default for English
    if (lang === "geo") font = 'Noto Serif Georgian';
    if (lang === "rus") font = "'NotoSerifRussian', sans-serif";
    if (lang === "eng") font = 'DM Sans 9pt';
    
    document.body.style.fontFamily = font;

    // Update selected language in UI
    const selectedBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
    const currentFlag = document.getElementById("current-flag");
    const currentLang = document.getElementById("current-lang");

    currentFlag.src = selectedBtn.querySelector("img").src;
    currentLang.textContent = selectedBtn.textContent;

    // Store selection in localStorage
    localStorage.setItem("selectedLanguage", lang);
}

function initializeLanguageSwitcher() {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "eng";
    updateLanguage(savedLanguage);

    document.querySelectorAll(".lang-btn").forEach(button => {
        button.addEventListener("click", function () {
            updateLanguage(this.dataset.lang);
            document.querySelector(".language-options").classList.remove("show");
        });
    });

    // Show/hide language options on hover
    const switcher = document.querySelector(".language-switcher");
    switcher.addEventListener("mouseenter", () => {
        document.querySelector(".language-options").classList.add("show");
    });
    switcher.addEventListener("mouseleave", () => {
        document.querySelector(".language-options").classList.remove("show");
    });
}

document.addEventListener("DOMContentLoaded", initializeLanguageSwitcher);