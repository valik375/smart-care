const { src, dest, watch, parallel, series } = require('gulp')
const scss = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify-es').default
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')
const clean = require('gulp-clean')
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')
const include = require('gulp-include')
const rename = require('gulp-rename')

const pages = () => {
  return src('app/pages/*.html')
    .pipe(include({
      includePaths: 'app/components'
    }))
    .pipe(dest('app'))
    .pipe(browserSync.stream())
}

const images = () => {
  return src(['app/assets/src/*.*', '!app/assets/src/*.svg'])
    .pipe(newer('app/assets'))
    .pipe(imagemin())
    .pipe(dest('app/assets'))
}

const scripts = () => {
  return src([
    'app/js/*.js',
    '!app/js/**/*.min.js'
  ])
    .pipe(rename({ extname: '.min.js' }))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

const styles = () => {
  return src('app/scss/**/*.scss')
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 version'] }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

const cleanDist = () => {
  return src('dist')
    .pipe(clean())
}

const appBuild = () => {
  return src([
    'app/css/**/*.css',
    'app/js/**/*.js',
    'app/assets/*.*',
    '!app/assets/src',
    'app/**/*.html',
  ], { base: 'app' })
    .pipe(dest('dist'))
}

const watching = () => {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  })
  watch(['app/js/**/*.js', '!app/js/**/*.min.js'], scripts)
  watch(['app/scss/**/*.scss'], styles)
  watch(['app/assets/**'], images)
  watch(['app/components/*', 'app/pages/*'], pages)
  watch(['app/**/*.html']).on('change', browserSync.reload)
}

exports.build = series(cleanDist, appBuild)
exports.default = parallel(pages, watching)