import { ToastContainer } from 'react-toastify'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Header, Menu } from 'components'
import { Suspense, lazy } from 'react'

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
