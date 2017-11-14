var gulp = require('gulp');
var hb = require('gulp-hb');

gulp.task('css', function() {
    gulp.src(['node_modules/bulma/css/bulma.css'])
        .pipe(gulp.dest('public/css/'))
});

gulp.task('templates', function () {
    return gulp
        .src('./src/templates/**/*.html')
        .pipe(hb({
            partials: ['./src/partials/*.handlebars'],
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', [ 'css','templates' ]);