import React from 'react'
import { MyMap, Container } from 'components'

import './styles.scss'

const ContactUs = () => {
	return (
		<div className='contact__us'>
			<span className='name'>Contact Us</span>
			<div className='site__map'>
				<span className='site'>Home</span>
				<span className='slash'>/</span>
				<span className='site'>Contact</span>
			</div>
			<MyMap />
			<Container>
				<div className='submit__contact'>
					<span className='heading__text'>Tell us about your project</span>
					<span className='text'>Your Name *</span>
					<input className='textbox'></input>
					<span className='text'>Your Email *</span>
					<input className='textbox'></input>
					<span className='text'>Enquiry *</span>
					<textarea className='textarea' type='text'></textarea>
					<div className='send-btn'>Send Email</div>
				</div>
			</Container>
		</div>
	)
}

export default ContactUs
