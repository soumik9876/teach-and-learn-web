import {Button} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import theme from "../../site-settings/material-ui-theme/theme";
import GoogleLogin from "react-google-login";
import {debug_print} from "../../core/utils";
import {useState} from "react";

const GoogleLoginButton = () => {
    const [open, setOpen] = useState(false);

    const onGoogleLoginSuccess = (response:any) => {
        debug_print(response);
        setOpen(true);
        // dispatch(googleLoginSuccess(response.tokenObj))
        //
        // serverLogin(response.accessToken).then();
    };
    const onFailureCallback = () => {

    }
    return (
        <>
            <GoogleLogin
                clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={onGoogleLoginSuccess}
                onFailure={onFailureCallback}
                render={renderProps => (
                    <Button startIcon={<GoogleIcon/>} variant={"contained"} sx={{
                        bgcolor: `${theme.palette.primary.main}!important`,
                        color: `${theme.palette.text.primary}!important`
                    }}>Login</Button>
                )}
                // redirectUri={"http://localhost:3000/login/"}
                // cookiePolicy={'single_host_origin'}
            />

        </>
    )
}

export default GoogleLoginButton