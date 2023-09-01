/**
 * External dependencies
 */
const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		namespace: 'blueprint-blocks',
		slug: 'my-block',
		category: 'text',
		title: 'My Block',
		description:
			'A blueprint-based block that can be built with only JSON.',
		dashicon: 'grid-view',
		attributes: {
			title: {
				type: 'string',
				default: ''
			},
			subtitle: {
				type: 'string',
				default: ''
			},
			link: {
				type: 'object',
				default: {
					href: '#',
					label: 'Learn More',
					target: '_self'
				}
			},
			color: {
				type: 'string',
				default: 'white'
			},
			textSize: {
				type: 'string',
				default: 'h1'
			},
			textAlign: {
				type: 'string',
				default: 'left'
			}
		},
		supports: {
			html: false,
		},
		npmDependencies: [
			'@blueprint-blocks/components'
		],
	},
	variants: {
		static: {},
		dynamic: {
			render: 'file:./render.php',
		},
	},
	pluginTemplatesPath: join( __dirname, 'plugin-templates' ),
	blockTemplatesPath: join( __dirname, 'block-templates' ),
	assetsPath: join( __dirname, 'assets' ),
};
