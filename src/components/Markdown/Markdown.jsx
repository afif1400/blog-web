import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import sanityClient from '../../client';

const Markdown = () => {
	const [blog, setBlog] = useState(null);

	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
			title,
			_id,
			slug,
			mainImage{
				asset->{
					_id,
					url
				}
			},
			body,
			"name": author->name,
			"authorImage": author->image
		}`
			)
			.then((data) => setBlog(data[0]))
			.catch(console.error);
	}, [slug]);

	const mark = blog ? blog.body[0].children[0].text : '';

	const components = {
		code({ node, inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || '');
			return !inline && match ? (
				<SyntaxHighlighter
					style={atomDark}
					language={match[1]}
					PreTag='div'
					children={String(children).replace(/\n$/, '')}
					{...props}
				/>
			) : (
				<code className={className} {...props} />
			);
		},
	};

	function ImageRenderer(props) {
		const imageSrc = props.src;
		const altText = props.alt;
		return (
			<figure className='wp-block-image  is-resized'>
				<img
					data-loading='lazy'
					data-orig-file={imageSrc}
					data-medium-file={imageSrc + '?w=300'}
					data-large-file={imageSrc + '?w=750'}
					src={imageSrc}
					alt={altText}
					srcSet={
						imageSrc +
						'?w=1024 1024w, ' +
						imageSrc +
						'?w=705 705w, ' +
						imageSrc +
						'?w=150 150w, ' +
						imageSrc +
						'?w=300 300w, ' +
						imageSrc +
						'?w=768 768w, ' +
						imageSrc +
						'?1248w'
					}
					sizes='(max-width: 707px) 200vw, 707px'
				/>
				<p style={{ textAlign: 'center' }}>{altText}</p>
			</figure>
		);
	}

	return (
		<div>
			<ReactMarkdown
				rehypePlugins={[rehypeKatex]}
				components={components}
				children={mark}
				escapeHtml={false}
				renderers={{ image: ImageRenderer }}
			></ReactMarkdown>
		</div>
	);
};

export default Markdown;
