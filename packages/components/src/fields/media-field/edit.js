import { models } from '@wordpress/api'
import { MediaPlaceholder, MediaUpload } from '@wordpress/block-editor'
import { withNotices, Button } from '@wordpress/components'
import { createRef } from '@wordpress/element'
import { plus } from '@blueprint-blocks/icons'
import Field from '../field'

import getAllowedTypes from './functions/get-allowed-types'
import hasValue from './functions/has-value'

import ALL_TYPES from './data/types.json'

//import './style.css'

function edit( { 
	onInput, 
	label,
	allowedTypes = [],
	multiple = false,
	noticeUI,
    noticeOperations,
	value = [], 
	...props
} ) {

	const ref = createRef()

	const onSelectOne = ( { id, height, type, url, width, ...item } ) => {					
		onInput( [
			{ id, height, width, type, url }
		] )
	}

	const onSelectMultiple = ( items ) => {
		onInput(
			Object.values(items).map( ( { id, height, type, url, width, ...item } ) => (
				{ id, height, width, type, url }
			) )
		)
	}

	return (
		<Field.edit
			{ ...props }
			type="media"
			value={ value }
		>
			<div className="blueprint-blocks:media-field-wrap">
				{ !hasValue( value ) && (
					<MediaPlaceholder
						icon="format-image"
						labels={ { title: label } }
						allowedTypes={ ALL_TYPES }
						multiple={ multiple }
						onSelect={ multiple && onSelectMultiple || onSelectOne }
						notices={ noticeUI }
						onError={ noticeOperations.createErrorNotice }
					/>
				) }
				{ hasValue( value ) && (
					<div className="blueprint-blocks:media-field-items">
						{ (value || []).map( ( { id, height, type, url, width } ) => (
							<div className="blueprint-blocks:media-field-item">
								{ type === 'image' && getAllowedTypes( allowedTypes ).includes( 'image' ) && (
									<img src={ url }/>
								) }
								{ type === 'pdf' && getAllowedTypes( allowedTypes ).includes( 'pdf' ) && (
									<span className="fa-solid fa-file-pdf"/>
								) }
							</div>
						) ) }
						<MediaUpload
							allowedTypes={ ALL_TYPES }
							gallery={ multiple }
							multiple={ multiple }
							onSelect={ multiple && onSelectMultiple || onSelectOne }
							value={ value.map( ( { id } ) => id ) }
							render={ ( { open } ) => (
								<div onClick={ open }>
									<img src={ plus }/>
								</div>
							) }
						/>
					</div>
				) }
			</div>
		</Field.edit>
	)
}

export default withNotices(edit)
