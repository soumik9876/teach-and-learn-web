import React from "react";

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

	const CourseCard = () => {
		return (
			<div
				className='pb-4 mr-3'
				style={{
					background: "#FFFFFF",
					boxShadow: "0px 1px 23px rgba(176, 163, 163, 0.25)",
					borderRadius: "16px",
				}}
			>
				<div>
					<img
						style={{
							borderTopLeftRadius: "16px",
							borderTopRightRadius: "16px",
						}}
						src='./nodeJs.png'
						alt=''
						className='w-full h-56'
					/>
				</div>

				<div className='pt-8 px-4 flex justify-between'>
					<div className='flex space-x-2 items-center'>
						<div className='w-3 h-3 rounded-full bg-c_primary_main'></div>
						<div>
							<span
								style={{
									fontFamily: "Raleway",
									fontStyle: "normal",
									fontWeight: 500,
									fontSize: "14px",
									lineHeight: "16px",
									color: "#000000",
								}}
							>
								Web development
							</span>
						</div>
					</div>
					<div>
						<span
							style={{
								fontFamily: "Raleway",
								fontStyle: "normal",
								fontWeight: 600,
								fontSize: "18px",
								lineHeight: "21px",
								color: "#000000",
							}}
						>
							$11.50
						</span>
					</div>
				</div>
				<div className='pt-2 px-4'>
					<span
						style={{
							fontFamily: "Raleway",
							fontStyle: "normal",
							fontWeight: 600,
							fontSize: "18px",
							lineHeight: "21px",
							color: "#585652",
						}}
					>
						Complete nodejs developer guide in 2022
					</span>
				</div>
				<div className='pt-1 px-4'>
					<span
						style={{
							fontFamily: "Raleway",
							fontStyle: "normal",
							fontWeight: 500,
							fontSize: "14px",
							color: "#585652",
						}}
					>
						Saurav Paul
					</span>
				</div>

				<div className='flex items-center px-4 space-x-2'>
					<div>
						<span
							style={{
								fontFamily: "Raleway",
								fontStyle: "normal",
								fontWeight: 500,
								fontSize: "14px",
								lineHeight: "16px",
								color: "#000000",
							}}
						>
							4.0
						</span>
					</div>
					<div className='flex items-center'>
						{["", "", "", ""].map((obj, idx) => {
							return (
								<div key={idx}>
									<svg
										width='13'
										height='13'
										viewBox='0 0 13 13'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M6.30884 9.07954L9.5579 11.0405L8.69569 7.3446L11.5662 4.85786L7.78616 4.5319L6.30884 1.05151L4.83151 4.5319L1.05145 4.85786L3.91673 7.3446L3.05977 11.0405L6.30884 9.07954Z'
											fill='#FFC72C'
										/>
									</svg>
								</div>
							);
						})}
						{[""].map((obj, idx) => {
							return (
								<div key={idx}>
									<svg
										width='13'
										height='13'
										viewBox='0 0 13 13'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M6.30884 9.07954L9.5579 11.0405L8.69569 7.3446L11.5662 4.85786L7.78616 4.5319L6.30884 1.05151L4.83151 4.5319L1.05145 4.85786L3.91673 7.3446L3.05977 11.0405L6.30884 9.07954Z'
											fill='#000000'
										/>
									</svg>
								</div>
							);
						})}
					</div>
					<div>
						<span
							style={{
								fontFamily: "Raleway",
								fontStyle: "normal",
								fontWeight: 500,
								fontSize: "14px",
								lineHeight: "16px",
								color: "#000000",
							}}
						>
							(12)
						</span>
					</div>
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

	return (
		<div className='w-screen bg-c_background bg-cover flex justify-center py-20'>
			<div className='w-[80%] pb-22'>
				<Banner />
				<WebDevCourses />
			</div>
		</div>
	);
}
