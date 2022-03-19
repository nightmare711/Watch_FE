import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import './styles.scss'

const mock = [
	{
		title: 'Home',
		child: [],
	},
	{
		title: 'Blog',
		child: [],
	},
	{
		title: 'Shop',
		child: [],
	},
	{
		title: 'About Us',
		child: [],
	},
	{
		title: 'Contact Us',
		child: [],
	},
]

export const Menu = () => {
	return (
		<div className='menu'>
			<ul className='menu__cotainer'>
				{mock.map((item) => (
					<li className='item'>{item.title}</li>
				))}
			</ul>
		</div>
	)
}
