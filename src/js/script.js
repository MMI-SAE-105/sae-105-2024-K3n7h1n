document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.site-header__hamburger');
    const nav = document.querySelector('.site-header__nav');

    hamburger.addEventListener('click', function() {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !expanded);
        
        // Ajout/Suppression de la classe pour animer le menu
        nav.classList.toggle('site-header__nav--open');
    });
});
