const $ = document.querySelector.bind(document);
const btnMenu = $('.btn-menu')
const btnClose = $('.btn-close')
const menu = $('.menu')


if (btnMenu && btnClose) {
    btnMenu.addEventListener('click', function () {
        menu.style.display = 'inline'
        btnMenu.style.display = 'none'
    })

    btnClose.addEventListener('click', function () {
        menu.style.display = 'none'
        btnMenu.style.display = 'inline'
    })

}