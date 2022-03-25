import React from 'react'
import { Container, BlogCard } from 'components'
import InstagramIcon from '@mui/icons-material/Instagram'
import Banner_1 from 'assets/home/banner_1.jpeg'
import Banner_2 from 'assets/home/banner_2.jpeg'
import Promo_1 from 'assets/home/banner_small_1.webp'
import Promo_2 from 'assets/home/banner_small_2.webp'
import Promo_3 from 'assets/home/banner_small_3.webp'
import Blog_1 from 'assets/home/blog_1.webp'
import Blog_2 from 'assets/home/blog_2.webp'
import Blog_3 from 'assets/home/blog_3.webp'
import medium_banner from 'assets/home/medium_banner.webp'
import medium_banner_2 from 'assets/home/medium_banner_2.webp'
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
				<div className='line' />
			</Container>
			<div className='bannner__area'>
				<span className='banner__label'>Sale Off 20% All Products</span>
				<span className='banner__name'>New Trending Collection</span>
				<span className='banner__text'>We Believe That Good Design Always In Season</span>
				<div className='btn-now'>Shop Now</div>
			</div>
			<Container>
				<div className='blog__form'>
					<span className='form'>From Our Blog</span>
					<div className='form__line' />
				</div>
				<Slider
					autoplay={true}
					dots={false}
					infinite={true}
					slidesToScroll={1}
					slidesToShow={3}
					autoplaySpeed={3000}
					pauseOnHover={false}
				>
					<BlogCard
						image={Blog_1}
						name='Kiet Lac'
						date='28 Sep 2022'
						title='Mollis aliquet ante, suscipit non eget  nulla libero, vestibulum condimentum.'
						short='Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula.'
					/>
					<BlogCard
						image={Blog_2}
						name='Vi Dom'
						date='28 Sep 2022'
						title='Mollis aliquet ante, suscipit non eget  nulla libero, vestibulum condimentum.'
						short='Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula.'
					/>
					<BlogCard
						image={Blog_3}
						name='Hoan Hat Hay'
						date='28 Sep 2022'
						title='Mollis aliquet ante, suscipit non eget  nulla libero, vestibulum condimentum.'
						short='Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula.'
					/>
					<BlogCard
						image={Blog_3}
						name='Hoan Hat Hay'
						date='28 Sep 2022'
						title='Mollis aliquet ante, suscipit non eget  nulla libero, vestibulum condimentum.'
						short='Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula.'
					/>
				</Slider>
			</Container>
			<div className='btn-insta'>
				<InstagramIcon />
				<span className='insta__text'>Instagram</span>
			</div>
			<div className='new__sletter'>
				<span className='new__sletter__head'>Join Our Newsletters Now!</span>
				<span className='new__sletter__text'>
					Typi non habent claritatem insitam est usus legentis in qui facit eorum claritatem,
					investigationes demonstraverunt lectores legere me lius quod legunt saepius.
				</span>
				<div className='new__sletter__group'>
					<input
						type='email'
						className='new__sletter__email'
						placeholder='Enter your email address here...'
					></input>
					<div className='new__sletter__submit__btn'>Subscribe</div>
				</div>
			</div>
			<div className='promo'>
				<div className='promo__side'>
					<img src={medium_banner} alt='Promo' />
					<div className='promo__text'>
						<span className='promo__title'>New Arrivals 2022</span>
						<span className='promo__name'>Luxury Perfume 2022</span>
						<span className='promo__price'>Men's And Woman's Accessories</span>
						<span className='promo__link'>Discover Now</span>
					</div>
				</div>
				<div className='promo__side'>
					<img src={medium_banner_2} alt='Promo' />
					<div className='promo__text'>
						<span className='promo__title'>Trending Products 2022</span>
						<span className='promo__name'>Maurice Lacroix Watch</span>
						<span className='promo__price'>Only From $162.00 - Sale 20% Off</span>
						<span className='promo__link'>Discover Now</span>
					</div>
				</div>
			</div>
			<div className='line' />
		</div>
	)
}

export default HomePage
