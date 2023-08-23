import classNames from 'classnames'
import { getBreakpointLabels } from '../../functions/index.js'

import './style.css'

function BreakpointToggle( { 
	onChange,
	currentBreakpoint,
	breakpoints = [ 'desktop', 'laptop', 'tablet', 'mobile' ], 
	...props 
} ) {

	const breakpointLabels = getBreakpointLabels(breakpoints)
	
	return (
		<div className="blueprint-blocks:grid-field-breakpoint-toggle">
			{ breakpointLabels.map( ( { icon, label, value } ) => (
				<div
					className={ classNames( { 'is-active': currentBreakpoint === value } ) }
					onClick={ () => onChange( value ) }
				>
					{ label }
				</div>
			) ) }
		</div>
	)

}

export default BreakpointToggle
