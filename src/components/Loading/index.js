import React from 'react'
import loading from '../../assets/Loading/loading.gif'
import './styles.scss'

export const Loading = () => {
	return (
		<div className='loading__container'>
			<img className='loading' src={loading} />
		</div>
	)
}
