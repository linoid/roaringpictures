// Include gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
// Compile Our Sass
gulp.task('sass', function(){
    return gulp.src('css/scss/*.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('css'))
  });

  gulp.task('watch', function(){
    gulp.watch('css/scss/*.scss', gulp.series('sass'));
    // Other watchers
  });