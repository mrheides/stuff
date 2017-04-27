///// <binding />
var gulp = require('gulp');
//var watch = require('gulp-watch');
//var rename = require("gulp-rename");
//var debug = require('gulp-debug');
//var sass = require('gulp-sass');
var browserify = require('browserify');
//var brfs = require('gulp-brfs');
var stringify = require('stringify');
var source = require('vinyl-source-stream');
//var buffer = require('vinyl-buffer');
//var glob = require('glob');
//var rename = require('gulp-rename');
//var es = require('event-stream');
//var watchify = require('watchify');

gulp.task('bundle', function () {
    return browserify({
        entries: ['./Components/ComponentRegistration.js'],
        debug: true,
        transform: stringify({
            extensions: ['.html']
        })
    })
     .bundle()
     .pipe(source('./Bundle.js'))
     .pipe(gulp.dest('./Content'));
})