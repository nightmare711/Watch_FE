import React from 'react'
import { Container } from 'components'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './styles.scss'

const mock = [
	{
		date: 'September 17, 2020',
		status: 'Processing',
		total: '$25.00 for 1 item',
	},
	{
		date: 'September 17, 2022',
		status: 'Processing',
		total: '$100.00 for 1 item',
	},
]

const MyAccount = () => {
	return (
		<Container>
			<span className='page'>My Account</span>
			<div className='site__map'>
				<Link className='site__link' to='/'>
					<span className='site__home'>Home</span>
				</Link>
				<span className='slash'>/</span>
				<Link className='site__link'>
					<span className='site'>My Account</span>
				</Link>
			</div>
			<Tabs className='tabs'>
				<div className='tab__list'>
					<TabList className='list'>
						<Tab selectedTabClassName='selected' className='tab'>
							Dashboard
						</Tab>
						<Tab className='tab'>Orders</Tab>
						<Tab className='tab'>Address</Tab>
						<Tab className='tab'>Account Details</Tab>
						<Tab className='tab'>Logout</Tab>
					</TabList>
				</div>

				<div className='tab__content'>
					<TabPanel className='tab__panel'>
						<div className='tab__detail'>
							<span className='text'>
								Hello John (not John?) <Link className='internal__link'>Log out</Link>
							</span>
							<span className='text'>
								From your account dashboard. you can easily check & view your{' '}
								<Link className='internal__link'>recent orders</Link>, manage your{' '}
								<Link className='internal__link'>shipping and billing addresses</Link> and{' '}
								<Link className='internal__link'>edit your password and account details</Link>.
							</span>
						</div>
					</TabPanel>
					<TabPanel className='tab__panel'>
						<div className='orders'>
							<table className='table__container'>
								<tr>
									<th className='head'>ORDER</th>
									<th className='head'>DATE</th>
									<th className='head'>STATUS</th>
									<th className='head'>TOTAL</th>
									<th className='head'>ACTION</th>
								</tr>
								{mock.map((item) => (
									<tr>
										<td className='item'>1</td>
										<td className='item'>{item.date}</td>
										<td className='item'>{item.status}</td>
										<td className='item'>{item.total}$</td>
										<td className='item'>
											<div className='btn'>View</div>
										</td>
									</tr>
								))}
							</table>
						</div>
					</TabPanel>
					<TabPanel className='tab__panel'>
						<div className='tab__detail'>
							<span className='text mb-10'>
								The following addresses will be used on the checkout page by default.
							</span>
							<span className='m-20'>BILLING ADDRESS</span>
							<div className='btn left'>Edit</div>
							<span className='text mb-10'>
								The following addresses will be used on the checkout page by default.
							</span>
							<span className='m-20'>Shipping ADDRESS</span>
							<div className='btn left'>Edit</div>
						</div>
					</TabPanel>
					<TabPanel className='tab__panel'>
						<div className='tab__detail background'>
							<span className='text'>First Name</span>
							<input type='text' className='input w-50' placeholder='First Name' />
							<span className='text'>Last Name</span>
							<input type='text' className='input w-50' placeholder='Last Name' />
							<span className='text'>Email Address</span>
							<input type='text' className='input' placeholder='Email Address' />
							<span className='title'>PASSWORD CHANGE</span>
							<span className='text'>Current Password (leave blank to leave unchanged)</span>
							<input type='text' className='input' placeholder='Current Password' />
							<span className='text'>New Password (leave blank to leave unchanged)</span>
							<input type='text' className='input' placeholder='New Password' />
							<span className='text'>Confirm Password</span>
							<input type='text' className='input' placeholder='Confirm Password' />
							<div className='btn left mt-20'>Save Changes</div>
						</div>
					</TabPanel>
				</div>
			</Tabs>
		</Container>
	)
}

export default MyAccount
