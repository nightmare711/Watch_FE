import React from 'react'
import { Container } from 'components'
import Banner_1 from 'assets/home/banner_1.jpeg'
import Banner_2 from 'assets/home/banner_2.jpeg'
import Promo_1 from 'assets/home/banner_small_1.webp'
import Promo_2 from 'assets/home/banner_small_2.webp'
import Promo_3 from 'assets/home/banner_small_3.webp'
import Slider from 'react-slick'
import './styles.scss'

const HomePage = () => {
	return (
		<div className='homepage'>
			<Slider
				autoplay={true}
				dots={true}
				infinite={true}
				slidesToScroll={1}
				slidesToShow={1}
				autoplaySpeed={3000}
				pauseOnHover={false}
			>
				<div className='homepage__banner'>
					<img src={Banner_1} alt='Banner' />
					<div className='homepage__banner--text'>
						<span className='subtitle'>Exclusive Offer -20% Off This Week</span>
						<span className='title'>H-Vault Classico</span>
						<span className='description'>
							H-Vault Watches Are A Lot Like Classic American Muscle Cars - Expect For The American
							Part That Is.{' '}
						</span>
						<span className='container-price'>
							Starting At: <span className='price'>$1.499.00</span>
						</span>
						<div className='btn-now'>Shop Now</div>
					</div>
				</div>
				<div className='homepage__banner'>
					<img src={Banner_2} alt='Banner' />
					<div className='homepage__banner--text'>
						<span className='subtitle'>Exclusive Offer -20% Off This Week</span>
						<span className='title'>H-Vault Classico</span>
						<span className='description'>
							H-Vault Watches Are A Lot Like Classic American Muscle Cars - Expect For The American
							Part That Is.
						</span>
						<span className='container-price'>
							Starting At: <span className='price'>$1.499.00</span>
						</span>
						<div className='btn-now'>Shop Now</div>
					</div>
				</div>
			</Slider>
			<Container>
				<div className='promo'>
					<div className='promo__item'>
						<img src={Promo_1} alt='Promo' />
						<div className='promo__item--text'>
							<span className='content'>Design Creative</span>
							<span className='title'>Modern And Clean</span>
							<span className='content'>From $60.99 - Sale 20%</span>
						</div>
					</div>
					<div className='promo__item'>
						<img src={Promo_2} alt='Promo' />
						<div className='promo__item--text'>
							<span className='content'>Design Creative</span>
							<span className='title'>Modern And Clean</span>
							<span className='content'>From $60.99 - Sale 20%</span>
						</div>
					</div>
					<div className='promo__item'>
						<img src={Promo_3} alt='Promo' />
						<div className='promo__item--text'>
							<span className='content'>Design Creative</span>
							<span className='title'>Modern And Clean</span>
							<span className='content'>From $60.99 - Sale 20%</span>
						</div>
					</div>
				</div>
				<span className='tweet'>
					Check out "Alice - Multipurpose Responsive #Magento #Theme" on #Envato by @Plazathemes
					#Themeforest:{' '}
					<a href='https://watch-fe.vercel.app/' target='_blank' rel='noreferrer'>
						https://t.co/DNdhAwzm88
					</a>
				</span>
			</Container>
			<div className='line' />
		</div>
	)
}

export default HomePage
