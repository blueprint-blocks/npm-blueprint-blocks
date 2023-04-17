import classNames from 'classnames'
import memoize from 'micro-memoize'
import Field from '../field'

import './style.css'

const optionsHaveImages = memoize( ( options ) => {
	return options.reduce((hasImages, { image }) => (
		!!( hasImages || image )
	), false)
} )

function edit( { onInput, options = [], multiple = false, disabled = false, value = [], ...props } ) {

	const hasImages = optionsHaveImages( options )

	const onChooseOption = ( index ) => {
		let newValue = [ ...value ];
		const optionValue = options?.[index]?.value;

		if ( multiple ) {
			if ( newValue.indexOf( optionValue ) === -1 ) {
				newValue.push( optionValue )
			} else {
				newValue = newValue.filter( ( value ) => (
					value !== optionValue
				) );
			}
		} else {
			newValue = [ options?.[index]?.value ];
		}

		onInput( newValue );
    };

	return (
		<Field.edit
			{ ...props }
			type="toggle"
			value={ value }
		>
			<div className="blueprint-blocks:toggle-field-wrap">
				<div className="blueprint-blocks:toggle-field-items">
					{ options.map( ( { icon, image, label, ...option }, index ) => (
						<div
							className={ classNames( 'blueprint-blocks:toggle-field-item', {
								'is-active': ( value?.indexOf(option?.value) !== -1 ),
								'has-icon': !!icon,
								'has-image': !!image,
							} ) }
							title={ !!icon && label }
							onClick={ () => onChooseOption( index ) }
						>
							{ !!image && (
								<div className="blueprint-blocks:toggle-field-label">
									<img src={ image } />
								</div>
							) }
							{ !!icon && !image && (
								<i className={ icon } />
							) }
							{ ( !icon || hasImages ) && (
								<span>{ label }</span>
							) }
						</div>
					) ) }
				</div>
			</div>
		</Field.edit>
	)

}

export default edit
