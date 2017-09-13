var gulp = require('gulp');
var concat = require('gulp-concat-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglifycss');
var watch = require('gulp-watch');

var cssFiles = 'src/**/*.css',
    cssDest = '';

gulp.task('build', function() {
    return gulp.src(cssFiles)
        .pipe(concat('macropalpis.css'))
        .pipe(gulp.dest(cssDest))
        .pipe(rename('macropalpis.min.css'))
        .pipe(uglify())
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function () {
    gulp.watch(cssFiles, ['build']);
});