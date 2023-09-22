import { useState } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { MediaPlaceholder, MediaUpload } from '@wordpress/block-editor'
import { withNotices, Button } from '@wordpress/components'
import { pencil, plus, trash } from '../../icons/index.js'
import Field from '../field/index.js'

import getAllowedTypes from './functions/get-allowed-types.js'
import hasValue from './functions/has-value.js'

import ALL_TYPES from './data/types.json'

const wrapStyle = {
	position: 'relative',
}

const itemsStyle = {
	position: 'relative',
}

const itemStyle = {
	position: 'relative',
	width: 'fit-content',
}

const imgStyle = {
	display: 'block',
}

const optionsStyle = {
	alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
    bottom: '0',
    display: 'flex',
    left: '0',
    justifyContent: 'center',
    opacity: '0',
    position: 'absolute',
    right: '0',
    top: '0',
    transition: 'opacity 0.4s',
}

const optionsHoverStyle = {
	opacity: '1',
}

const optionsDivStyle = {
	alignItems: 'center',
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    padding: '4px',
}

const optionsButtonStyle = {
	height: '32px',
	borderRadius: '4px',
    justifyContent: 'center',
	width: '32px',
}

const optionsButtonHoverStyle = {
	background: '#eee',
}

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

	const [ itemHoverIndex, setItemHoverIndex ] = useState( null )
	const [ optionHover, setOptionHover ] = useState( null )

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
			<div style={ wrapStyle }>
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
					<div style={ itemsStyle }>
						{ (value || []).map( ( { id, height, type, url, width }, index ) => (
							<div
								style={ itemStyle }
								onMouseEnter={ () => setItemHoverIndex( index ) }
								onMouseLeave={ () => setItemHoverIndex( null ) }
							>
								{ type === 'image' && getAllowedTypes( allowedTypes ).includes( 'image' ) && (
									<img src={ url } style={ imgStyle }/>
								) }
								{ type === 'pdf' && getAllowedTypes( allowedTypes ).includes( 'pdf' ) && (
									<span className="fa-solid fa-file-pdf"/>
								) }
								<div style={ {
									...optionsStyle,
									...( itemHoverIndex === index && optionsHoverStyle ),
								} }>
									<div style={ optionsDivStyle }>
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
													icon={ <div dangerouslySetInnerHTML={ { __html: pencil } }/> }
													style={ {
														...optionsButtonStyle,
														...( optionHover === 'edit' && optionsButtonHoverStyle ),
													} }
													onMouseEnter={ () => setOptionHover( 'edit' ) }
													onMouseLeave={ () => setOptionHover( null ) }
												/>
											) }
										/>
										<Button
											label={ __( `Remove ${label || 'Image' }` ) }
											icon={ <div dangerouslySetInnerHTML={ { __html: trash } }/> }
											onClick={ () => removeItem(id) }
											style={ {
												...optionsButtonStyle,
												...( optionHover === 'remove' && optionsButtonHoverStyle ),
											} }
											onMouseEnter={ () => setOptionHover( 'remove' ) }
											onMouseLeave={ () => setOptionHover( null ) }
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
										<div dangerouslySetInnerHTML={ { __html: plus } }/>
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
