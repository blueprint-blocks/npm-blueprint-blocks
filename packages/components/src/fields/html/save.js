import { replaceTokens } from '@blueprint-blocks/utility'
import Field from '../field'

function save( { children, dangerouslySetInnerHTML, innerHtml = '', ...props } ) {

	if ( innerHtml.length > 0 ) {
		return (
			<Field.save
				{ ...props }
				type="html"
				dangerouslySetInnerHTML={ { 
					__html: replaceTokens( innerHtml, { block: props?.attributes || {}, field: {} } ) 
				} }
			/>
		)
	}

	return (
		<Field.save
			{ ...props }
			type="html"
			children={ children }
		/>
	)

}

export default save