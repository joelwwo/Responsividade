const $ = document.querySelector.bind(document);
const btnMenu = $('.btn-menu')
const btnClose = $('.btn-close')
const menu = $('.menu')


if (btnMenu && btnClose) {
    btnMenu.addEventListener('click', function () {
        menu.style.display = 'inline'
        /* menu.style['transition-delay'] = '2s';
        menu.style.transition = '5.5s'
        menu.style['transition-duration'] = '2s'; */
        btnMenu.style.display = 'none'
    })

    btnClose.addEventListener('click', function () {
        menu.style.display = 'none'
        btnMenu.style.display = 'inline'
    })

}