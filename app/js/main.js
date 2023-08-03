const burgerMenuButton = document.querySelector('.header__burger')
const headerWrapper = document.querySelector('.header__wrapper')

burgerMenuButton.addEventListener('click', () => {
  headerWrapper.classList.toggle('menu-open')
})

const dropdownSetup = (sectionName) => {
  const dropdowns = document.querySelectorAll(`${sectionName} .dropdown-list .dropdown-item__head`)
  const dropdownItems = document.querySelectorAll(`${sectionName} .dropdown-item`)

  dropdowns.forEach((dropdownHead) => {
    dropdownHead.addEventListener('click', () => {
      dropdownItems.forEach((item) => item.classList.remove('active'))
      const dropdown = dropdownHead.parentNode
      dropdown.classList.add('active')
    })
  })
}

const simpleDropdownButton = document.querySelectorAll('.simple-dropdown-button')

simpleDropdownButton.forEach(button => {
  button.addEventListener('click', () => {
    button.parentNode.classList.toggle('active')
  })
})

const modalsBackdrop = document.querySelectorAll('.modal__backdrop')

modalsBackdrop.forEach(backdrop => {
  backdrop.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal__backdrop')) {
      backdrop.classList.remove('visible')
    }
  })
})

const modalsClose = document.querySelectorAll('.modal__close')

modalsClose.forEach(close => {
  close.addEventListener('click', (event) => {
    const backdrop = close.parentNode.parentNode.parentNode
    backdrop.classList.remove('visible')
  })
})

const openModalHandler = (triggerButton, modalItem) => {
  document.querySelectorAll(triggerButton).forEach(trigger => {
    trigger.addEventListener('click', () => {
      document.querySelector(modalItem).classList.add('visible')
    })
  })
}