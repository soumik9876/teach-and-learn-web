import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CourseCard from "../components/cards/course-card/CourseCard";
import { getRequest } from "../core/fetchers";
import { REST_API_ENDPOINTS } from "../core/interfaces/routes";
import { RootState } from "../redux/store";
import { debug_print } from "./../core/utils";

export default function Home() {
	const server_token = useSelector((state: RootState) => state.auth.server_token);
	const [courses, setCourses] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getRequest(REST_API_ENDPOINTS.course.v1.course, server_token).then((result) => {
			setCourses(result);
			const temp = result.map((course, idx) => {
				return course.category?.title;
			});
			const unique = temp.filter((v, i, a) => a.indexOf(v) === i);
			setCategories(unique);
			console.log("unique", unique);
		});
	}, [server_token]);

	const Banner = () => {
		return (
			<div className='w-full flex bg-c_primary_light rounded-[22px]'>
				<div className='flex-[.7] p-20'>
					<div>
						<div>
							<span
								className='font-raleway'
								style={{
									fontStyle: "normal",
									fontWeight: "bold",
									fontSize: "36px",
									lineHeight: "42px",
								}}
							>
								{`"Online learning is not the next big thing, it is the now big thing.” - Donna J. Abernathy`}
							</span>
						</div>
						<div className='pt-12 flex space-x-4'>
							<button className='bg-c_primary_main rounded-md px-2 py-1 font-raleway'>
								<span
									style={{
										fontStyle: "normal",
										fontSize: "14px",
										lineHeight: "21px",
									}}
								>
									Your Courses
								</span>
							</button>
							<button>
								<span
									style={{
										fontFamily: "Raleway",
										fontStyle: "normal",
										fontWeight: "bold",
										fontSize: "14px",
										lineHeight: "21px",
										textDecorationLine: "underline",
										color: "#000000",
									}}
								>
									Teach
								</span>
							</button>
						</div>
					</div>
				</div>
				<div className='flex-1 flex justify-center items-center'>
					<img src='./banner.png' alt='' />
				</div>
			</div>
		);
	};

	const Courses = ({ cat_name }: any) => {
		if (cat_name == null) return <></>;
		return (
			<div className='pt-12'>
				<div>
					<span
						style={{
							fontFamily: "Raleway",
							fontStyle: "normal",
							fontWeight: 600,
							fontSize: "24px",
							lineHeight: "28px",
							textDecorationLine: "underline",
							color: "#585652",
						}}
					>
						Popular Courses in {cat_name}
					</span>
				</div>
				<div className='grid grid-cols-3'>
					{courses.map((course, idx) => {
						console.log(course);
						if (course.category?.title === cat_name) {
							return (
								<div key={idx} className='col-span-1 pt-6'>
									<CourseCard course={course} />
								</div>
							);
						}
						return "";
					})}
				</div>
			</div>
		);
	};

	return (
		<div className='w-screen bg-c_background bg-cover flex justify-center py-8'>
			<div className='w-[75%] pb-22'>
				<Banner />
				{categories?.map((cat, idx) => {
					return (
						<div key={idx}>
							<Courses cat_name={cat} />
						</div>
					);
				})}

				{/* <DesigningCourses />
				<MLCourses /> */}
			</div>
		</div>
	);
}
