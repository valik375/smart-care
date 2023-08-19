const dropdownList = document.querySelector('.comfort-feature .functions-page__feature-list')

const comfortFeatureDropdowns = [
  {
    dropTitle: 'Контроль освітлення',
    dropIcon: '../assets/white-light.svg',
    dropText: 'Не лише надає вам більше комфорту, але й забезпечує ефективну економію енергії, створюючи <br>' +
      ' оптимальне середовище для вашого життя.',
    scenarios: [
      {
        scenarioTitle: 'Ви лягаєте спати',
        isRedIcon: false,
        tags: [
          {
            icon: '../assets/blue-moon.svg',
            text: 'Дім переходить у режим “Ніч”'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Вимикається усе освітлення у будинку'
          }
        ]
      },
      {
        scenarioTitle: 'Ви хочете почитати книгу',
        isRedIcon: false,
        tags: [
          {
            icon: '../assets/blue-microphone.svg',
            text: 'Команда “Збільши яскравість освітлення”'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Яскравість освітлення збільшилася у кімнаті, в якій ви знаходитеся'
          }
        ]
      },
      {
        scenarioTitle: 'Ви знаходитеся на роботі і не впевнені, чи вимкнули світло вдома',
        isRedIcon: false,
        tags: [
          {
            icon: '../assets/blue-iphone.svg',
            text: 'Ви відкриваєте мобільний додаток вашого розумного будинку'
          },
          {
            icon: '../assets/blue-accept.svg',
            text: 'Перевіряєте стан засобів освітлення'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Вимикаєте світло'
          }
        ]
      }
    ]
  },
  {
    dropTitle: 'Клімат-контроль',
    dropIcon: '../assets/white-thermometer.svg',
    dropText: 'Дозволяє вам ефективно керувати температурою та вологістю в приміщеннях, забезпечуючи комфортне ' +
      'середовище та економію енергії.',
    scenarios: [
      {
        scenarioTitle: 'Ви лягаєте спати',
        isRedIcon: false,
        tags: [
          {
            icon: '../assets/blue-temperature.svg',
            text: 'Зниження температури до заданого рівня при вашому приближенні до будинку'
          },
          {
            icon: '../assets/blue-blinds.svg',
            text: 'Закриття ролетів'
          }
        ]
      },
      {
        scenarioTitle: 'Температура в будинку підвищилась до високого рівня',
        isRedIcon: false,
        tags: [
          {
            icon: '../assets/blue-blinds.svg',
            text: 'Закриття ролетів'
          },
          {
            icon: '../assets/blue-active-drop.svg',
            text: 'Підвищення рівня вологості повітря'
          }
        ]
      }
    ]
  },
  {
    dropTitle: 'Мультирум',
    dropIcon: '../assets/white-multiroom.svg',
    dropText: 'Дозволяє контролювати аудіо та відео відтворення у різних кімнатах одночасно, створюючи затишну ' +
      'атмосферу та комфорт у всьому будинку.',
    scenarios: [
      {
        scenarioTitle: 'Стороння активність на ділянці',
        isRedIcon: false,
        tags: [
          {
            icon: '../assets/blue-sound.svg',
            text: 'Активація “персонального тренера”, який озвучує таймери та дає поради під час тренування'
          },
          {
            icon: '../assets/blue-multiroom.svg',
            text: 'Відтворення динамічної музики в тренажерній зоні'
          },
          {
            icon: '../assets/blue-temperature.svg',
            text: 'Встановлення температури до комфортного рівня'
          }
        ]
      },
      {
        scenarioTitle: 'Спроба втручання в охоронну систему',
        isRedIcon: false,
        tags: [
          {
            icon: '../assets/blue-multiroom.svg',
            text: 'Відтворення приємної музики всіма зонами мультируму'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Приглушення світла у будинку'
          },
          {
            icon: '../assets/blue-active-light.svg',
            text: 'Активація масажних вібраційних пристроїв'
          }
        ]
      },
      {
        scenarioTitle: 'Розбите скло',
        isRedIcon: false,
        tags: [
          {
            icon: '../assets/blue-tv.svg',
            text: 'Запуск бажаного фільму чи онлайн-кінотеатру'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Приглушення світла у будинку'
          },
          {
            icon: '../assets/blue-temperature.svg',
            text: 'Зміна температури до заданого рівня в зоні перегляду'
          }
        ]
      }
    ]
  },
  {
    dropTitle: 'Автоматизація вентиляції',
    dropIcon: '../assets/white-wentilation.svg',
    dropText: 'Дозволяє контролювати аудіо та відео відтворення у різних кімнатах одночасно, створюючи затишну ' +
      'атмосферу та комфорт у всьому будинку.',
    scenarios: [
      {
        scenarioTitle: 'Початок приготування їжі на кухні',
        isRedIcon: false,
        tags: [
          {
            icon: '../assets/blue-multiroom.svg',
            text: 'Відтворення бажаної музики'
          },
          {
            icon: '../assets/blue-ventilation.svg',
            text: 'Підвищення швидкості вентиляції в кухонній зоні'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Освітлення їдальні'
          }
        ]
      },
      {
        scenarioTitle: 'Виявлення підвищеної концентрації забруднень у повітрі',
        isRedIcon: false,
        tags: [
          {
            icon: '../assets/blue-ventilation.svg',
            text: 'Підвищення швидкості вентиляції в будинку'
          },
          {
            icon: '../assets/blue-iphone.svg',
            text: 'Повідомлення на ваш телефон'
          }
        ]
      }
    ]
  },
  {
    dropTitle: 'Керування опаленням',
    dropIcon: '../assets/white-heating.svg',
    dropText: 'Дозволяє автоматизувати та контролювати систему опалення для ефективного розподілу тепла в будинку. ' +
      'За допомогою цих сценаріїв можна налаштувати режими опалення залежно від вашого розкладу, присутності в' +
      ' будинку та особливостей кожної кімнати.',
    scenarios: [
      {
        scenarioTitle: 'Спрацьовує ранковий будильник',
        isRedIcon: false,
        tags: [
          {
            icon: '../assets/blue-temperature.svg',
            text: 'Поступове підвищення температури в спальні'
          },
          {
            icon: '../assets/blue-floor.svg',
            text: 'Активація теплої підлоги'
          },
          {
            icon: '../assets/blue-blinds.svg',
            text: 'Плавне підняття ролетів'
          },
          {
            icon: '../assets/blue-multiroom.svg',
            text: 'Відтворення бажаної музики'
          }
        ]
      },
      {
        scenarioTitle: 'Повернення додому',
        isRedIcon: false,
        tags: [
          {
            icon: '../assets/blue-temperature.svg',
            text: 'Підвищення температури до заданого рівня '
          },
          {
            icon: '../assets/blue-floor.svg',
            text: 'Активація теплої підлоги'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Освітлення будинку'
          },
          {
            icon: '../assets/blue-multiroom.svg',
            text: 'Відтворення бажаної музики'
          }
        ]
      },
      {
        scenarioTitle: 'Захід сонця або пониження температури взимку',
        isRedIcon: false,
        tags: [
          {
            icon: '../assets/blue-temperature.svg',
            text: 'Підвищення температури до заданого рівня'
          },
          {
            icon: '../assets/blue-active-fire.svg',
            text: 'Візуальний ефект відкритого каміна'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Приглушення світла в зоні відпочинку'
          }
        ]
      }
    ]
  }
]

comfortFeatureDropdowns.map((item, index) => {
  const template = `
    <div class="functions-page__item dropdown-item ${ index === 0 ? 'active' : '' }">
        <div class="dropdown-item__head">
          <div class="dropdown-item__value">
            <img src="${ item.dropIcon }" alt="Icon">
          </div>
          <div class="dropdown-item__title">${ item.dropTitle }</div>
          <button class="functions-page__dropdown-header-button button blue consultation">Консультація</button>
          <div class="dropdown-item__toggle">
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="dropdown-item__body">
          <p class="functions-page__dropdown-text text">${ item.dropText }</p>
          <button class="functions-page__dropdown-button button blue consultation">Консультація</button>

          <div class="functions-page__scenario">
            <div class="functions-page__scenario-title">Приклад сценарію</div>
            <div class="functions-page__scenario-list">
            
              ${ item.scenarios.map(scenario => {
                return `
                  <div class="functions-page__scenario-item">
                    <div class="functions-page__scenario-item-head">
                      <img class="functions-page__scenario-item-icon" src="${ scenario.isRedIcon ? '../assets/red-light.svg' : '../assets/green-light.svg' }" alt="">
                      <div class="functions-page__scenario-item-text text">${ scenario.scenarioTitle }</div>
                    </div>
                    <div class="functions-page__scenario-item-list">
                      ${ scenario.tags.map(tag => {
                        return `
                          <div class="functions-page__scenario-item-tag-wrapper">
                            <div class="functions-page__scenario-item-tag tag">
                              <img src="${ tag.icon }" alt="${ tag.icon }">
                              <span>${ tag.text }</span>
                            </div>
                            <img class="functions-page__scenario-item-tag-icon" src="../assets/gray-arrow-right.svg" alt="Gray Arrow Icon">
                          </div>
                        `
                      }).join('') }
                    </div>
    
                  </div>
                `
              }).join('') }
              
            </div>
            <div class="functions-page__scenario-info"> 
              <p class="text">Немає потрібного вам сценарію? Зробіть власний за допомогою мобільного додатку!</p>
              <div class="tooltip top">
                <img src="../assets/gray-information.svg" alt="Inform Icon">
                <div class="tooltip__wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="5" viewBox="0 0 12 5" fill="none">
                    <path d="M12 5L7.45308 1.08768C6.7209 0.457695 5.6431 0.440996 4.89176 1.048L-2.18557e-07 5L12 5Z" fill="#2E3038"/>
                  </svg>
                  Усі наші системи керуються з додатку за замовчуванням. 
                  Це не потребує додаткових затрат на встановлення.
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
  `

  dropdownList.innerHTML += template
})

openModalHandler('.button.consultation', '.consultation-modal__backdrop')
dropdownSetup('.comfort-feature')