import replaceTokens from './replace-tokens'

function styles( _styles = [], context = {} ) {

	if (typeof _styles !== 'object') {
		return {}
	}

	const stylesArray = Object.entries(_styles).map(([ property, value ]) => [
		replaceTokens(property, context),
		replaceTokens(value, context)
	])
	
	return Object.fromEntries(stylesArray)
	
}

export default styles