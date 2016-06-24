'use strict';

const gulp = require("gulp");
const plumber = require('gulp-plumber');
const webpack = require("webpack-stream");
const mocha = require('gulp-mocha');
const babel = require('babel-register');
const argv = require('yargs').argv;
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync').create();
const del = require('del');
const path = require('path');


const config = {
    css: {
        src: './app/view/style/**/*.scss',
        dest: './public/assets/css'
    },
    app: {
        src: './app/index.js',
        dest: './public/assets/js/'
    },
    webpack: {
        config: './webpack.config.js'
    },
    test: {
        src: './tests/**/*.test.js'
    },
    mocha: {
        compilers: {
            js: babel
        },
        reporter: 'nyan'
    }
};

// Static server
gulp.task('serve', function() {
    browserSync.init(null, {
        proxy: 'http://localhost:1337',
        files: ['./public/**/*'],
        port: 7000
    });

    // gulp.watch("public/**/*").on('change', browserSync.reload);
});

gulp.task('css',()=>{

    // del.sync(path.join(config.css.dest, 'style.css'));

    return gulp.src(config.css.src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest(config.css.dest));
});

gulp.task('app', ['test'], function () {
    return gulp.src(config.app.src)
        .pipe(plumber())
        .pipe(webpack(require(config.webpack.config)))
        .pipe(gulp.dest(config.app.dest));
});

gulp.task('test', function(){
    if (!argv.notest) {
        return gulp.src(config.test.src, {read: false})
            .pipe(plumber())
            .pipe(mocha(config.mocha));
    }
    gutil.log(gutil.colors.red("Skipping test task"));
    return false;
});

gulp.task('watch', ['app', 'css'], function () {
    gulp.watch(config.css.src, ['css']);
    gulp.watch('./app/**/*.js', ['app']);
});

gulp.task('default', ['app'], function () {

});
