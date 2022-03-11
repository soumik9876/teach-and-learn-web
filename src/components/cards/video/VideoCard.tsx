import Link from "next/link";
import { ROUTES } from "../../../core/interfaces/routes";

export const VideoCard = ({video}) => {
	return (
		<>
			<Link href={ROUTES.video(video.id)} passHref>
			<div className='bg-white w-full my-8 h-32 rounded-2xl shadow-xl flex p-5 cursor-pointer duration-150 hover:scale-105'>
				<div className='px-3 flex flex-col justify-between'>
					<h1 className='text-lg font-semibold'>{video.title}</h1>
					<p className='text-xs overflow-hidden'>
						{video.description}
					</p>
				</div>
			</div>
			</Link>
		</>
	);
};