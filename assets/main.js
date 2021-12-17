const iconBar = document.querySelector('.header__bars')
const headerNav = document.querySelector('.header__nav')
const headerOverlay = document.querySelector('.header__overlay')
iconBar.addEventListener('click', function (e) {
    headerNav.classList.toggle('show')
    headerOverlay.classList.toggle('show')
})
headerOverlay.addEventListener('click', function (e) {
    headerNav.classList.toggle('show')
    headerOverlay.classList.toggle('show')
})