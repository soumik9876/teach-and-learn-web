import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArticleCard from "../../components/article/ArticleCard";

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

export default function VideoWatch() {
	const breadcrumbs = [
		<Link underline='hover' key='1' color='inherit' href='/' onClick={handleClick}>
			Next JS
		</Link>,
		<Typography key='3' color='text.primary'>
			Lesson 1.0
		</Typography>,
	];
	const Article = () => {
		return (
			<div>
				<img
					src='https://res.cloudinary.com/practicaldev/image/fetch/s--0ca-E1mS--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xedb93rflxd23rgft0y2.jpeg'
					alt=''
					className='h-[300px] w-full object-cover'
				/>
				<div className='px-8'>
					<div className='text-4xl font-medium text-black mt-8'>Introduction to Next Js</div>
					<div className='flex justify-between mt-2'>
						<div>Next Js Course</div>
						<div>3rd March, 2022</div>
					</div>
					<div className='mt-10 pb-10'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
						vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
						quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
						similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
						molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
						sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
						Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
						sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
						error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis
						iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
						fugit doloribus tenetur .
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className=' bg-c_background flex flex-wrap py-8 container mx-auto'>
			<div className='flex-1'>
				<div className='bg-white pt-5 rounded-xl w-full  lg:w-11/12 shadow-2xl mx-auto'>
					<Breadcrumbs
						className='mb-5 px-8'
						separator={<NavigateNextIcon fontSize='small' />}
						aria-label='breadcrumb'
					>
						{breadcrumbs}
					</Breadcrumbs>
					<div className='w-full'>
						<Article />
					</div>
				</div>
			</div>
			<div className='md:flex-[.4] flex-1 mt-20 md:mt-0'>
				<div className='px-10'>
					<div className='text-lg font-medium mb-2'>More Articles</div>
					<hr />
					<div className='mt-3'>
						<ArticleCard></ArticleCard>
						<ArticleCard></ArticleCard>
						<ArticleCard></ArticleCard>
					</div>
				</div>
			</div>
		</div>
	);
}
