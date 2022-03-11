import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRequest } from "../../core/fetchers";
import { REST_API_ENDPOINTS } from "../../core/interfaces/routes";
import { debug_print } from "../../core/utils";
import { RootState } from "../../redux/store";

export default function VideoWatch() {
	const router = useRouter();
	const { id } = router.query;
	const server_token = useSelector((state: RootState) => state.auth.server_token);
	const [video, setVideo] = useState(undefined);

	useEffect(() => {
		if (id != undefined) {
			debug_print(id);
			getRequest(REST_API_ENDPOINTS.course.v1.retrieve_video(id), server_token).then((result) => {
				debug_print(result);
				setVideo(result);
			});
		}
	}, [id, server_token]);

	const Youtube = () => {
		return (
			<div className='video-responsive w-[64rem] h-[36rem] bg-black rounded-xl'>
				{video && (
					<>
						<iframe
							className='w-full h-full rounded-xl'
							src={`https://www.youtube.com/embed/${
								video?.video_link.split("?v=")[1]
							}?rel=0&enablejsapi=1`}
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							title='Embedded youtube'
						/>
					</>
				)}
			</div>
		);
	};

	const NoteCard = () => {
		return (
			<div
				style={{
					background: "#FFFFFF",
					boxShadow: "0px 1px 23px rgba(176, 163, 163, 0.25)",
					borderRadius: "8px",
				}}
				className='pb-4 px-2'
			>
				<div className='w-full flex justify-between pr-6 py-2'>
					<div className='py-1 px-8'>
						<span
							style={{
								fontFamily: "Raleway",
								fontStyle: "normal",
								fontWeight: 600,
								fontSize: "16px",
								textAlign: "center",
								color: "#000000",
							}}
						>
							Take Notes
						</span>
					</div>
					<button className='bg-c_primary_main text-white px-3 rounded-md'>
						<span
							style={{
								fontFamily: "Raleway",
								fontStyle: "normal",
								fontWeight: 600,
								fontSize: "16px",
								textAlign: "center",
								color: "#FFFFFF",
							}}
						>
							Save
						</span>
					</button>
				</div>
				<div style={{ border: "1px solid #C4C4C4" }}></div>
				<div className='flex py-2'>
					<textarea className='border-0 w-full h-[30rem] transition duration-500 placeholder-red-400 focus:placeholder-transparent border-red-400 p-2  text-c_text bg-transparent rounded-md focus:outline-none ' />
				</div>
			</div>
		);
	};

	const Comment = () => {
		return (
			<div className='flex space-x-6'>
				<div className='w-12 h-12 bg-pink-300'></div>
				<div className='flex-1'>
					<div>
						<span
							style={{
								fontFamily: "Raleway",
								fontStyle: "normal",
								fontWeight: "normal",
								fontSize: "14px",
								lineHeight: "16px",
								color: "#000000",
							}}
						>
							Saurav Paul
						</span>
					</div>
					<div>
						<p
							style={{
								fontFamily: "Raleway",
								fontStyle: "normal",
								fontWeight: "normal",
								fontSize: "14px",
								lineHeight: "16px",
								color: "#585652",
							}}
						>
							Does next js take less time to build than react ?
						</p>
					</div>
				</div>
			</div>
		);
	};

	const CommentCard = () => {
		return (
			<div
				style={{
					background: "#FFFFFF",
					boxShadow: "0px 1px 23px rgba(176, 163, 163, 0.25)",
					borderRadius: "8px",
				}}
				className='pb-4 px-2'
			>
				<div className='w-full flex space-x-3 pr-6 py-2 items-center'>
					<div className='py-1 px-8'>
						<span
							style={{
								fontFamily: "Raleway",
								fontStyle: "normal",
								fontWeight: 600,
								fontSize: "16px",
								textAlign: "center",
								color: "#000000",
							}}
						>
							Comments
						</span>
					</div>
					<div className='flex justify-center items-center w-6 h-6 rounded-md bg-c_secondary_main text-white'>
						<span>3</span>
					</div>
				</div>
				<div className='mb-8' style={{ border: "1px solid #C4C4C4" }}></div>
				<div
					style={{
						background: "#FFFFFF",
						border: "1px solid #C4C4C4",
						boxSizing: "border-box",
						borderRadius: "9px",
					}}
					className='flex my-4 items-center px-3 mx-3'
				>
					<textarea className='flex-1 border-0 w-full transition duration-500 placeholder-red-400 focus:placeholder-transparent p-2  text-c_text bg-transparent rounded-md focus:outline-none ' />
					<div>
						<svg width='21' height='18' viewBox='0 0 21 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M0 18L21 9L0 0V7L15 9L0 11V18Z' fill='#C4C4C4' />
						</svg>
					</div>
				</div>
				<div className='my-4 mx-3'>
					<div className='my-3'>
						<Comment />
					</div>
					<div className='my-3'>
						<Comment />
					</div>
					<div className='my-3'>
						<Comment />
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='w-screen bg-c_background flex py-8 space-x-8'>
			<div className='pl-28'>
				{video && (
					<>
						<div className='h-8'>BreadCrumb</div>
						<div className='flex w-full'>
							<Youtube />
						</div>
						<div className='flex items-start pt-8 w-[64rem]'>
							
							<div className='flex-1'>
								<span
									style={{
										fontFamily: "Raleway",
										fontStyle: "normal",
										fontWeight: 600,
										fontSize: "36px",
										lineHeight: "42px",
										color: "#000000",
									}}
								>
									{video.title}
								</span>
							</div>
							<div className='flex space-x-4'>
								<button className='bg-c_primary_main py-2 px-6 rounded-lg'>
									<span
										style={{
											fontFamily: "Raleway",
											fontStyle: "normal",
											fontWeight: 600,
											fontSize: "26px",
											lineHeight: "31px",
											color: "#585652",
										}}
									>
										Quiz
									</span>
								</button>
								<button className='bg-c_secondary_main text-white py-2 px-6 rounded-lg'>
									<span
										style={{
											fontFamily: "Raleway",
											fontStyle: "normal",
											fontWeight: 600,
											fontSize: "26px",
											lineHeight: "31px",
										}}
									>
										Next
									</span>
								</button>
							</div>
						</div>
						<div className='pt-8 w-[64rem]'>
							<p
								style={{
									fontFamily: "Raleway",
									fontStyle: "normal",
									fontWeight: "normal",
									fontSize: "17px",
									lineHeight: "20px",
									color: "#7C7C7C",
								}}
							>
								{video.description}
							</p>
						</div>
					</>
				)}
			</div>
			<div className='flex-1 pr-16'>
				<div className='pt-8'>
					<div>
						<NoteCard />
					</div>
				</div>
				<div className='pt-8'>
					<div>
						<CommentCard />
					</div>
				</div>
			</div>
		</div>
	);
}
function useROuter() {
	throw new Error("Function not implemented.");
}
