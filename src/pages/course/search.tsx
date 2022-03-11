import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CourseCard from "../../components/cards/course-card/CourseCard";
import { getRequest } from "../../core/fetchers";
import { REST_API_ENDPOINTS } from "../../core/interfaces/routes";
import { debug_print } from "../../core/utils";
import { RootState } from "../../redux/store";

export default function Search() {
	const router = useRouter();
	const { text } = router.query;
	const server_token = useSelector((state: RootState) => state.auth.server_token);
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		if (text !== undefined) {
			debug_print(text);
			getRequest(REST_API_ENDPOINTS.course.v1.course_search(text), server_token).then((result) => {
				setCourses(result);
				debug_print(result);
			});
		}
	}, [server_token, text]);

	return (
		<div>
			<div className='w-screen bg-c_background bg-cover flex justify-center py-8'>
				<div className='w-[75%] pb-22'>
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
								Search Result for {text}
							</span>
						</div>
						<div className='grid grid-cols-3'>
							{courses.map((course, idx) => {
								console.log(course);
								return (
									<div key={idx} className='col-span-1 pt-6'>
										<CourseCard course={course} />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
