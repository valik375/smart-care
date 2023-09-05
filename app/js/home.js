const featureDropdownButton = document.querySelector('.banner__house-feature-button')
const featuresWrapper = document.querySelector('.banner__house-features')

let isFeaturesWrapper = false

featureDropdownButton.addEventListener('click', () => {
  isFeaturesWrapper = !isFeaturesWrapper
  if (isFeaturesWrapper) {
    featuresWrapper.classList.add('show')
    featureDropdownButton.innerHTML = `
      Приховати
      <img src="../assets/gray-arrow-down.svg" alt="Arrow Down">
    `
  } else {
    featuresWrapper.classList.remove('show')
    featureDropdownButton.innerHTML = `
      Показати усі можливості
      <img src="../assets/gray-arrow-down.svg" alt="Arrow Down">
    `
    location.href = '#banner-house-features'
  }
})

const featuresExampleButton = document.querySelectorAll('.features__item-example-play')
const movieUrls = {
  0: '../assets/house-fire-scenario.gif',
  1: '../assets/house-comfort-performance.gif'
}
featuresExampleButton.forEach((item, index) => {
  const movieGif = new Image()
  movieGif.src = movieUrls[index]
  movieGif.className = 'features__item-example-gif'
  item.addEventListener('click', () => {
    const movieWrapper = item.parentNode
    movieWrapper.classList.add('show')
    movieWrapper.appendChild(movieGif)

    setTimeout(() => {
      movieWrapper.classList.remove('show')
    }, 8500)
  })
})
const videoObserver = new IntersectionObserver((sections) => {
  sections.forEach(section => {
    if (section.isIntersecting) {
      const video = section.target.children[0]
      const movieGif = new Image()
      movieGif.src = movieUrls[video.dataset.id]
      movieGif.className = 'features__item-example-gif'
      section.target.classList.add('show')
      section.target.appendChild(movieGif)
      setTimeout(() => {
        section.target.classList.remove('show')
      }, 8500)
    }
  })
}, {
  root: null,
  rootMargin: '10px',
  threshold: 0.5
})

document.querySelectorAll('.features__item-example-movie').forEach(section => {
  videoObserver.observe(section)
})

const tabButtons = document.querySelectorAll('.convenient-control__tab-item')
const tabsWrapper = document.querySelector('.convenient-control__tabs')

const opportunityItems = document.querySelectorAll('.convenient-control__opportunity-content')
const controlImage = document.querySelector('.convenient-control__main-image')
const opportunityValues = [
  [
    {
      title: 'Контролюйте роботу всіх елементів ',
      text: 'Від освітлення до камер спостереження - керуйте будинком за допомогою телефону. Всі переваги у вашій кишені.'
    },
    {
      title: 'Керуйте домом на відстані',
      text: 'Перекрийте постачання води через додаток чи запустіть робота-пилососа  - усі  функції будинку у вашому смартфоні, незалежно від місцезнаходження. '
    },
    {
      title: 'Отримуйте повідомлення про загрози',
      text: 'Оповіщення про будь-які загрози для вашого будинку будуть надходити на ваш смартфон протягом 0.10 секунд.'
    },
    {
      title: 'Відстежуйте споживання ресурсів',
      text: 'За допомогою додатку ви можете бачити, які пристрої споживають найбільше енергії та встановлювати стратегії для енергоефективного використання.'
    }
  ],
  [
    {
      title: 'Керуйте будинком зручно',
      text: 'Легко керувати різними функціями житла - просто скажіть команду з будь-якої точки вашого дому, і вона буде виконана.'
    },
    {
      title: 'Автоматизуйте рутинні завдання',
      text: 'Розумна колонка - ваш універсальний помічник. Замовляйте таксі та відповідайте на повідомлення лише за допомогою голосових команд.'
    },
    {
      title: 'Володійте актуальною інформацією',
      text: 'Отримуйте аудіозвіти про останні новини, спортивні результати, графіки фондових бірж, курси валют та багато іншого.'
    },
    {
      title: 'Насолоджуйтесь мультимедійним хабом',
      text: 'Отримуйте задоволення від музики, аудіокниг, підкастів та безлічі іншого завдяки інтегрованому медіаплеєру, без необхідності в окремих пристроях.'
    },
  ]
]
tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === 0) {
      tabsWrapper.classList.add('active-left')
      tabsWrapper.classList.remove('active-right')
      controlImage.classList.remove('gif')
      controlImage.children[0].src = '../assets/convenient-control-phone.png'
    } else {
      tabsWrapper.classList.remove('active-left')
      tabsWrapper.classList.add('active-right')
      controlImage.classList.add('gif')
      controlImage.children[0].src = '../assets/voice-controller.png'
    }
    opportunityItems.forEach((opportunity, opportunityIndex) => {
      const title = opportunity.children[0]
      const text = opportunity.children[1]
      title.innerHTML = opportunityValues[index][opportunityIndex].title
      text.innerHTML = opportunityValues[index][opportunityIndex].text
    })
  })
})

const video = document.querySelector('.animation__video video')
document.querySelector('.animation__fullscreen-button').addEventListener('click', () => {
  const videoStart = () => {
    video.style.pointerEvents = 'all'
    video.play()
  }
  const videoEnd = () => {
    video.style.pointerEvents = 'none'
    video.pause()
  }
  if (video.requestFullscreen && !document.fullscreenElement) {
    video.requestFullscreen()
    videoStart()
  } else if (video.mozRequestFullScreen && !document.mozFullScreenElement) {
    video.mozRequestFullScreen()
    videoStart()
  } else if (video.webkitRequestFullscreen && !document.webkitFullscreenElement) {
    video.webkitRequestFullscreen()
    videoStart()
  } else if (video.webkitDisplayingFullscreen && !video.webkitDisplayingFullscreen) {
    video.webkitEnterFullscreen()
    videoStart()
  } else if (video.webkitEnterFullScreen && !video.webkitDisplayingFullscreen) {
    video.webkitEnterFullScreen()
    videoStart()
  } else {
    videoEnd()
  }
})

const popularScenarioItems = [
  {
    title: 'Антипотоп система',
    text: 'Трігер: переповнена ванна, протікання труб, пральної машини тощо.',
    tags: [
      {
        image: '../assets/blue-drop.svg',
        text: 'Перекриття води'
      },
      {
        image: '../assets/blue-bolt.svg',
        text: 'Знеструмлення будинку (опційно)'
      },
      {
        image: '../assets/blue-iphone.svg',
        text: 'Повідомлення на ваш телефон'
      },
    ]
  },
  {
    title: 'Відеоспостереження',
    text: 'Трігер: хтось підійшов до вашої оселі та подзвонив у дзвінок.',
    tags: [
      {
        image: '../assets/blue-iphone.svg',
        text: 'Ви бачите людину через камеру у мобільному додатку'
      },
      {
        image: '../assets/blue-lock.svg',
        text: 'Відкриваєте ворота'
      }
    ]
  },
  {
    title: 'Контроль освітлення',
    text: 'Трігер: ви сіли читати книжку та хочете збільшити яскравість освітлення.',
    tags: [
      {
        image: '../assets/blue-microphone.svg',
        text: 'Команда “Збільши яскравість”'
      },
      {
        image: '../assets/blue-light.svg',
        text: 'Збільшення яскравості освітлення'
      }
    ]
  },
  {
    title: 'Керування вентиляцією',
    text: 'Трігер: ви хочете підтримувати свіжість повітря в оселі, проте не відкривати вікна.',
    tags: [
      {
        image: '../assets/blue-iphone.svg',
        text: 'Ви обираєте потрібний рівень СО2 у повітрі через додаток'
      },
      {
        image: '../assets/blue-ventilation.svg',
        text: 'Система розумного будинку підтримує задане значення СО2 у повітрі'
      }
    ]
  },
  {
    title: 'Розумні жалюзі та штори',
    text: 'Трігер: ви хочете щоб штори у вашій спальні відкривалися щоразу вранці.',
    tags: [
      {
        image: '../assets/blue-iphone.svg',
        text: 'Обираєте розклад відкриття та закриття штор у додатку'
      },
      {
        image: '../assets/blue-blinds.svg',
        text: 'Штори працюють згідно обраного вами графіку'
      }
    ]
  },
  {
    title: 'Дистанційне керування домівкою',
    text: 'Трігер: ви знаходитеся на роботі і не впевнені, чи вимкнули світло вдома.',
    tags: [
      {
        image: '../assets/blue-iphone.svg',
        text: 'Ви відкриваєте мобільний додаток вашого розумного будинку'
      },
      {
        image: '../assets/blue-accept.svg',
        text: 'Перевіряєте стан засобів освітлення'
      },
      {
        image: '../assets/blue-light.svg',
        text: 'Вимикаєте світло'
      }
    ]
  },
  {
    title: 'Клімат контроль',
    text: 'Трігер: взимку ви хочете, щоб ваша домівка сильніше прогрівалася до вашого повернення з роботи.',
    tags: [
      {
        image: '../assets/blue-iphone.svg',
        text: 'Ви налаштовуєте графік інтенсивності опалення у додатку'
      },
      {
        image: '../assets/blue-heating.svg',
        text: 'Система опалювання буде працювати згідно обраного графіку'
      }
    ]
  }
]

const popularScenarioList = document.querySelector('.scenario-modal__list')

popularScenarioItems.forEach(item => {
  const template = `
    <div class="scenario-modal__item">
      <div class="scenario-modal__item-title">${item.title}</div>
      <div class="scenario-modal__item-text text">${item.text}</div>
      <div class="scenario-modal__item-tags">
        ${item.tags.map(tag => {
          return `
            <div class="scenario-modal__item-wrapper">
              <div class="scenario-modal__item-tag tag">
                <img src="${tag.image}" alt="Icon">
                  <span>${tag.text}</span>
              </div>
              <img class="scenario-modal__item-icon" src="../assets/gray-arrow-right.svg" alt="Gray Arrow Icon">
            </div>
          `       
        })}
      </div>
    </div>
  `
  popularScenarioList.innerHTML += template
})

const fixedNavigatedSections = document.querySelectorAll('.navigation-section')
const fixedNavigatedItems = document.querySelectorAll('.fixed-navigation__item')
const options = {
  root: null,
  rootMargin: '10px',
  threshold: 0.5
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.id) {
      const sectionIndex = parseInt(entry.target.dataset.index)
      fixedNavigatedItems[sectionIndex].classList.add('active')
    } else {
      fixedNavigatedItems.forEach(item => {
        item.classList.remove('active')
      })
    }
  })
}, options)

fixedNavigatedSections.forEach((section, index) => {
  section.dataset.index = index.toString()
  observer.observe(section)
})

document.querySelector('.scenario-modal__button').addEventListener('click', () => {
  document.querySelector('.scenario-modal__backdrop').classList.remove('visible')
})

dropdownSetup('.wireless-system')
dropdownSetup('.save-bills')
dropdownSetup('.have-questions')