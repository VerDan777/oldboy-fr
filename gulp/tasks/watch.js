const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    watch('./src/**/*.pug', () => {
        gulp.start('pugChanged');
    })

    watch('./src/**/*.scss', () => {
        gulp.start('cssInject');
    })
    watch('./wp/*.php', function() {
        gulp.start('copyPHP');
    });
});
  

gulp.task('pugChanged', ['pugRender'], () => {
    browserSync.reload();
});

gulp.task('cssInject', ['styles'], () => {
    gulp.src('./dist/styles.css')
    .pipe(browserSync.stream());
});