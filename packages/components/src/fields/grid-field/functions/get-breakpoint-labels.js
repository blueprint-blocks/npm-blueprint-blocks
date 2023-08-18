import memoize from 'micro-memoize'
import DEFINED_BREAKPOINTS from '../data/breakpoints.json'

const getBreakpointLabels = memoize( ( breakpoints ) => {
	return breakpoints.map( ( breakpoint ) => {
		if ( typeof breakpoint === 'string' && breakpoint in DEFINED_BREAKPOINTS ) {
			return {
				icon: DEFINED_BREAKPOINTS[ breakpoint ]?.icon || null,
				label: DEFINED_BREAKPOINTS[ breakpoint ]?.label || breakpoint,
				value: breakpoint,
			}
		} else if ( typeof breakpoint === 'string' ) {
			return {
				icon: null,
				label: breakpoint,
				value: breakpoint,
			}
		}

		return breakpoint
	} )
} )

export { getBreakpointLabels }
