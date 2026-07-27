let darkmode = localStorage.getItem('darkmode');

const htmlTag = document.getElementsByTagName('html').item(0);

const themeSwitchButton = document.getElementById('theme-switch');

const enableDarkMode = () => {
    htmlTag.style.colorScheme = 'dark';
    localStorage.setItem('darkmode', 'active');
}

const disableDarkMode = () => {
    htmlTag.style.colorScheme = 'light';
    localStorage.setItem('darkmode', null);
}

if (darkmode === 'active') {
    enableDarkMode();
    document.getElementById('lightmode').style.display = 'none';
} else {
    document.getElementById('darkmode').style.display = 'none';
}

themeSwitchButton.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== 'active' ? enableDarkMode() : disableDarkMode(); 

    if (darkmode !== 'active') {
        document.getElementById('lightmode').style.display = 'none';
        document.getElementById('darkmode').style.display = 'block';
    } else {
        document.getElementById('lightmode').style.display = 'block';
        document.getElementById('darkmode').style.display = 'none';
    }
});

