const buttonLang = document.getElementById('settings');

function showTab() {
    const tab = document.getElementById('tab');

    if (tab.style.display == 'flex') {
        tab.style.display = 'none';
    }
    else {
        tab.style.display = 'flex';
    }
}

buttonLang.addEventListener('click', () => {
    showTab();
});
