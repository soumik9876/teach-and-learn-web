import React, {createContext} from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import {ThemeProvider, CssBaseline, useMediaQuery} from '@mui/material';
import theme from '../site-settings/material-ui-theme/theme';
import "../styles/tailwind.css"; // importing tailwind.css
import "../styles/fonts.css"; // importing fonts
import AuthLayout from "../components/layouts/authlayout";
import AppLayout from "../components/layouts/applayout";
import {useRouter} from "next/router";
import {BreakpointCheck} from "../core/interfaces/globals";

const Layout: React.FC = ({children}) => {
    const router = useRouter()
    // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    // if (!isAuthenticated && router.pathname != get_route('login')) {
    //     router.replace(get_route('login')).then();
    //     return <></>
    // }

    switch (router.pathname) {
        case('/login'):
            return <AuthLayout>{children}</AuthLayout>
        default:
            return <AppLayout>{children}</AppLayout>
    }
}
export const BreakpointContext = createContext<BreakpointCheck>({} as BreakpointCheck);

export default function MyApp(props: AppProps) {
    const {Component, pageProps} = props;
    const isDesktopView = useMediaQuery(theme.breakpoints.up("lg"));
    const isTabletView = useMediaQuery(theme.breakpoints.only("md"));
    const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
    const breakpoints = {
        isDesktopView: isDesktopView,
        isTabletView: isTabletView,
        isMobileView: isMobileView,
    };
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Teach and Learn</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                <BreakpointContext.Provider value={breakpoints}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                </BreakpointContext.Provider>
            </ThemeProvider>
        </React.Fragment>
    );
}