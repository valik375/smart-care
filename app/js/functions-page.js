const dropdownList = document.querySelector('.functions-page__feature-list')

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
      }
    ]
  }
]

securityFeatureDropdowns.map((item, index) => {
  const template = `
    <div class="functions-page__item dropdown-item ${ index === 0 ? 'active' : '' }">
        <div class="dropdown-item__head">
          <div class="dropdown-item__value">
            <img src="${ item.dropIcon }" alt="Icon">
          </div>
          <div class="dropdown-item__title">${ item.dropTitle }</div>
          <div class="dropdown-item__toggle">
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="dropdown-item__body">
          <p class="functions-page__dropdown-text text">${ item.dropText }</p>
          <button class="functions-page__dropdown-button button blue consultation">Консультація</button>

          <div class="functions-page__scenario">
            <div class="functions-page__scenario-title">Сценарії</div>
            <div class="functions-page__scenario-list">
            
              ${ item.scenarios.map(scenario => {
                return `
                  <div class="functions-page__scenario-item">
                    <div class="functions-page__scenario-item-head">
                      <img class="functions-page__scenario-item-icon" src="${ scenario.isRedIcon ? '../assets/blue-house.svg' : '../assets/blue-house.svg' }" alt="">
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














dropdownSetup('.security-feature')