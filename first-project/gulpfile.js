const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const imgCompress = require('imagemin-jpeg-recompress');
const uglify = require('gulp-uglify-es').default;
const cssFiles = [
    './src/style/normalize.css',
    './src/style/styles.css',
    './src/style/header.css',
    './src/style/main.css',
    './src/style/footer.css',
    './src/style/media.css',
    './src/style/font-awesome.min.css',
    './src/style/owl.carousel.css',
    './src/style/owl.theme.default.css'
]

//Таск для стилей CSS
function styles() {
    return gulp.src(cssFiles)
    //Объеденяет файлы в один
    .pipe(concat('styles.css'))

    //Минификация CSS
    .pipe(cleanCSS({
        level: 2
    }))

    //Путь к новому файлу all.css
    .pipe(gulp.dest('./libs/style/'))
}

//Таск для скриптов JS
function scripts() {
    return gulp.src('./src/scripts/**.js')

    //Объеденяет файлы в один
    .pipe(concat('scripts.js'))

    //Минификация JS
    .pipe(uglify())

    //Путь к новому файлу
    .pipe(gulp.dest('./libs/scripts'));
}

//Таск для img
function img() {
    return gulp.src('./img/**/*')
    //Оптимизируем img
    .pipe(imagemin([
        imagemin.gifsicle({
            interlaced: true
        }),
        imagemin.optipng({
            optimizationLevel: 3
        }),
        imagemin.svgo({
            plugins: [{
                removeViewBox: true
            },
                {
                    cleanupIDs: false
                }
            ]
        })
    ]))
    //Путь к новым файлам
    .pipe(gulp.dest('./libs/img/'));
}

// Вызов функции styles
gulp.task('styles', styles);
// Вызов функции scritps
gulp.task('scripts', scripts);
// Вызов функции img
gulp.task('img', img);
// Вызов всего сборщика с дефолтным именем gulp
gulp.task('default', gulp.series('styles', 'scripts', 'img'))