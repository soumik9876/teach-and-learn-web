import React from "react";

export default function IndividualCourse() {
	const Banner = () => {
		return (
			<div className='w-full flex bg-c_primary_light rounded-[22px]'>
				<div className='flex-[.7] p-20'>
					<div>
						<div>
							<span
								className='font-ralewayl'
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
							<button className='bg-c_primary_main rounded-md px-2 py-1'>
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

	return (
		<div className='w-screen h-screen bg-c_background flex justify-center py-20'>
			<div className='w-[80%]'>
				<Banner />
			</div>
		</div>
	);
}
