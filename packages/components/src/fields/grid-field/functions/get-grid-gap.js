import memoize from 'micro-memoize'

const getGridGap = memoize( ( value, breakpoint ) => {
	return value?.[ breakpoint ]?.gap || []
} )

export { getGridGap }
