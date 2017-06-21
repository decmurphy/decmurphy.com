var gulp = require('gulp');

// minify changed images
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
// minify html
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');
// minify js
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var minify = require('gulp-minify');
// minify css
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
// sass
var sass = require('gulp-sass');

// var server = '/var/www/html';
var server = '/Library/WebServer/Documents/decmurphy';

gulp.task('imagemin', function () {
    
    gulp.src('./img/**/*')
            .pipe(changed(server+'/img'))
            .pipe(imagemin())
            .pipe(gulp.dest(server+'/img'));
    
}).task('htmlpage', function () {

    gulp.src('./index.html')
            .pipe(htmlmin())
            .pipe(gulp.dest(server));
  
}).task('scripts', function () {

    gulp.src(['./js/**/*'])
            .pipe(stripDebug())
            .pipe(gulp.dest(server+'/js'));

}).task('styles', function () {

    gulp.src(['./css/**/*'])
            .pipe(gulp.dest(server+'/css'));
    
}).task('fonts', function () {

    gulp.src(['./fonts/**/*'])
            .pipe(gulp.dest(server+'/fonts'));
    
}).task("default", ["imagemin", "htmlpage", "scripts", "styles", "fonts"], function () {

    gulp.watch('./img/**/*', ["imagemin"]);
    gulp.watch('./fonts/**/*', ["fonts"]);
    gulp.watch('./*.html', ["htmlpage"]);
    gulp.watch('./js/*.js', ["scripts"]);
    gulp.watch('./css/*.css', ["styles"]);

});
