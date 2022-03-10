import AlertDialogSlide from "./alertDialogSlide";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {debug_print} from "../../core/utils";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {postRequest} from "../../core/fetchers";
import {REST_API_ENDPOINTS} from "../../core/interfaces/routes";
import {debug} from "util";

const AddVideoDialog = ({open, setOpen, courseId}) => {
    const user = useSelector((state: RootState) => state.auth.userProfile)
    const serverToken = useSelector((state: RootState) => state.auth.server_token)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [youtubeUrl, setYoutubeUrl] = useState("");
    const postVideo = () => {
        if (title == "" || youtubeUrl == "") {
            return;
        }
        if (youtubeUrl.includes("youtube.com/watch?v=") || youtubeUrl.includes("youtu.be/")) {
            const body = {
                title: title,
                description: description,
                content_creator: [user.teacher],
                course: courseId,
                video_link: youtubeUrl
            }
            postRequest(REST_API_ENDPOINTS.course.v1.video, body, serverToken).then((response) => {
                debug_print(response)
            })
            setOpen(false)
        }
    }
    return (
        <>
            <AlertDialogSlide open={open} setOpen={setOpen}>
                <Grid container spacing={2}>
                    <Grid item xs={6} container justifyContent={"center"} alignItems={"center"}>
                        <img src="add-video.png" alt="add_video_illustration" className={"width-1/1"}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align={"center"} gutterBottom className={"font-medium"}>
                            Add a video from youtube
                        </Typography>
                        <TextField label={"title"} fullWidth required={true} value={title}
                                   onChange={(e) => setTitle(e.target.value)}/>
                        <TextField label={"description"} fullWidth sx={{my: 1}} multiline rows={4} value={description}
                                   onChange={(e) => setDescription(e.target.value)}/>
                        <TextField label={"youtube url"} fullWidth sx={{mb: 1}} required={true} value={youtubeUrl}
                                   onChange={(e) => setYoutubeUrl(e.target.value)}/>
                        <Button fullWidth variant={"contained"} className={"bg-c_primary_main"} onClick={postVideo}>
                            Add Video
                        </Button>
                    </Grid>
                </Grid>
            </AlertDialogSlide>
        </>
    )
}
export default AddVideoDialog