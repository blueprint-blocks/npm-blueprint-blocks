const elStyle = {
	background: '#000',
	borderRadius: '2px',
	bottom: 'calc(100% + 5px)',
	color: '#fff',
	display: 'none',
	fontSize: '12px',
	left: '50%',
	padding: '4px 8px',
	position: 'absolute',
	minWidth: '80px',
	transform: 'translateX(-50%)',
	whiteSpace: 'nowrap',
	zIndex: '10',
}

const elShowStyle = {
	display: 'block',
}

const afterStyle = {
	borderLeft: '4px solid transparent',
	borderRight: '4px solid transparent',
	borderTop: '4px solid #000',
	bottom: '-4px',
	content: '',
	display: 'block',
	left: '50%',
	position: 'absolute',
	transform: 'translateX(-50%)',
}

function Tooltip( { label, show } ) {

	return (
		<div
			style={ {
				...elStyle,
				...( show === true && elShowStyle ),
			} }
		>
			{ label }
			<div style={ afterStyle }/>
		</div>
	)

}

export default Tooltip
