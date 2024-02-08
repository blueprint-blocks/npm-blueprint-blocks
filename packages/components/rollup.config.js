import babel from '@rollup/plugin-babel'
import externalGlobals from 'rollup-plugin-external-globals'
import json from '@rollup/plugin-json'
import resolveCommonjs from '@rollup/plugin-commonjs'
import resolveNode from '@rollup/plugin-node-resolve'
import styles from '@ironkinoko/rollup-plugin-styles'
import svg from 'rollup-plugin-svg'

export default {
	input: 'src/index.js',
	output: [
		{
			file: 'dist/index.js',
			format: 'esm',
			exports: 'named',
			sourcemap: ( process.env.NODE_ENV === 'development' ),
			strict: false,
		},
	],
	plugins: [
		babel({
			babelHelpers: 'bundled',
		}),
		externalGlobals({
			'@wordpress/block-editor': 'wp.blockEditor',
			'@wordpress/blocks': 'wp.blocks',
			'@wordpress/components': 'wp.components',
			'@wordpress/element': 'wp.element',
			'@wordpress/hooks': 'wp.hooks',
			'@wordpress/i18n': 'wp.i18n',
		}),
		resolveCommonjs(),
		resolveNode(),
		json(),
		styles(),
		svg(),
	],
}
