var gulp = require('gulp');
var browserify = require('browserify');
var stringify = require('stringify');
var streamHelper = require('vinyl-source-stream');

gulp.task('bundle', function () {
    return browserify({
        entries: ['./Components/ComponentRegistration.js'],
        debug: true,
        standalone: "ViewModels",
        transform: stringify({
            extensions: ['.html']
        })
    })
     .bundle()
     .pipe(streamHelper('./Bundle.js'))
     .pipe(gulp.dest('./Content'));
})