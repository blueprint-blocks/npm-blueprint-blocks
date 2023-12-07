import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import resolveCommonjs from '@rollup/plugin-commonjs'
import resolveNode from '@rollup/plugin-node-resolve'
import styles from '@ironkinoko/rollup-plugin-styles'
import svg from 'rollup-plugin-svg'

export default {
	external: [
		'@wordpress/block-editor',
		'@wordpress/blocks',
		'@wordpress/components',
		'@wordpress/element',
		'@wordpress/hooks',
		'@wordpress/i18n',
	],
	input: 'src/index.js',
	output: [
		{
			file: 'dist/index.js',
			format: 'esm',
			exports: 'named',
			sourcemap: true,
			strict: false,
			globals: {
				'@wordpress/block-editor': 'wp.blockEditor',
				'@wordpress/blocks': 'wp.blocks',
				'@wordpress/components': 'wp.components',
				'@wordpress/element': 'wp.element',
				'@wordpress/hooks': 'wp.hooks',
				'@wordpress/i18n': 'wp.i18n',
			},
		},
	],
	plugins: [
		babel({
			babelHelpers: 'bundled',
		}),
		resolveCommonjs(),
		resolveNode(),
		json(),
		styles(),
		svg(),
	],
}
