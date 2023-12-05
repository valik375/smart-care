const serviceDetailsTemplate = document.querySelector('.service-details-template')

const template = {
  banner: {
    image: '../assets/security-function-2.png',
    icon: '../assets/white-fire.svg',
    title: 'Протипожежна система',
    text: 'Забезпечує надійний захист від можливого виникнення пожежі шляхом раннього виявлення, сповіщення та вжиття необхідних заходів для зменшення ризику.',
    price: '420',
  },
  benefits: [
    {
      id: 1,
      title: 'Захист',
      text: 'Протипожежна система в розумному будинку – це надійний страж безпеки, що оперативно реагує на виявлення пожежі, миттєво сигналізуючи та ініціюючи необхідні заходи.',
    },
    {
      id: 2,
      title: 'Економія та безпека',
      text: 'Забезпечуючи раннє виявлення можливих загроз та пожежний контроль, ця система допомагає уникнути серйозних матеріальних збитків та врятувати життя.',
    },
    {
      id: 3,
      title: 'Віддалене керування',
      text: 'Дозволяє вам віддалено моніторити стан безпеки, а також автоматизувати взаємодію з іншими елементами системи управління будинком.',
    },
  ],
  functions: {
    image: '../assets/wireless-system-image.png',
    title: 'Можливості протипожежної системи',
    text: 'Розумна протипожежна система подбає про вашу безпеку, сповістить про загрозу і автоматично усуне її.',
    dropdownList: [
      {
        title: 'Попередження пожежі',
        text: 'Датчики диму та вуглекислого газу заздалегідь повідомлять про потенційну небезпеку.',
      },
      {
        title: 'Попередження пожежі',
        text: 'Датчики диму та вуглекислого газу заздалегідь повідомлять про потенційну небезпеку.',
      },
      {
        title: 'Попередження пожежі',
        text: 'Датчики диму та вуглекислого газу заздалегідь повідомлять про потенційну небезпеку.',
      },
      {
        title: 'Попередження пожежі',
        text: 'Датчики диму та вуглекислого газу заздалегідь повідомлять про потенційну небезпеку.',
      },
    ]
  },
  equipment: [
    {
      image: 'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fbaseline_comfort_and_productivity_xl_a891c6cbd6%402.jpg&1691053624',
      title: 'Детектор пожежі',
      text: 'Бездротовий пожежний датчик тепла, диму та чадного газу.',
    },
    {
      image: 'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fbaseline_comfort_and_productivity_xl_a891c6cbd6%402.jpg&1691053624',
      title: 'Тривожна кнопка',
      text: 'Бездротова настінна кнопка для активації пожежної тривоги вручну.',
    },
    {
      image: 'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fbaseline_comfort_and_productivity_xl_a891c6cbd6%402.jpg&1691053624',
      title: 'Хаб',
      text: 'Централь з підтримкою бездротових пристроїв.',
    },
    {
      image: 'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fbaseline_comfort_and_productivity_xl_a891c6cbd6%402.jpg&1691053624',
      title: 'Система автогасіння',
      text: 'Автономний, автоматичний модуль порошкового полумʼягасіння.',
    }
  ],
  choose: {
    image: '../assets/wireless-system-image.png',
    title: 'Як правильно обрати протипожежну систему',
    text: 'Обираючи протипожежну систему для розумного будинку, визначте специфічні потреби та ризики вашого об\'єкта, ' +
      'враховуючи його розмір та призначення. Перевірте, чи система відповідає стандартам безпеки та має відповідні сертифікації, гарантуючи її надійність.',
  },
  automations: [
    {
      title: 'Трігер: Датчик ідентифікує ненавмисний спалах вогню',
      options: [
        {
          icon: '../assets/blue-bag.svg',
          name: 'Активація датчику пожежогасіння в зоні виявлення'
        },
        {
          icon: '../assets/blue-bag.svg',
          name: 'Сирена'
        },
        {
          icon: '../assets/blue-bag.svg',
          name: 'Виклик пожежної безпеки'
        },
        {
          icon: '../assets/blue-bag.svg',
          name: 'Вимкнення усіх електроприладів'
        }
      ]
    },
    {
      title: 'Трігер: Велика концентрація диму та вуглекислого газу у кімнаті',
      options: [
        {
          icon: '../assets/blue-bag.svg',
          name: 'Сирена'
        },
        {
          icon: '../assets/blue-bag.svg',
          name: 'Виклик пожежної безпеки'
        },
        {
          icon: '../assets/blue-bag.svg',
          name: 'Повідомлення на ваш телефон'
        }
      ]
    },
    {
      title: 'Трігер: Коротке замикання у електромережі',
      options: [
        {
          icon: '../assets/blue-bag.svg',
          name: 'Ізоляція ділянки замикання'
        },
        {
          icon: '../assets/blue-bag.svg',
          name: 'Знеструмлення приладів'
        },
        {
          icon: '../assets/blue-bag.svg',
          name: 'Повідомлення на ваш телефон'
        }
      ]
    }
  ],
}

const bannerTemplate = (template) => {
  const bannerTemplate = `
    <section class="banner">
      <div class="banner__container container">
        <div class="banner__wrapper">
          <div class="banner__badge">
            <div class="banner__badge-icon">
              <img src="../assets/white-dollar.svg" alt="Dollar Icon">
            </div>
            <div class="banner__text">Ціна під ключ Від ${template.price}$</div>
          </div>
          <h1 class="banner__title">${template.title}</h1>
          <p class="banner__subtitle text">${template.text}</p>
          <button class="banner__button button blue consultation">
            Замовити послугу
            <img src="../assets/white-arrow-right.svg" alt="Icon">
          </button>
        </div>
        <div class="banner__image">
          <img class="banner__image-bg" src="${template.image}" alt="Banner Image">
          <div class="banner__icon">
            <img src="${template.icon}" alt="Fire Icon">
          </div>
        </div>
      </div>
    </section>
  `
  return bannerTemplate
}
serviceDetailsTemplate.innerHTML += bannerTemplate(template.banner)

const benefitsTemplate = (template) => {
  const benefitsTemplate = `
    <section class="benefits">
      <div class="benefits__container container">
        <div class="benefits__list">
          ${template.map((benefit, index) => {
    return `
              <div class="benefits__item card">
                <div class="benefits__item-count">0${index + 1}</div>
                <div class="benefits__item-title">${benefit.title}</div>
                <div class="benefits__item-text text">${benefit.text}</div>
              </div>
            `
  }).join('')}
        </div>
      </div>
    </section>
  `
  return benefitsTemplate
}
serviceDetailsTemplate.innerHTML += benefitsTemplate(template.benefits)

const functionsTemplate = (template) => {
  const functionsTemplate = `
    <section class="functions navigation-section">
      <div class="functions__container container two-column-section">
  
        <div class="functions__left column-left">
          <div class="column-image">
            <img loading="lazy" src="${template.image}" alt="Function Image">
          </div>
        </div>
  
        <div class="functions__right column-right">
          <div class="functions__info">
            <div class="functions__title-wrapper section-title-wrapper">
              <h3 class="functions__subtitle section-subtitle">Функції</h3>
              <h2 class="functions__title section-title">${template.title}</h2>
            </div>
            <p class="functions__text text">${template.text}</p>
          </div>
          <div class="functions__image column-image">
            <img loading="lazy" src="${template.image}" alt="Card with wireless signal">
          </div>
  
          <div class="functions__dropdown-list dropdown-list">
            ${template.dropdownList.map((item, index) => {
              return `
                <div class="dropdown-item ${index === 0 ? 'active': ''}" >
                  <div class="dropdown-item__head">
                    <div class="dropdown-item__value">0${index + 1}</div>
                    <div class="dropdown-item__title">${item.title}</div>
                    <div class="dropdown-item__toggle">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div class="dropdown-item__body text">${item.text}</div>
                </div>
              `
            })}
            
          </div>
        </div>
  
      </div>
    </section>
  `
  return functionsTemplate
}
serviceDetailsTemplate.innerHTML += functionsTemplate(template.functions)
dropdownSetup('.service-details-template .functions')

const productUsageTemplate = () => {
  const productUsageTemplate = `
    <section class="products navigation-section" id="products">
      <div class="products__container container bg-lines">
        <div class="products__info">
          <div class="products__title-wrapper section-title-wrapper">
            <h3 class="products__subtitle section-subtitle">Продукти</h3>
            <h2 class="products__title section-title">
              Ми використовуємо продукти високої якості, перевіренні часом
            </h2>
          </div>
          <p class="products__text text">Усі компоненти протестовані та сертифіковані, що гарантує тривалу роботу системи.</p>
        </div>
        <div class="products__companys">
          <div class="products__companys-wrapper">
            <div class="products__item">
              <img src="../assets/gray-xiaomi-logo.svg" alt="xiaomi logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-samsung-logo.svg" alt="samsung logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-lg-logo.svg" alt="lg logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-tuya-logo.svg" alt="tuya logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-aqara-logo.svg" alt="aqara logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-ewelink-logo.svg" alt="ewelink logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-google-home-logo.svg" alt="google home logo">
            </div>
          </div>
          <div class="products__companys-wrapper">
            <div class="products__item">
              <img src="../assets/gray-xiaomi-logo.svg" alt="xiaomi logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-samsung-logo.svg" alt="samsung logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-lg-logo.svg" alt="lg logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-tuya-logo.svg" alt="tuya logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-aqara-logo.svg" alt="aqara logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-ewelink-logo.svg" alt="ewelink logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-google-home-logo.svg" alt="google home logo">
            </div>
          </div>
          <div class="products__companys-wrapper">
            <div class="products__item">
              <img src="../assets/gray-xiaomi-logo.svg" alt="xiaomi logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-samsung-logo.svg" alt="samsung logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-lg-logo.svg" alt="lg logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-tuya-logo.svg" alt="tuya logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-aqara-logo.svg" alt="aqara logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-ewelink-logo.svg" alt="ewelink logo">
            </div>
            <div class="products__item">
              <img src="../assets/gray-google-home-logo.svg" alt="google home logo">
            </div>
          </div>
        </div>
    
        <img loading="lazy" class="bg-lines__image desktop" src="../assets/products-bg-lines-desktop.png" alt="Background lines">
        <img loading="lazy" class="bg-lines__image mobile" src="../assets/products-bg-lines-mobile.png" alt="Background lines">
      </div>
    </section>
  `
  return productUsageTemplate
}
serviceDetailsTemplate.innerHTML += productUsageTemplate()

const equipmentTemplate = (template) => {
  const equipmentTemplate = `
    <section class="equipment">
      <div class="equipment__container container">
        <div class="equipment__info">
          <div class="equipment__title-wrapper section-title-wrapper">
            <h3 class="equipment__subtitle section-subtitle">Обладнання</h3>
            <h2 class="equipment__title section-title">З чого складається система пожежної безпеки</h2>
          </div>
          <p class="equipment__text text">Пристрої, що входять до системи пожежної безпеки. Їх перелік можна змінювати згідно потреб та бюджету.</p>
        </div>
        <div class="equipment__swiper-wrapper">
          <div class="equipment__swiper swiper">
            <div class="swiper-wrapper">
              ${template.map((item) => {
                return `
                  <div class="equipment__slide swiper-slide card">
                    <div class="equipment__slide-image">
                      <img src="${item.image}" alt="Product image">
                    </div>
                    <div class="equipment__slide-title">${item.title}</div>
                    <div class="equipment__slide-text text">${item.text}</div>
                    <button class="equipment__button button blue consultation">
                      <span>Встановити у мій дім</span>
                    </button>
                  </div>
                `
              }).join('')}
              
            </div>
          </div>
          <div class="equipment__swiper-button-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3498_13439)">
                <path d="M19 12.9998H7.14L10.77 17.3598C10.854 17.4609 10.9174 17.5776 10.9563 17.7032C10.9953 17.8288 11.0091 17.9608 10.997 18.0917C10.9726 18.3562 10.8442 18.6001 10.64 18.7698C10.4358 18.9395 10.1725 19.0212 9.90808 18.9968C9.64365 18.9724 9.39974 18.844 9.23 18.6398L4.23 12.6398C4.196 12.5918 4.166 12.5418 4.14 12.4898C4.14 12.4398 4.09 12.4098 4.07 12.3598C4.02467 12.2451 4.00094 12.1231 4 11.9998C4.00094 11.8765 4.02467 11.7545 4.07 11.6398C4.07 11.5898 4.12 11.5598 4.14 11.5098C4.1663 11.4577 4.19638 11.4075 4.23 11.3598L9.23 5.35981C9.31395 5.25855 9.41705 5.17485 9.5334 5.11349C9.64974 5.05214 9.77705 5.01435 9.90803 5.00227C10.039 4.99019 10.1711 5.00408 10.2967 5.04312C10.4223 5.08217 10.539 5.14561 10.64 5.22981C10.7414 5.31368 10.8252 5.41675 10.8866 5.5331C10.948 5.64945 10.9859 5.77678 10.998 5.9078C11.01 6.03881 10.9961 6.17092 10.957 6.29654C10.9179 6.42216 10.8543 6.53882 10.77 6.63981L7.14 10.9998H19C19.2652 10.9998 19.5196 11.1052 19.7071 11.2927C19.8946 11.4802 20 11.7346 20 11.9998C20 12.265 19.8946 12.5194 19.7071 12.7069C19.5196 12.8945 19.2652 12.9998 19 12.9998Z" fill="#E3E4E8"/>
              </g>
              <defs>
                  <clipPath id="clip0_3498_13439">
                  <rect width="24" height="24" fill="white"/>
                  </clipPath>
              </defs>
            </svg>
          </div>
          <div class="equipment__swiper-button-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3498_7960)">
                <path d="M5 12.9998H16.86L13.23 17.3598C13.146 17.4609 13.0826 17.5776 13.0437 17.7032C13.0047 17.8288 12.9909 17.9608 13.003 18.0917C13.0274 18.3562 13.1558 18.6001 13.36 18.7698C13.5642 18.9395 13.8275 19.0212 14.0919 18.9968C14.3563 18.9724 14.6003 18.844 14.77 18.6398L19.77 12.6398C19.804 12.5918 19.834 12.5418 19.86 12.4898C19.86 12.4398 19.91 12.4098 19.93 12.3598C19.9753 12.2451 19.9991 12.1231 20 11.9998C19.9991 11.8765 19.9753 11.7545 19.93 11.6398C19.93 11.5898 19.88 11.5598 19.86 11.5098C19.8337 11.4577 19.8036 11.4075 19.77 11.3598L14.77 5.35981C14.6861 5.25855 14.583 5.17485 14.4666 5.11349C14.3503 5.05214 14.2229 5.01435 14.092 5.00227C13.961 4.99019 13.8289 5.00408 13.7033 5.04312C13.5777 5.08217 13.461 5.14561 13.36 5.22981C13.2586 5.31368 13.1748 5.41675 13.1134 5.5331C13.052 5.64945 13.0141 5.77678 13.002 5.9078C12.99 6.03881 13.0039 6.17092 13.043 6.29654C13.0821 6.42216 13.1457 6.53882 13.23 6.63981L16.86 10.9998H5C4.73478 10.9998 4.48043 11.1052 4.29289 11.2927C4.10536 11.4802 4 11.7346 4 11.9998C4 12.265 4.10536 12.5194 4.29289 12.7069C4.48043 12.8945 4.73478 12.9998 5 12.9998Z" fill="#E3E4E8"/>
              </g>
              <defs>
                <clipPath id="clip0_3498_7960">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  `
  return equipmentTemplate
}
serviceDetailsTemplate.innerHTML += equipmentTemplate(template.equipment)
new Swiper('.equipment__swiper', {
  slidesPerView: 1.2,
  spaceBetween: 16,
  autoHeight: true,
  navigation: {
    prevEl: '.equipment__swiper-button-prev',
    nextEl: '.equipment__swiper-button-next',
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1160: {
      slidesPerView: 4,
    }
  }
})

const chooseTemplate = (choose) => {
  const chooseTemplate = `
    <section class="choose">
      <div class="choose__container container">
        <div class="choose__left">
          <div class="choose__title-wrapper section-title-wrapper">
            <h3 class="choose__subtitle section-subtitle">як обрати</h3>
            <h2 class="choose__subtitle section-title">${choose.title}</h2>
          </div>
          <p class="choose__text text">${choose.text}</p>
          <button class="choose__button button blue consultation" type="button">
            <span>Замовити консультацію</span>
            <img src="../assets/white-arrow-right.svg" alt="Arrow Icon">
          </button>
        </div>
        <div class="choose__right">
          <img src="${choose.image}" alt="Choose Image">
        </div>
      </div>
    </section>
  `
  return chooseTemplate
}
serviceDetailsTemplate.innerHTML += chooseTemplate(template.choose)

const automationsTemplate = (automations) => {
  const automationsTemplate = `
    <section class="automations">
      <div class="automations__container container">
        <div class="automations__title-wrapper section-title-wrapper">
          <h3 class="automations__subtitle section-subtitle">Автоматизація всіх процесів</h3>
          <h2 class="automations__title section-title">Налаштуйте власні сценарії</h2>
          <p class="automations__text text">Автоматизація розумного будинку дозволяє вам налаштувати 150+ індивідуальних сценаріїв, які 
          взаємодіють з будь-якими подіями відповідно до вашого бажання.</p>
        </div>
        <div class="automations__list">
          ${automations.map((automation) => {
    return `
              <div class="automations__item card">
                <div class="automations__item-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3360_72489)">
                      <path d="M11.2214 22C11.0986 21.9998 10.9772 21.9727 10.8652 21.9204C10.7532 21.8681 10.653 21.7919 10.5713 21.6966C10.4896 21.6014 10.4281 21.4893 10.3909 21.3677C10.3536 21.2461 10.3415 21.1177 10.3553 20.9909L11.0289 14.5455H5.87615C5.71722 14.5457 5.56123 14.501 5.42493 14.4161C5.28862 14.3311 5.17716 14.2092 5.10251 14.0634C5.02786 13.9176 4.99284 13.7534 5.00122 13.5885C5.00959 13.4236 5.06104 13.2641 5.15004 13.1273L12.0525 2.40009C12.1617 2.23221 12.3217 2.10705 12.5071 2.04446C12.6925 1.98187 12.8928 1.98545 13.076 2.05463C13.2522 2.1226 13.4027 2.24771 13.5051 2.41144C13.6075 2.57517 13.6564 2.76882 13.6447 2.96372L12.9711 9.4546H18.1238C18.2828 9.45435 18.4388 9.4991 18.5751 9.58403C18.7114 9.66897 18.8228 9.79088 18.8975 9.93668C18.9721 10.0825 19.0072 10.2467 18.9988 10.4116C18.9904 10.5765 18.939 10.7359 18.85 10.8728L11.9475 21.6C11.8673 21.7234 11.7591 21.8244 11.6325 21.8941C11.5059 21.9639 11.3647 22.0002 11.2214 22Z" fill="#E56262"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_3360_72489">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span>${automation.title}</span>
                </div>
                <div class="automations__options-list">
                  ${automation.options.map((option) => {
      return `
                      <div class="automations__option">
                        <div class="automations__option-card">
                          <img class="automations__option-icon" src="${option.icon}" alt="">
                          <span>${option.name}</span>
                        </div>
                        <svg class="automations__option-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_3360_72493)">
                            <path d="M9.99967 18.998C9.80949 18.9983 9.62316 18.9444 9.46254 18.8425C9.30193 18.7407 9.17368 18.5951 9.09285 18.423C9.01203 18.2508 8.98197 18.0592 9.0062 17.8706C9.03043 17.6819 9.10795 17.5041 9.22967 17.358L13.7097 11.998L9.38967 6.62799C9.30661 6.5257 9.24458 6.408 9.20714 6.28166C9.16971 6.15533 9.15762 6.02283 9.17156 5.89181C9.1855 5.76078 9.22519 5.6338 9.28837 5.51816C9.35154 5.40252 9.43695 5.30051 9.53967 5.21799C9.64314 5.12695 9.76431 5.05828 9.89557 5.01629C10.0268 4.97431 10.1654 4.9599 10.3024 4.97399C10.4395 4.98807 10.5722 5.03034 10.6922 5.09814C10.8122 5.16594 10.9169 5.25782 10.9997 5.36799L15.8297 11.368C15.9768 11.5469 16.0572 11.7714 16.0572 12.003C16.0572 12.2346 15.9768 12.4591 15.8297 12.638L10.8297 18.638C10.7294 18.7591 10.602 18.8548 10.4578 18.9173C10.3135 18.9799 10.1566 19.0075 9.99967 18.998Z" fill="#A0A4B1"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_3360_72493">
                              <rect width="24" height="24" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    `
    }).join('')}
                </div>
              </div>
            `
  }).join('')}
        </div>
        <div class="automations__message">
          <span class="text">Немає потрібного вам сценарію? Зробіть власний за допомогою мобільного додатку!</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3360_72521)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99935 1.66699C7.78921 1.66699 5.6696 2.54497 4.10679 4.10777C2.54399 5.67057 1.66602 7.79019 1.66602 10.0003C1.66602 12.2105 2.54399 14.3301 4.10679 15.8929C5.6696 17.4557 7.78921 18.3337 9.99935 18.3337C12.2095 18.3337 14.3291 17.4557 15.8919 15.8929C17.4547 14.3301 18.3327 12.2105 18.3327 10.0003C18.3327 7.79019 17.4547 5.67057 15.8919 4.10777C14.3291 2.54497 12.2095 1.66699 9.99935 1.66699ZM9.99935 16.667C9.12382 16.667 8.25685 16.4945 7.44797 16.1595C6.63908 15.8244 5.90411 15.3333 5.28501 14.7142C4.66591 14.0952 4.17482 13.3602 3.83977 12.5513C3.50471 11.7424 3.33227 10.8754 3.33227 9.99991C3.33227 9.12438 3.50471 8.25741 3.83977 7.44853C4.17482 6.63964 4.66591 5.90467 5.28501 5.28557C5.90411 4.66647 6.63908 4.17538 7.44797 3.84033C8.25685 3.50527 9.12382 3.33283 9.99935 3.33283C11.7676 3.33283 13.4634 4.03525 14.7137 5.28557C15.964 6.53589 16.6664 8.23169 16.6664 9.99991C16.6664 11.7681 15.964 13.4639 14.7137 14.7142C13.4634 15.9646 11.7676 16.667 9.99935 16.667ZM9.99935 7.50033C10.2204 7.50033 10.4323 7.41253 10.5886 7.25625C10.7449 7.09997 10.8327 6.88801 10.8327 6.66699C10.8327 6.44598 10.7449 6.23402 10.5886 6.07774C10.4323 5.92146 10.2204 5.83366 9.99935 5.83366C9.77834 5.83366 9.56637 5.92146 9.41009 6.07774C9.25381 6.23402 9.16602 6.44598 9.16602 6.66699C9.16602 6.88801 9.25381 7.09997 9.41009 7.25625C9.56637 7.41253 9.77834 7.50033 9.99935 7.50033ZM9.41009 8.57774C9.56637 8.42146 9.77834 8.33366 9.99935 8.33366C10.2204 8.33366 10.4323 8.42146 10.5886 8.57774C10.7449 8.73402 10.8327 8.94598 10.8327 9.16699V13.3337C10.8327 13.5547 10.7449 13.7666 10.5886 13.9229C10.4323 14.0792 10.2204 14.167 9.99935 14.167C9.77834 14.167 9.56637 14.0792 9.41009 13.9229C9.25381 13.7666 9.16602 13.5547 9.16602 13.3337V9.16699C9.16602 8.94598 9.25381 8.73402 9.41009 8.57774Z" fill="#393D46"/>
            </g>
            <defs>
              <clipPath id="clip0_3360_72521">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  `
  return automationsTemplate
}
serviceDetailsTemplate.innerHTML += automationsTemplate(template.automations)

const ecosystemTemplate = () => {
  const ecosystemTemplate = `
    <section class="ecosystem">
      <div class="ecosystem__container container">
        <div class="ecosystem__title-wrapper section-title-wrapper">
          <h3 class="ecosystem__subtitle section-subtitle">обери свою екосистему</h3>
          <h2 class="ecosystem__title section-title">Керуйте своїм розумним будинком звідки завгодно, як завгодно</h2>
          <p class="ecosystem__text text">З телефону, з планшета, голосом. </p>
        </div>
        <div class="ecosystem__list">
          <div class="ecosystem__item card">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.4494 13.2516L29.476 10.9033V5.56468C29.476 5.20145 29.3324 5.10008 29.0748 5.10008H26.3548C26.0592 5.10008 25.8775 5.15921 25.8775 5.56468V8.06082C21.9454 4.95648 17.6838 1.59028 17.5233 1.46357C17.2023 1.21016 17.0038 1.14258 16.7715 1.14258C16.5434 1.14258 16.3449 1.21016 16.0197 1.46357C15.6987 1.71699 1.52433 12.9137 1.09352 13.2516C0.569794 13.6655 0.717619 14.261 1.30047 14.261H4.06693V29.2801C4.06693 30.2516 4.4555 30.6401 5.38046 30.6401H28.1625C29.0875 30.6401 29.476 30.2516 29.476 29.2801V14.2568H32.2425C32.8253 14.2568 32.9732 13.6655 32.4494 13.2516ZM27.1446 27.1683C27.1446 27.8399 26.7983 28.3045 26.0972 28.3045H7.44157C6.74046 28.3045 6.39412 27.8399 6.39412 27.1683V13.1333C6.39412 12.3182 6.74891 11.7987 7.15859 11.4777L16.1295 4.39474C16.366 4.2089 16.5688 4.12866 16.7673 4.12866C16.9658 4.12866 17.1685 4.2089 17.405 4.39897L26.3759 11.4819C26.7814 11.8029 27.1404 12.3224 27.1404 13.1376V27.1683H27.1446Z" fill="#FA9012"/>
            <path d="M26.3848 11.4773L17.4097 4.39011C17.1731 4.20427 16.962 4.12402 16.7719 4.12402C16.5776 4.12402 16.3707 4.20427 16.1341 4.39433L7.159 11.4773C6.75354 11.7983 6.39453 12.3178 6.39453 13.1329V27.1679C6.39453 27.8395 6.74087 28.3041 7.44198 28.3041H26.0976C26.7987 28.3041 27.145 27.8395 27.145 27.1679V13.1329C27.145 12.3178 26.7902 11.7983 26.3848 11.4773ZM24.8221 25.0604C24.8221 25.6855 24.4673 25.9769 23.9478 25.9769H9.60024C9.08074 25.9769 8.72595 25.6855 8.72595 25.0604V14.1001C8.72595 13.4919 8.86956 13.1456 9.30036 12.8035C9.54533 12.6092 16.0708 7.45644 16.2439 7.32128C16.4171 7.1819 16.6029 7.11432 16.7719 7.11432C16.9408 7.11432 17.1267 7.18613 17.2998 7.32128C17.473 7.46066 23.9985 12.6134 24.2434 12.8035C24.6742 13.1456 24.8178 13.4962 24.8178 14.1001L24.8221 25.0604Z" fill="#FFAB1F"/>
            <path d="M24.244 12.8044C23.9991 12.6143 17.4736 7.45735 17.3004 7.32219C17.1273 7.18281 16.9414 7.11523 16.7725 7.11523C16.6036 7.11523 16.4177 7.18704 16.2446 7.32219C16.0714 7.46157 9.54594 12.6143 9.30097 12.8044C8.87016 13.1465 8.72656 13.4971 8.72656 14.1011V25.0613C8.72656 25.6864 9.08134 25.9778 9.60085 25.9778H23.9484C24.4679 25.9778 24.8227 25.6864 24.8227 25.0613V14.1011C24.8184 13.4971 24.6748 13.1465 24.244 12.8044ZM22.4912 22.9537C22.4912 23.4563 22.2125 23.6506 21.8324 23.6506H11.7126C11.3325 23.6506 11.0538 23.4563 11.0538 22.9537V15.0725C11.0538 14.7219 11.0538 14.4432 11.4381 14.1348C11.6915 13.9321 16.2192 10.359 16.3544 10.2534C16.4895 10.1478 16.6247 10.0929 16.7725 10.0929C16.9245 10.0971 17.0724 10.1562 17.1906 10.2534C17.3258 10.359 21.8535 13.9321 22.1069 14.1348C22.4912 14.4432 22.4912 14.7219 22.4912 15.0725V22.9537Z" fill="#FFBE41"/>
            <path d="M22.1059 14.1347C21.8525 13.932 17.3248 10.3589 17.1896 10.2533C17.0714 10.1519 16.9235 10.097 16.7715 10.0928C16.6236 10.0928 16.4885 10.1477 16.3533 10.2533C16.2182 10.3589 11.6863 13.932 11.4371 14.1347C11.0527 14.4431 11.0527 14.7218 11.0527 15.0724V22.9536C11.0527 23.4562 11.3315 23.6505 11.7116 23.6505H21.8271C22.2072 23.6505 22.486 23.4562 22.486 22.9536V15.0724C22.4902 14.7176 22.4902 14.4388 22.1059 14.1347ZM20.163 20.8503C20.163 21.2388 19.9687 21.3233 19.6984 21.3233H13.8487C13.5784 21.3233 13.3842 21.2346 13.3842 20.8503V16.0396C13.3842 15.7693 13.5066 15.5074 13.7136 15.3385C13.8319 15.2413 16.3745 13.252 16.4632 13.1802C16.6405 13.0324 16.9024 13.0324 17.0798 13.1802C17.1727 13.252 19.7111 15.2413 19.8294 15.3385C20.0405 15.5116 20.163 15.7693 20.1588 16.0396L20.163 20.8503Z" fill="#FFD260"/>
            <path d="M16.7722 21.3191H19.6949C19.9652 21.3191 20.1595 21.2304 20.1595 20.846V16.0396C20.1595 15.7693 20.037 15.5074 19.8301 15.3385C19.7118 15.2413 17.1692 13.252 17.0805 13.1802C16.9031 13.0324 16.6413 13.0324 16.4639 13.1802C16.3752 13.252 13.8326 15.2413 13.7143 15.3385C13.5031 15.5116 13.3806 15.7693 13.3849 16.0396V20.846C13.3849 21.2346 13.5792 21.3191 13.8495 21.3191H16.7722Z" fill="#FFE780"/>
          </svg>
            <div class="ecosystem__item-text">Apple Homekit</div>
          </div>
          <div class="ecosystem__item card">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1547 0.695424C15.3257 0.638119 15.4957 0.55451 15.6817 0.574238C15.8235 0.592087 15.9936 0.535722 16.1195 0.615573C16.463 0.692447 16.7746 0.873164 17.0119 1.13319C18.0396 2.1628 19.0677 3.19178 20.096 4.22013C20.2075 4.32238 20.3114 4.43258 20.407 4.54987C19.2534 5.72696 18.0782 6.88339 16.9161 8.05297C16.5403 8.42874 16.1646 8.81578 15.7766 9.18685C15.2655 9.66784 14.7827 10.177 14.2829 10.6693C12.0201 12.9389 9.75676 15.2076 7.49276 17.4754C6.43779 18.5444 5.36967 19.6022 4.31 20.6694C3.16485 21.8108 2.02721 22.9597 0.878295 24.0973C0.878295 23.3176 0.878295 22.5379 0.878295 21.7582V21.2885C0.878295 19.7303 0.878295 18.1715 0.878295 16.612C0.878295 16.1423 0.871717 15.6726 0.887687 15.2029C0.88299 15.109 0.954387 15.0329 0.95063 14.937C1.01639 14.8253 1.07651 14.7088 1.13851 14.596C1.31026 14.3864 1.49574 14.1884 1.69371 14.0033C5.97434 9.71387 10.2559 5.42384 14.5384 1.13319C14.7054 0.939532 14.9168 0.789305 15.1547 0.695424Z" fill="#F72A22"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9119 8.04998C18.074 6.8804 19.2492 5.72397 20.4028 4.54688C23.5424 7.70521 26.6888 10.8573 29.8421 14.0031C30.124 14.2952 30.4715 14.5667 30.5824 14.9754C30.6904 15.2431 30.6566 15.539 30.6622 15.8209C30.6622 20.4359 30.6622 25.051 30.6622 29.6661C30.7318 30.5763 29.8628 31.4275 28.9563 31.357H24.045C24.0374 29.1512 24.045 26.9464 24.0403 24.7407C24.044 22.3157 24.044 19.8914 24.0403 17.4677C21.9961 15.4272 19.9538 13.3846 17.9134 11.3398C17.2013 10.6212 16.4779 9.91285 15.7715 9.18855C16.1595 8.81279 16.5315 8.42668 16.9119 8.04998Z" fill="#5165AD"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.30466 20.6638C5.36433 19.5994 6.43245 18.5416 7.48742 17.4697C7.49682 19.8906 7.48742 22.3124 7.49306 24.7333C7.48836 26.9391 7.49306 29.1486 7.49306 31.3497H2.32624C1.60664 31.2557 0.972535 30.6526 0.881411 29.9274C0.875775 27.9818 0.881411 26.0354 0.881411 24.0898C2.02187 22.9541 3.15951 21.8052 4.30466 20.6638Z" fill="#FDBC01"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49305 24.7363C13.0087 24.7363 18.524 24.7363 24.0391 24.7363C24.0447 26.9421 24.0391 29.1516 24.0438 31.3527H7.49023C7.49493 29.1469 7.48836 26.9421 7.49305 24.7363Z" fill="#3E9D3A"/>
            </svg>
            <div class="ecosystem__item-text">Google Home</div>
          </div>
          <div class="ecosystem__item card">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.1365 10.9099C27.9508 11.0539 24.6729 12.9005 24.6729 17.0065C24.6729 21.7558 28.844 23.4359 28.9688 23.4775C28.9496 23.58 28.3062 25.7786 26.7696 28.0188C25.3995 29.9902 23.9686 31.9584 21.7918 31.9584C19.615 31.9584 19.0548 30.6943 16.5419 30.6943C14.093 30.6943 13.2223 32 11.2312 32C9.24009 32 7.85079 30.1758 6.25341 27.9356C4.40314 25.3049 2.9082 21.2181 2.9082 17.3393C2.9082 11.1179 6.95446 7.81838 10.9367 7.81838C13.0527 7.81838 14.8165 9.20732 16.145 9.20732C17.4094 9.20732 19.3813 7.73517 21.7886 7.73517C22.7009 7.73517 25.9789 7.81838 28.1365 10.9099ZM20.6458 5.10131C21.6414 3.92039 22.3456 2.28183 22.3456 0.643264C22.3456 0.416042 22.3264 0.185619 22.2848 0C20.665 0.0608061 18.7379 1.07851 17.5759 2.42584C16.6636 3.46275 15.8121 5.10131 15.8121 6.76228C15.8121 7.0119 15.8537 7.26153 15.8729 7.34153C15.9753 7.36074 16.1418 7.38314 16.3082 7.38314C17.7616 7.38314 19.5894 6.41024 20.6458 5.10131Z" fill="#B3B7BB"/>
            </svg>
            <div class="ecosystem__item-text">Apple Homepod</div>
          </div>
          <div class="ecosystem__item card">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="32" height="32" transform="matrix(1 0 0 -1 0 32)" fill="url(#pattern0)"/>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_3360_72552" transform="scale(0.0046729)"/>
                </pattern>
                <image id="image0_3360_72552" width="214" height="214" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
            <div class="ecosystem__item-text">Siri</div>
          </div>
          <div class="ecosystem__item card">
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_3360_72555" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="32">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7714 0C7.93497 0 0.771484 7.16357 0.771484 16.0001C0.771484 24.1133 6.81037 30.815 14.6382 31.8582V28.6341C14.6382 27.725 14.0649 26.9081 13.2031 26.6189C8.6866 25.1015 5.45555 20.7847 5.57455 15.7301C5.71944 9.57664 10.732 4.73846 16.8869 4.80049C23.0193 4.86252 27.9715 9.85297 27.9715 16.0001C27.9715 16.1402 27.9681 16.2796 27.9629 16.4183C27.9617 16.4493 27.9607 16.4807 27.9595 16.5118C27.9536 16.6407 27.9457 16.7692 27.9356 16.897C27.9326 16.9377 27.9284 16.9783 27.9248 17.0189C27.9169 17.1077 27.9078 17.1965 27.8977 17.2852C27.8863 17.3857 27.8733 17.4856 27.8592 17.585C27.8531 17.6305 27.8469 17.6761 27.84 17.7212C26.4688 26.7539 14.704 31.8307 14.6395 31.8585C15.3462 31.9526 16.0584 31.9999 16.7714 32C25.608 32 32.7715 24.8366 32.7715 16.0001C32.7715 7.16357 25.608 0 16.7714 0Z" fill="white"/>
              </mask>
              <g mask="url(#mask0_3360_72555)">
                <path d="M-1.6582 34.4277H35.2004V-2.42839H-1.6582V34.4277Z" fill="#5FCAF4"/>
              </g>
            </svg>
            <div class="ecosystem__item-text">Alexa</div>
          </div>
        </div>
      </div>
    </section>
  `
  return ecosystemTemplate
}
serviceDetailsTemplate.innerHTML += ecosystemTemplate()

const haveQuestionsTemplate = () => {
  const haveQuestionsTemplate = `
    <section class="have-questions navigation-section" id="have-questions">
      <div class="have-questions__bordered bordered-bottom-section">
        <div class="have-questions__container container">
    
        <div class="have-questions__wrapper">
          <div class="have-questions__card card">
            <h2 class="have-questions__title">Залишились питання?</h2>
            <p class="have-questions__text text">Якщо ви не знайшли відповіді на своє питання - зв'яжіться з
              нами для детальної консультації. Ми завжді раді допомогти!</p>
            <button class="have-questions__button button blue consultation" type="button">
              <span>Безкоштовна консультація</span>
              <img src="../assets/white-arrow-right.svg" alt="Arrow Icon">
            </button>
            <div>
              <img loading="lazy" class="have-questions__card-image" src="../assets/have-questions-price.png" alt="Cart with text">
              <img loading="lazy" class="have-questions__card-image" src="../assets/have-questions-price.png" alt="Cart with text">
              <img loading="lazy" class="have-questions__card-image" src="../assets/have-questions-price.png" alt="Cart with text">
              <img loading="lazy" class="have-questions__card-image" src="../assets/have-questions-price.png" alt="Cart with text">
              <img loading="lazy" class="have-questions__card-image" src="../assets/have-questions-time.png" alt="Cart with text">
              <img loading="lazy" class="have-questions__card-image" src="../assets/have-questions-time.png" alt="Cart with text">
            </div>
          </div>
    
          <div class="have-questions__dropdown-list dropdown-list">
            <div class="dropdown-item active" >
              <div class="dropdown-item__head">
                <div class="dropdown-item__value">01</div>
                <div class="dropdown-item__title">Так скільки коштує?</div>
                <div class="dropdown-item__toggle">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="dropdown-item__body text">
                На нашому сайті ви знайдете зручний калькулятор, який дозволяє приблизно розрахувати вартість для вашої
                конкретної ситуації. Однак кожен розумний будинок унікальний, тому точніше вам підкаже наш майстер під
                час безкоштовної консультації. Але ми впевнені, що ціна вас приємно здивує, адже розумний будинок
                це не так дорого, як всі звикли вважати!
              </div>
            </div>
            <div class="dropdown-item" >
              <div class="dropdown-item__head">
                <div class="dropdown-item__value">02</div>
                <div class="dropdown-item__title">Скільки часу займає встановлення?</div>
                <div class="dropdown-item__toggle">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="dropdown-item__body text">
                200+ наших клієнтів насолоджується розумним будинком вже через 3 дні після замовлення. Приєднуйтесь до
                ексклюзивної спільноти задоволених клієнтів всього в 3 кроки: 1. Подзвоніть нам для безкоштовної
                консультації та отримайте зрозумілі відповіді. 2. Отримайте рекомендації від нашого майстра при огляді об’єкту.
                3. Довірте спеціалістам професійне встановлення та якісне налаштування всіх функцій системи.
              </div>
            </div>
            <div class="dropdown-item" >
              <div class="dropdown-item__head">
                <div class="dropdown-item__value">03</div>
                <div class="dropdown-item__title">Чи можу я розширити свою систему розумного будинку у майбутньому?</div>
                <div class="dropdown-item__toggle">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="dropdown-item__body text">
                Так, система бездротового розумного будинку зроблена з урахуванням масштабованості. Ви зможете
                додавати нові пристрої, різні сценарії для ваших приладів та функціональні можливостів майбутньому.
              </div>
            </div>
            <div class="dropdown-item" >
              <div class="dropdown-item__head">
                <div class="dropdown-item__value">04</div>
                <div class="dropdown-item__title">Чи складно встановити розумний будинок?</div>
                <div class="dropdown-item__toggle">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="dropdown-item__body text">
                Бездротова технологія значно спрощує процес встановлення, оскільки відсутні кабелі, які потребують складної
                прокладки. Ви зможете швидко насолоджуватися всіма перевагами розумного будинку без
                зайвих клопотів за короткий проміжок часу.
              </div>
            </div>
            <div class="dropdown-item" >
              <div class="dropdown-item__head">
                <div class="dropdown-item__value">05</div>
                <div class="dropdown-item__title">Які пристрої можна інтегрувати в розумний будинок?</div>
                <div class="dropdown-item__toggle">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="dropdown-item__body text">
                Майже всі, що працюють, використовуючи електроенергію.
              </div>
            </div>
            <div class="dropdown-item" >
              <div class="dropdown-item__head">
                <div class="dropdown-item__value">06</div>
                <div class="dropdown-item__title">Чи можу я інтегрувати розумний будинок, не купуючи нову техніку?</div>
                <div class="dropdown-item__toggle">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="dropdown-item__body text">
                В більшості випадків - так. Практично всі сучасні пристрої мають можливість під’єднання до бездротового
                розумного будинку, саме в цьому полягає перевага цієї системи. Проте умови бувають різні, наш майстер
                оцінить вашу ситуацію та дасть остаточну відповідь під час консультації.
              </div>
            </div>
            <div class="dropdown-item" >
              <div class="dropdown-item__head">
                <div class="dropdown-item__value">07</div>
                <div class="dropdown-item__title">Які можливості керування доступні для розумного будинку?</div>
                <div class="dropdown-item__toggle">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="dropdown-item__body text">
                Ви зможете зручно керувати вашим розумним будинком через мобільний додаток на смартфоні або планшеті,
                а також за допомогою голосових помічників, що забезпечить комфорт у кожному куточку вашої оселі.
              </div>
            </div>
          </div>
        </div>
    
      </div>
      </div>
    </section>
  `
  return haveQuestionsTemplate
}
serviceDetailsTemplate.innerHTML += haveQuestionsTemplate()
dropdownSetup('.have-questions')

const buildSystemTemplate = (banner) => {
  const buildSystemTemplate = `
    <section class="build-system">
      <div class="build-system__container container bg-lines">
        <div class="build-system__info">
          <div class="build-system__title-wrapper section-title-wrapper">
            <div class="banner__badge">
              <div class="banner__badge-icon">
                <img src="../assets/white-dollar.svg" alt="Dollar Icon">
              </div>
              <div class="banner__text">Ціна під ключ Від ${banner.price}$</div>
            </div>
            <h2 class="build-system__title section-title"> Розумна ${banner.title} <span>під ключ</span></h2>
          </div>
          <p class="build-system__text text">${banner.text}</p>
          <button class="build-system__button button blue consultation" type="button">
            <span>Безкоштовна консультація</span>
            <img src="../assets/white-arrow-right.svg" alt="Arrow Icon">
          </button>
          <img loading="lazy" class="build-system__label top-left" src="../assets/build-system-top-left-label.png" alt="Label">
          <img loading="lazy" class="build-system__label bottom-left" src="../assets/build-system-bottom-left-label.png" alt="Label">
          <img loading="lazy" class="build-system__label top-right" src="../assets/build-system-top-right-label.png" alt="Label">
          <img loading="lazy" class="build-system__label bottom-right" src="../assets/build-system-bottom-right-label.png" alt="Label">
        </div>
        <img loading="lazy" class="bg-lines__image desktop" src="../assets/build-system-bg-lines-desktop.png" alt="Background lines">
        <img loading="lazy" class="bg-lines__image mobile" src="../assets/build-system-bg-lines-mobile.png" alt="Background lines">
      </div>
    </section>
  `
  return buildSystemTemplate
}
serviceDetailsTemplate.innerHTML += buildSystemTemplate(template.banner)