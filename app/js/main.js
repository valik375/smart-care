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
      document.body.style.overflow = 'auto'
    }
  })
})

const modalsClose = document.querySelectorAll('.modal__close')

modalsClose.forEach(close => {
  close.addEventListener('click', () => {
    const backdrop = close.parentNode.parentNode.parentNode
    backdrop.classList.remove('visible')
    document.body.style.overflow = 'auto'
  })
})

const openModalHandler = (triggerButton, modalItem) => {
  document.querySelectorAll(triggerButton).forEach(trigger => {
    trigger.addEventListener('click', () => {
      document.querySelector(modalItem).classList.add('visible')
      document.body.style.overflow = 'hidden'
    })
  })
}

const cookieParamsButton = document.querySelector('.cookie__button-params')
const cookieSubmitButton = document.querySelector('.cookie__button-submit')
const cookieBody = document.querySelector('.cookie__body')
const cookieMainWrapper = document.querySelector('.cookie')
const cookie = JSON.parse(localStorage.getItem('cookie'))
if (cookie?.isApproved) {
  cookieMainWrapper.style.display = 'none'
}
let isCookieOpen = false
cookieParamsButton.addEventListener('click', () => {
  isCookieOpen = !isCookieOpen
  if (isCookieOpen) {
    cookieParamsButton.innerText = 'Назад'
    cookieSubmitButton.innerText = 'Зберегти'
    cookieBody.classList.add('open')
    document.body.style.overflowY = 'hidden'
  } else {
    cookieParamsButton.innerText = 'Змінити параметри'
    cookieSubmitButton.innerText = 'Прийняти усі'
    cookieBody.classList.remove('open')
    document.body.style.overflowY = 'auto'
  }
})
cookieSubmitButton.addEventListener('click', () => {
  const analyticsInput = document.querySelector('#cookie-analytics').checked
  const marketingInput = document.querySelector('#cookie-marketing').checked
  const socialInput = document.querySelector('#cookie-social').checked
  const cookieSettings = {
    isApproved: true,
    analytics: analyticsInput,
    marketing: marketingInput,
    social: socialInput
  }
  localStorage.setItem('cookie', JSON.stringify(cookieSettings))
  cookieMainWrapper.style.display = 'none'
})

openModalHandler('.header__showroom', '.showroom-modal__backdrop')
openModalHandler('.button.consultation', '.consultation-modal__backdrop')
openModalHandler('.button.scenario', '.scenario-modal__backdrop')