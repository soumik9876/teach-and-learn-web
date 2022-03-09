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

	return (
		<div className='w-screen bg-c_background flex py-8'>
			<div className='flex-1 pl-28'>
				<div>BreadCrumb</div>
				<div className="flex w-full">
					<Youtube />
				</div>
			</div>
			<div className='flex-[.4]'>g</div>
		</div>
	);
}
