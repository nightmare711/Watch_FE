import React from 'react'
import { Container } from 'components'
import { Link } from 'react-router-dom'
import Paypal from '../../assets/Paypal/paypal.webp'
import './styles.scss'

const Checkout = () => {
	return (
		<Container>
			<span className='page'>Checkout</span>
			<div className='site__map'>
				<Link className='link__page' to='/'>
					<span className='site'>Home</span>
				</Link>
				<span className='slash'>/</span>
				<span className='site'>Checkout</span>
			</div>
			<div className='checkout-container'>
				<div className='billing-detail'>
					<span className='title'>Billing Details</span>
					<div className='line'></div>
					<div className='input-box'>
						<span className='text'>Fullname *</span>
						<input type='text' className='input' />
					</div>
					<div className='input-box'>
						<span className='text'>Address</span>
						<input type='text' className='input' />
					</div>
					<div className='input-box'>
						<span className='text'>Phone</span>
						<input type='text' className='input' />
					</div>
					<div className='input-box'>
						<span className='text'>Email Address *</span>
						<input type='text' className='input' />
					</div>
					<div className='input-box'>
						<span className='text'>Order Notes</span>
						<textarea type='text' className='input area' />
					</div>
				</div>
				<div className='orders'>
					<div className='orders-container'>
						<span className='title'>YOUR ORDER</span>
						<div className='line'></div>
						<table>
							<tr>
								<th>Product</th>
								<th>Total</th>
							</tr>
							<tr>
								<td className='text'>Alfreds Futterkiste</td>
								<td className='text'>Maria Anders</td>
							</tr>
							<tr>
								<td className='text'>Shipping</td>
								<td className='text'>$20</td>
							</tr>
							<tr>
								<td className='text'>Order total</td>
								<td className='amount'>$56.00</td>
							</tr>
						</table>
						<div className='radio-group'>
							<input type='radio' name='order' className='radio' />
							<span className='text'>Cash On Delivery</span>
						</div>
						<div className='radio-group'>
							<input type='radio' name='order' className='radio' checked />
							<span className='text mr-20'>Paypal</span>
							<img className='paypal mr-20' src={Paypal} alt='Paypal' />
							<a
								href='https://www.paypal.com/uk/webapps/mpp/paypal-popup'
								target='_blank'
								rel='noreferrer'
								className='paypal-link'
							>
								What is paypal?
							</a>
						</div>
						<div className='btn place'>Place Order</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
export default Checkout
