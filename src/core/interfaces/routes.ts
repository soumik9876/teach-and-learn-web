const BASE_API_URL = "https://teach-and-learn-api.herokuapp.com/api";


export const ROUTES = {
	courses: "/courses",
	createCourse: "/create-course",
	about: "/about",
	home: "/",
	course: (id: any = undefined) => {
		return id ? `/course/${id}` : "/course/";
	},
	article: (id: any = undefined) => {
		return id ? `/article/${id}` : "/article/";
	},
	video: (id: any = undefined) => {
		return id ? `/video/${id}` : "/video/";
	},
	quiz: (id: any = undefined) => {
		return id ? `/quiz/${id}` : "/quiz/";
	},
};