const dropdownList = document.querySelector('.security-feature .functions-page__feature-list')

const securityFeatureDropdowns = [
  {
    dropTitle: 'Захист від вторгнення',
    dropIcon: '../assets/white-balaclava.svg',
    dropText: 'Комплексне рішення, що містить у собі багато варіантів оснащення. Завдяки системі захисту від вторгнення' +
      ' ви маєте найбільший спектр варіантів захисту від зловмисників та протидії їм – від звукової тривоги до ' +
      'оперативного виклику служби охорони та відеофіксації правопорушників.',
    scenarios: [
      {
        scenarioTitle: 'Стороння активність на ділянці',
        isRedIcon: true,
        tags: [
          {
            icon: '../assets/blue-light.svg',
            text: 'Освітлення території'
          },
          {
            icon: '../assets/blue-camera.svg',
            text: 'Фото та відеофіксація'
          },
          {
            icon: '../assets/blue-iphone.svg',
            text: 'Повідомлення на ваш телефон'
          }
        ]
      },
      {
        scenarioTitle: 'Спроба втручання в охоронну систему',
        isRedIcon: true,
        tags: [
          {
            icon: '../assets/blue-multiroom.svg',
            text: 'Сирена'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Фото та відеофіксація'
          },
          {
            icon: '../assets/blue-iphone.svg',
            text: 'Повідомлення на ваш телефон'
          }
        ]
      },
      {
        scenarioTitle: 'Розбите скло',
        isRedIcon: true,
        tags: [
          {
            icon: '../assets/blue-alarm.svg',
            text: 'Виклик служби охорони'
          },
          {
            icon: '../assets/blue-multiroom.svg',
            text: 'Сирена'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Освітлення території та будинку'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Фото та відеофіксація'
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
    dropTitle: 'Імітація присутності',
    dropIcon: '../assets/white-user.svg',
    dropText: 'Важливий елемент розумного будинку, який дозволяє створити враження, що хтось знаходиться вдома, навіть ' +
      'коли це не так, відволікаючи потенційних зловмисників. ',
    scenarios: [
      {
        scenarioTitle: 'Датчик руху спрацьовує на ділянці входу до будинку',
        isRedIcon: true,
        tags: [
          {
            icon: '../assets/blue-multiroom.svg',
            text: 'Відтворення звуків'
          },
          {
            icon: '../assets/blue-microphone.svg',
            text: 'Відтворення голосових повідомлень'
          },
          {
            icon: '../assets/blue-camera.svg',
            text: 'Фото та відеофіксація'
          },
          {
            icon: '../assets/blue-iphone.svg',
            text: 'Повідомлення на ваш телефон'
          }
        ]
      },
      {
        scenarioTitle: 'Захід сонця за відсутності власника',
        isRedIcon: true,
        tags: [
          {
            icon: '../assets/blue-blinds.svg',
            text: 'Закриття ролетів'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Зміна освітлення'
          },
          {
            icon: '../assets/blue-multiroom.svg',
            text: 'Відтворення звуків'
          }
        ]
      }
    ]
  },
  {
    dropTitle: 'Інтеграція зі службою охорони',
    dropIcon: '../assets/white-shield.svg',
    dropText: 'Дозволяє створити високоефективну систему безпеки та оперативно реагувати на можливі загрози. Включає в ' +
      'себе взаємодію між розумною системою та професійною охоронною службою.',
    scenarios: [
      {
        scenarioTitle: 'Вторгнення в дім',
        isRedIcon: true,
        tags: [
          {
            icon: '../assets/blue-alarm.svg',
            text: 'Виклик служби охорони'
          },
          {
            icon: '../assets/blue-multiroom.svg',
            text: 'Сирена'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Освітлення території та будинку'
          },
          {
            icon: '../assets/blue-camera.svg',
            text: 'Фото та відеофіксація'
          },
          {
            icon: '../assets/blue-iphone.svg',
            text: 'Повідомлення на ваш телефон'
          }
        ]
      },
      {
        scenarioTitle: 'Стороння активність на ділянці',
        isRedIcon: true,
        tags: [
          {
            icon: '../assets/blue-alarm.svg',
            text: 'Виклик служби охорони'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Освітлення території та будинку'
          },
          {
            icon: '../assets/blue-camera.svg',
            text: 'Фото та відеофіксація'
          },
          {
            icon: '../assets/blue-iphone.svg',
            text: 'Повідомлення на ваш телефон'
          }
        ]
      },
      {
        scenarioTitle: 'Розбите скло',
        isRedIcon: true,
        tags: [
          {
            icon: '../assets/blue-alarm.svg',
            text: 'Виклик служби охорони'
          },
          {
            icon: '../assets/blue-multiroom.svg',
            text: 'Сирена'
          },
          {
            icon: '../assets/blue-light.svg',
            text: 'Освітлення території та будинку'
          },
          {
            icon: '../assets/blue-camera.svg',
            text: 'Фото та відеофіксація'
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
    dropTitle: 'Протипожежна система',
    dropIcon: '../assets/white-fire.svg',
    dropText: 'Забезпечує надійний захист від можливого виникнення пожежі шляхом раннього виявлення, сповіщення та ' +
      'вжиття необхідних заходів для зменшення ризику.',
    scenarios: [
      {
        scenarioTitle: 'Виявлення можливої пожежі',
        isRedIcon: true,
        tags: [
          {
            icon: '../assets/blue-sensor.svg',
            text: 'Активація датчику пожежогасіння в зоні виявлення'
          },
          {
            icon: '../assets/blue-multiroom.svg',
            text: 'Сирена'
          },
          {
            icon: '../assets/blue-alarm.svg',
            text: 'Виклик пожежної безпеки'
          },
          {
            icon: '../assets/blue-bolt.svg',
            text: 'Вимкнення усіх електроприладів'
          }
        ]
      },
      {
        scenarioTitle: 'Спрацьовує детектор диму',
        isRedIcon: true,
        tags: [
          {
            icon: '../assets/blue-multiroom.svg',
            text: 'Сирена'
          },
          {
            icon: '../assets/blue-alarm.svg',
            text: 'Виклик пожежної безпеки'
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
    dropTitle: 'Антипотоп система',
    dropIcon: '../assets/white-drop.svg',
    dropText: 'Забезпечує захист від можливості затоплення, оперативно виявляючи надмірну вологість та вживаючи ' +
      'відповідні заходи для запобігання затоплення та його наслідків.',
    scenarios: [
      {
        scenarioTitle: 'Виявлення затоплення або підвищеної вологості',
        isRedIcon: true,
        tags: [
          {
            icon: '../assets/blue-drop.svg',
            text: 'Відключення водопостачання'
          },
          {
            icon: '../assets/blue-alarm.svg',
            text: 'Виклик служби обслуговування'
          },
          {
            icon: '../assets/blue-iphone.svg',
            text: 'Повідомлення на ваш телефон'
          }
        ]
      },
      {
        scenarioTitle: 'Виявлення підвищенного тиску в водопостачанні',
        isRedIcon: true,
        tags: [
          {
            icon: '../assets/blue-drop.svg',
            text: 'Відключення водопостачання'
          },
          {
            icon: '../assets/blue-iphone.svg',
            text: 'Повідомлення на ваш телефон'
          }
        ]
      },
      {
        scenarioTitle: 'Затоплення у підвалі',
        isRedIcon: true,
        tags: [
          {
            icon: '../assets/blue-drop.svg',
            text: 'Відключення водопостачання'
          },
          {
            icon: '../assets/blue-active-light.svg',
            text: 'Активація насосів'
          },
          {
            icon: '../assets/blue-alarm.svg',
            text: 'Виклик служби обслуговування'
          },
          {
            icon: '../assets/blue-iphone.svg',
            text: 'Повідомлення на ваш телефон'
          }
        ]
      }
    ]
  },
]

securityFeatureDropdowns.map((item, index) => {
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
              <img src="../assets/gray-information.svg" alt="Inform Icon">
            </div>
          </div>
        </div>
      </div>
  `

  dropdownList.innerHTML += template
})

openModalHandler('.button.consultation', '.consultation-modal__backdrop')
dropdownSetup('.security-feature')