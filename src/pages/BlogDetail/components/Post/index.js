import React from 'react'
import './styles.scss'

export const Post = (props) => {
	return (
		<div className='post__container'>
			<img className='post__image' src={props.src}></img>
			<div className='post__detail'>
				<span className='post__title'>{props.title}</span>
				<span className='post__date'>{props.date}</span>
			</div>
		</div>
	)
}
