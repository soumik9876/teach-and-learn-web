export const BASE_API_URL = "https://teach-and-learn-api.herokuapp.com/api/";


export const REST_API_ENDPOINTS = {
    auth: {
        v1: {
            login: BASE_API_URL + "accounts/v1/login/google/"
        }
    },
    course: {
        v1: {
            course: BASE_API_URL + "course/v1/course/",
            category: BASE_API_URL+"course/v1/course_category/",
            video: BASE_API_URL+ "course/v1/video/",
            blog: BASE_API_URL+ "course/v1/blog/"
        }
    },
    quiz: {
        v1: {
            question: BASE_API_URL + "quiz/v1/question/",
            option: BASE_API_URL + "quiz/v1/option/",
            quiz: BASE_API_URL + "quiz/v1/quiz/",
        }
    }
}

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