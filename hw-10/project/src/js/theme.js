const switchTheme = document.querySelector('.js-switch-input');
const body = document.querySelector('body');

const darkTheme = () => body.classList.add(Theme.DARK);
const lightTheme = () => body.classList.add(Theme.LIGHT);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

switchTheme.addEventListener('change', darkTheme);
switchTheme.addEventListener('change', lightTheme);