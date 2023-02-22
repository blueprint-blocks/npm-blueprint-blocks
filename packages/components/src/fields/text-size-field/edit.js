import Field from '../field'
import ToolbarField from '../toolbar-field'

const TEXT_SIZES = {
	h1: {
		icon: "heading",
		subscript: "1",
		label: "Heading 1",
		value: "h1"
	},
	h2: {
		icon: "heading",
		subscript: "2",
		label: "Heading 2",
		value: "h2"
	},
	h3: {
		icon: "heading",
		subscript: "3",
		label: "Heading 3",
		value: "h3"
	},
	h4: {
		icon: "heading",
		subscript: "4",
		label: "Heading 4",
		value: "h4"
	},
	h5: {
		icon: "heading",
		subscript: "5",
		label: "Heading 5",
		value: "h5"
	},
	h6: {
		icon: "heading",
		subscript: "6",
		label: "Heading 6",
		value: "h6"
	},
	p: {
		icon: "paragraph",
		label: "Paragraph",
		value: "p"
	},
}

function edit( { onInput, textSizes = [ 'h1', 'h2', 'h3', 'h4' ], disabled = false, value, ...props } ) {

	return (
		<Field.edit
			{ ...props }
			type="text-size"
			value={ value }
		>
			<ToolbarField.edit
				options={ textSizes.map( ( textSize ) => (
					textSize in TEXT_SIZES && TEXT_SIZES[ textSize ] || textSize 
				) ) }
				value={ value }
				onInput={ onInput }
			/>
		</Field.edit>
	)

}

export default edit