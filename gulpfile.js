'use strict';

const gulp = require("gulp"),
    plumber = require('gulp-plumber'),
    uglify = require("gulp-uglify"),
    webpack = require("webpack-stream"),
    mocha = require('gulp-mocha'),
    babel = require('babel-register');

const config = {
    app: {
        src: './app/index.js',
        dest: './public/assets/js/'
    },
    webpack: {
        config: './webpack.config.js'
    },
    test: {
        src: './tests/**/*.test.js'
    }
};

gulp.task('test', function () {
    console.log('No tests yet');
});

gulp.task('app', ['test'], function () {
    return gulp.src(config.app.src)
        .pipe(plumber())
        .pipe(webpack(require(config.webpack.config)))
        //.pipe(uglify())
        .pipe(gulp.dest(config.app.dest));
});

gulp.task('test', function () {
    return gulp.src(config.test.src, {read: false})
        .pipe(mocha({
            compilers: {
                js: babel
            },
            reporter: 'nyan'
        }));
});

gulp.task('watch', ['test', 'app'], function () {
    gulp.watch('./app/**/*.js', ['app']);
});

gulp.task('default', ['app'], function () {

});
