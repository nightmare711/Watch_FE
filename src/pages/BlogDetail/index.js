import { Container } from 'components'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Post, RelatedPost } from './components'
import Blog_1 from '../../assets/BlogDetail/blog1.webp'
import Blog_2 from '../../assets/BlogDetail/blog2.webp'
import Blog_3 from '../../assets/BlogDetail/blog3.webp'
import Post_1 from '../../assets/BlogDetail/post_1.webp'
import Post_2 from '../../assets/BlogDetail/post_2.webp'
import Post_3 from '../../assets/BlogDetail/post_3.webp'
import Post_4 from '../../assets/BlogDetail/post_4.webp'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import GoogleIcon from '@mui/icons-material/Google'
import './styles.scss'

const mock = [
	{
		image: Post_1,
		title: 'Gravida luctus',
		date: '26-10-18',
	},
	{
		image: Post_2,
		title: 'Gravida luctus',
		date: '26-10-18',
	},
	{
		image: Post_3,
		title: 'Gravida luctus',
		date: '26-10-18',
	},
	{
		image: Post_4,
		title: 'Gravida luctus',
		date: '26-10-18',
	},
]
const related = [
	{
		image: Blog_1,
		name: 'The Long Way To The Top',
		date: 'Sep 01 2018',
	},
	{
		image: Blog_2,
		name: 'The Long Way To The Top',
		date: 'Sep 01 2018',
	},
	{
		image: Blog_3,
		name: 'The Long Way To The Top',
		date: 'Sep 01 2018',
	},
]

const BlogDetail = () => {
	return (
		<Container>
			<span className='name'>Blog Details</span>
			<div className='site__map'>
				<span className='site'>Home</span>
				<span className='slash'>/</span>
				<span className='site'>Blog</span>
				<span className='slash'>/</span>
				<span className='site'>Blog Details</span>
			</div>
			<div className='blog__container'>
				<div className='searching'>
					<span className='title'>Search</span>
					<div className='search__box'>
						<div className='grap'>
							<input className='box' type='text' placeholder='Search...'></input>
							<SearchIcon />
						</div>
					</div>
					<span className='title'>Blog Archives</span>
					<div className='dates'>
						<span className='date'>March 2022(5)</span>
						<span className='date'>March 2021(5)</span>
						<span className='date'>March 2019(5)</span>
						<span className='date'>March 2018(5)</span>
						<span className='date'>March 2017(5)</span>
						<span className='date'>March 2016(5)</span>
						<span className='date'>March 2015(5)</span>
						<span className='date'>March 2014(5)</span>
					</div>
					<span className='title'>Recent Posts</span>
					<div className='posts'>
						{mock.map((item) => (
							<Post src={item.image} title={item.title} date={item.date} />
						))}
					</div>
					<span className='title'>Tag</span>
					<div className='tags'>
						<div className='tag'>Chilled</div>
						<div className='tag'>Dark</div>
						<div className='tag'>Euro</div>
						<div className='tag'>Fashion</div>
						<div className='tag'>Food</div>
						<div className='tag'>Hardware</div>
						<div className='tag'>Hat</div>
						<div className='tag'>Hipster</div>
						<div className='tag'>Holiday</div>
						<div className='tag'>Light</div>
					</div>
				</div>
				<div className='blog'>
					<img src={Blog_1} alt='Blog Image' className='blog__image' />
					<div className='poster'>
						<span className='posted__by'>Posted By: Admin</span>
						<span className='posted__date'>Feb 02 2016</span>
					</div>
					<span className='blog__name'>Blog Gallery Post</span>
					<span className='blog__text'>
						Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere
						libero eu augue condimentum rhoncus. Praesent ornare tortor ac ante egestas hendrerit.
						Aliquam et metus pharetra, bibendum massa nec, fermentum odio. Nunc id leo ultrices,
						mollis ligula in, finibus tortor. Mauris eu dui ut lectus fermentum eleifend.
						Pellentesque faucibus sem ante, non malesuada odio varius nec. Suspendisse potenti.
					</span>
					<span className='blog__quote'>
						Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis
						elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus.
						In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat
						metus. Sed finibus tortor eu scelerisque scelerisque.
					</span>
					<span className='blog__text'>
						Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed
						efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec
						suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit
						ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis
						suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac
						fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam
						molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae
						fringilla enim, nec ullamcorper arcu.
					</span>
					<span className='blog__text'>
						Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae
						lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam
						dignissim facilisis nisl, accumsan placerat justo ultricies vel. Vivamus finibus mi a
						neque pretium, ut convallis dui lacinia. Morbi a rutrum velit. Curabitur sagittis quam
						quis consectetur mattis. Aenean sit amet quam vel turpis interdum sagittis et eget
						neque. Nunc ante quam, luctus et neque a, interdum iaculis metus. Aliquam vel ante
						mattis, placerat orci id, vehicula quam. Suspendisse quis eros cursus, viverra urna sed,
						commodo mauris. Cras diam arcu, fringilla a sem condimentum, viverra facilisis nunc.
						Curabitur vitae orci id nulla maximus maximus. Nunc pulvinar sollicitudin molestie.
					</span>
					<span className='share'>SHARE THIS POST</span>
					<div className='logo__container'>
						<FacebookOutlinedIcon fontSize='15px' className='logo' />
						<TwitterIcon fontSize='15px' className='logo' />
						<YouTubeIcon fontSize='15px' className='logo' />
						<InstagramIcon fontSize='15px' className='logo' />
						<GoogleIcon fontSize='15px' className='logo' />
					</div>
					<span className='related'>RELATED POSTS</span>
					<div className='related__container'>
						{related.map((item) => (
							<RelatedPost src={item.image} name={item.name} date={item.date} />
						))}
					</div>
				</div>
			</div>
		</Container>
	)
}
export default BlogDetail
