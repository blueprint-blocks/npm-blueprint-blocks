import memoize from 'micro-memoize'

const getGridAlign = memoize( ( value, breakpoint ) => {
	return value?.[ breakpoint ]?.align || []
} )

export { getGridAlign }
