import React from 'react'

export const Container = ({ children, backgroundColor = '' }) => {
	return (
		<div style={{ backgroundColor: backgroundColor }} className='container'>
			<div className='container__content'>{children}</div>
		</div>
	)
}
