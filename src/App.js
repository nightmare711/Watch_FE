import { ToastContainer } from 'react-toastify'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Header, Menu, Footer } from 'components'
import { Suspense, lazy } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const HomePage = lazy(() => import('./pages/Home'))

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
