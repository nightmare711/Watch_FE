import React from 'react'
import Banner_1 from '../../assets/AboutUs/banner_1.webp'
import Banner_2 from '../../assets/AboutUs/banner_2.webp'
import icon_1 from '../../assets/AboutUs/icon_1.webp'
import icon_2 from '../../assets/AboutUs/icon_2.webp'
import icon_3 from '../../assets/AboutUs/icon_3.webp'
import icon_4 from '../../assets/AboutUs/icon_4.webp'
import CountUp from 'react-countup'
import ProgressBar from '@ramonak/react-progress-bar'
import './styles.scss'

const AboutUs = () => {
	return (
		<div className='about__us'>
			<span className='page'>About Us</span>
			<div className='site__map'>
				<span className='site'>Home</span>
				<span className='slash'>/</span>
				<span className='site'>About</span>
			</div>
			<div className='about__text'>
				<img src={Banner_1} alt='About Us' />
				<div className='about__text__container'>
					<span className='heading'>About Us</span>
					<span className='text'>
						Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
						vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
						dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
						facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
						doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam,
						est usus legentis in iis qui facit eorum claritatem.
					</span>
					<div className='view-btn'>View Work</div>
				</div>
			</div>
			<div className='about__achieve'>
				<div className='item'>
					<img src={icon_1} alt='Icon' />
					<div className='item__achive'>
						<CountUp className='counter' end={2022} duration={3} />
						<span className='achive'>Happy Customer</span>
					</div>
				</div>
				<div className='item'>
					<img src={icon_2} alt='Icon' />
					<div className='item__achive'>
						<CountUp className='counter' end={145} duration={3} />
						<span className='achive'>Awards won</span>
					</div>
				</div>
				<div className='item'>
					<img src={icon_3} alt='Icon' />
					<div className='item__achive'>
						<CountUp className='counter' end={696} duration={3} />
						<span className='achive'>Hours worked</span>
					</div>
				</div>
				<div className='item'>
					<img src={icon_4} alt='Icon' />
					<div className='item__achive'>
						<CountUp className='counter' end={69} duration={3} />
						<span className='achive'>Complete project</span>
					</div>
				</div>
			</div>
			<div className='skill__container'>
				<div className='skill'>
					<span className='heading'>We have skills to show</span>
					<div className='skill__progress'>
						<div className='percent'>
							<span className='number'>90%</span>
						</div>
						<div className='progress'>
							<ProgressBar
								bgColor='#444444'
								completed={90}
								borderRadius='3px'
								customLabel='HTML/CSS'
								labelAlignment='left'
								labelSize='10px'
							/>
						</div>
					</div>
					<div className='skill__progress'>
						<div className='percent'>
							<span className='number'>85%</span>
						</div>
						<div className='progress'>
							<ProgressBar
								bgColor='#444444'
								completed={85}
								borderRadius='3px'
								customLabel='WORDPRESS'
								labelAlignment='left'
								labelSize='10px'
							/>
						</div>
					</div>
					<div className='skill__progress'>
						<div className='percent'>
							<span className='number'>90%</span>
						</div>
						<div className='progress'>
							<ProgressBar
								bgColor='#444444'
								completed={90}
								borderRadius='3px'
								customLabel='TYPOGRAPHY'
								labelAlignment='left'
								labelSize='10px'
							/>
						</div>
					</div>
					<div className='skill__progress'>
						<div className='percent'>
							<span className='number'>95%</span>
						</div>
						<div className='progress'>
							<ProgressBar
								bgColor='#444444'
								completed={95}
								borderRadius='3px'
								customLabel='BRANDING'
								labelAlignment='left'
								labelSize='10px'
							/>
						</div>
					</div>
				</div>
				<img src={Banner_2} alt='Banner' />
			</div>
		</div>
	)
}

export default AboutUs
