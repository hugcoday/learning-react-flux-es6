/* eslint-disable no-var, strict */
'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');
var distPath = path.resolve(__dirname, 'build/');


var server = new WebpackDevServer(webpack(config), {
	contentBase: distPath,
	publicPath: 'js',
	hot: true,
	historyApiFallback: true
});

server.listen(3000, 'localhost', function (err) {
	if (err) {
		console.log(err);
	}

	console.log('Listening at localhost:3000');
});


/*
 var path = require('path');
 var WebpackDevServer = require("webpack-dev-server");
 var webpack = require("webpack");
 var config = require('./webpack.config');

 var distPath = path.resolve(__dirname, 'build');

 var compiler = webpack(config);
 var server = new WebpackDevServer(compiler, {
 // webpack-dev-server options
 contentBase: distPath,
 // or: contentBase: "http://localhost/",

 hot: true,
 // Enable special support for Hot Module Replacement
 // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
 // Use "webpack/hot/dev-server" as additional module in your entry point
 // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

 // webpack-dev-middleware options
 quiet: false,
 noInfo: false,
 lazy: true,
 filename: "bundle.js",
 watchDelay: 300,
 publicPath: "/js/",
 headers: { "X-Custom-Header": "yes" },
 stats: { colors: true },

 // Set this as true if you want to access dev server from arbitrary url.
 // This is handy if you are using a html5 router.
 historyApiFallback: false,

 // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
 // Use "*" to proxy all paths to the specified server.
 // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
 // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
 proxy: {
 "*": "http://localhost:9090"
 }
 });
 server.listen(8080, "localhost", function() {});
 */
