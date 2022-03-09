import AlertDialogSlide from "./alertDialogSlide";
import {Button, Grid, TextField, Typography} from "@mui/material";

const AddVideoDialog = ({open, setOpen}) => {
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
                        <TextField label={"title"} fullWidth/>
                        <TextField label={"description"} fullWidth sx={{my: 1}} multiline rows={4}/>
                        <TextField label={"youtube url"} fullWidth sx={{mb: 1}}/>
                        <Button fullWidth variant={"contained"} className={"bg-c_primary_main"}>
                            Add Video
                        </Button>
                    </Grid>
                </Grid>
            </AlertDialogSlide>
        </>
    )
}
export default AddVideoDialog