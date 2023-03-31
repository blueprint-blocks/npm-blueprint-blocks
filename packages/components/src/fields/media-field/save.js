import Field from '../field'

import getAllowedTypes from './functions/get-allowed-types'

function save( { 
	allowedTypes = [],
	multiple = false,
	value = [], 
	...props 
} ) {

	return (
		<Field.save
			{ ...props }
			type="media"
		>
			{ (value || []).map( ( { id, height, type, url, width } ) => (
				<div>
					{ type === 'image' && getAllowedTypes( allowedTypes ).includes( 'image' ) && (
						<img src={ url }/>
					) }
					{ type === 'pdf' && getAllowedTypes( allowedTypes ).includes( 'pdf' ) && (
						<span className="fa-solid fa-file-pdf"/>
					) }
				</div>
			) ) }
		</Field.save>
	)
}

export default save