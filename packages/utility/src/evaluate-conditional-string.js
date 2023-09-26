import replaceTokens from './replace-tokens.js'

const OPERANDS = [
	'==',
	'!=',
	'<',
	'<=',
	'>',
	'>=',
]

function evaluateCondition( string = '', context = {} ) {

	let operand = null

	OPERANDS.forEach( ( OPERAND ) => {
		if ( string.indexOf( OPERAND ) !== -1 ) {
			operand = OPERAND
		}
	} )

	if ( operand === null ) {
		return Boolean( replaceTokens( string, context ) )
	}

	let before = replaceTokens( string.slice( 0, string.indexOf( operand ) ).trim(), context )
	let after = replaceTokens( string.slice( string.indexOf( operand ) + operand.length ).trim(), context )

	if ( ( before.slice( 0, 1 ) === "'" && before.slice( -1 ) === "'" ) || ( before.slice( 0, 1 ) === '"' && before.slice( -1 ) === '"' ) ) {
		before = before.slice( 1, -1 )
	}

	if ( ( after.slice( 0, 1 ) === "'" && after.slice( -1 ) === "'" ) || ( after.slice( 0, 1 ) === '"' && after.slice( -1 ) === '"' ) ) {
		after = after.slice( 1, -1 )
	}

	if ( operand === '==' ) {
		return ( before == after )
	}

	if ( operand === '!=' ) {
		return ( before != after )
	}

	if ( operand === '<' ) {
		return ( before < after )
	}

	if ( operand === '<=' ) {
		return ( before <= after )
	}

	if ( operand === '>' ) {
		return ( before > after )
	}

	if ( operand === '>=' ) {
		return ( before >= after )
	}

	return false
}

function evaluateConditionalString( string = '', context = {} ) {
	if ( typeof string !== 'string' || string === '' ) {
		return string
	}

	let open = null
	let close = null
	let evaluatedString = string

	do {

		for ( let i = 0; i < string.length; i++ ) {
			if ( string[ i ] === '(' ) {
				open = i
			}

			if ( open !== null && string[ i ] === ')' ) {
				close = i
				break
			}
		}

		let conditional, before, after

		if ( open === null && close === null ) {
			conditional = string
			before = ''
			after = ''
		} else {
			conditional = string.slice( open + 1, close - 1 )
			before = string.slice( 0, open - 1 )
			after = string.slice( close + 1 )
		}

		const ands = conditional.split( '&&' )

		const result = ands.reduce( ( result, and ) => {
			const ors = and.trim().split( '||' )

			return ( result && ors.reduce( ( reducedOr, or ) => (
				reducedOr || evaluateCondition( or.trim(), context )
			), null ) )
		}, true )

		if ( before === '' && after === '' ) {
			evaluatedString = result && '1' || '0'
		} else {
			evaluatedString = before + ( result && 'true' || 'false' ) + after
		}

	} while ( open !== null && close !== null )

	if ( evaluatedString === '1' || evaluatedString === 'true' ) {
		return true
	}

	if ( evaluatedString === '0' || evaluatedString === 'false' ) {
		return false
	}

	return Boolean( evaluatedString )
}

export default evaluateConditionalString
