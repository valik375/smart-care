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