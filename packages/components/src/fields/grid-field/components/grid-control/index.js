import classNames from 'classnames'
import { getRowWidth } from '../../functions'
import DecrementButton from '../decrement-button'
import IncrementButton from '../increment-button'

import './style.css'

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