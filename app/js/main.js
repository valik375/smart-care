const burgerMenuButton = document.querySelector('.header__burger')
const headerWrapper = document.querySelector('.header__wrapper')

burgerMenuButton.addEventListener('click', () => {
  headerWrapper.classList.toggle('menu-open')
})