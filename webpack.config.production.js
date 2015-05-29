/* eslint-disable no-var */
var path = require('path');
var util = require('util');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var LessPluginCleanCSS = require('less-plugin-clean-css');

var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var pkg = require('./package.json');

var cssBundle = path.join('css', util.format('[name].%s.css', pkg.version));
var jsBundle = path.join('js', util.format('[name].%s.js', pkg.version));

var cssExtractTextPlugin = new ExtractTextPlugin(cssBundle, {
	allChunks: true
});


var nodeModulesPath = path.resolve(__dirname, 'node_modules'),
	srcPath = path.resolve(__dirname, 'src'),
	distPath = path.resolve(__dirname, 'build');


var entry = {
	app: [
		'./index.jsx'
	],
	//vendors: ['react', 'react-router', 'flux']
};

var output = {
	//filename: 'bundle.js',
	path: distPath,
	//path: path.resolve(pkg.config.build_dir),
	publicPath: '/build/js/',
	filename: jsBundle,
	pathinfo: false

};

var plugins = [
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('production')
		}
	}),
	new webpack.optimize.UglifyJsPlugin({
		compressor: {
			warnings: false
		}
	}),
	//new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
	new webpack.NoErrorsPlugin(),
];


var loaders = [
	/*
	 preLoaders: [
	 {
	 test: /\.js(x)?$/,
	 exclude: /node_modules/,
	 loader: 'eslint-loader'
	 }
	 ],
	 */
	{
		test: /\.js(x)?$/,
		exclude: [nodeModulesPath],
		loader: 'react-hot-loader',
		include: srcPath
	},
	{
		test: /\.js(x)?$/,
		exclude: [nodeModulesPath],
		loader: 'babel',
		query: {
			optional: ['runtime', 'es7.classProperties', 'es7.decorators'],
			stage: 1
		},
		include: srcPath
	},
	{
		test: /\.css$/,
		loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
	},
	{
		test: /\.less$/,
		loader: "style!css!less"
	},
	{
		test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg$|\.woff$|\.ttf$/,
		loader: 'file-loader?name=[path][name].[ext]'
	},
	{
		test: /\.json$/,
		exclude: [nodeModulesPath],
		loaders: ['json-loader']
	},
	{
		test: /\.html$/,
		loader: [
			'file-loader?name=[path][name].[ext]',
			'template-html-loader?' + [
				'raw=true',
				'engine=lodash',
				'version=' + pkg.version
			].join('&')
		].join('!')
	}
];

module.exports = {
	context: srcPath,
	target: 'web',
	entry: entry,
	output: output,
	plugins: plugins,
	module: {
		loaders: loaders,
	},
	resolve: {
		extensions: ['', '.js', 'jsx']
	}
};
