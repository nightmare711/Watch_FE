import React from 'react'
import { Container } from 'components'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'
import './styles.scss'

const FAQ = () => {
	return (
		<Container>
			<span className='page'>FAQ</span>
			<div className='site__map'>
				<Link className='link__page' to='/'>
					<span className='site'>Home</span>
				</Link>
				<span className='slash'>/</span>
				<span className='site'>FAQ</span>
			</div>
			<div className='intro__container'>
				<span className='intro'>
					Below are frequently asked questions, you may find the answer for yourself
				</span>
				<span className='intro__text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus
					metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus
					mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor sem, ac fermentum
					nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec interdum nunc
					purus, vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.
				</span>
			</div>
			<div className='accordions'>
				<Accordion className='accordion'>
					<AccordionSummary
						className='accordion-btn'
						expandIcon={<ExpandMoreIcon className='icon' />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography className='text'>Donec mattis finibus elit ut tristique?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu
							porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra
							lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion className='accordion'>
					<AccordionSummary
						className='accordion-btn'
						expandIcon={<ExpandMoreIcon className='icon' />}
						aria-controls='panel2a-content'
						id='panel2a-header'
					>
						<Typography className='text'>
							Vestibulum a lorem placerat, porttitor urna vel?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu
							porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra
							lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion className='accordion'>
					<AccordionSummary
						className='accordion-btn'
						expandIcon={<ExpandMoreIcon className='icon' />}
						aria-controls='panel3a-content'
						id='panel3a-header'
					>
						<Typography className='text'>
							Aenean elit orci, efficitur quis nisl at, accumsan?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
							ex, sit amet blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion className='accordion'>
					<AccordionSummary
						className='accordion-btn'
						expandIcon={<ExpandMoreIcon className='icon' />}
						aria-controls='panel4a-content'
						id='panel4a-header'
					>
						<Typography className='text'>
							Pellentesque habitant morbi tristique senectus et netus?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu
							porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra
							lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion className='accordion'>
					<AccordionSummary
						className='accordion-btn'
						expandIcon={<ExpandMoreIcon className='icon' />}
						aria-controls='panel5a-content'
						id='panel5a-header'
					>
						<Typography className='text'>
							Aenean elit orci, efficitur quis nisl at, accumsan?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu
							porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra
							lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion className='accordion'>
					<AccordionSummary
						className='accordion-btn'
						expandIcon={<ExpandMoreIcon className='icon' />}
						aria-controls='panel6a-content'
						id='panel6a-header'
					>
						<Typography className='text'>Nam pellentesque aliquam metus?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu
							porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra
							lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion className='accordion'>
					<AccordionSummary
						className='accordion-btn'
						expandIcon={<ExpandMoreIcon className='icon' />}
						aria-controls='panel7a-content'
						id='panel7a-header'
					>
						<Typography className='text'>Aenean elit orci, efficitur quis nisl at?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu
							porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra
							lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion className='accordion'>
					<AccordionSummary
						className='accordion-btn'
						expandIcon={<ExpandMoreIcon className='icon' />}
						aria-controls='panel8a-content'
						id='panel8a-header'
					>
						<Typography className='text'>
							Morbi gravida, nisi id fringilla ultricies, elit lorem?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu
							porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra
							lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion className='accordion'>
					<AccordionSummary
						className='accordion-btn'
						expandIcon={<ExpandMoreIcon className='icon' />}
						aria-controls='panel9a-content'
						id='panel9a-header'
					>
						<Typography className='text'>
							Pellentesque habitant morbi tristique senectus et netus?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu
							porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra
							lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>
		</Container>
	)
}
export default FAQ
