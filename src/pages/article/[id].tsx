import {Breadcrumbs, Link, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArticleCard from "../../components/article/ArticleCard";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {getRequest} from "../../core/fetchers";
import {REST_API_ENDPOINTS} from "../../core/interfaces/routes";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {debug_print} from "../../core/utils";
import {useRouter} from "next/router";

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

export default function ArticlePage() {
	const router = useRouter();
	const [article, setArticle] = useState<any>({});
	const [articleList, setArticleList] = useState([]);
	const serverToken = useSelector((state:RootState)=> state.auth.server_token);
	const breadcrumbs = [
		<Link underline='hover' key='1' color='inherit' href='/' onClick={handleClick}>
			Next JS
		</Link>,
		<Typography key='3' color='text.primary'>
			Lesson 1.0
		</Typography>,
	];
	useEffect(() => {
		const {id} = router.query;
		getRequest(`${REST_API_ENDPOINTS.course.v1.blog}${id}/`,serverToken).then((response)=> {
			debug_print(response)
			setArticle(response)
			getRequest(`${REST_API_ENDPOINTS.course.v1.course}${response.course}/`,serverToken).then((response)=> {
				setArticleList(response.blog_set)
			})
		})

	}, [router.query]);

	const Article = () => {
		return (
			<div>
				<img
					src={`${article?.banner_link}`}
					alt=''
					className='h-[300px] w-full object-cover'
				/>
				<div className='px-8'>
					<div className='text-4xl font-medium text-black mt-8'>{article.title}</div>
					<div className='flex justify-between mt-2'>
						<div>Next Js Course</div>
						<div>3rd March, 2022</div>
					</div>
					<div className='mt-10 pb-10'>
						{article?.content}
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
						{articleList && articleList.map((item,index)=> (
							item.id!=article.id && <ArticleCard key={index} article={item}/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
