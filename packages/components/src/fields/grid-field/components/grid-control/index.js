import classNames from 'classnames'
import { getRowWidth } from '../../functions/index.js'
import DecrementButton from '../decrement-button/index.js'
import IncrementButton from '../increment-button/index.js'

import './style.scss'

function GridControl( {
	columns = 6,
	rows = [],
	gap = 'normal',
	align = 'top',
	justify = 'left',
} ) {
	return (
		<div className={ classNames( 'blueprint-blocks:grid-field-grid' ) }>
			<DecrementButton/>
			{ rows.map( ( row ) => (
				<div className={ classNames( 'blueprint-blocks:grid-field-grid-row-wrap' ) }>
					<DecrementButton/>
					<div
						className={ classNames( 'blueprint-blocks:grid-field-grid-row' ) }
						style={ {  '--columns': columns, '--row': getRowWidth( row ) } }
					>
						{ row.map( ( column ) => (
							<div
								className={ classNames( 'blueprint-blocks:grid-field-grid-column' ) }
								style={ { '--column': column } }
							>
								{ column }
							</div>
						) ) }
					</div>
					<IncrementButton/>
				</div>
			) ) }
			<IncrementButton/>
		</div>
	)
}

export default GridControl