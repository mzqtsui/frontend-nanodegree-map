//https://github.com/udacity/fend-office-hours/tree/master/Front%20End%20Tools/Gulp

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    minifyhtml = require('gulp-minify-html'),
    cleancss = require('gulp-clean-css'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver'),
    sourcemaps = require('gulp-sourcemaps'),
    responsive = require('gulp-responsive'),
    critical = require('critical').stream;


var paths = {
    scripts: ['src/js/**/*.js'],
    styles: ['src/css/**/*.scss'],
    images: ['src/img/**/*'],
    content: ['src/*.html']
}

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('styles', function() {
    return gulp.src(paths.styles)
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('content', function(){
    return gulp.src(paths.content)
        .pipe(minifyhtml({
            empty: true,
            quotes: true
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(responsive({
            '*.jpg': [
            {
                width: '100%'
            }],
            '*.png': [
            {
                width: '100%'
            }]
        },
        {
            quality: 70,
            withMetadata: false
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.content, ['content']);
    //gulp.watch(paths.images, ['images']);
});

gulp.task('webserver', ['critical'],function() {
    return gulp.src('dist/')
        .pipe(webserver({
            livereload: true,
            port: 9000
        }));
});

gulp.task('critical', ['content', 'scripts', 'styles'], function() {
    return gulp.src('dist/*.html')
        .pipe(critical({base: 'dist/',  inline: true, minify: true}))
        .pipe(gulp.dest('dist/'));
});


gulp.task('default', ['webserver','watch', 'critical']);
