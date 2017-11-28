var gulp = require('gulp');
var hb = require('gulp-hb');
var watch = require('gulp-watch');
const ifWatch =  process.argv.slice(2)[0]=='--watch';

gulp.task('css', function() {
    gulp.src([
        'src/css/**/*.css',
        'node_modules/bulma/css/bulma.css',
        'node_modules/font-awesome/css/font-awesome.css',
    ]).pipe(gulp.dest('./build/public/css/'))
});

gulp.task('fonts', function() {
    gulp.src([
        'node_modules/font-awesome/fonts/fontawesome-webfont.eot',
        'node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
    ]).pipe(gulp.dest('./build/public/fonts/'))
});

gulp.task('ace', function () {
    gulp.src([
        'node_modules/ace-builds/src-noconflict/ace.js',
        'node_modules/ace-builds/src-noconflict/theme-chrome.js',
        //'node_modules/ace-builds/src-noconflict/mode-html.js',
        'node_modules/ace-builds/src-noconflict/mode-xml.js',
        'node_modules/ace-builds/src-noconflict/worker-xml.js',
    ]).pipe(gulp.dest('./build/public/ace/'))
});

gulp.task('js', function () {
    gulp.src([
        'src/js/**/*.js',
        'node_modules/jquery/dist/jquery.js',
    ]).pipe(gulp.dest('./build/public/js'))
});

gulp.task('images', function () {
    gulp.src([
        'src/images/**/*'
    ]).pipe(gulp.dest('./build/public/images'))
});

gulp.task('templates', function () {
    return gulp
        .src('./src/templates/**/*.html')
        .pipe(hb({
            partials: ['./src/partials/**/*.handlebars'],
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch',['templates'], function () {
    gulp.watch([
        './src/**/*',
    ], ['default']);
});

const tasks = [ 'css','fonts','ace','js','images','templates'];
if(ifWatch) {
    tasks.push('watch');
}

gulp.task('default', tasks);