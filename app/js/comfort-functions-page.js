const serviceListSelector = document.querySelector('.service-page__list')
const serviceList = [
  {
    image: '../assets/comfort-function-1.png',
    icon: '../assets/white-light.svg',
    title: 'Контроль освітлення',
    text: 'Не лише надає вам більше комфорту, але й забезпечує ефективну економію енергії, створюючиоптимальне середовище для вашого життя.',
    price: '200',
    url: '#',
  },
  {
    image: '../assets/comfort-function-2.png',
    icon: '../assets/white-heating.svg',
    title: 'Керування опаленням',
    text: 'Дозволяє вам ефективно керувати температурою в приміщеннях, забезпечуючи комфортне середовище та економію енергії.',
    price: '340',
    url: '#',
  },
  {
    image: '../assets/comfort-function-3.png',
    icon: '../assets/white-floor.svg',
    title: 'Тепла підлога',
    text: 'Дозволяє вам ефективно керувати температурою в приміщеннях, забезпечуючи комфортне середовище та економію енергії.',
    price: '600',
    url: '#',
  },
  {
    image: '../assets/comfort-function-4.png',
    icon: '../assets/white-socket.svg',
    title: 'Контроль електронних приладів та мультирум',
    text: 'Дозволяє контролювати приладами відтворення у різних кімнатах одночасно, створюючи затишну атмосферу та комфорт у всьому будинку.',
    price: '99',
    url: '#',
  },
  {
    image: '../assets/comfort-function-5.png',
    icon: '../assets/white-wentilation.svg',
    title: 'Автоматизація вентиляції',
    text: 'Дозволяє вам ефективно керувати вологістю і свіжістю повітря в приміщеннях, забезпечуючи комфортне середовище та економію енергії.',
    price: '498',
    url: '#',
  },
  {
    image: '../assets/comfort-function-6.png',
    icon: '../assets/white-blinds.svg',
    title: 'Автоматичні штори',
    text: 'Дозволяє віддалено контролювати положенням штор та ролетів у домі, а також будувати різноманітні сценарії їх поведінки.',
    price: '900',
    url: '#',
  },
]

serviceList.forEach(service => {
  const template = `
    <div class="service-page__item card">
      <div class="service-page__item-wrapper">
        <img class="service-page__item-bg" src="${service.image}" alt="BG image">
        <div class="service-page__item-icon">
          <img src="${service.icon}" alt="Icon">
        </div>
      </div>
      <div class="service-page__item-body">
        <h3 class="service-page__item-title">${service.title}</h3>
        <p class="service-page__item-text text">${service.text}</p>
        <div class="service-page__item-price">
          <div class="service-page__item-price-icon">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3367_6489)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 1.3335C8.86819 1.3335 9.16667 1.63197 9.16667 2.00016V3.3335H9.83333C9.84292 3.3335 9.85251 3.3337 9.86209 3.33412C10.3939 3.35708 10.9066 3.53866 11.3343 3.85548C11.762 4.17231 12.0852 4.60988 12.2621 5.11189C12.3845 5.45915 12.2022 5.83987 11.8549 5.96225C11.5077 6.08464 11.127 5.90235 11.0046 5.5551C10.9161 5.30409 10.7546 5.0853 10.5407 4.92689C10.3303 4.77105 10.0788 4.68065 9.81749 4.66683H7.16667C6.81304 4.66683 6.47391 4.80731 6.22386 5.05735C5.97381 5.3074 5.83333 5.64654 5.83333 6.00016C5.83333 6.35379 5.97381 6.69292 6.22386 6.94297C6.47391 7.19302 6.81304 7.3335 7.16667 7.3335H9.83333C10.5406 7.3335 11.2189 7.61445 11.719 8.11454C12.219 8.61464 12.5 9.29292 12.5 10.0002C12.5 10.7074 12.219 11.3857 11.719 11.8858C11.2189 12.3859 10.5406 12.6668 9.83333 12.6668H9.16667V14.0002C9.16667 14.3684 8.86819 14.6668 8.5 14.6668C8.13181 14.6668 7.83333 14.3684 7.83333 14.0002V12.6668H7.16667C7.15708 12.6668 7.14749 12.6666 7.13791 12.6662C6.60613 12.6432 6.09338 12.4617 5.66567 12.1448C5.23795 11.828 4.91484 11.3904 4.73791 10.8884C4.61552 10.5412 4.79781 10.1605 5.14507 10.0381C5.49232 9.91568 5.87304 10.098 5.99543 10.4452C6.08389 10.6962 6.24545 10.915 6.45931 11.0734C6.6697 11.2293 6.92124 11.3197 7.18251 11.3335H9.83333C10.187 11.3335 10.5261 11.193 10.7761 10.943C11.0262 10.6929 11.1667 10.3538 11.1667 10.0002C11.1667 9.64654 11.0262 9.3074 10.7761 9.05735C10.5261 8.80731 10.187 8.66683 9.83333 8.66683H7.16667C6.45942 8.66683 5.78115 8.38588 5.28105 7.88578C4.78095 7.38568 4.5 6.70741 4.5 6.00016C4.5 5.29292 4.78095 4.61464 5.28105 4.11454C5.78115 3.61445 6.45942 3.3335 7.16667 3.3335H7.83333V2.00016C7.83333 1.63197 8.13181 1.3335 8.5 1.3335Z" fill="#EEEFF1"/>
              </g>
              <defs>
                <clipPath id="clip0_3367_6489">
                  <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          Ціна під ключ Від ${service.price}$
        </div>
      </div>
      <a href="${service.url}" class="service-page__item-button button blue" type="button">
        <img src="../assets/white-arrow-right.svg" alt="Icon">
      </a>
    </div>
  `
  serviceListSelector.innerHTML += template
})

