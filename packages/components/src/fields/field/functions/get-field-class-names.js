import classNames from 'classnames'
import memoize from 'micro-memoize'

const getFieldClassNames = memoize(( { blockName, type = '', name, value = '' } ) => {
	return classNames(
		{ [`block:${ name }`]: name?.length },
		{ [`${ blockName }:${ name }`]: name?.length },
        'blueprint-blocks:component',
        'blueprint-blocks:field',
        `blueprint-blocks:${ type }-field`,
		{ 'has-value': value }
    )
})

export default getFieldClassNames