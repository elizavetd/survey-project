const gulp = require('gulp');
const gulplog = require('gulplog');
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
const webpack = require('webpack');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('html', function () {
  return gulp.src('src/templates/*.html')
    .pipe(gulp.dest('build'))
    .pipe(gulpIf(isDevelopment, notify({
      onLast: true,
      message: 'Html task implemented'
    })));
});

gulp.task('styles', function () {
  return sass('src/styles/*.scss', {
      style: 'expanded'
    })
    .pipe(concat('styles.css'))
    .pipe(autoprefixer('last 2 version'))
    //.pipe(gulp.dest('build/css'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulpIf(!isDevelopment, cssnano()))
    .pipe(gulp.dest('build/css'))
    .pipe(gulpIf(isDevelopment, notify({
      message: 'Styles task implemented'
    })));
});

gulp.task('images', function () {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('build/img'))
    .pipe(gulpIf(isDevelopment, notify({
      onLast: true,
      message: 'Images task implemented'
    })));
});

gulp.task('webpack', function (callback) {
  let options = {
    context: __dirname + '/src',

    entry: {
      index: './js/index'
    },

    output: {
      path: __dirname + '/build/js',
      publicPath: '/js/',
      filename: 'bundle.js' //'[name].js'
    },

    watch: isDevelopment,

    devtool: isDevelopment ? 'cheap-module-inline-source-map' : null,

    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules|lib)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }]
      }]
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin() // otherwise error still gives a file
    ]
  };

  if (!isDevelopment) {
    options.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings: false,
          unsafe: true
        }
      })
    );
  }

  webpack(options, function (err, stats) {
    if (!err) { // no hard error
      // try to get a soft error from stats
      err = stats.toJson().errors[0];
    }

    if (err) {
      notifier.notify({
        title: 'Webpack',
        message: err
      });

      gulplog.error(err);
    } else {
      gulplog.info(stats.toString({
        colors: true
      }));
    }

    // task never errs in watch mode, it waits and recompiles
    if (!options.watch && err) {
      callback(err);
    }

  });


});

gulp.task('clean', function () {
  return del(['build/*.html', 'build/css', 'build/js']);
});

gulp.task('build-project', ['styles', 'html', 'images', 'webpack']);

gulp.task('dev', ['build-project'], function () {
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/templates/**/*.*', ['html']);
  gulp.watch('src/images/**/*.{jpg,png}', ['images']);
});

gulp.task('default', ['build-project'], function () {
  return gulp.src('build')
    .pipe(notify({
      message: 'All tasks complete'
    }));
});
