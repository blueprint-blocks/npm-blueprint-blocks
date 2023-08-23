import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import styles from '@ironkinoko/rollup-plugin-styles'
import svg from 'rollup-plugin-svg'

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
		json(),
		styles(),  
		svg(),
	],
}