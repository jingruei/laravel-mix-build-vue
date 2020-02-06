let mix = require('laravel-mix');

mix.extract(['axios', 'vue', 'alertifyjs'])
    .js('src/app.js', 'dist/js/')
    .sass('src/app.scss', 'dist/css')
    .setPublicPath('dist')       
