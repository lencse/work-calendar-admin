var gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    babel = require('gulp-babel'),
    inject = require('gulp-inject'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    del = require('del'),
    browserSync = require('browser-sync');

var onError = function (err) {
    console.log('An error occurred:', err.message);
    this.emit('end');
};

gulp.task('check-js-style', function () {
    gulp.src('dark-material/**/*.js')
        .pipe(jscs({fix: true}))
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'))
        .pipe(gulp.dest('dark-material'));
});

gulp.task('serve', ['default', 'watch'], function () {
    var files = [
        './web/dist/*.html',
        './web/dist/css/**/*.css',
        './web/dist/js/**/*.js'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './web/dist'
        }
    });
});

gulp.task('scss', function () {
    return gulp.src('./dark-material/application.scss')
        .pipe(plumber({errorHandler: onError}))
        .pipe(sass())
        .pipe(gulp.dest('./web/dist/css'));
});

gulp.task('babel', ['scss'], function () {
    return gulp.src('dark-material/**/*.js')
        .pipe(plumber({errorHandler: onError}))
        .pipe(babel())
        .pipe(gulp.dest('./web/dist/js'));
});

gulp.task('watch', function () {
    gulp.watch('./dark-material/**/*.scss', ['default']);
    gulp.watch('./dark-material/**/*.js', ['default']);
    gulp.watch('./dark-material/**/*.html', ['default']);
});

gulp.task('jshint', ['babel', 'scss'], function () {
    return gulp.src('dark-material/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('default', ['cleanDist', 'jshint', 'babel', 'copyJsLib', 'copyCssLib'], function () {
    gulp.src('dark-material/images/**/*')
        .pipe(gulp.dest('web/dist/images'));
    gulp.src('dark-material/**/*.html')
        .pipe(gulp.dest('web/dist/'))
        .pipe(inject(gulp.src(['web/dist/js/**/*.js', 'web/dist/css/lib/*.css', 'web/dist/css/*.css'], {read: false}), {relative: true}))
        .pipe(gulp.dest('web/dist/'));
});

gulp.task('copyJsLib', ['cleanDist'], function () {
    return gulp.src(['bower_components/material-design-lite/material.js', 'bower_components/d3/d3.js',
        'bower_components/nvd3/build/nv.d3.js', 'bower_components/getmdl-select/getmdl-select.min.js'])
        .pipe(gulp.dest('web/dist/js'));
});

gulp.task('copyMinJsLib', ['cleanDist'], function () {
    return gulp.src(['bower_components/material-design-lite/material.min.js', 'bower_components/d3/d3.min.js',
        'bower_components/nvd3/build/nv.d3.min.js', 'bower_components/getmdl-select/getmdl-select.min.js'])
        .pipe(gulp.dest('web/dist/js'));
});

gulp.task('copyCssLib', ['cleanDist'], function () {
    return gulp.src(['bower_components/nvd3/build/nv.d3.css', 'bower_components/getmdl-select/getmdl-select.min.css'])
        .pipe(gulp.dest('web/dist/css/lib'));
});

gulp.task('copyMinCssLib', ['cleanDist'], function () {
    return gulp.src(['bower_components/nvd3/build/nv.d3.min.css', 'bower_components/getmdl-select/getmdl-select.min.css'])
        .pipe(gulp.dest('web/dist/css/lib'));
});

gulp.task('cleanDist', function () {
    return del('web/dist/**/*');
});

gulp.task('minifyJs', ['cleanDist'], function () {
    return gulp.src('dark-material/**/*.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(plumber({errorHandler: onError}))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('web/dist/js'));
});

gulp.task('minifyCss', ['cleanDist'], function () {
    return gulp.src('dark-material/application.scss')
        .pipe(plumber({errorHandler: onError}))
        .pipe(sass())
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('web/dist/css'));
});

gulp.task('build', ['minifyJs', 'minifyCss', 'copyMinCssLib', 'copyMinJsLib'], function () {
    gulp.src('dark-material/*.html')
        .pipe(gulp.dest('web/dist/'))
        .pipe(inject(gulp.src(['web/dist/js/**/*.js', 'web/dist/css/lib/*.css',
            'web/dist/css/*.css'], {read: false}), {relative: true}))
        .pipe(gulp.dest('web/dist/'));
    gulp.src('dark-material/images/**/*')
        .pipe(gulp.dest('web/dist/images'));
});