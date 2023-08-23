import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'index.esm.js',
		path: path.resolve(__dirname, 'dist'),
		library: {
			type: 'module',
		},
	},
	experiments: {
		outputModule: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: 'defaults' }],
						],
					},
				},
			},
			{
				test: /\.sass$/,
				exclude: /node_modules/,
				use: ['css-loader'],
			},
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				use: ['svg-loader'],
			},
		],
	},
};