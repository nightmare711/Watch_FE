import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
const mock = [
	{
		title: 'Home',
		child: [],
		path: '/',
	},
	{
		title: 'Blog',
		child: [],
		path: '/blog',
	},
	{
		title: 'Shop',
		child: [],
		path: '/shop',
	},
	{
		title: 'About Us',
		child: [],
		path: '/about-us',
	},
	{
		title: 'Contact Us',
		child: [],
		path: '/contact-us',
	},
	{
		title: 'FAQ',
		child: [],
		path: '/FAQ',
	},
]

export const Menu = () => {
	return (
		<div className='menu'>
			<ul className='menu__cotainer'>
				{mock.map((item) => (
					<Link className='link' to={item.path}>
						<li className='item'>{item.title}</li>
					</Link>
				))}
			</ul>
		</div>
	)
}
