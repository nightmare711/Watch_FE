import React from 'react'
import { Container } from 'components'
import { CustomProduct, FooterMenu } from './components'
import Watch_Small from '../../assets/home/watch_small.webp'
import payment from '../../assets/home/payment.webp'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import GoogleIcon from '@mui/icons-material/Google'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './styles.scss'

export const Footer = () => {
	return (
		<div>
			<div className='line'></div>
			<Container>
				<div className='footer'>
					<div className='contact'>
						<div className='about__us'>
							<h3 className='title'>About Mirora</h3>
							<span className='text'>Address: 01, Vo Van Ngan Street, Thu Duc city, Viet Nam</span>
							<span className='text'>Phone: +84 79 467 6336</span>
							<span className='text'>Email: Contact@ProxTeam.com</span>
							<span className='text'>Fax: (012) 800 456 789</span>
							<div className='logo__container'>
								<FacebookOutlinedIcon fontSize='15px' className='logo' />
								<TwitterIcon fontSize='15px' className='logo' />
								<YouTubeIcon fontSize='15px' className='logo' />
								<InstagramIcon fontSize='15px' className='logo' />
								<GoogleIcon fontSize='15px' className='logo' />
							</div>
						</div>
						<div className='information'>
							<h3 className='title'>Information</h3>
							<span className='text hovered'>About Us</span>
							<span className='text hovered'>Delivery Information</span>
							<span className='text hovered'>Privacy Policy</span>
							<span className='text hovered'>Terms and Conditions</span>
							<span className='text hovered'>Gift Certificates</span>
							<span className='text hovered'>Contact Us</span>
						</div>
						<div className='extras'>
							<h3 className='title'>Extras</h3>
							<span className='text hovered'>Brands</span>
							<span className='text hovered'>Gift Certificates</span>
							<span className='text hovered'>Affiliate</span>
							<span className='text hovered'>Specials</span>
							<span className='text hovered'>My Account</span>
							<span className='text hovered'>Returns</span>
						</div>
						<div className='Custom__Products'>
							<h3 className='title'>Custom Products</h3>
							<CustomProduct image={Watch_Small} name='Acer Aspire E 15' price='$550.000' />
							<div className='line'></div>
							<CustomProduct image={Watch_Small} name='Acer Aspire E 15' price='$550.000' />
						</div>
					</div>
					<div className='footer__menu'>
						<FooterMenu />
					</div>
					<div className='copyright'>
						<span className='copyright__text'>
							© Mirora 2022 Made With
							<span className='love'>
								<FavoriteIcon fontSize='20px' />
							</span>
							BY <span className='team'>ProxTeam</span>
						</span>
						<img className='sponsor' src={payment} alt='Sponsor' />
					</div>
				</div>
			</Container>
		</div>
	)
}
