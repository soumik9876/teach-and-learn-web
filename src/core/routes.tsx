export const ROUTES = {
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
