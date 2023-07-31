const featureDropdownButton = document.querySelector('.banner__house-feature-button')
const featuresWrapper = document.querySelector('.banner__house-features')

featureDropdownButton.addEventListener('click', () => {
  featuresWrapper.classList.toggle('show')
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
      controlImage.src = '../assets/convenient-control-phone.png'
    } else {
      tabsWrapper.classList.remove('active-left')
      tabsWrapper.classList.add('active-right')
      controlImage.src = '../assets/convenient-control-phone.png'
    }
    opportunityItems.forEach((opportunity, opportunityIndex) => {
      const title = opportunity.children[0]
      const text = opportunity.children[1]
      title.innerHTML = opportunityValues[index][opportunityIndex].title
      text.innerHTML = opportunityValues[index][opportunityIndex].text
    })
  })
})

dropdownSetup('.wireless-system')