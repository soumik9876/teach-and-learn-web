import {Button} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import theme from "../../site-settings/material-ui-theme/theme";
import GoogleLogin from "react-google-login";
import {debug_print} from "../../core/utils";
import {useState} from "react";
import {googleLoginSuccess, serverLoginSuccess} from "../../redux/auth/action";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {REST_API_ENDPOINTS, ROUTES} from "../../core/interfaces/routes";

const GoogleLoginButton = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const serverLogin = async (access_token: string) => {
        const response = await fetch(REST_API_ENDPOINTS.auth.v1.login, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({access_token}),
        });
        if (!response.ok) {
            // TODO snackbar to be added
            debug_print("server login failed");
            return;
        }
        const data = await response.json();

        dispatch(serverLoginSuccess(data));

        router.push(router.pathname).then();
        debug_print(data);
    };
    const onGoogleLoginSuccess = (response: any) => {
        debug_print(response);
        setOpen(true);
        dispatch(googleLoginSuccess(response.tokenObj))
        serverLogin(response.accessToken).then();
    };
    const onFailureCallback = () => {

    }
    debug_print(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)
    return (
        <>
            <GoogleLogin
                clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={onGoogleLoginSuccess}
                onFailure={onFailureCallback}
                render={(renderProps) => (
                    <Button startIcon={<GoogleIcon/>} variant={"contained"} sx={{
                        bgcolor: `${theme.palette.primary.main}!important`,
                        color: `${theme.palette.text.primary}!important`,

                    }} onClick={renderProps.onClick}
                            disabled={renderProps.disabled}>Login</Button>
                )}
                // redirectUri={"http://localhost:3000/login/"}
                // cookiePolicy={'single_host_origin'}
            />

        </>
    )
}

export default GoogleLoginButton