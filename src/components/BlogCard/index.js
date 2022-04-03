import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

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
			<Link className='link' to='/blog/blog-detail'>
				<span className='blog__title'>{props.title}</span>
			</Link>
			<span className='blog__short'>{props.short}</span>
			<Link className='link' to='/blog/blog-detail'>
				<div className='btn'>Read More</div>
			</Link>
		</div>
	)
}
