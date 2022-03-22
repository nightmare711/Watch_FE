import React from 'react'
import './styles.scss'

const menu = [
	{
		title: 'Home',
		child: [],
	},
	{
		title: 'Online Store',
		child: [],
	},
	{
		title: 'Promotion',
		child: [],
	},
	{
		title: 'Privacy Policy',
		child: [],
	},
	{
		title: 'Terms Of Use',
		child: [],
	},
	{
		title: 'Sitemap',
		child: [],
	},
	{
		title: 'Support',
		child: [],
	},
	{
		title: 'Contacts',
		child: [],
	},
]
export const FooterMenu = () => {
	return (
		<div className='footermenu'>
			<ul className='footermenu__container'>
				{menu.map((item) => (
					<li className='item'>{item.title}</li>
				))}
			</ul>
		</div>
	)
}
