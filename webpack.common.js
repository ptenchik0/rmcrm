const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const StyleLintPlugin = require('stylelint-webpack-plugin')
// const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin')

const appName = require('./package.json').name

const config = {
	entry: path.join(__dirname, 'src', 'main.js'),
	output: {
		path: path.resolve(__dirname, './js'),
		publicPath: '/js/',
		filename: `${appName}.js`,
		chunkFilename: 'chunks/[name]-[hash].js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: ['vue-style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(js|vue)$/,
				use: 'eslint-loader',
				exclude: /node_modules/,
				enforce: 'pre',
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new StyleLintPlugin(),
	],
	resolve: {
		extensions: ['*', '.js', '.vue'],
		alias: {
			'@': path.join(__dirname, '/src'),
		},
		symlinks: false,
	},
}

console.log('Path:', __dirname)
console.log('Path2:', path.resolve(__dirname, './src'))
console.log('Path3:', path.join(__dirname, '/src'))

/* if (process.env.BUNDLE_ANALYZER_TOKEN) {
	config.plugins.push(new BundleAnalyzerPlugin({ token: process.env.BUNDLE_ANALYZER_TOKEN }))
} */

module.exports = config
