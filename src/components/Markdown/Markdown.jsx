import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import sanityClient from '../../client';

const Markdown = () => {
	const [blog, setBlog] = useState('');

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
			.then((data) => {
				setBlog(data[0]);
			})
			.catch(console.error);
	}, [slug]);

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

	return (
		<div>
			{blog && (
				<ReactMarkdown
					rehypePlugins={[rehypeKatex]}
					components={components}
					children={blog.body[0].children[0].text}
					escapeHtml={false}
				></ReactMarkdown>
			)}
		</div>
	);
};

export default Markdown;
