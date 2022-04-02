import React from 'react'
import { Container } from 'components'
import './styles.scss'

const NotFound = () => {
	return (
		<Container>
			<div className='not__found__container'>
				<span className='not__found'>404</span>
				<span className='not__found__title'>OPPS! PAGE NOT BE FOUND</span>
				<span className='not__found__message'>
					Sorry but the page you are looking for does not exist, have been removed, name changed or
					is temporarity unavailable.
				</span>
				<div className='btn'>Back To Home Page</div>
			</div>
		</Container>
	)
}
export default NotFound
