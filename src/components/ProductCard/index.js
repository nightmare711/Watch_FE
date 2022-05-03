import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import './styles.scss'

export const ProductCard = (props) => {
	return (
		<div className='product'>
			<img className='product__image' src={props.image} alt="Product's Image" />
			<div className='product__info'>
				<span className='text'>Cartier</span>
				<span className='product__name'>{props.name}</span>
				<span className='product__price'>{props.price}</span>
			</div>
			<div className='line'></div>
			<div className='btn__group'>
				<div className='rating'>
					<StarIcon className='star' />
					<StarIcon className='star' />
					<StarIcon className='star' />
					<StarIcon className='star' />
					<StarOutlineIcon className='star' />
				</div>
				<div className='btn'>Add to cart</div>
			</div>
		</div>
	)
}
