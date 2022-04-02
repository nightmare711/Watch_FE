import { Container } from 'components'
import React from 'react'

import './styles.scss'

const SignInUp = () => {
	return (
		<Container>
			<div className='account'>
				<div className='login'>
					<span className='title'>LOGIN</span>
					<div className='login__container'>
						<span className='text'>Username or email address *</span>
						<input type='text' className='input__box' />
						<span className='text'>Password *</span>
						<input type='password' className='input__box' />
						<div className='btn__group'>
							<div className='btn'>Login</div>
							<div className='remember'>
								<input className='checkbox' type='checkbox' />
								<span className='remember__text'>Remember me</span>
							</div>
						</div>
					</div>
				</div>
				<div className='register'>
					<span className='title'>REGISTER</span>
					<div className='register__container'>
						<span className='text'>First Name *</span>
						<input type='text' className='input__box' />
						<span className='text'>Last Name *</span>
						<input type='text' className='input__box' />
						<span className='text'>Date Of Birth *</span>
						<input type='date' className='input__box' />
						<span className='text'>Gender *</span>
						<select className='input__box'>
							<option value='Male'>Male</option>
							<option value='Female'>Female</option>
						</select>
						<span className='text'>Phone number *</span>
						<input type='text' className='input__box' />
						<span className='text'>Address *</span>
						<input type='text' className='input__box' />
						<span className='text'>Email address *</span>
						<input type='text' className='input__box' />
						<span className='text'>Password *</span>
						<input type='password' className='input__box' />
						<div className='btn'>Register</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default SignInUp
