import React from "react";

const ArticleCard = () => {
	return (
		<>
			<div className='bg-white w-96 my-8 h-32 rounded-2xl shadow-xl flex p-5'>
				<img src='https://colinhacks.com/nextjs_banner.png' className='w-28 object-cover' alt='' />
				<div className='px-3 flex flex-col justify-between'>
					<h1 className='text-lg font-semibold'>Next JS Router</h1>
					<p className='text-xs overflow-hidden'>
						Next js router is very easy to maintain. It makes next js more deverloper ....
					</p>
				</div>
			</div>
		</>
	);
};

export default ArticleCard;
