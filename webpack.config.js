/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./scripts/index'
	],
	devtool: 'eval-source-map',
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ['', '.js','jsx']
	},
	module: {
		loaders: [
      {
      test: /\.js(x)?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader',
      include: path.join(__dirname, 'scripts')
      },
      {
			test: /\.js(x)?$/,
			exclude: /node_modules/,
			loader: 'babel',
      query:{
        optional:['runtime','es7.classProperties','es7.decorators'],
        stage:1
      },
			include: path.join(__dirname, 'scripts')
		}]
	}
};
