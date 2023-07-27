const featureDropdownButton = document.querySelector('.banner__house-feature-button')
const featuresWrapper = document.querySelector('.banner__house-features')

featureDropdownButton.addEventListener('click', () => {
  featuresWrapper.classList.toggle('show')
})