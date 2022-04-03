import React from 'react'
import loading from '../../assets/Loading/loading.gif'
import './styles.scss'

export const Loading = () => {
	return (
		<div>
			<img className='loading' src={loading} />
		</div>
	)
}
