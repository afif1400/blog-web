import React, { useState, useEffect } from 'react';
import BlogCard from './Blogcard';
import sanityClient from '../../client';

const Blog = () => {
	const [blogs, setBlogs] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"]{
        title,
        abstract,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
			)
			.then((data) => setBlogs(data))
			.catch(console.error);
	}, []);

	return (
		<div>
			{blogs &&
				blogs.map((blog, index) => (
					<BlogCard
						key={index}
						mainImage={blog.mainImage}
						title={blog.title}
						slug={blog.slug}
						abstract={blog.abstract}
					/>
				))}
		</div>
	);
};

export default Blog;
