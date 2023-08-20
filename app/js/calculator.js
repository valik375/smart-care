let calculatorSections = [
  {
    sectionType: 'choose',
    title: 'Який <span>тип приміщення</span> потребує системи розумного будинку?',
    text: 'Це допоможе нам підібрати рішення відповідно саме вашому приміщенню.',
    variants: [
      {
        text: 'Квартира',
        label: 'Apartment',
        icon: '../assets/white-flat.svg',
        value: false
      },
      {
        text: 'Приватний будинок',
        label: 'PrivateHouse',
        icon: '../assets/white-house.svg',
        value: false
      },
      {
        text: 'Офіс',
        label: 'Office',
        icon: '../assets/white-case.svg',
        value: false
      },
      {
        text: 'Інше',
        label: 'Other',
        icon: '../assets/white-three-dots.svg',
        value: false
      },
    ]
  },
  {
    sectionType: 'choose',
    title: 'Які <span>функції безпеки</span> повинні бути у вашому розумному будинку?',
    text: 'Оберіть необхідні функції безпеки. Кількість необмежена.',
    subtext: 'Не знайшли потрібної функції? Вкажіть її при телефонній розмові або переписці з нами та ми обовʼязково додамо її для вас.',
    variants: [
      {
        text: 'Захист від <br> вторгнення',
        label: 'ProtectionAgainstIntrusion',
        icon: '../assets/white-balaclava.svg',
        value: false
      },
      {
        text: 'Система <br> відеоспостереження',
        label: 'VideoSurveillanceSystem',
        icon: '../assets/white-camera.svg',
        value: false
      },
      {
        text: 'Імітація <br> присутності',
        label: 'ImitationOfPresence',
        icon: '../assets/white-user.svg',
        value: false
      },
      {
        text: 'Інтеграція зі <br> службою охорони',
        label: 'IntegrationWithTheSecurityService',
        icon: '../assets/white-shield.svg',
        value: false
      },
      {
        text: 'Розумні замки',
        label: 'SmartLocks',
        icon: '../assets/white-lock.svg',
        value: false
      },
      {
        text: 'Світлова та <br> звукова сирена',
        label: 'LightAndSoundSiren',
        icon: '../assets/white-alert.svg',
        value: false
      },
      {
        text: 'Протипожежна <br> система',
        label: 'FireProtectionSystem',
        icon: '../assets/white-fire.svg',
        value: false
      },
      {
        text: 'Антипотоп система',
        label: 'AntiFloodSystem',
        icon: '../assets/white-drop.svg',
        value: false
      },
      {
        text: 'Захищена Wi-Fi <br> мережа',
        label: 'SecureWiFiNetwork',
        icon: '../assets/white-wifi.svg',
        value: false
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
        text: 'Контроль <br> освітлення',
        label: 'ControlOfLighting',
        icon: '../assets/white-light.svg',
        value: false
      },
      {
        text: 'Клімат-контроль',
        label: 'ClimateControl',
        icon: '../assets/white-temperature.svg',
        value: false
      },
      {
        text: 'Автоматичні двері <br> та ролети',
        label: 'AutomaticDoorsAndRollerShutters',
        icon: '../assets/white-blinds.svg',
        value: false
      },
      {
        text: 'Автоматизація <br> ветниляції',
        label: 'AutomationOVetting',
        icon: '../assets/white-wentilation.svg',
        value: false
      },
      {
        text: 'Керування системами <br> опалення',
        label: 'ManagementOfHeatingSystems',
        icon: '../assets/white-heating.svg',
        value: false
      },
      {
        text: 'Голосовий <br> ассистент',
        label: 'VoiceAssistant',
        icon: '../assets/white-micro.svg',
        value: false
      },
      {
        text: 'Розумний <br> прибиральник',
        label: 'SmartCleaner',
        icon: '../assets/white-robot.svg',
        value: false
      },
      {
        text: 'Економія <br> комунальних витрат',
        label: 'SavingUtilityCosts',
        icon: '../assets/white-dollar.svg',
        value: false
      }
    ]
  },
  {
    sectionType: 'range',
    title: 'Яка площина <span>вашого</span> приміщення?',
    text: 'Від площини приміщення залежить кількість та тип пристроїв системи розумного будинку.',
    rangeValue: 40,
    label: 'SizeOfFlat'
  },
  {
    sectionType: 'rooms',
    title: 'Які <span>кімнати</span> потребують системи розумного будинку?',
    text: 'Оберіть тип кімнат та їх кількість. Завдяки цьому ми підрахуємо точну вартість саме для вашого випадку.',
    rooms: [
      {
        id: 0,
        name: 'Кухня',
        label: 'Kitchen',
        value: 1
      },
      {
        id: 1,
        name: 'Санвузол',
        label: 'Bathroom',
        value: 1
      },
      {
        id: 2,
        name: 'Вітальня/коридор/лоджія',
        label: 'LivingRoom_Corridor_Loggia',
        value: 1
      },
      {
        id: 3,
        name: 'Спальня',
        label: 'Bedroom',
        value: 1
      },
      {
        id: 4,
        name: 'Нежилі, технічні <br> приміщення тощо',
        label: 'NonResidential_TechnicalPremises_Etc',
        value: 1
      },
    ]
  }
]
let currentStep = 0
let currentTemplate

const calculatorModalBackdrop = document.querySelector('.calculator-modal__backdrop')
document.querySelector('.functions-page__button.calculator').addEventListener('click', () => {
  calculatorModalBackdrop.classList.toggle('visible')
})
document.querySelector('.calculator-modal__close').addEventListener('click', () => {
  calculatorModalBackdrop.classList.toggle('visible')
})


const calculatorModalBody = document.querySelector('.calculator-modal__body')
const nextButton = document.querySelector('.calculator-modal__next')
const prevButton = document.querySelector('.calculator-modal__back')

// -------- CHOOSE ----------

const chooseVariant = (event, index) => {
  if (currentStep === 0) {
    chooseFlatHandler(event, index)
  } else {
    chooseHandler(event, index)
  }
}
const chooseFlatHandler = (event, index) => {
  const variantSelect = document.querySelectorAll('.calculator-modal__template-choose-item')
  variantSelect.forEach((variant, variantIndex) => {
    variantIndex === index ? variant.classList.add('selected') : variant.classList.remove('selected')
  })
  currentTemplate.variants.map((variant, variantIndex) => {
    variant.value = variantIndex === index
  })
}
const chooseHandler = (event, index) => {
  const variantSelect = document.querySelectorAll('.calculator-modal__template-choose-item')[index]
  variantSelect.classList.toggle('selected')
  currentTemplate.variants[index].value = !currentTemplate.variants[index].value
}
const chooseTemplate = (item) => {
  return `
    <div class="calculator-modal__template choose">
      <h2 class="calculator-modal__template-title">${ item.title }</h2>
      <p class="calculator-modal__template-text text">${ item.text }</p>
      <div class="calculator-modal__template-choose">
      ${ item.variants.map((variant, variantIndex) => {
        return `
          <div onclick="chooseVariant(event, ${variantIndex})" class="calculator-modal__template-choose-item ${ variant.value ? 'selected' : '' }">
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
            max="400"
            onchange="changeInputRange(event)"
          >
          <span class="calculator-modal__label">m²</span>
        </div>
        <div class="calculator-modal__range">
          <input 
            type="range" 
            value="${ item.rangeValue }"
            min="10" 
            max="400" 
            onchange="changeRange(event)"
          >
          <div class="calculator-modal__range-splitter left"></div>
          <div class="calculator-modal__range-splitter center"></div>
          <div class="calculator-modal__range-splitter right"></div>
          <div class="calculator-modal__range-values">
            <div class="calculator-modal__range-value">10</div>
            <div class="calculator-modal__range-value">100</div>
            <div class="calculator-modal__range-value">200</div>
            <div class="calculator-modal__range-value">300</div>
            <div class="calculator-modal__range-value">400+</div>
          </div>
        </div>
      </div>
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

// -------- FORM ----------

const formTemplate = () => {
  return `
   <div class="calculator-modal_final">
      <div class="calculator-modal_final-title">Готово! Орієнтована вартість вашого розумного будинку:</div>
      <div class="calculator-modal_final-dropdown">
        <div class="calculator-modal_final-dropdown-header">
          <div class="calculator-modal_final-dropdown-left">
            <div class="calculator-modal_final-dropdown-title">~ $1970</div>
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
              <div class="calculator-modal_final-dropdown-item-text text">Датчик розбиття скла 3 шт, датчик руху 3 шт, датчик відчинення
                1 шт, звукова сирена 1 шт, тривожна кнопка 1шт, датчики вогню 2 шт, датчики води 2 шт.</div>
            </div>
            <div class="calculator-modal_final-dropdown-item-value">$650</div>
          </div>
          <div class="calculator-modal_final-dropdown-item">
            <div class="calculator-modal_final-dropdown-item-wrapper">
              <div class="calculator-modal_final-dropdown-item-title">Комфорт та продуктивність</div>
              <div class="calculator-modal_final-dropdown-item-text text">Електронне реле освітлення 4 шт, датчик освітленості 4 шт,
                електронні ролети 1 шт, електронний термостат 2 шт.</div>
            </div>
            <div class="calculator-modal_final-dropdown-item-value">$800</div>
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
            name="name"
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
            name="phone"
            value="+380"
            placeholder="+380XXXXXXXXX"
            type="tel"
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
            name="email"
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
    calculatorSections.map(data => {
      if (data.sectionType === 'choose') {
        return data.variants.map(variant => {
          formData.append(variant.label, variant.value)
        })
      }
      if (data.sectionType === 'range') {
        return formData.append(data.label, data.rangeValue)
      }
      if (data.sectionType === 'rooms') {
        return data.rooms.map(room => {
          formData.append(room.label, room.value)
        })
      }
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

nextButton.addEventListener('click', () => {
  if (currentTemplate.sectionType === 'choose' && !currentTemplate.variants.find(item => item.value === true)) {
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

renderStep()