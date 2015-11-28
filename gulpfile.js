var browserify = require('browserify'),
    watchify = require('watchify'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    sourceFile = './js/main.js',
    destFolder = './build/',
    destFile = 'output.js';

var bundler = browserify({
    // Required watchify args
    cache: {},
    packageCache: {},
    fullPaths: true,
    // Browserify options
    entries: ['./js/main.js'],
    debug: true
  });

var bundle = function() {
  return bundler
    .bundle()
    .on('error', handleErrors)
    .pipe(source('output.js'))
    .pipe(gulp.dest('./build/'));
}

var handleErrors = function(e) {
  console.log("Encountered error");
  console.error(e);
}

gulp.task('browserify', function() {
  return bundle()     ;
});

gulp.task('watch', function() {
  var watchifyBundler = watchify(bundler);
  watchifyBundler.on('update', bundle);

  return bundle();
});

gulp.task('default', ['browserify', 'watch']);
