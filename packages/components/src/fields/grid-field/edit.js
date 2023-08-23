import classNames from 'classnames'
import { useState } from '@wordpress/element'
import Field from '../field/index.js'
import { getBreakpointLabels, getGridAlign, getGridGap, getGridJustify, getGridRows } from './functions/index.js'
import BreakpointToggle from './components/breakpoint-toggle/index.js'
import GridControl from './components/grid-control/index.js'

import './style.css'

function edit( { 
	onInput,
	columns = 6,
	breakpoints = [ 'desktop', 'laptop', 'tablet', 'mobile' ], 
	gaps = [ 'normal' ],
	align = [ 'top', 'middle', 'bottom' ],
	justify = [ 'left', 'center', 'right' ],
	enableUniqueColumnWidths = true,
	value, 
	...props 
} ) {

	const breakpointLabels = getBreakpointLabels(breakpoints)
	const [ currentBreakpoint, setCurrentBreakpoint ] = useState( breakpointLabels?.[ 0 ]?.value )

	return (
		<Field.edit
			{ ...props }
			type="grid"
			value={ value }
		>
			<div className="blueprint-blocks:grid-field-wrap">

				<BreakpointToggle
					breakpoints={ breakpointLabels }
					currentBreakpoint={ currentBreakpoint }
					onChange={ setCurrentBreakpoint }
				/>

				<GridControl
					columns={ columns }
					rows={ getGridRows( value, currentBreakpoint ) }
					gap={ getGridGap( value, currentBreakpoint ) }
					align={ getGridAlign( value, currentBreakpoint ) }
					justify={ getGridJustify( value, currentBreakpoint ) }
				/>

			</div>
		</Field.edit>
	)

}

export default edit
