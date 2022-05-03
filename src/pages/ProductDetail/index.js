import React from 'react'
import { Container } from 'components'
import { Link } from 'react-router-dom'
import ImageGallery from 'react-image-gallery'
import StarIcon from '@mui/icons-material/Star'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import BigWatch1 from '../../assets/Watches/BigWatch1.webp'
import BigWatch2 from '../../assets/Watches/BigWatch2.webp'
import BigWatch3 from '../../assets/Watches/BigWatch3.webp'
import BigWatch4 from '../../assets/Watches/BigWatch4.webp'
import SmallWatch1 from '../../assets/Watches/SmallWatch1.webp'
import SmallWatch2 from '../../assets/Watches/SmallWatch2.webp'
import SmallWatch3 from '../../assets/Watches/SmallWatch3.webp'
import SmallWatch4 from '../../assets/Watches/SmallWatch4.webp'
import './styles.scss'

const images = [
	{
		original: BigWatch1,
		thumbnail: SmallWatch1,
	},
	{
		original: BigWatch2,
		thumbnail: SmallWatch2,
	},
	{
		original: BigWatch3,
		thumbnail: SmallWatch3,
	},
	{
		original: BigWatch4,
		thumbnail: SmallWatch4,
	},
]

const ProductDetail = () => {
	return (
		<Container>
			<span className='name'>Product Details</span>
			<div className='site__map'>
				<Link className='link__page' to='/'>
					<span className='site'>Home</span>
				</Link>
				<span className='slash'>/</span>
				<Link className='link__page' to='/blog'>
					<span className='site'>Shop</span>
				</Link>
				<span className='slash'>/</span>
				<span className='site last'>Product Detail</span>
			</div>
			<div className='detail__container'>
				<div className='product-image'>
					<ImageGallery
						className='image-gallery'
						items={images}
						showPlayButton={false}
						disableSwipe={false}
						showFullscreenButton={false}
						showNav={false}
					/>
				</div>
				<div className='product-info'>
					<span className='product-name'>Aliquam Lobortis</span>
					<div className='product-rating'>
						<StarIcon className='star' />
						<StarIcon className='star' />
						<StarIcon className='star' />
						<StarIcon className='star' />
						<StarOutlineIcon className='star' />
					</div>
					<span className='text'>Brand: Apple</span>
					<span className='text'>Product Code: Watches</span>
					<span className='text'>Reward Points: 600</span>
					<span className='text'>Availability: In Stock</span>
					<span className='price'>$550.00</span>
					<div className='line'></div>
					<div className='stock'>
						<CheckCircleIcon className='icon' />
						<span className='text'>200 in Stock</span>
					</div>
					<div className='qty'>
						<span className='text'>Qty:</span>
						<input className='quantity' type='number' />
						<div className='btn-add'>Add To Cart</div>
					</div>
					<span className='wishlist'>+Add to wishlist</span>
					<span className='tag'>Tags: Sport, Luxury</span>
				</div>
			</div>
		</Container>
	)
}
export default ProductDetail
