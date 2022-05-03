import React from 'react'
import { MyMap, Container } from 'components'
import { Link } from 'react-router-dom'
import { usePostEmail } from 'queries/useContact'

import './styles.scss'

const ContactUs = () => {
	const [info, setInfo] = React.useState({
		name: '',
		email: '',
		message: '',
	})
	const onPostEmail = usePostEmail(() =>
		setInfo({
			name: '',
			email: '',
			message: '',
		})
	)
	return (
		<div className='contact__us'>
			<span className='name'>Contact Us</span>
			<div className='site__map'>
				<Link className='link__page' to='/'>
					<span className='site'>Home</span>
				</Link>
				<span className='slash'>/</span>
				<span className='site'>Contact</span>
			</div>
			<MyMap />
			<Container>
				<div className='submit__contact'>
					<span className='heading__text'>Tell us about your project</span>
					<span className='text'>Your Name *</span>
					<input
						value={info.name}
						onChange={(e) => setInfo({ ...info, name: e.target.value })}
						className='textbox'
					></input>
					<span className='text'>Your Email *</span>
					<input
						value={info.email}
						onChange={(e) => setInfo({ ...info, email: e.target.value })}
						className='textbox'
					></input>
					<span className='text'>Enquiry *</span>
					<textarea
						value={info.message}
						onChange={(e) => setInfo({ ...info, message: e.target.value })}
						className='textarea'
						type='text'
					></textarea>
					<div onClick={() => onPostEmail(info)} className='send-btn'>
						Send Email
					</div>
				</div>
			</Container>
		</div>
	)
}

export default ContactUs
