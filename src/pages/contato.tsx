import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import ContactUs from '../components/6-contactPage/ContactUs'
import Help from '../components/6-contactPage/Help'
import Send from '../components/6-contactPage/Send'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Contato: React.FC = () => {
    const [active, SetActive] = useState('initial')
    const [mobile, SetMobile] = useState(false)

    const openHandler = () => {
        if (active === 'active') {
            SetActive('not-active')
            SetMobile(false)
            console.log(active)
        } else {
            console.log(active)
            SetActive('active')
            SetMobile(true)
        }
    }
    return (
        <>
            <Head>
                <title>Plattano Technologies</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <ScrollLock isActive={mobile}>
                <Grid>
                    <Header click={openHandler} active={active} />

                    <main>
                        <section>
                            <Row background={true} polygon={true}>
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <ContactUs />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row collapse="mobileOn">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <Help />
                                </Column>
                                <Column size={1} maxWidth={622} marginRight={2}>
                                    <Send />
                                </Column>
                            </Row>

                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <Help />
                                </Column>
                            </Row>
                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                    marginTop={2}
                                >
                                    <Send />
                                </Column>
                            </Row>
                        </section>
                    </main>

                    <Footer />
                </Grid>
            </ScrollLock>
        </>
    )
}

export default Contato
