import React from 'react'
import './styles.scss'
import Banner from '../../assets/Product/banner.webp'

export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<span className='head'>Refine Search</span>
			<span className='title'>Price</span>
			<div className='price__filter'>
				<div className='price__group'>
					<input name='price' type='radio' checked />
					<span>$55 - $200</span>
				</div>
				<div className='price__group'>
					<input name='price' type='radio' />
					<span>$55 - $200</span>
				</div>
				<div className='price__group'>
					<input name='price' type='radio' />
					<span>$300 - $500</span>
				</div>
				<div className='price__group'>
					<input name='price' type='radio' />
					<span>$700 - $1000 </span>
				</div>
			</div>
			<span className='title'>Categories</span>
			<div className='checkbox__filter'>
				<div className='checkbox__group'>
					<input type='checkbox' checked />
					<span>Category 1</span>
				</div>
				<div className='checkbox__group'>
					<input type='checkbox' />
					<span>Category 1</span>
				</div>
				<div className='checkbox__group'>
					<input type='checkbox' />
					<span>Category 1</span>
				</div>
				<div className='checkbox__group'>
					<input type='checkbox' />
					<span>Category 1</span>
				</div>
			</div>
			<span className='title'>Color</span>
			<div className='checkbox__filter'>
				<div className='checkbox__group'>
					<input name='price' type='checkbox' checked />
					<span>Color 1</span>
				</div>
				<div className='checkbox__group'>
					<input name='price' type='checkbox' />
					<span>color 2</span>
				</div>
				<div className='checkbox__group'>
					<input name='price' type='checkbox' />
					<span>Color 3</span>
				</div>
				<div className='checkbox__group'>
					<input name='price' type='checkbox' />
					<span>Color 4</span>
				</div>
			</div>
			<span className='title'>Manufacturer</span>
			<div className='checkbox__filter'>
				<div className='checkbox__group'>
					<input type='checkbox' checked />
					<span>Color 1</span>
				</div>
				<div className='checkbox__group'>
					<input type='checkbox' />
					<span>color 2</span>
				</div>
				<div className='checkbox__group'>
					<input type='checkbox' />
					<span>Color 3</span>
				</div>
				<div className='checkbox__group'>
					<input type='checkbox' />
					<span>Color 4</span>
				</div>
			</div>
			<img className='banner' src={Banner} alt='Image Banner' />
		</div>
	)
}
