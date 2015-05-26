/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules'),
		srcPath = path.resolve(__dirname, 'scripts'),
		distPath = path.resolve(__dirname, 'build');

module.exports = {
	entry: {
		app: [
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
			'./scripts/index'
		]
		//vendors: ['react', 'react-router', 'flux']
	},
	devtool: 'eval-source-map',
	output: {
		path: path.resolve(__dirname, 'build/js'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		//new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
    new webpack.SourceMapDevToolPlugin(
        '[file].map', null,
        "[absolute-resource-path]", "[absolute-resource-path]")
	],
	resolve: {
		extensions: ['', '.js', 'jsx']
	},
	module: {
		/*
		preLoaders: [
			{
				test: /\.js(x)?$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			}
		],
		*/
		loaders: [
			{
				test: /\.js(x)?$/,
				exclude: [nodeModulesPath],
				loader: 'react-hot-loader',
				include: path.join(__dirname, 'scripts')
			},
			{
				test: /\.js(x)?$/,
				exclude: [nodeModulesPath],
				loader: 'babel',
				query: {
					optional: ['runtime', 'es7.classProperties', 'es7.decorators'],
					stage: 1
				},
				include: path.join(__dirname, 'scripts')
			}]
	}
};
