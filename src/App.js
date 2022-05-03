import React from 'react'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { DataContext } from 'context/DataContext'
import { Header, Menu, Footer, Loading } from 'components'
import { Suspense, lazy } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-toastify/dist/ReactToastify.css'

const HomePage = lazy(() => import('./pages/Home'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const SignInUp = lazy(() => import('./pages/SignInUp'))
const Cart = lazy(() => import('./pages/Cart'))
const Wishlist = lazy(() => import('./pages/Wishlist'))
const MyAccount = lazy(() => import('./pages/MyAccount'))
const FAQ = lazy(() => import('./pages/FAQ'))
const NotFound = lazy(() => import('./pages/404'))
const Blog = lazy(() => import('./pages/BLog'))
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const Shop = lazy(() => import('./pages/Shop'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Checkout = lazy(() => import('./pages/Checkout'))
const queryClient = new QueryClient()

function App() {
	const [cart, setCart] = React.useState([])
	const [count, setCount] = React.useState(0)
	return (
		<DataContext.Provider value={{ cart, setCart, count, setCount }}>
			<QueryClientProvider client={queryClient}>
				<Router>
					<Suspense fallback={<Loading />}>
						<Header />
						<div className='line' />
						<Menu />
						<div className='line' />
						<Switch>
							<Route component={HomePage} path='/' exact />
							<Route component={AboutUs} path='/about-us' exact />
							<Route component={ContactUs} path='/contact-us' exact />
							<Route component={SignInUp} path='/login-register' exact />
							<Route component={Cart} path='/cart' exact />
							<Route component={Wishlist} path='/wishlist' exact />
							<Route component={MyAccount} path='/my-account' exact />
							<Route component={FAQ} path='/faq' exact />
							<Route component={NotFound} path='/not-found' exact />
							<Route component={Blog} path='/blog' exact />
							<Route component={BlogDetail} path='/blog/blog-detail' exact />
							<Route component={MyAccount} path='/my-account' exact />
							<Route component={Shop} path='/shop' exact />
							<Route component={ProductDetail} path='/detail/:id' exact />
							<Route component={Checkout} path='/checkout' exact />
						</Switch>
						<Footer />
						<ToastContainer
							position='bottom-right'
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
						/>
					</Suspense>
				</Router>
			</QueryClientProvider>
		</DataContext.Provider>
	)
}

export default App
