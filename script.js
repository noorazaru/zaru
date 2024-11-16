function toggleMenu() {
    const menu = document.querySelector('.side-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

document.addEventListener('scroll', function () {
    const title = document.querySelector('.site-title');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    title.classList.toggle('show', scrollTop > 100);
});
