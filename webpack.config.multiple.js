var path = require('path'),
	w = require('webpack');

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'client/js/index.js'),
		vendors: ['react', 'socket.io', 'react-router', 'alt']
	},
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: 'bundle.js'
	},
	resolve: {
		root: path.resolve(__dirname, 'public/vendor'),
		extensions: ['', '.js', '.jsx', '.json']
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: [/node_modules\//, /vendor\//],
			loader: 'babel'
		}],
		noParse: [/node_modules\//]
	},
	plugins: [
		new w.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
	]
};
