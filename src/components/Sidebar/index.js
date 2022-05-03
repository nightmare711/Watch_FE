import React from 'react'
import './styles.scss'
import Banner from '../../assets/Product/banner.webp'

export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<span className='head'>Refine Search</span>
			{/* <span className='title'>Price</span>
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
			</div> */}
			<img className='banner' src={Banner} alt='Image Banner' />
		</div>
	)
}
