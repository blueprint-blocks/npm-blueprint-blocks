import { __ } from '@wordpress/i18n'
//import { models } from '@wordpress/api'
import { MediaPlaceholder, MediaUpload } from '@wordpress/block-editor'
import { withNotices, Button } from '@wordpress/components'
import { pencil, plus, trash } from '../../icons/index.js'
import Field from '../field/index.js'

import getAllowedTypes from './functions/get-allowed-types.js'
import hasValue from './functions/has-value.js'

import ALL_TYPES from './data/types.json'

import './style.css'

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

	const removeItem = ( id ) => {
		onInput(
			Object.values(value).filter( ( item ) => (
				item.id !== id
			) )
		)
	}

	const selectItem = ( { id, height, type, url, width, ...item } ) => {					
		onInput( [
			{ id, height, width, type, url }
		] )
	}

	const selectMultiple = ( items ) => {
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
						onSelect={ multiple && selectMultiple || selectItem }
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
								<div className="blueprint-blocks:media-field-item-options">
									<div>
										<MediaUpload
											allowedTypes={ ALL_TYPES }
											gallery={ multiple }
											multiple={ multiple }
											onSelect={ multiple && selectMultiple || selectItem }
											value={ value.map( ( { id } ) => id ) }
											render={ ( { open } ) => (
												<Button
													label={ __( `Edit ${ label || 'Image' }` ) }
													onClick={ open }
													icon={ <img src={ pencil }/> }
												/>
											) }
										/>
										<Button
											label={ __( `Remove ${label || 'Image' }` ) }
											icon={ <img src={ trash }/> }
											onClick={ () => removeItem(id) }
										/>
									</div>
								</div>
							</div>
						) ) }
						{ multiple && (
							<MediaUpload
								allowedTypes={ ALL_TYPES }
								gallery={ multiple }
								multiple={ multiple }
								onSelect={ multiple && selectMultiple || selectItem }
								value={ value.map( ( { id } ) => id ) }
								render={ ( { open } ) => (
									<div onClick={ open }>
										<img src={ plus }/>
									</div>
								) }
							/>
						) }
					</div>
				) }
			</div>
		</Field.edit>
	)
}

export default withNotices(edit)
