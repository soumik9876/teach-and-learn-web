import { Container, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Home from "..";
import CourseCard from "../../components/cards/course-card/CourseCard";
import { getRequest } from "../../core/fetchers";
import { PersonalCourse } from "../../core/interfaces/course";
import { REST_API_ENDPOINTS } from "../../core/interfaces/routes";
import { debug_print } from "../../core/utils";
import { RootState } from "../../redux/store";

export default function IndividualCourse() {
	const [personalCourses, setPersonalCourses] = useState<PersonalCourse | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const serverToken = useSelector((state: RootState) => state.auth.server_token);
	useEffect(() => {
		getRequest(REST_API_ENDPOINTS.course.v1.personalCourses, serverToken)
			.then((response) => {
				debug_print(response);
				setPersonalCourses(response);
				// setLoading(false);
			})
			.catch((reason) => {})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<Container maxWidth={"lg"}>
			<Typography variant='h6' className='font-semibold pl-3 pt-2'>
				Courses you are teaching
			</Typography>
			{!loading ? (
				<Grid container>
					{personalCourses &&
						personalCourses.createdCourses.map((course, index) => (
							<Grid key={index} item xs={12} md={6} lg={4}>
								{" "}
								<CourseCard course={course} />
							</Grid>
						))}
				</Grid>
			) : (
				<Grid container spacing={6}>
					{Array.from(Array(3)).map((i) => (
						<Grid key={i} item xs={12} md={6} lg={4}>
							<Skeleton variant="rectangular" className='pt-[56%]' />
						</Grid>
					))}
				</Grid>
			)}
			<Typography variant='h6' className='font-semibold pl-3 pt-2'>
				Courses you are taking
			</Typography>
			{!loading ? (
				<Grid container>
					{personalCourses &&
						personalCourses.takenCourses.map((course, index) => (
							<Grid key={index} item xs={12} md={6} lg={4}>
								{" "}
								<CourseCard course={course} />
							</Grid>
						))}
				</Grid>
			): 
				<Grid container spacing={2}>
					{Array.from(Array(3)).map((i) => (
						<Grid key={i} item xs={12} md={6} lg={4}>
							<Skeleton className='pt-[56%]' height={400} />
						</Grid>
					))}
				</Grid>}
		</Container>
	);
}
