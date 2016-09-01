var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('webpack', function () {
    return gulp.src('')
      .pipe(webpack(require('./webpack.config.js')))
      .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
    gulp.watch('./source/**/*.tsx', ['webpack']);


});

gulp.task('default', ['webpack']);