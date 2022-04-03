import React from 'react'
import './styles.scss'

export const RelatedPost = (props) => {
	return (
		<div className='related'>
			<img className='related__image' src={props.src} />
			<span className='related__name'>{props.name}</span>
			<span className='related__date'>{props.date}</span>
		</div>
	)
}
