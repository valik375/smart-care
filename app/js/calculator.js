let calculatorSections = [
  {
    sectionType: 'choose',
    title: 'Який <span>тип приміщення</span> потребує системи розумного будинку?',
    text: 'Ця інформація допоможе нам підібрати ідеальні рішення, які відповідатимуть особливостям вашого приміщення.',
    variants: [
      {
        text: 'Квартира',
        label: 'flat',
        icon: '../assets/white-flat.svg',
        selected: false
      },
      {
        text: 'Приватний будинок',
        label: 'house',
        icon: '../assets/white-house.svg',
        selected: false
      },
      {
        text: 'Офіс',
        label: 'office',
        icon: '../assets/white-case.svg',
        selected: false
      }
    ]
  },
  {
    sectionType: 'choose',
    title: 'Які <span>функції безпеки</span> повинні бути у вашому розумному будинку?',
    text: 'Оберіть необхідні функції безпеки. Кількість необмежена.',
    subtext: 'Не знайшли потрібної функції? Вкажіть її при телефонній розмові або переписці з нами та ми обовʼязково додамо її для вас.',
    variants: [
      {
        text: 'Захист від <br>вторгнення',
        label: 'protectionAgainstIntrusion',
        icon: '../assets/white-balaclava.svg',
        price: {
          flat: 400,
          house: 400,
          office: 400
        },
        selected: false
      },
      {
        text: 'Система <br>відеоспостереження',
        label: 'videoSurveillanceSystem',
        icon: '../assets/white-camera.svg',
        price: {
          flat: 500,
          house: 500,
          office: 500
        },
        selected: false
      },
      {
        text: 'Імітація <br>присутності',
        label: 'imitationOfPresence',
        icon: '../assets/white-user.svg',
        price: {
          flat: 300,
          house: 300,
          office: 300
        },
        roomType: ['bedroom'],
        selected: false
      },
      {
        text: 'Інтеграція зі <br>службою охорони',
        label: 'integrationWithTheSecurityService',
        icon: '../assets/white-shield.svg',
        price: {
          flat: 130,
          house: 130,
          office: 130
        },
        selected: false
      },
      {
        text: 'Розумні замки',
        label: 'smartLocks',
        icon: '../assets/white-lock.svg',
        price: {
          flat: 800,
          house: 800,
          office: 800
        },
        selected: false
      },
      {
        text: 'Протипожежна <br>система',
        label: 'fireProtectionSystem',
        icon: '../assets/white-fire.svg',
        price: {
          flat: 300,
          house: 300,
          office: 300
        },
        selected: false
      },
      {
        text: 'Антипотоп система',
        label: 'antiFloodSystem',
        icon: '../assets/white-drop.svg',
        price: {
          flat: 175,
          house: 175,
          office: 350
        },
        roomType: ['kitchen', 'bathroom'],
        selected: false
      }
    ]
  },
  {
    sectionType: 'choose',
    title: 'Які <span>функції комфорту</span> повинні бути у вашому розумному будинку?',
    text: 'Оберіть необхідні функції комфорту. Кількість необмежена.',
    subtext: 'Не знайшли потрібної функції? Вкажіть її при телефонній розмові або переписці з нами та ми обовʼязково додамо її для вас.',
    variants: [
      {
        text: 'Контроль <br>освітлення',
        label: 'controlOfLighting',
        icon: '../assets/white-light.svg',
        price: {
          flat: 150,
          house: 150,
          office: 75
        },
        roomType: ['kitchen', 'bedroom', 'bathroom'],
        selected: false
      },
      {
        text: 'Клімат-контроль',
        label: 'climateControl',
        icon: '../assets/white-temperature.svg',
        price: {
          flat: 500,
          house: 500,
          office: 500
        },
        selected: false
      },
      {
        text: 'Автоматичні ролети',
        label: 'automaticDoorsAndRollerShutters',
        icon: '../assets/white-blinds.svg',
        price: {
          flat: 500,
          house: 500,
          office: 500
        },
        roomType: ['bathroom'],
        selected: false
      },
      {
        text: 'Автоматизація <br>ветниляції',
        label: 'automationOVetting',
        icon: '../assets/white-wentilation.svg',
        price: {
          flat: 70,
          house: 70,
          office: 70
        },
        roomType: ['kitchen', 'bathroom'],
        selected: false
      },
      {
        text: 'Керування системами <br>опалення',
        label: 'managementOfHeatingSystems',
        icon: '../assets/white-heating.svg',
        price: {
          flat: 75,
          house: 75,
          office: 75
        },
        roomType: ['bedroom', 'livingRoom'],
        selected: false
      },
      {
        text: 'Голосовий <br>ассистент',
        label: 'voiceAssistant',
        icon: '../assets/white-micro.svg',
        price: {
          flat: 200,
          house: 200,
          office: 200
        },
        selected: false
      },
      {
        text: 'Розумний <br>прибиральник',
        label: 'smartCleaner',
        icon: '../assets/white-robot.svg',
        price: {
          flat: 50,
          house: 50,
          office: 50
        },
        selected: false
      }
    ]
  },
  {
    sectionType: 'rooms',
    title: 'Які <span>кімнати</span> потребують системи розумного будинку?',
    text: 'Оберіть тип кімнат та їх кількість. Завдяки цьому ми підрахуємо точну вартість саме для вашого випадку.',
    rooms: [
      {
        id: 0,
        name: 'Кухня',
        label: 'kitchen',
        value: 1
      },
      {
        id: 1,
        name: 'Санвузол',
        label: 'bathroom',
        value: 1
      },
      {
        id: 2,
        name: 'Вітальня/коридор/лоджія',
        label: 'livingRoom',
        value: 1
      },
      {
        id: 3,
        name: 'Спальня',
        label: 'bedroom',
        value: 1
      },
      {
        id: 4,
        name: 'Нежилі, технічні <br> приміщення тощо',
        label: 'etc',
        value: 1
      },
    ]
  },
  {
    sectionType: 'range',
    title: 'Яка площина <span>вашого</span> приміщення?',
    text: 'Від площини приміщення залежить кількість та тип пристроїв системи розумного будинку.',
    rangeValue: 40,
    label: 'SizeOfFlat'
  }
]
let currentStep = 0
let currentTemplate
let selectedSpace
let selectedFunctions
let totalPrice = 0
let securityFunctions = 0
let comfortFunctions = 0
let securityFunctionsText = []
let comfortFunctionsText = []

const calculatorModalBody = document.querySelector('.calculator-modal__body')
const prevButton = document.querySelector('.calculator-modal__back')
const nextButton = document.querySelector('.calculator-modal__next')
const calculatorModalBackdrop = document.querySelector('.calculator-modal__backdrop')

// -------- CHOOSE ----------

const chooseFlatHandler = (index) => {
  const variantSelect = document.querySelectorAll('.calculator-modal__template-choose-item')
  variantSelect.forEach((variant, variantIndex) => {
    variantIndex === index ? variant.classList.add('selected') : variant.classList.remove('selected')
  })
  currentTemplate.variants.map((variant, variantIndex) => {
    variant.selected = variantIndex === index
  })
}
const chooseHandler = (index) => {
  const variantSelect = document.querySelectorAll('.calculator-modal__template-choose-item')[index]
  variantSelect.classList.toggle('selected')
  currentTemplate.variants[index].selected = !currentTemplate.variants[index].selected
}
const chooseVariant = (index) => {
  currentStep === 0
    ? chooseFlatHandler(index)
    : chooseHandler(index)
}
const chooseTemplate = (item) => {
  return `
    <div class="calculator-modal__template choose">
      <h2 class="calculator-modal__template-title">${ item.title }</h2>
      <p class="calculator-modal__template-text text">${ item.text }</p>
      <div class="calculator-modal__template-choose">
      ${ item.variants.map((variant, variantIndex) => {
    return `
          <div onclick="chooseVariant(${variantIndex})" class="calculator-modal__template-choose-item ${ variant.selected ? 'selected' : '' }">
            <img src="${ variant.icon }" alt="${ variant.text }">
            <span>${ variant.text }</span>
          </div>
        `
  }).join('') }
      </div>
      ${ item.subtext ? `<div class="calculator-modal__template-choose-subtext text">${ item.subtext }</div>` : '' }

    </div>
  `
}

// -------- ROOMS ----------

const decrementRoom = (event, roomIndex) => {
  if (currentTemplate.rooms[roomIndex].value <= 0) {
    return
  }
  currentTemplate.rooms[roomIndex].value -= 1
  event.target.nextElementSibling.innerHTML = currentTemplate.rooms[roomIndex].value
}
const incrementRoom = (event, roomIndex) => {
  currentTemplate.rooms[roomIndex].value += 1
  event.target.previousElementSibling.innerHTML = currentTemplate.rooms[roomIndex].value
}
const roomsTemplate = (item) => {
  return `
    <div class="calculator-modal__template rooms">
      <h2 class="calculator-modal__template-title">${ item.title }</h2>
      <p class="calculator-modal__template-text text">${ item.text }</p>
      <div class="calculator-modal__template-rooms">
        ${ item.rooms.map((room, index) => {
          return `
            <div class="calculator-modal__template-room">
              <div class="calculator-modal__template-room__name">${ room.name }</div>
              <div class="calculator-modal__template-counter">
                <button onclick="decrementRoom(event, ${ index })" class="calculator-modal__template-minus" type="button">-</button>
                <div class="calculator-modal__template-room-value">${ room.value }</div>
                <button onclick="incrementRoom(event, ${ index })" class="calculator-modal__template-plus" type="button">+</button>
              </div>
            </div>
          `
  }).join('') }
      </div>
    </div>
  `
}

// -------- RANGE ----------

const changeInputRange = (event) => {
  const rangeInput = document.querySelector('.calculator-modal__range input')
  rangeInput.value = event.target.value
  currentTemplate.rangeValue = event.target.value
}
const changeRange = (event) => {
  const input = document.querySelector('.calculator-modal__range-value')
  input.value = event.target.value
  currentTemplate.rangeValue = event.target.value
}
const rangeTemplate = (item) => {
  return `
    <div class="calculator-modal__template range">
      <h2 class="calculator-modal__template-title">${ item.title }</h2>
      <p class="calculator-modal__template-text text">${ item.text }</p>
      <div class="calculator-modal__range-wrapper">
        <div class="input-group">
          <input
            type="text"
            class="calculator-modal__range-value input"
            value="${ item.rangeValue }"
            pattern="[0-9]+"
            max="200"
            onchange="changeInputRange(event)"
          >
          <span class="calculator-modal__label">m²</span>
        </div>
        <div class="calculator-modal__range">
          <input 
            type="range" 
            value="${ item.rangeValue }"
            min="10" 
            max="200" 
            onchange="changeRange(event)"
          >
          <div class="calculator-modal__range-splitter left"></div>
          <div class="calculator-modal__range-splitter center"></div>
          <div class="calculator-modal__range-splitter right"></div>
          <div class="calculator-modal__range-values">
            <div class="calculator-modal__range-value">10</div>
            <div class="calculator-modal__range-value">100</div>
            <div class="calculator-modal__range-value">200</div>
          </div>
        </div>
      </div>
    </div>
  `
}

// -------- FORM ----------

const removeBrFromText = (text) => {
  return text.replace(/\<br\>/g, '')
}
const setFunctions = (index, price, quantity, text) => {
  if (index === 0) {
    securityFunctions += price
    securityFunctionsText.push(`${text} ${quantity}шт.`)
  } else {
    comfortFunctions += price
    comfortFunctionsText.push(`${text} ${quantity}шт.`)
  }
}
const calculate = () => {
  selectedSpace = calculatorSections[0].variants.find(spot => spot.selected)
  const selectedSpaceType = selectedSpace.label
  const selectedRooms = calculatorSections[3].rooms
  const flatSquare = calculatorSections[4].rangeValue
  selectedFunctions = [calculatorSections[1], calculatorSections[2]].map((section, index) => {
    return section.variants.map(variant => {
      if (variant.selected) {
        if (variant.roomType?.length) {
          const rooms = selectedRooms.filter(room => variant.roomType.includes(room.label))
          let quantity = 0
          rooms.forEach(room => {
            quantity += room.value
          })
          quantity = quantity !== 0 ? quantity : 1
          let price = quantity * variant.price[selectedSpaceType]
          if (flatSquare >= 80 && variant.label === 'controlOfLighting') {
            price += 300
          }
          setFunctions(index, price, quantity, variant.text)
          return {
            text: removeBrFromText(variant.text),
            label: variant.label,
            quantity,
            price
          }
        }
        let price = variant.price[selectedSpaceType]
        if (selectedSpaceType === 'office' && flatSquare >= 100 && variant.label === 'voiceAssistant') {
          price = price * 2
        }
        setFunctions(index, price, 1, variant.text)
        return {
          text: removeBrFromText(variant.text),
          label: variant.label,
          quantity: 1,
          price
        }
      }
      return null
    }).filter(item => item !== null)
  })
  totalPrice = 700 + securityFunctions + comfortFunctions
}
const formTemplate = () => {
  calculate()
  return `
   <div class="calculator-modal_final">
      <div class="calculator-modal_final-title">Готово! Орієнтована вартість вашого розумного будинку:</div>
      <div class="calculator-modal_final-dropdown">
        <div class="calculator-modal_final-dropdown-header">
          <div class="calculator-modal_final-dropdown-left">
            <div class="calculator-modal_final-dropdown-title total">~ $${totalPrice}</div>
            <div class="calculator-modal_final-dropdown-icon">
              <img src="../assets/gray-information.svg" alt="Icon">
              <div class="calculator-modal_final-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="5" viewBox="0 0 13 5" fill="none">
                  <path d="M12.5 5L7.95308 1.08768C7.2209 0.457695 6.1431 0.440996 5.39176 1.048L0.5 5L12.5 5Z" fill="#2E3038"/>
                </svg>
                Ціна розрахована на основі необхідного мінімуму для обраних функцій, 
                типу та кількості кімнат. Наприклад, якщо у будинку одна ванна кімната 
                та одна кухня, системі антипотопу у базі необхідно 2 датчика води 
                (по одному у кожну з кімнат).
              </div>
            </div>
          </div>
          <div class="calculator-modal_final-dropdown-right">
            <span>Детальні розрахунки</span>
            <img src="../assets/min-white-arrow-right.svg" alt="Arrow icon">
          </div>
        </div>
        <div class="calculator-modal_final-dropdown-body">
  
          <div class="calculator-modal_final-dropdown-item">
            <div class="calculator-modal_final-dropdown-item-wrapper">
              <div class="calculator-modal_final-dropdown-item-title">Smart Hub</div>
              <div class="calculator-modal_final-dropdown-item-text text">Пристрій, що буде керувати усіма системами та датчиками.</div>
            </div>
            <div class="calculator-modal_final-dropdown-item-value">$220</div>
          </div>
          <div class="calculator-modal_final-dropdown-item">
            <div class="calculator-modal_final-dropdown-item-wrapper">
              <div class="calculator-modal_final-dropdown-item-title">Безпека та захист</div>
              <div class="calculator-modal_final-dropdown-item-text text">${securityFunctionsText.map(text => text).join(' ')}</div>
            </div>
            <div class="calculator-modal_final-dropdown-item-value">$${securityFunctions}</div>
          </div>
          <div class="calculator-modal_final-dropdown-item">
            <div class="calculator-modal_final-dropdown-item-wrapper">
              <div class="calculator-modal_final-dropdown-item-title">Комфорт та продуктивність</div>
              <div class="calculator-modal_final-dropdown-item-text text">${comfortFunctionsText.map(text => text).join(' ,')}</div>
            </div>
            <div class="calculator-modal_final-dropdown-item-value">$${comfortFunctions}</div>
          </div>
          <div class="calculator-modal_final-dropdown-item">
            <div class="calculator-modal_final-dropdown-item-wrapper">
              <div class="calculator-modal_final-dropdown-item-title">Проектування</div>
              <div class="calculator-modal_final-dropdown-item-text text">Ми узгодимо з вами функції та бюджет і спроектуємо систему та
                розміщення вузлів розумного будинку. </div>
            </div>
            <div class="calculator-modal_final-dropdown-item-value">$110</div>
          </div>
          <div class="calculator-modal_final-dropdown-item">
            <div class="calculator-modal_final-dropdown-item-wrapper">
              <div class="calculator-modal_final-dropdown-item-title">Монтаж та налаштування</div>
              <div class="calculator-modal_final-dropdown-item-text text">Після схвалення проекту розумного будинку ми встановимо все необхідне
                обладнання та програмне забезпечення, а також надамо вам детальні інструкції щодо його використання. Вам залишається займатися
                своїми справами, поки розумний будинок виконує все за вас!</div>
            </div>
            <div class="calculator-modal_final-dropdown-item-value">$290-560</div>
          </div>
  
        </div>
      </div>
      <p class="calculator-modal_final-text text">Вище наведена лише орієнтована вартість. Вона залежить у першу
        чергу від виробників пристроїв, бажаних сценаріїв автоматизації, а також складності встановлення
        обладнання. Ми можемо зменшувати вказану суму, адаптуючи її під ваші потреби та можливості, для цього
        достатньо лише зв'язатися з нами!</p>
  
      <form class="calculator-modal_final-form">
        <div class="calculator-modal_final-form-title">Залиште свій контакт, щоб ми зв’язались з вами та обумовили усі деталі вашого розумного будинку</div>
        <div class="calculator-modal_final-form-group input-group">
          <label for="name" class="label">Імʼя*</label>
          <input
            id="name"
            name="Iмʼя"
            type="text"
            class="input"
            placeholder="Введіть ваше імʼя"
            required
          >
        </div>
        <div class="calculator-modal_final-form-group input-group">
          <label for="phone" class="label">Телефон*</label>
          <input
            class="input"
            id="phone"
            name="Телефон"
            value="+380"
            placeholder="+380XXXXXXXXX"
            type="tel"
            maxlength="13"
            pattern="^\\+380[0-9]{9}$"
            title="Введіть данні в форматі +380XXXXXXXXX"
            required
          >
        </div>
        <div class="calculator-modal_final-form-group input-group">
          <label for="email" class="label">Email</label>
          <input
            class="input"
            id="email"
            name="Email"
            type="email"
            placeholder="Введіть ваш email"
          >
        </div>
        <button class="calculator-modal_final-form-submit button blue" type="submit">Звʼяжіться зі мною</button>
      </form>
    </div>
  `
}
const finalStepSetup = () => {
  calculatorModalBody.innerHTML = formTemplate()
  document.querySelector('.calculator-modal__card').classList.add('final-step')
  document.querySelector('.calculator-modal_final-dropdown-header').addEventListener('click', () => {
    document.querySelector('.calculator-modal_final-dropdown').classList.toggle('active')
  })
  document.querySelector('.calculator-modal_final-form').addEventListener('submit', async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const calculatorFunctions = [...selectedFunctions[0], ...selectedFunctions[1]]
    const rooms = calculatorSections[3].rooms
    formData.append('Тип приміщення:', selectedSpace.text)
    formData.append('Приблизна вартiсть:', `$${totalPrice}`)
    formData.append('Функції безпеки вартiсть:', `$${securityFunctions}`)
    formData.append('Функції комфорту вартiсть:', `$${comfortFunctions}`)
    formData.append('Функції', ' ')
    calculatorFunctions.map(item => {
      formData.append(item.text, item.quantity)
    })
    formData.append('Кімнати', ' ')
    rooms.map(room => {
      formData.append(removeBrFromText(room.name), room.value)
    })
    try {
      await fetch('https://formspree.io/f/mvojazwd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      event.target.reset()
      document.querySelector('.confirm-modal__backdrop').classList.add('visible')
    } catch (e) {
      console.log(e)
    }
  })
}

const renderStep = () => {
  let template
  currentTemplate = calculatorSections[currentStep]

  if (currentStep >= 5) {
    finalStepSetup()
    return
  }

  switch (currentTemplate.sectionType) {
    case 'choose':
      template = chooseTemplate(currentTemplate)
      break
    case 'range':
      template = rangeTemplate(currentTemplate)
      break
    case 'rooms':
      template = roomsTemplate(currentTemplate)
      break
  }

  currentStep === 0 ? prevButton.classList.add('disabled') : prevButton.classList.remove('disabled')
  calculatorModalBody.innerHTML = template
}

// -------- NavButtons ----------

nextButton.addEventListener('click', () => {
  if (currentTemplate.sectionType === 'choose' && !currentTemplate.variants.find(item => item.selected === true)) {
    return
  }
  calculatorSections[currentStep] = currentTemplate
  currentStep++
  currentStep < 5 ? document.querySelector(`.calculator-modal__step.step_${currentStep + 1}`).classList.add('active') : ''
  renderStep()
})
prevButton.addEventListener('click', () => {
  currentStep < 5 ? document.querySelector(`.calculator-modal__step.step_${currentStep + 1}`).classList.remove('active') : ''
  currentStep--
  renderStep()
})

// -------- Open/Close Modal ----------

document.querySelector('.functions-page__button.calculator').addEventListener('click', () => {
  calculatorModalBackdrop.classList.toggle('visible')
  document.body.classList.toggle('overflow-hidden')
})
document.querySelector('.calculator-modal__close').addEventListener('click', () => {
  calculatorModalBackdrop.classList.toggle('visible')
  document.body.classList.toggle('overflow-hidden')
})

renderStep()