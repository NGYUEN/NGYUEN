/**
 * Created by Administrator on 2017-03-18 .
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var mincss= require('gulp-minify-css');
gulp.task('test',function(){//第一个参数：任务名
    console.log('aaa');
});
gulp.task('test1',function(){//第一个参数：任务名
    console.log('bbb');
});
gulp.task('test2',['test','test1']);
//copy
gulp.task('copy-html',function(){
    gulp.src('index.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());//必须通过管道完成
});
//copy-img
gulp.task('copy-img',function(){
    gulp.src(['src/images/**/*.{jpg,png}','!src/images/prev.png']).pipe(gulp.dest('dist/img'));
});
gulp.task('sass',function(){
    gulp.src('src/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'})).pipe(mincss()).pipe(rename('index.min.css'))
        .pipe(gulp.dest('dist/css')).pipe(connect.reload());
});
gulp.task('watch',function(){
    gulp.watch('index.html',['copy-html']);
    gulp.watch('src/sass/*.scss',['sass']);
});
gulp.task('server',function(){
   connect.server({
       root: 'dist',
       livereload: true
   })
});
gulp.task('default',['server','watch']);
gulp.task('concat',function(){
   gulp.src('src/js/*.js')
       .pipe(concat('index.js'))
       .pipe(gulp.dest('dist/js'))
       .pipe(uglify()).pipe(rename('index.min.js'))
       .pipe(gulp.dest('dist/js'));
});