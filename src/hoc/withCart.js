import React from 'react'
import { DataContext } from 'context/DataContext'
import { toast } from 'react-toastify'

const withCart = (WrappedComponent) => (props) => {
	const data = React.useContext(DataContext)
	const [price, setPrice] = React.useState(0)
	const [cartOrder, setCartOrder] = React.useState([])
	const onAddToCart = (product, amount) => {
		const cart = data.cart
		const indexOfProduct = cart.findIndex((item) => item._id === product._id)
		if (indexOfProduct > -1) {
			cart[indexOfProduct].amount += parseInt(amount)
		} else {
			cart.push({ ...product, amount: parseInt(amount) })
		}
		data.setCount(data.count + 1)
		toast.success('Added product to cart')
	}
	const onRemoveFromCart = (product) => {
		const cart = data.cart
		const indexOfProduct = cart.findIndex((item) => item._id === product._id)
		if (indexOfProduct > -1) {
			cart.splice(indexOfProduct, 1)
		}
		data.setCount(data.count + 1)
		toast.success('Remove product from cart')
	}
	React.useEffect(() => {
		const cart = data.cart
		const tempCart = []
		let priceTemp = 0
		for (let i = 0; i < cart.length; i++) {
			priceTemp = priceTemp + cart[i].price * cart[i].amount
			tempCart.push({ id: cart[i]._id, amount: cart[i].amount })
		}
		setCartOrder(tempCart)
		setPrice(priceTemp)
	}, [data.count])
	return (
		<WrappedComponent
			{...{
				...props,
				cart: data.cart,
				onAddToCart,
				onRemoveFromCart,
				price,
				cartOrder,
			}}
		/>
	)
}

export default withCart
