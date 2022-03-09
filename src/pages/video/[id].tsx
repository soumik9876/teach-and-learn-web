import React from "react";

export default function VideoWatch() {
	const Youtube = () => {
		return (
			<div className='video-responsive w-[64rem] h-[36rem] bg-black rounded-xl'>
				<iframe
					className='w-full h-full rounded-xl'
					src={`https://www.youtube.com/embed/8Dqvj3KKoo8?rel=0&enablejsapi=1`}
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
					title='Embedded youtube'
				/>
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
			>
				<div className='w-full flex justify-between pr-6 py-2'>
					<div className='py-3 px-8'>
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
								lineHeight: "19px",
								textAlign: "center",
								color: "#FFFFFF",
							}}
						>
							Save
						</span>
					</button>
				</div>
			</div>
		);
	};

	return (
		<div className='w-screen bg-c_background flex py-8 space-x-8'>
			<div className='pl-28'>
				<div className='h-8'>BreadCrumb</div>
				<div className='flex w-full'>
					<Youtube />
				</div>
			</div>
			<div className='flex-1 pr-16'>
				<div className='pt-8'>
					<div>
						<NoteCard />
					</div>
				</div>
			</div>
		</div>
	);
}
