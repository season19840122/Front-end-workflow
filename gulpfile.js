'use strict';

var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  $ = require('gulp-load-plugins')(),
  postcss = require('gulp-postcss'),
  px2rem = require('postcss-px2rem');


var spriteConfig = {
	imgSrc: './app/templates/center_modal/img/needSprite/*.png',
	desSrc: './app/templates/center_modal/img/sprite',
	imgSprite: 'sprite_icon.png',
	cssName: '../../sprite.css',
	padding: 3
}

//合并 sprite 图片
gulp.task('sprite', function () {
  return gulp.src(spriteConfig.imgSrc)
    .pipe($.spritesmith({
      imgName: spriteConfig.imgSprite,//保存合并后图片的地址
      cssName: spriteConfig.cssName,//保存合并后对于css样式的地址
      padding:spriteConfig.padding,//合并时两个图片的间距
      algorithm: 'binary-tree',//注释1
      cssTemplate: function (data) {
        var arr=[];
        data.sprites.forEach(function (sprite) {
          arr.push(".icon-"+sprite.name+
          "{" +
          "background-image: url('"+sprite.escaped_image+"');"+
          "background-repeat: no-repeat;"+
          "background-position: "+sprite.px.offset_x+" "+sprite.px.offset_y+";"+
          "width:"+sprite.px.width+";"+
          "height:"+sprite.px.height+";"+
          "}\n");
        });
        return arr.join("");
      }
    }))
    .pipe(gulp.dest(spriteConfig.desSrc));
});

// Less 编译成 css
gulp.task('less', function() {
  return gulp.src([
      'app/styles/*.less',
      '!app/styles/m-*.less'
    ])
    .pipe($.plumber())
    .pipe($.less())
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.stream());
});

gulp.task('m-less', function() {
  var processors = [px2rem({remUnit: 75})];
  return gulp.src('app/styles/m-*.less')
    .pipe($.plumber())
    .pipe($.less())
    .pipe(postcss(processors))
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.stream());
});

// Sass 编译成 css
gulp.task('sass', function() {
  return gulp.src([
      'app/styles/*.scss',
      '!app/styles/m-*.scss'
    ])  
    .pipe($.plumber())
    .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.stream());
});

gulp.task('m-sass', function() {
	var processors = [px2rem({remUnit: 75})];
  return gulp.src([
      'app/styles/m-*.scss'
    ])
    .pipe($.plumber())
    .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
		.pipe(postcss(processors))
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.stream());
});

// es6+ 转为 es5
gulp.task('scripts', ['cleantmp'], function() {
  gulp.src([
    'app/scripts/u/**/*.js'
  ])
  .pipe($.plumber())
  .pipe($.babel())
  .pipe($.uglify({
    mangle: false // 类型：Boolean 默认：true 是否修改变量名
    ,compress: false // 类型：Boolean 默认：true 是否完全压缩
    ,output: {
      beautify: true
      ,comments: /^!|@preserve|@license|@cc_on/i 
    } // 保留指定的注释信息
  }))
  .pipe(gulp.dest('.tmp/scripts'))
  .pipe(browserSync.stream());

  gulp.src([
    'app/scripts/**/*.js'
    ,'!app/scripts/**/_*.*'
    ,'!app/scripts/u/**/*.js'
  ])
  .pipe($.plumber())
  .pipe(gulp.dest('.tmp/scripts'))
  .pipe(browserSync.stream());
});

// eslint 检验 js
function lint(files) {
  return gulp.src(files)
    .pipe($.eslint({ fix: true }))
    .pipe(browserSync.stream())
    .pipe($.eslint.format())
}

gulp.task('lint', () => {
  return lint('app/scripts/**/*.js')
    .pipe(gulp.dest('app/scripts'));
});

// Pug 编译成 html
gulp.task('pug', function () {
  return gulp.src([
      'app/templates/pug/*.pug'
    ])
    .pipe($.plumber())
    .pipe($.pug({
      pretty: true
    }))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.stream());;
});

// 图片压缩优化
gulp.task('image', function(){
  return gulp.src('app/images/**')
    .pipe(
      $.cache(
        $.imagemin([
          $.imagemin.gifsicle({ interlaced: true }) // 隔行扫描 gif 进行渲染，默认为：false 
          ,$.imagemin.jpegtran({ progressive: true }) // 无损压缩 jpg 图片，默认为：false 
          ,$.imagemin.optipng({ optimizationLevel: 6 }) // png 优化等级，（取值范围：0-7）默认为：3
          ,$.imagemin.svgo({ plugins: [{ removeViewBox: true }] }) // 多次优化 svg 直到完全优化，默认为：false 
        ], {
          verbose: true
        })
      )
    )
    .pipe(gulp.dest('app/images'));
})

// 拷贝所有文件
gulp.task('copy', function () {
  return gulp.src([
    'app/*.*'
    ,'app/images/**'
    ,'!app/images/**/*bak*.*'
    ,'app/styles/*.css'
    ,'!app/styles/_*.css'
    ,'app/mock/**'
    ,'app/module/*/*'
    ,'!app/module/**/*.scss'
    ,'!app/_*.*'
  ], {
    base: 'app'
    ,dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('extra', ['lint'], function () {
  return gulp.src([
    '.tmp/**'
  ]).pipe(gulp.dest('dist'));
});

// Build 压缩 css
gulp.task('csso', ['copy', 'extra'], function () {
  return gulp.src('dist/styles/*.css')
    // .pipe($.csso())
    .pipe(gulp.dest('dist/styles'));
});

// 优先清理 dist 目录，保证生产环境清洁
gulp.task('cleantmp', require('del').bind(null, ['.tmp']));
gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

// 启一个 Browser-sync 服务器并监听文件改动
gulp.task('serve', ['sass', 'm-sass', 'scripts', 'pug'], function(){
  var port = Math.floor(Math.random()*10000);
  port = (port>1024? port: Math.floor(Math.random()*10000));
  browserSync.init({
    server: {
      baseDir: ['app', '.tmp']
      ,directory: true
    },
    port: port,
    ui: {
      port: port + 1
    }
  });

  gulp.watch('app/styles/*.scss', ['sass', 'm-sass']);
  gulp.watch('app/scripts/**/*.js', ['scripts']);
  gulp.watch('app/templates/pug/*.pug', ['pug']);
  gulp.watch([
    'app/*.html',
    'app/images/**',
    'app/mock/**'
  ]).on('change', browserSync.reload);
});

// 生产环境
gulp.task('pre', ['clean'], function(){
  gulp.start('step1');
});

gulp.task('step1', ['sass', 'm-sass', 'scripts', 'pug', 'image'], function() {
  gulp.start('step2');
});

gulp.task('step2', ['csso'], function(){
  var port = Math.floor(Math.random()*10000),
  port = (port>1024? port: Math.floor(Math.random()*10000));
  browserSync.init({
    server: {
      baseDir: './dist',
      directory: true
    },
    port: port,
    ui: {
      port: port + 1
    }
  });
  
});

gulp.task('build', ['pre']);

// 开发环境
gulp.task('default', ['serve']);