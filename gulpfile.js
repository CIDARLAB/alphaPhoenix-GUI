var gulp = require('gulp');
var hb = require('gulp-hb');
var watch = require('gulp-watch');

gulp.task('css', function() {
    gulp.src([
        'node_modules/bulma/css/bulma.css',
        'node_modules/font-awesome/css/font-awesome.css',
    ]).pipe(gulp.dest('public/css/'))
});

gulp.task('fonts', function() {
    gulp.src([
        'node_modules/font-awesome/fonts/fontawesome-webfont.eot',
        'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
    ]).pipe(gulp.dest('public/fonts/'))
});

gulp.task('templates', function () {
    return gulp
        .src('./src/templates/**/*.html')
        .pipe(hb({
            partials: ['./src/partials/*.handlebars'],
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch',['templates'], function () {
    gulp.watch('./src/partials/*.handlebars' , ['templates']);
});

gulp.task('default', [ 'css','fonts','templates','watch']);