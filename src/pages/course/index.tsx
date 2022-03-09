import React from "react";
import CourseCard from "../../components/cards/course-card/CourseCard";

export default function IndividualCourse() {
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
										fontWeight:600,
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


	const WebDevCourses = () => {
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
						Popular Courses in Web development
					</span>
				</div>
				<div className='grid grid-cols-3'>
					<div className='col-span-1 pt-6'>
						<CourseCard />
					</div>
					<div className='col-span-1 pt-6'>
						<CourseCard />
					</div>
					<div className='col-span-1 pt-6'>
						<CourseCard />
					</div>
				</div>
			</div>
		);
	};

	const DesigningCourses = () => {
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
						Popular Courses in Designing
					</span>
				</div>
				<div className='grid grid-cols-3'>
					<div className='col-span-1 pt-6'>
						<CourseCard />
					</div>
					<div className='col-span-1 pt-6'>
						<CourseCard />
					</div>
					<div className='col-span-1 pt-6'>
						<CourseCard />
					</div>
					<div className='col-span-1 pt-6'>
						<CourseCard />
					</div>
					<div className='col-span-1 pt-6'>
						<CourseCard />
					</div>
					<div className='col-span-1 pt-6'>
						<CourseCard />
					</div>
				</div>
			</div>
		);
	};

	const MLCourses = () => {
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
						Popular Courses in Machine Learning
					</span>
				</div>
				<div className='grid grid-cols-3'>
					<div className='col-span-1 pt-6'>
						<CourseCard />
					</div>
					<div className='col-span-1 pt-6'>
						<CourseCard />
					</div>
					<div className='col-span-1 pt-6'>
						<CourseCard />
					</div>
					
				</div>
			</div>
		);
	};

	return (
		<div className='w-screen bg-c_background bg-cover flex justify-center py-8'>
			<div className='w-[75%] pb-22'>
				<Banner />
				<WebDevCourses />
				<DesigningCourses />
				<MLCourses />
			</div>
		</div>
	);
}
