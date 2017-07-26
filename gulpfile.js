const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const del = require('del');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('html', function() {
  return gulp.src('src/templates/*.html')
    .pipe(gulp.dest('build'))
    .pipe(gulpIf(isDevelopment, notify({ onLast: true, message: 'Html task complete' })));
});

gulp.task('styles', function() {
  return sass('src/styles/*.scss', { style: 'expanded' })
    .pipe(concat('styles.css'))
    .pipe(autoprefixer('last 2 version'))
    //.pipe(gulp.dest('build/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulpIf(!isDevelopment,cssnano()))
    .pipe(gulp.dest('build/css'))
    .pipe(gulpIf(isDevelopment, notify({ message: 'Styles task complete' })));
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('build/img'))
    .pipe(gulpIf(isDevelopment, notify({ onLast: true, message: 'Images task complete' })));
});

gulp.task('clean', function() {
    return del(['build']);
});

gulp.task('default', ['html', 'styles', 'images' ], function() {
  return gulp.src('build')
    .pipe(notify({ message: 'All tasks complete' }));
});
