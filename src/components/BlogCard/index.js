import React from 'react'
import './styles.scss'

export const BlogCard = (props) => {
	return (
		<div className='blog'>
			<img className='blog__image' alt='New Blog' src={props.image} />
			<div className='blog__info'>
				<span className='author'>
					Post By: <span className='author__name'>{props.name}</span>
				</span>
				<span className='date'>{props.date}</span>
			</div>
			<span className='blog__title'>{props.title}</span>
			<span className='blog__short'>{props.short}</span>
			<span className='read__more'>Read More</span>
		</div>
	)
}
