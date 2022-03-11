import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import {getRequest} from "../../core/fetchers";
import {REST_API_ENDPOINTS} from "../../core/interfaces/routes";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {debug} from "util";
import {debug_print} from "../../core/utils";
import {Box, Grid, Typography} from "@mui/material";
import CourseCard from "../../components/cards/course-card/CourseCard";
import {BreakpointContext} from "../_app";

const Category = () => {
    const router = useRouter();
    const breakpoints = useContext(BreakpointContext);
    const serverToken = useSelector((state: RootState) => state.auth.server_token);
    const [category, setCategory] = useState<any>({});
    useEffect(() => {
        const {id} = router.query;
        if (id == undefined) return;
        getRequest(`${REST_API_ENDPOINTS.course.v1.category}${id}`, serverToken).then((response) => {
            debug_print(response)
            setCategory(response);
        })
    }, [router.query]);

    return (
        <>
            <Box px={breakpoints.isMobileView ? 2 : 15}>
                <Typography variant={"h6"} sx={{ml:2,my:2}}>
                    Courses in {category?.title} category
                </Typography>
                <Grid container>
                    {
                        category && category?.course_set?.map((item, index) => (
                            <Grid key={index} item xs={12} md={6} lg={4}>
                                <CourseCard course={item}/>
                            </Grid>
                        ))
                    }

                </Grid>
            </Box>
        </>
    )
}

export default Category