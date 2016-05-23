'use strict';

const gulp = require("gulp"),
    plumber = require('gulp-plumber'),
    uglify = require("gulp-uglify"),
    webpack = require("webpack-stream");

const config = {
    app: {
        src: './app/index.js',
        dest: './public/assets/js/'
    },
    webpack: {
        config: './webpack.config.js'
    }
};

gulp.task('test', function () {
    console.log('No tests yet');
});

gulp.task('app', function () {
    return gulp.src(config.app.src)
        .pipe(plumber())
        .pipe(webpack(require(config.webpack.config)))
        //.pipe(uglify())
        .pipe(gulp.dest(config.app.dest));
});

gulp.task('watch', ['app'], function () {
    gulp.watch('./app/**/*.js', ['app']);
})

gulp.task('default', ['app'], function () {

});
