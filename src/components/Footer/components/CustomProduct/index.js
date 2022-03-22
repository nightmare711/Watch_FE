import React from 'react'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import './styles.scss'

export const CustomProduct = (props) => {
	return (
		<div className='custom__product'>
			<img className='product__img' src={props.image} alt='Product Image' />
			<div className='product__info'>
				<div className='rating'>
					<StarRoundedIcon className='star' fontSize='12px' />
					<StarRoundedIcon className='star' fontSize='12px' />
					<StarRoundedIcon className='star' fontSize='12px' />
					<StarRoundedIcon className='star' fontSize='12px' />
					<StarRoundedIcon className='star' fontSize='12px' />
				</div>
				<span className='name'>{props.name}</span>
				<span className='price'>{props.price}</span>
			</div>
		</div>
	)
}
