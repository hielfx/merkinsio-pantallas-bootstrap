/**
 * Created by Daniel Sánchez on 03/09/2016.
 */
var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('dashboard', function (cb) {
    var target = gulp.src('dashboard.html');
    var sources = gulp.src([
        //JavaScript files
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'js/*.js',

        // CSS files
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
        'bower_components/font-awesome/css/font-awesome.min.css',
        'css/*.css'

    ], {read: false});

    return target
        .pipe(inject(sources, {addRootSlash: false}))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['dashboard']);