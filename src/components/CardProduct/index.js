import React from 'react'

export const CardProduct = ({ type, name, price, description, path, discountPrice }) => {
	return (
		<div className='card-product'>
			<img src={require(path)} alt='' />
			<span className='type'>{type}</span>
			<span className='name'>{name}</span>
			<div className='price-container'>
				<span>{price}</span>
				<span>{discountPrice}</span>
			</div>
		</div>
	)
}
