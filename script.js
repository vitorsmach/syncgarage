const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('side-menu');
const root = document.documentElement;
const toggle_dark = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('open');
    }
});

document.getElementById('close-menu').addEventListener('click', () => {
    menu.classList.remove('open');
});

if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark');
}

toggle_dark.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});