import memoize from 'micro-memoize'

const getGridJustify = memoize( ( value, breakpoint ) => {
	return value?.[ breakpoint ]?.justify || []
} )

export { getGridJustify }
