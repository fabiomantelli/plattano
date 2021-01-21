import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
        <script
            type="text/javascript"
            src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
        ></script>

        {/* Google Tag Manager */}
        <script
            dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-P4CF9TP');`,
            }}
        />
        {/* End Google Tag Manager */}
        {/* Google Tag Manager (noscript) */}
        <noscript
            dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P4CF9TP" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
        />
        {/* End Google Tag Manager (noscript) */}

        </>
    )
}

export default MyApp
