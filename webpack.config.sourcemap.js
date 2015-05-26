// webpack.config.js
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: path.join(__dirname, '../app/js/main.js'),
    output: {
        path: path.join(__dirname, '../app/bundle'),
        publicPath: '/app/bundle/',
        filename: 'bundle.js'
    },
    resolve: {
        root: [
            path.join(__dirname, '..', 'app', 'lib'),
            path.join(__dirname, '..', 'app', 'js'),
            path.join(__dirname, '..', 'app', 'themes'),
        ],
        alias: {
            jquery$: 'jquery/jquery',
            angular$: 'angular/angular',
            angularAnimate$: 'angular-animate/angular-animate',
            angularResource$: 'angular-resource/angular-resource',
            angularSanitize$: 'angular-sanitize/angular-sanitize',
            angularUiRouter$: 'angular-ui-router/angular-ui-router',
            angularPermission$: 'angular-permission/angular-permission',
            foundation$: 'foundation/js/foundation.min',
            lodash$: 'lodash/lodash',
            _$: 'lodash/lodash'
        }
    },
    resolveLoader: {
        root: [
            path.join(__dirname, 'node_modules')
        ]
    },
    module: {
        loaders: [
            { test: /\.css$/, loaders: ['style/useable', 'css'] },
            { test: /[\/\\]angular\.js$/, loader: 'exports?window.angular' },
            { test: /[\/\\]jquery\.js$/, loader: 'exports?window.$' }
        ],
        noParse: [
            /[\/\\]angular\.js$/,
            /[\/\\]jquery\.js$/
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin(
            'bundle.js.map', null,
            "[absolute-resource-path]", "[absolute-resource-path]")

    ]
};
