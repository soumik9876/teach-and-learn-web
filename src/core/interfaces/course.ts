export interface User {
        id: number;
        username: string;
        name: string;
        first_name: string;
        last_name: string;
        email: string;
        picture: string;
        student: number;
        teacher: number;
    }

export interface TeacherList {
    id: number;
    user: User;
    created_date: Date;
    modified_date: Date;
    specialized_in: any[];
}

export interface VideoSet {
    id: number;
    created_date: Date;
    modified_date: Date;
    title: string;
    description: string;
    video_file?: any;
    video_link: string;
    course: number;
    watched_by: any[];
    content_creator: number[];
}

export interface Option {
    id: number;
    option: string;
    is_correct: boolean;
    question: number;
}

export interface QuestionList {
    id: number;
    options: Option[];
    quiz: number[];
    question: string;
}

export interface QuizSet {
    id: number;
    question_list: QuestionList[];
    created_date: Date;
    modified_date: Date;
    title: string;
    description: string;
    course: number;
    teacher: number[];
}

export interface Category {
    id: number;
    created_date: Date;
    modified_date: Date;
    title: string;
    description: string;
}

export interface Course {
    id: number;
    teacher_list: TeacherList[];
    student_list: any[];
    video_set: VideoSet[];
    quiz_set: QuizSet[];
    blog_set: any[];
    created_date: Date;
    modified_date: Date;
    image_link: string;
    title: string;
    description: string;
    price: number;
    category: Category;
}
export interface PersonalCourse {
    createdCourses: Course[],
    takenCourses: Course[]
}