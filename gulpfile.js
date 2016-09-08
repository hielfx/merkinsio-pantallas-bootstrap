/**
 * Created by Daniel Sánchez on 03/09/2016.
 */
var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('dashboard', function (cb) {
    var dashboard = gulp.src('dashboard.html');
    var inside_project_builds = gulp.src('inside-project-builds.html');
    var sources = gulp.src([
        //JavaScript files
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/bootstrap-switch/dist/js/bootstrap-switch.min.js',
        'js/*.js',

        // CSS files
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
        'bower_components/font-awesome/css/font-awesome.min.css',
        'bower_components/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css',
        'bower_components/hover/css/hover-min.css',
        'css/*.css'

    ], {read: false});

    return [
        dashboard
            .pipe(inject(sources, {addRootSlash: false}))
            .pipe(gulp.dest('.')),
        inside_project_builds
            .pipe(inject(sources, {addRootSlash: false}))
            .pipe(gulp.dest('.'))
    ];
});

gulp.task('default', ['dashboard']);