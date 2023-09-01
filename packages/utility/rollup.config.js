import babel from '@rollup/plugin-babel'

export default {
	input: 'src/index.js',
	output: [
		{
			file: 'dist/index.js',
			format: 'esm',
			exports: 'named',
			sourcemap: true,
			strict: false,
		},
	],
	plugins: [
		babel({
			babelHelpers: 'bundled',
		}),
	],
}