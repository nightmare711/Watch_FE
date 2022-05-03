import React from 'react'
import { Container, ProductCard } from 'components'
import { Link, useParams } from 'react-router-dom'
import ImageGallery from 'react-image-gallery'
import Slider from 'react-slick'
import StarIcon from '@mui/icons-material/Star'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { useGetProduct, useGetProductById } from 'queries/useProduct'
import enhance from 'hoc/withCart'
import './styles.scss'

const ProductDetail = ({ onAddToCart }) => {
	const { id } = useParams()
	const { data: product } = useGetProductById(id)
	const { data: products } = useGetProduct()
	const [images, setImages] = React.useState([])
	const [amount, setAmount] = React.useState(1)
	React.useEffect(() => {
		const tempImages = []
		for (let i = 0; i < product?.imgPath.length; i++) {
			tempImages.push({
				original: product?.imgPath[i],
				thumbnail: product?.imgPath[i],
			})
		}
		setImages(tempImages)
	}, [product])
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
					<span className='product-name'>{product?.name}</span>
					<div className='product-rating'>
						<StarIcon className='star' />
						<StarIcon className='star' />
						<StarIcon className='star' />
						<StarIcon className='star' />
						<StarOutlineIcon className='star' />
					</div>
					<span className='text'>Brand: {product?.type}</span>
					<span className='text'>Product Code: Watches</span>
					<span className='text'>Reward Points: 600</span>
					<span className='text'>Availability: In Stock</span>
					<span className='price'>${product?.price}.00</span>
					<div className='line'></div>
					<div className='stock'>
						<CheckCircleIcon className='icon' />
						<span className='text'>{product?.quantity} in Stock</span>
					</div>
					<div className='qty'>
						<span className='text'>Qty:</span>
						<input
							onChange={(e) => setAmount(e.target.value)}
							className='quantity'
							type='number'
							defaultValue={1}
						/>
						<div onClick={() => onAddToCart(product, amount)} className='btn-add'>
							Add To Cart
						</div>
					</div>
					<span className='wishlist'>+Add to wishlist</span>
					<span className='tag'>Tags: Sport, Luxury</span>
				</div>
			</div>
			<div className='related-product'>
				<div className='title'>
					<span className='related'>Related Products</span>
					<div className='line h-10' />
				</div>
				<Slider
					autoplay={true}
					dots={false}
					infinite={true}
					slidesToScroll={1}
					slidesToShow={4}
					autoplaySpeed={3000}
					pauseOnHover={false}
					className='slider'
				>
					{products?.map((item) => (
						<ProductCard product={item} />
					))}
				</Slider>
			</div>
		</Container>
	)
}
export default enhance(ProductDetail)
