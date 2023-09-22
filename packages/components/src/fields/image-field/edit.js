import { useState } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { MediaPlaceholder, MediaUpload } from '@wordpress/block-editor'
import { withNotices, Button } from '@wordpress/components'
import Field from '../field/index.js'

const divStyle = {
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
	noticeUI,
    noticeOperations,
	value = null,
	...props
} ) {

	const [ hasHover, setHasHover ] = useState( false )
	const [ optionHover, setOptionHover ] = useState( null )

	const onRemove = () => {
		onInput( null )
	}

	const onSelect = ( { id, height, type, url, width, ...image } ) => {
		onInput( { id, height, width, type, url } )
	}

	return (
		<Field.edit
			{ ...props }
			type="image"
			value={ value }
		>
			{ value === null && (
				<MediaPlaceholder
					icon="format-image"
					labels={ { title: label } }
					allowedTypes={ [ 'image' ] }
					multiple={ false }
					onSelect={ onSelect }
					notices={ noticeUI }
					onError={ noticeOperations.createErrorNotice }
				/>
			) }
			{ value !== null && (
				<div
					style={ divStyle }
					onMouseEnter={ () => setHasHover( true ) }
					onMouseLeave={ () => setHasHover( false ) }
				>
					<img src={ value?.url } style={ imgStyle }/>
					<div style={ {
						...optionsStyle,
						...( hasHover === true && optionsHoverStyle ),
					} }>
						<div style={ optionsDivStyle }>
							<MediaUpload
								allowedTypes={ [ 'image' ] }
								gallery={ false }
								multiple={ false }
								onSelect={ onSelect }
								value={ value?.id || null }
								render={ ( { open } ) => (
									<Button
										label={ __( `Edit ${ label || 'Image' }` ) }
										onClick={ open }
										icon={ <span className="dashicons dashicons-edit"></span> }
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
								label={ __( `Remove ${ label || 'Image' }` ) }
								icon={ <span className="dashicons dashicons-trash"></span> }
								onClick={ onRemove }
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
			) }
		</Field.edit>
	)
}

export default withNotices(edit)
