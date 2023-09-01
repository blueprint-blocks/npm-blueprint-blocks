/**
 * Returns the block context with private attributes formatted.
 * 
 * Note: The length of the inner blocks is saved as an attribute because 
 * they can not be directly referenced upon initial save.
 */
function getBlockContext( context = {} ) {

	let {
		clientId,
		attributes,
		innerBlocks,
		...blockContext
	} = context

	const index = 1 + (attributes?._index || 0)
	const length = (attributes?._innerBlocksLength || 0)

	return {
		...blockContext,
		block: {
			index: index,
			...attributes,
		},
		innerBlocks: innerBlocks?.length && innerBlocks || (new Array(length)).fill(null),
	}

}

export default getBlockContext