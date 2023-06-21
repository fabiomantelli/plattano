import React, { useEffect } from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

// import GoogleTagManager from '../components/GoogleTagManager'

// import { useEffect } from "react";
// import { useRouter } from "next/router";

import FloatingWhatsApp from 'react-floating-whatsapp'

// import * as gtag from "../lib/gtag";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // const router = useRouter();

  // useEffect(() => {
  //     const handleRouteChange = (url: URL) => {
  //     gtag.pageview(url);
  //     };
  //     router.events.on("routeChangeComplete", handleRouteChange);
  //     return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //     };
  // }, [router.events]);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      (function (w, d, u) {
        var s = d.createElement('script');
        s.async = true; s.src = u + '?' + (Date.now() / 180000 | 0);
        var h = d.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s, h);
      })(
        window,
        document,
        'https://cdn.bitrix24.com.br/b17869893/crm/site_button/loader_7_8e3ev9.js');
    }
  }, [])

  return (
    <>
      <script data-b24-form="auto/27/m0ebno" data-skip-moving="true" />
      {/* <GoogleTagManager> */}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />

      </ThemeProvider>
      {/* <FloatingWhatsApp phoneNumber='+554831979877' accountName='Pláttano Technologies'
        allowClickAway={true}
        chatMessage="Olá, como podemos ajudar?"
        avatar='/assets/avatar_call_center.png'
        statusMessage="On-line"
      /> */}
      {/* </GoogleTagManager>*/}


    </>
  )
}

export default MyApp
