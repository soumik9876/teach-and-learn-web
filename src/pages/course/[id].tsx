import React from "react";

export default function IndividualCourse() {
	const Chips = ({ svg, text }) => {
		return (
			<div className='flex space-x-4 items-center'>
				<div>{svg}</div>
				<div>
					{" "}
					<span
						style={{
							fontFamily: "Raleway",
							fontStyle: "normal",
							fontWeight: 500,
							fontSize: "18px",
							lineHeight: "21px",
							fontFeatureSettings: "'pnum' on, 'lnum' on",
							color: "#FFFFFF",
						}}
					>
						{text}
					</span>
				</div>
			</div>
		);
	};

	const Banner = () => {
		return (
			<div className='bg-c_primary_dark w-screen relative'>
				<img className='w-screen h-[24rem] absolute bottom-0' src='/course_banner.png' alt='' />

				<div className='flex w-full z-5 pb-[8rem]'>
					<div className='flex-1 p-20'>
						<div className='py-2'>
							<span
								style={{
									fontFamily: "Raleway",
									fontStyle: "normal",
									fontWeight: "bold",
									fontSize: "36px",
									lineHeight: "42px",
									color: "#FFFFFF",
								}}
							>
								Complete NodeJS Developer in 2022 (GraphQL, MongoDB, + more)
							</span>
						</div>
						<div className='py-4'>
							<span
								style={{
									fontFamily: "Raleway",
									fontStyle: "normal",
									fontWeight: 500,
									fontSize: "20px",
									lineHeight: "23px",
									color: "#FFFFFF",
								}}
							>
								Learn from real NodeJS experts! Includes REALLY Advanced NodeJS. Express, GraphQL, REST,
								MongoDB, SQL, MERN + much more
							</span>
						</div>
						<div className='flex space-x-3'>
							<div>
								<span
									style={{
										fontFamily: "Raleway",
										fontStyle: "normal",
										fontWeight: 500,
										fontSize: "14px",
										lineHeight: "16px",
										color: "#ffff",
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
													fill='#000000'
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
													fill='#ffff'
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
										color: "#ffff",
									}}
								>
									(12 ratings)
								</span>
							</div>
							<div>
								<span
									style={{
										fontFamily: "Raleway",
										fontStyle: "normal",
										fontWeight: 500,
										fontSize: "14px",
										lineHeight: "16px",
										color: "#ffff",
									}}
								>
									6,964 students
								</span>
							</div>
						</div>

						<div className='flex space-x-2 py-2'>
							<span
								style={{
									fontFamily: "Raleway",
									fontStyle: "normal",
									fontWeight: 500,
									fontSize: "14px",
									lineHeight: "16px",
									color: "#ffff",
								}}
							>
								Created by
							</span>
							<span
								style={{
									fontFamily: "Raleway",
									fontStyle: "normal",
									fontWeight: 500,
									fontSize: "14px",
									lineHeight: "16px",
									color: "#176590",
								}}
							>
								Soumik Roy, Saurav Paul
							</span>
						</div>
						<div className='flex justify-between pt-2'>
							<div className='flex-1'>
								<Chips
									svg={
										<svg
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M17 10.5V7C17 6.73478 16.8946 6.48043 16.7071 6.29289C16.5196 6.10536 16.2652 6 16 6H4C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7V17C3 17.2652 3.10536 17.5196 3.29289 17.7071C3.48043 17.8946 3.73478 18 4 18H16C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V13.5L21 17.5V6.5L17 10.5Z'
												fill='white'
											/>
										</svg>
									}
									text={`${10} Videos`}
								/>

								<Chips
									svg={
										<svg
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M15 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V9L15 3ZM19 19H5V5H14V10H19V19ZM17 14H7V12H17V14ZM14 17H7V15H14'
												fill='white'
											/>
										</svg>
									}
									text={`${15} articles`}
								/>

								<Chips
									svg={
										<svg
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M13 8C13 9.06087 12.5786 10.0783 11.8284 10.8284C11.0783 11.5786 10.0609 12 9 12C7.93913 12 6.92172 11.5786 6.17157 10.8284C5.42143 10.0783 5 9.06087 5 8C5 6.93913 5.42143 5.92172 6.17157 5.17157C6.92172 4.42143 7.93913 4 9 4C10.0609 4 11.0783 4.42143 11.8284 5.17157C12.5786 5.92172 13 6.93913 13 8ZM17 18V20H1V18C1 15.79 4.58 14 9 14C13.42 14 17 15.79 17 18ZM20.5 14.5V16H19V14.5H20.5ZM18.5 9.5H17V9C17 8.20435 17.3161 7.44129 17.8787 6.87868C18.4413 6.31607 19.2044 6 20 6C20.7956 6 21.5587 6.31607 22.1213 6.87868C22.6839 7.44129 23 8.20435 23 9C23 9.97 22.5 10.88 21.71 11.41L21.41 11.6C20.84 12 20.5 12.61 20.5 13.3V13.5H19V13.3C19 12.11 19.6 11 20.59 10.35L20.88 10.16C21.27 9.9 21.5 9.47 21.5 9C21.5 8.60218 21.342 8.22064 21.0607 7.93934C20.7794 7.65804 20.3978 7.5 20 7.5C19.6022 7.5 19.2206 7.65804 18.9393 7.93934C18.658 8.22064 18.5 8.60218 18.5 9V9.5Z'
												fill='white'
											/>
										</svg>
									}
									text={`${20} Quiz`}
								/>

								<Chips
									svg={
										<svg
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M18.6 6.62012C17.16 6.62012 15.8 7.18012 14.83 8.15012L7.8 14.3901C7.16 15.0301 6.31 15.3801 5.4 15.3801C3.53 15.3801 2 13.8701 2 12.0001C2 10.1301 3.53 8.62012 5.4 8.62012C6.31 8.62012 7.16 8.97012 7.84 9.65012L8.97 10.6501L10.5 9.31012L9.22 8.20012C8.2 7.18012 6.84 6.62012 5.4 6.62012C2.42 6.62012 0 9.04012 0 12.0001C0 14.9601 2.42 17.3801 5.4 17.3801C6.84 17.3801 8.2 16.8201 9.17 15.8501L16.2 9.61012C16.84 8.97012 17.69 8.62012 18.6 8.62012C20.47 8.62012 22 10.1301 22 12.0001C22 13.8701 20.47 15.3801 18.6 15.3801C17.7 15.3801 16.84 15.0301 16.16 14.3501L15 13.3401L13.5 14.6801L14.78 15.8001C15.8 16.8101 17.15 17.3701 18.6 17.3701C21.58 17.3701 24 14.9601 24 12.0001C24 9.00012 21.58 6.62012 18.6 6.62012Z'
												fill='white'
											/>
										</svg>
									}
									text={`Free life-time access`}
								/>
							</div>
							<div className='flex-1 flex justify-center text-center'>
								<div>
									<div>
										<span
											style={{
												fontFamily: "Raleway",
												fontStyle: "normal",
												fontWeight: 600,
												fontSize: "24px",
												lineHeight: "28px",
												color: "#FFFFFF",
											}}
										>
											Free
										</span>
									</div>
									<button className='px-6 py-1 bg-white my-2 rounded-md'>
										<span className='font-raleway'>Enroll</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='flex-[.6] flex justify-center items-center '>
						<img src='/nodeJs.png' alt='' className='rounded-2xl' />
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='w-screen bg-c_background bg-cover'>
			<div>
				<Banner />
			</div>
			<div className='w-full  flex justify-center py-8'>
				<div className='w-[75%] pb-22'>h</div>
			</div>
		</div>
	);
}