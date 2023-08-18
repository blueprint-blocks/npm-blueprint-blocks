import memoize from 'micro-memoize'

const getRowWidth = memoize( ( row ) => {
	return row.reduce( ( sum, column ) => sum + column, 0 )
} )

export { getRowWidth }
