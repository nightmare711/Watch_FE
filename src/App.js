import { ToastContainer } from 'react-toastify'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Header, Menu, Footer } from 'components'
import { Suspense, lazy } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const HomePage = lazy(() => import('./pages/Home'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const SignInUp = lazy(() => import('./pages/SignInUp'))
const Cart = lazy(() => import('./pages/Cart'))
const Wishlist = lazy(() => import('./pages/Wishlist'))
const MyAccount = lazy(() => import('./pages/MyAccount'))
const FAQ = lazy(() => import('./pages/FAQ'))
const NotFound = lazy(() => import('./pages/404'))

function App() {
	return (
		<Router>
			<Suspense fallback={<h1>Loading</h1>}>
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
					<Route component={NotFound} path='/404' exact />
				</Switch>
				<Footer />
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				{/* Same as */}
				<ToastContainer />
			</Suspense>
		</Router>
	)
}

export default App
