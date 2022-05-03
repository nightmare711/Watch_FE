import React from 'react'
import { Container } from 'components'
import Mock_1 from '../../assets/Cart/mock_1.webp'
import Mock_2 from '../../assets/Cart/mock_2.webp'
import { Link } from 'react-router-dom'
import enhance from 'hoc/withCart'
import './styles.scss'

const mock = [
	{
		image: Mock_1,
		name: 'Egestas dapibus',
		unit: '28.00',
	},
	{
		image: Mock_2,
		name: 'Neque porttitor',
		unit: '28.00',
	},
]

const Cart = ({ cart, price, onRemoveFromCart }) => {
	return (
		<Container>
			<span className='page'>Your Cart</span>
			<div className='site__map'>
				<Link className='link__page' to='/'>
					<span className='site'>Home</span>
				</Link>
				<span className='slash'>/</span>
				<span className='site'>Cart</span>
			</div>
			<div className='cart'>
				<table className='table__container'>
					<tr>
						<th className='head'>Remove</th>
						<th className='head'>Image</th>
						<th className='head'>Product name</th>
						<th className='head'>Unit price</th>
						<th className='head'>Quantity</th>
						<th className='head'>Total</th>
					</tr>
					{cart.map((item) => (
						<tr>
							<td onClick={() => onRemoveFromCart(item)} className='item'>
								x
							</td>
							<td className='item'>
								<img className='product__img' src={item?.imgPath[0]} alt='Product Image' />
							</td>
							<td className='item'>
								<Link to={`/detail/${item._id}`}>{item?.name}</Link>
							</td>
							<td className='item'>{item?.price}$</td>
							<td className='item'>
								<input className='quantity' type='number' value={item?.amount} />
							</td>
							<td className='item'>{item?.price * item?.amount}.00$</td>
						</tr>
					))}
				</table>
				<div className='coupon'>
					<input className='coupon__input' type='text' placeholder='Coupon Code' />
					<div className='btn'>Apply Coupon</div>
				</div>

				<div className='update'>
					<div className='btn'>Update Cart</div>
				</div>
			</div>
			<div className='total'>
				<span className='total__head'>Cart totals</span>
				<div className='total__item'>
					<span>Subtotal</span>
					<span className='total__price'>${price}.00</span>
				</div>
				<div className='total__item'>
					<span>Shipping</span>
					<span className='total__price'>$20.00</span>
				</div>
				<div className='total__item'>
					<span>Total</span>
					<span className='total__price'>${price + 20}.00</span>
				</div>
				<Link to='/checkout'>
					<div className='btn'>Proceed To Checkout</div>
				</Link>
			</div>
		</Container>
	)
}

export default enhance(Cart)
