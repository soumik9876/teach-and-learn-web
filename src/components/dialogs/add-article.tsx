import AlertDialogSlide from "./alertDialogSlide";
import {Button, Grid, TextField, Typography} from "@mui/material";

const AddArticleDialog = ({open, setOpen}) => {
    return (
        <>
            <AlertDialogSlide open={open} setOpen={setOpen}>
                <Grid container spacing={2}>
                    <Grid item xs={6} container justifyContent={"center"} alignItems={"center"}>
                        <img src="add-article.png" alt="add_video_illustration" className={"width-1/1"}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align={"center"} gutterBottom className={"font-medium"}>
                            Write an article
                        </Typography>
                        <TextField label={"title"} fullWidth multiline rows={2}/>
                        <TextField label={"description"} fullWidth sx={{my: 1}} multiline rows={6}/>
                        <Button fullWidth variant={"contained"} className={"bg-c_primary_main"}>
                            Add article
                        </Button>
                    </Grid>
                </Grid>
            </AlertDialogSlide>
        </>
    )
}
export default AddArticleDialog