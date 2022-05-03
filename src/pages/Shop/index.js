import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import { Container, ProductCard, Sidebar } from 'components'
import Product1 from '../../assets/Product/watch1.webp'
import Product2 from '../../assets/Product/watch2.webp'

const mock = [
	{
		image: Product1,
		name: 'Egestas dapibus',
		price: '28.00$',
	},
	{
		image: Product2,
		name: 'Neque porttitor',
		price: '28.00$',
	},
	{
		image: Product1,
		name: 'Egestas dapibus',
		price: '28.00$',
	},
	{
		image: Product2,
		name: 'Neque porttitor',
		price: '28.00$',
	},
	{
		image: Product1,
		name: 'Egestas dapibus',
		price: '28.00$',
	},
	{
		image: Product2,
		name: 'Neque porttitor',
		price: '28.00$',
	},
	{
		image: Product1,
		name: 'Egestas dapibus',
		price: '28.00$',
	},
	{
		image: Product2,
		name: 'Neque porttitor',
		price: '28.00$',
	},
]

const Shop = () => {
	return (
		<Container>
			<span className='page'>Shop</span>
			<div className='site__map'>
				<Link className='link__page' to='/'>
					<span className='site'>Home</span>
				</Link>
				<span className='slash'>/</span>
				<span className='site'>Shop</span>
			</div>
			<div className='shop__container'>
				<div className='sidebar'>
					<Sidebar />
				</div>
				<div className='product__container'>
					{mock.map((item) => (
						<ProductCard image={item.image} name={item.name} price={item.price} />
					))}
				</div>
			</div>
		</Container>
	)
}

export default Shop
