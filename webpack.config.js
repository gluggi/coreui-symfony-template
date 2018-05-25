var Encore = require('@symfony/webpack-encore');
// var path = require('path');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableReactPreset()
    // .addEntry('js/app', './assets/js/app.js')
    .addEntry('js/app', './src_react/index.js')
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // uncomment to define the assets of the project
    // .addEntry('js/app', './assets/js/app.js')
    .addStyleEntry('css/index', './src_react/scss/style.scss')

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()
    // uncomment for legacy applications that require $/jQuery as a global variable
    // .autoProvidejQuery()
;

const config = Encore.getWebpackConfig();
// config.resolve.alias = {
//     'assets': path.resolve('src_react/assets'),
//     'routes': path.resolve('src_react/routes'),
//     'views': path.resolve('src_react/views'),
//     'layouts': path.resolve('src_react/layouts'),
//     'components': path.resolve('src_react/components'),
//     'variables' : path.resolve('src_react/variables')
// }
config.watchOptions = {
    poll: true,
};

// Export the final configuration
module.exports = config;
