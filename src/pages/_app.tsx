import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

import GoogleTagManager from '../components/GoogleTagManager'

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: URL) => {
        gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <GoogleTagManager>
                <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                    <GlobalStyle />
                </ThemeProvider>
            </GoogleTagManager>
            <script
                type="text/javascript"
                src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
            ></script>
        </>
    )
}

export default MyApp
