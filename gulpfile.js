var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    del = require('del'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    spritesmith = require('gulp.spritesmith'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    annotate = require('gulp-ng-annotate'),
    babel = require('gulp-babel'),
    gutil = require('gulp-util');

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();


gulp.task('build-css', function () {
    return gulp.src('./styles/*')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('styles.css'))
        // .pipe(cachebust.resources())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist'));
});


gulp.task('build-js', function() {

    return gulp.src('./js/**/*.js')
        .pipe(babel({presets:['es2015']}))
        .pipe(concat('bundle.js'))
        .pipe(annotate({add:true}))
        // .pipe(cachebust.resources())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('move-html', function(){
  // console.log('hi')
  return gulp.src('./templates/*.*')
    .pipe(gulp.dest('./dist/templates/'));
});

gulp.task('move-images', function(){
  return gulp.src('./img/*.*')
    .pipe(gulp.dest('./dist/img/'));
});

gulp.task('build', ['build-css', 'build-js', 'move-html', 'move-images'], function() {
    return gulp.src('index.html')
        // .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html','./templates/*.html', './styles/*.*css', './js/**/*.js'], ['build']);
});


gulp.task('dev', ['watch']);
