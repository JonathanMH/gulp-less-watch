var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('default', function() {
    return gulp.src('./less/*.less')
        .pipe(watch())
        .pipe(less())
        .pipe(gulp.dest('./css/'));
});
