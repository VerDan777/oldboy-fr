const gulp = require('gulp');
const rename = require('gulp-rename');

gulp.task('copyPHP',()=>{
    return gulp.src('./wp/*.php')
    .pipe(gulp.dest('/Applications/XAMPP/xamppfiles/htdocs/OldBoy/wp-content/themes/OldBoy'));
    
});

gulp.task('copyCSS',()=> {
    return gulp.src('./dist/styles.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('/Applications/XAMPP/xamppfiles/htdocs/OldBoy/wp-content/themes/OldBoy'))
})