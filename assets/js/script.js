function showTab() {
    const tab = document.getElementById('tab');

    if (tab.style.display == 'flex') {
        tab.style.display = 'none';
    }
    else {
        tab.style.display = 'flex';
    }
}

const buttonLang = document.getElementById('settings');
buttonLang.onclick = showTab;


function switchLanguage() {
    lang.classList.toggle('active');

    language = document.getElementById('PT-EN');
    if (language.innerHTML == 'en') {
        language.innerHTML = 'pt';
    }
    else {
        language.innerHTML = 'en';
    }
}

const lang = document.getElementById('language');
lang.onclick = switchLanguage;


function swtichDarkMode() {
    darkMode.classList.toggle('active');

    dark_mode = document.getElementById('on-off');
    if (dark_mode.innerHTML == 'off') {
        dark_mode.innerHTML = 'on';
    }
    else {
        dark_mode.innerHTML = 'off';
    }
}

const darkMode = document.getElementById('dark-mode');
darkMode.onclick = swtichDarkMode;

