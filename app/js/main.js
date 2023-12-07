// ======== Header =========

const burgerMenuButton = document.querySelector('.header__burger')
const headerWrapper = document.querySelector('.header__wrapper')
burgerMenuButton.addEventListener('click', () => {
  headerWrapper.classList.toggle('menu-open')
})
document.querySelector('.header__menu-link').addEventListener('click', () => {
  document.querySelector('.header__accordion').classList.toggle('active')
})

// ======== Dropdown =========

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

// ======== Modals =========

const modalsBackdrop = document.querySelectorAll('.modal__backdrop')
modalsBackdrop.forEach(backdrop => {
  backdrop.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal__backdrop')) {
      backdrop.classList.remove('visible')
      document.body.style.overflowY = 'auto'
    }
  })
})
const modalsClose = document.querySelectorAll('.modal__close')
modalsClose.forEach(close => {
  close.addEventListener('click', () => {
    const backdrop = close.parentNode.parentNode.parentNode
    backdrop.classList.remove('visible')
    document.body.style.overflowY = 'auto'
  })
})
const openModalHandler = (triggerButton, modalItem) => {
  document.querySelectorAll(triggerButton).forEach(trigger => {
    trigger.addEventListener('click', () => {
      document.querySelector(modalItem).classList.add('visible')
      document.body.style.overflowY = 'hidden'
    })
  })
}

// ======== Cookie =========

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
  document.body.style.overflowY = 'auto'
})

// ======== Success Modal =========

const successModal = document.querySelector('.success-modal__backdrop')
const modalForms = document.querySelectorAll('.form-modal__form')
modalForms.forEach(form => {
  const backdrop = form.parentNode.parentNode.parentNode.parentNode
  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    await fetch(event.target.action, {
      method: 'POST',
      body: new FormData(event.target),
      headers: {
        'Accept': 'application/json'
      }
    })
    event.target.reset()
    successModal.classList.add('visible')
    backdrop.classList.remove('visible')
  })
})

// ======== Setup =========

openModalHandler('.showroom-trigger', '.showroom-modal__backdrop')
openModalHandler('.button.consultation', '.consultation-modal__backdrop')
openModalHandler('.button.scenario', '.scenario-modal__backdrop')
openModalHandler('.header__black-friday-wrapper', '.black-friday-modal__backdrop')

// ======== BF Event =========

const blackFridayBanner = document.querySelector('.header')
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY

  if (scrollY === 0) {
    blackFridayBanner.classList.add('bf-label-hidden')
  } else {
    blackFridayBanner.classList.remove('bf-label-hidden')
  }
})

const bfBannerTrigger = JSON.parse(localStorage.getItem('bfBanner'))
if (bfBannerTrigger !== true) {
  const bfBanner = document.querySelector('.black-friday-modal__backdrop')
  setTimeout(() => {
    bfBanner.classList.add('visible')
    localStorage.setItem('bfBanner', 'true')
  }, 20000)
}
