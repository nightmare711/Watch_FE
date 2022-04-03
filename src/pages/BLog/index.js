import React from 'react'
import { Container, BlogCard } from 'components'
import Blog_1 from 'assets/home/blog_1.webp'
import Blog_2 from 'assets/home/blog_2.webp'
import Blog_3 from 'assets/home/blog_3.webp'
import { Link } from 'react-router-dom'
import './styles.scss'

const Blog = () => {
	return (
		<div>
			<span className='page'>Blog</span>
			<div className='site__map'>
				<Link className='site__link' to='/'>
					<span className='site'>Home</span>
				</Link>
				<span className='slash'>/</span>
				<span className='site'>Blog</span>
			</div>
			<div className='blog__container'>
				<BlogCard
					image={Blog_1}
					name='Kiet Lac'
					date='28 Sep 2022'
					title='Mollis aliquet ante, suscipit non eget  nulla libero, vestibulum condimentum.'
					short='Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula.'
				/>
				<BlogCard
					image={Blog_2}
					name='Vi Dom'
					date='28 Sep 2022'
					title='Mollis aliquet ante, suscipit non eget  nulla libero, vestibulum condimentum.'
					short='Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula.'
				/>
				<BlogCard
					image={Blog_3}
					name='Hoan Hat Hay'
					date='28 Sep 2022'
					title='Mollis aliquet ante, suscipit non eget  nulla libero, vestibulum condimentum.'
					short='Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula.'
				/>
				<BlogCard
					image={Blog_3}
					name='Hoan Hat Hay'
					date='28 Sep 2022'
					title='Mollis aliquet ante, suscipit non eget  nulla libero, vestibulum condimentum.'
					short='Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula.'
				/>
				<BlogCard
					image={Blog_1}
					name='Kiet Lac'
					date='28 Sep 2022'
					title='Mollis aliquet ante, suscipit non eget  nulla libero, vestibulum condimentum.'
					short='Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula.'
				/>
				<BlogCard
					image={Blog_2}
					name='Vi Dom'
					date='28 Sep 2022'
					title='Mollis aliquet ante, suscipit non eget  nulla libero, vestibulum condimentum.'
					short='Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula.'
				/>
			</div>
		</div>
	)
}
export default Blog
