import React from 'react'
import { Container } from 'components'
import { Search, Favorite, ShoppingCart } from '@mui/icons-material'
import Logo from 'assets/logo.webp'
import Icon_Phone from 'assets/home/icon__phone.webp'
import { Link } from 'react-router-dom'
import enhance from '../../hoc/withCart'
import './styles.scss'

const HeaderComponent = ({ price }) => {
	return (
		<Container>
			<div className='header'>
				<div className='header__phone'>
					<img src={Icon_Phone} alt='Phone' />
					<div className='header__phone--text'>
						<span>Call Us</span>
						<span>Free Support: (012) 800 456 789</span>
					</div>
				</div>
				<img className='header__logo' src={Logo} alt='Logo' />
				<div className='header__icons'>
					<div className='icon-container'>
						<Search />
					</div>
					<div className='icon-container'>
						<Favorite />
					</div>
					<Link to='/cart'>
						<div className='icon-container chart'>
							<ShoppingCart />
							<div className='total-price'>{price}$</div>
						</div>
					</Link>
				</div>
			</div>
		</Container>
	)
}

export const Header = enhance(HeaderComponent)
