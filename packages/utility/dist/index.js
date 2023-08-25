import npmClassNames from 'classnames';
import memoize from 'micro-memoize';
import { useEffect } from '@wordpress/element';

function delimiterize( string = '' ) {
    return string
        .replace(/([a-z])([A-Z])/g, (match, p1, p2) => {
            return `${p1}-${p2}`
        })
        .replace(/[^\w\s-]/g, '')
        .replace(/(\s)/g, '-')
        .toLowerCase()
}

function camelize( string = '' ) {
	return delimiterize(string)
		.replace(/\-(.)/g, (match, p1) => p1.toUpperCase())
}

const valueByIdentifier = memoize( ( identifier = '', context = {} ) => {
    let value = { ...context };
	let parts = identifier.split( '.' );

	if ( parts.length === 0 ) {
		return ''
	}

	let key = parts.shift();

	if ( !context?.[key] ) {
		return ''
	}

	if ( parts.length === 0 && key === 'length' ) {
		return Object.values( value ).length
	}

	if ( parts.length === 0 ) {
		return value[ key ]
	}

	return valueByIdentifier( parts.join( '.' ), value[ key ] )
} );

function replaceTokens( string = '', context = {} ) {
	if ( typeof string !== 'string' ) {
		return string
	}
	
	return string.replaceAll( /\{\{\s(.*?)\s\}\}/g, ( match, p1 ) => {
		return valueByIdentifier( p1, context )
	} )
}

/**
 * Wraps the default classNames function to provide 
 * contextual token replacement
 */
function classNames( _classNames = [], context = {} ) {
	
	let classNameArray = Array.isArray( _classNames ) && _classNames || [ _classNames ];

	classNameArray = classNameArray.map( ( className ) => {

		if ( typeof className === 'array' ) {
			return classNames( className, context )
		} else if ( typeof className === 'object' ) {
			return Object.fromEntries( 
				Object.entries( className ).map( ( [ key, value ] ) => [
					replaceTokens( key, context ), 
					( typeof value === 'boolean' ? value : classNames( value, context ) )
				] ) 
			)
		}

		return className

	} );

	return replaceTokens( npmClassNames( ...classNameArray ), context )

}

function styles( _styles = [], context = {} ) {

	if (typeof _styles !== 'object') {
		return {}
	}

	const stylesArray = Object.entries(_styles).map(([ property, value ]) => [
		replaceTokens(property, context),
		replaceTokens(value, context)
	]);
	
	return Object.fromEntries(stylesArray)
	
}

function useClickOutside( ref, callback ) {
	useEffect( () => {
		const handleClickOutside = ( event ) => {
			if ( ref.current && !ref.current.contains( event.target ) ) {
				callback && callback( event );
			}
		};

		document.addEventListener( 'mousedown', handleClickOutside );
	  
		return () => {
			document.removeEventListener( 'mousedown', handleClickOutside );
		}
	}, [ ref ] );
}

export { camelize, classNames, delimiterize, replaceTokens, styles, useClickOutside };
//# sourceMappingURL=index.js.map
