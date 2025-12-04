document.getElementById('menu-toggle').onclick = function() {
    const nav = document.getElementById('navigation');
    const button = this;
    button.classList.toggle('open');
    nav.classList.toggle('open');
    const isExpanded = button.getAttribute('aria-expanded') === 'true' || false;
    button.setAttribute('aria-expanded', !isExpanded);
};
