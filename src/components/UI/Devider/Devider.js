import React from 'react'

const Devider = ({ width, bg, height }) => {

	return (
		<div style={{
			width: `${width}%`,
			height: `${height}px`,
			backgroundColor: `${bg}`
		}}>
		</div>
	)
}

export default Devider