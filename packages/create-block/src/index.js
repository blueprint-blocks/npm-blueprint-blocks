/**
 * External dependencies
 */
const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		slug: 'gutenpride',
		category: 'text',
		title: 'Gutenpride',
		description:
			'A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.',
		dashicon: 'flag',
		attributes: {
			title: {
				type: "string",
				default: ""
			},
			subtitle: {
				type: "string",
				default: ""
			},
			anchor: {
				type: "string",
				default: ""
			},
			color: {
				type: "string",
				default: "white"
			},
			labels: {
				type: "array",
				default: []
			},
			columns: {
				type: "object",
				default: {
					desktop: {
						rows: [
							[2, 2, 2]
						],
						gap: "normal",
						align: "top",
						justify: "left"
					},
					laptop: {
						rows: [
							[2, 2, 2]
						],
						gap: "normal",
						align: "top",
						justify: "left"
					},
					tablet: {
						rows: [
							[3, 3],
							[3]
						],
						gap: "normal",
						align: "top",
						justify: "left"
					},
					mobile: {
						rows: [
							[6],
							[6],
							[6]
						],
						gap: "normal",
						align: "top",
						justify: "left"
					}
				}
			},
			number: {
				type: "number",
				default: 0
			},
			rating: {
				type: "number",
				default: 0
			},
			url: {
				type: "string",
				default: ""
			},
			cta: {
				type: "string",
				default: ""
			},
			dog: {
				type: "string",
				default: "german-shepherd"
			},
			width: {
				type: "number",
				default: 1240
			},
			textSize: {
				type: "string",
				default: "h1"
			},
			align: {
				type: "string",
				default: "center"
			},
			textAlign: {
				type: "string",
				default: "left"
			},
			email: {
				type: "string",
				default: ""
			},
			link: {
				type: "object",
				default: {
					href: "{{ wp.home_url }}",
					label: "Learn More",
					target: "_self"
				}
			},
			truefalse: {
				type: "boolean",
				default: false
			},
			toggle: {
				type: "array",
				default: []
			},
			position: {
				type: "array",
				default: [
					"left",
					"top"
				]
			},
			image: {
				type: "array",
				default: []
			}
		},
		supports: {
			html: false,
		},
		npmDependencies: [
			"@blueprint-blocks/components"
		],
	},
	variants: {
		static: {},
		dynamic: {
			attributes: {
				message: {
					type: 'string',
				},
			},
			render: 'file:./render.php',
		},
	},
	pluginTemplatesPath: join( __dirname, 'plugin-templates' ),
	blockTemplatesPath: join( __dirname, 'block-templates' ),
	assetsPath: join( __dirname, 'assets' ),
};
