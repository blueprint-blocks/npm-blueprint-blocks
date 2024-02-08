import {
	isArray,
	isObject,
} from '@blueprint-blocks/utility'

function normalizeComponentList( componentList, defaultComponent = {} ) {

	if ( isObject( componentList ) ) {
		return [ componentList ]
	}

	if ( isArray( componentList ) && componentList.length > 0 ) {
		return componentList
	}

	return [ defaultComponent ]

}

export default normalizeComponentList


