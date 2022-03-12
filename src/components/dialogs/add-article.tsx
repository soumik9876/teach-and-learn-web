import AlertDialogSlide from "./alertDialogSlide";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {postRequest} from "../../core/fetchers";
import {REST_API_ENDPOINTS} from "../../core/interfaces/routes";
import {debug_print} from "../../core/utils";

const AddArticleDialog = ({open, setOpen, courseId}) => {
    const user = useSelector((state:RootState)=> state.auth.userProfile);
    const serverToken = useSelector((state:RootState)=> state.auth.server_token);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    debug_print(REST_API_ENDPOINTS.course.v1.blog)
    const postArticle = ()=> {
        if(title=="" || description=="") {
            return
        }
        const body={
            title:title,
            content: description,
            course: courseId,
            writers: [user.teacher]
        };
        debug_print(REST_API_ENDPOINTS.course.v1.blog,"url")  ;
        postRequest(REST_API_ENDPOINTS.course.v1.blog,body,serverToken).then((response)=> {
            debug_print(response);
        })
        setOpen(false)
    }
    return (
        <>
            <AlertDialogSlide open={open} setOpen={setOpen}>
                <Grid container spacing={2}>
                    <Grid item xs={6} container justifyContent={"center"} alignItems={"center"}>
                        <img src="/add-article.png" alt="add_video_illustration" className={"width-1/1"}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align={"center"} gutterBottom className={"font-medium"}>
                            Write an article
                        </Typography>
                        <TextField label={"title"} fullWidth multiline rows={2} value={title}
                                   onChange={(e) => setTitle(e.target.value)}/>
                        <TextField label={"description"} fullWidth sx={{my: 1}} multiline rows={6} value={description}
                                   onChange={(e) => setDescription(e.target.value)}/>
                        <Button fullWidth variant={"contained"} className={"bg-c_primary_main"} onClick={postArticle}>
                            Add article
                        </Button>
                    </Grid>
                </Grid>
            </AlertDialogSlide>
        </>
    )
}
export default AddArticleDialog