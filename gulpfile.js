// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var coffee = require('gulp-coffee');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('coffee', function() {
  return gulp.src([
    'js/bones.js.coffee'
  ])
    .pipe(concat('bones-tmp.coffee'))
    .pipe(sourcemaps.init())
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(sourcemaps.write())
    .pipe(rename('bones.js'))
    .pipe(gulp.dest('js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('js/**/*.coffee', ['coffee']);
});

// Minify JS
gulp.task('jsdist', function() {
  return gulp.src('js/bones.js')
    .pipe(rename('bones.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});
