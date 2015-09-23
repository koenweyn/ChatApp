var bower       = require('bower');
var concat      = require('gulp-concat');
var del         = require('del');
var gulp        = require('gulp');
var gutil       = require('gulp-util');
var minifyCss   = require('gulp-minify-css');
var rename      = require('gulp-rename');
var sass        = require('gulp-sass');
var sh          = require('shelljs');
var sort        = require('gulp-sort');
var sourcemaps  = require('gulp-sourcemaps');

var paths = {
  sass: ['./scss/**/*.scss'],
  scripts: ['src/**/*.js'],
  templates: ['src/**/*.html']
};

gulp.task('default', ['build']);
gulp.task('build', ['sass', 'scripts', 'templates']);

gulp.task('sass', function(done) {
  gulp.src('./scss/chat-app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(sort(sourceSorter))
    .pipe(sourcemaps.init())
    .pipe(concat('ChatApp.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('www/js'));
});

gulp.task('templates', function() {
  gulp.src(paths.templates)
    .pipe(gulp.dest('www/templates'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.templates, ['templates']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('clean', function() {
  del([
    'www/js/**',
    'www/templates/**'
  ], { force: true });

});

function sourceSorter(file){
  if (!file || !file.path) {
    return undefined;
  }

  //count the number of path separators
  var cnt = (file.path.match(/\/|\\/g) || []).length;

  //prepend number of '_' to path -> files with less slashes take precendence
  var path = file.path;
  while(cnt--) {
    path = '_' + path;
  }

  //lowercase
  path = path.toLowerCase();

  //remove drive letter (windows)
  path = path.replace(/\w:/, '');

  //remove .js
  path = path.replace(/\.js/, '');

  return path;
}


