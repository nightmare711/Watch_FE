import React from 'react'
import { Container } from 'components'
import Mock_1 from '../../assets/Cart/mock_1.webp'
import Mock_2 from '../../assets/Cart/mock_2.webp'
import './styles.scss'
const mock = [
	{
		image: Mock_1,
		name: 'Egestas dapibus',
		unit: '28.00',
		status: 'In Stock',
	},
	{
		image: Mock_2,
		name: 'Neque porttitor',
		unit: '28.00',
		status: 'Out Stock',
	},
]
const Wishlist = () => {
	return (
		<Container>
			<span className='page'>Wishlist</span>
			<div className='site__map'>
				<span className='site'>Home</span>
				<span className='slash'>/</span>
				<span className='site'>Wishlist</span>
			</div>
			<div className='cart'>
				<table className='table__container'>
					<tr>
						<th className='head'>Remove</th>
						<th className='head'>Image</th>
						<th className='head'>Product name</th>
						<th className='head'>Unit price</th>
						<th className='head'>Stock status</th>
						<th className='head'>Add To Cart</th>
					</tr>
					{mock.map((item) => (
						<tr>
							<td className='item'>x</td>
							<td className='item'>
								<img className='product__img' src={item.image} alt='Product Image' />
							</td>
							<td className='item'>{item.name}</td>
							<td className='item'>{item.unit}$</td>
							<td className='item'>{item.status}</td>
							<td className='item'>
								<div className='btn'>Add To Cart</div>
							</td>
						</tr>
					))}
				</table>
			</div>
		</Container>
	)
}
export default Wishlist
