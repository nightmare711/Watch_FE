import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import withCart from 'hoc/withCart'
import './styles.scss'
import { Link } from 'react-router-dom'

export const Product = ({ product, onAddToCart, cart }) => {
	return (
		<div className='product'>
			<img className='product__image' src={product?.imgPath[0]} alt="Product's Image" />
			<Link to={`/detail/${product?._id}`}>
				<div className='product__info'>
					<span className='text'>Cartier</span>
					<span className='product__name'>{product?.name}</span>
					<span className='product__price'>{product?.price}</span>
				</div>
			</Link>
			<div className='line'></div>
			<div className='btn__group'>
				<div className='rating'>
					<StarIcon className='star' />
					<StarIcon className='star' />
					<StarIcon className='star' />
					<StarIcon className='star' />
					<StarOutlineIcon className='star' />
				</div>
				<div
					onClick={() => {
						onAddToCart(product, 1)
					}}
					className='btn'
				>
					Add to cart
				</div>
			</div>
		</div>
	)
}
export const ProductCard = withCart(Product)
