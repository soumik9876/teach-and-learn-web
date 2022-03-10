import React from "react";
import Link from "next/link"
import {ROUTES} from "../../core/interfaces/routes";
const ArticleCard = ({article}) => {
	return (
		<>
			<Link href={ROUTES.article(article.id)} passHref>
			<div className='bg-white w-96 my-8 h-32 rounded-2xl shadow-xl flex p-5 cursor-pointer duration-150 hover:scale-105'>
				<img src={`${article.banner_link}`} className='w-28 object-cover' alt='' />
				<div className='px-3 flex flex-col justify-between'>
					<h1 className='text-lg font-semibold'>{article.title}</h1>
					<p className='text-xs overflow-hidden'>
						{article.content}
					</p>
				</div>
			</div>
			</Link>
		</>
	);
};

export default ArticleCard;
