import memoize from 'micro-memoize'

const getGridRows = memoize( ( value, breakpoint ) => {
	return value?.[ breakpoint ]?.rows || []
} )

export { getGridRows }
