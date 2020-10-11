import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import AboutUs from '../components/2-aboutPage/aboutUs'
import AboutUsImage from '../assets/2-about/aboutus/aboutusImage'
import AboutPlattano from '../components/2-aboutPage/aboutPlattano'
import AboutPlattanoText from '../components/2-aboutPage/aboutPlattanoText'
import MissionIcon from '../assets/2-about/mission/mission'
import VisionIcon from '../assets/2-about/vision/vision'
import ValuesIcon from '../assets/2-about/values/values'
import OurValues from '../components/2-aboutPage/ourvalues'
import Mission from '../components/2-aboutPage/mission'
import Vision from '../components/2-aboutPage/vision'
import Values from '../components/2-aboutPage/values'
import News from '../components/News'
import Email from '../components/Email'
import History from '../components/2-aboutPage/history'
import HistoryImage from '../assets/2-about/history/historyImage'
import History2 from '../components/2-aboutPage/history2'
import History2Image from '../assets/2-about/history2/history2Image'
import History3 from '../components/2-aboutPage/history3'
import History3Image from '../assets/2-about/history3/history3Image'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Sobre: React.FC = () => {
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
                            <Row
                                background={true}
                                collapse="tabletOn"
                                polygon={true}
                            >
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={622}
                                >
                                    <AboutUs />
                                </Column>
                                <Column
                                    size={1}
                                    marginRight={2}
                                    maxWidth={622}
                                    collapse="tabletOn"
                                >
                                    <AboutUsImage />
                                </Column>
                            </Row>

                            <Row
                                background={true}
                                collapse="tabletOff"
                                polygon={true}
                            >
                                <Column size={1} marginLeft={2} marginRight={2}>
                                    <AboutUs />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row collapse="mobileOn">
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={622}
                                >
                                    <AboutPlattano />
                                </Column>
                                <Column size={1} marginRight={2} maxWidth={622}>
                                    <AboutPlattanoText />
                                </Column>
                            </Row>

                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <AboutPlattano />
                                </Column>
                            </Row>
                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    maxWidth={1280}
                                >
                                    <AboutPlattanoText />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    padding={2}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    maxWidth={1280}
                                >
                                    <OurValues />
                                </Column>
                            </Row>

                            <Row collapse="tabletOn">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    boxShadow={true}
                                    maxWidth={402.67}
                                >
                                    <MissionIcon />
                                    <Mission />
                                </Column>
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    boxShadow={true}
                                    maxWidth={402.67}
                                >
                                    <VisionIcon />
                                    <Vision />
                                </Column>
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    boxShadow={true}
                                    maxWidth={402.67}
                                >
                                    <ValuesIcon />
                                    <Values />
                                </Column>
                            </Row>

                            <Row collapse="tabletOff">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    paddingTop={1}
                                    paddingRight={2}
                                    paddingBottom={1}
                                    paddingLeft={2}
                                    boxShadow={true}
                                >
                                    <MissionIcon />
                                    <Mission />
                                </Column>
                            </Row>

                            <Row collapse="tabletOff">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    paddingTop={1}
                                    paddingRight={2}
                                    paddingBottom={1}
                                    paddingLeft={2}
                                    boxShadow={true}
                                >
                                    <VisionIcon />
                                    <Vision />
                                </Column>
                            </Row>

                            <Row collapse="tabletOff">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    paddingTop={1}
                                    paddingRight={2}
                                    paddingBottom={1}
                                    paddingLeft={2}
                                    boxShadow={true}
                                >
                                    <ValuesIcon />
                                    <Values />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row background={true} collapse="mobileOn">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <News />
                                </Column>
                                <Column size={1} maxWidth={622} marginRight={2}>
                                    <Email />
                                </Column>
                            </Row>

                            <Row background={true} collapse="mobileOff">
                                <Column size={1} marginRight={2} marginLeft={2}>
                                    <News />
                                    <Email />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <History />
                                </Column>
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={622}
                                    marginRight={2}
                                >
                                    <HistoryImage />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={622}
                                    marginLeft={2}
                                >
                                    <History2Image />
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <History2 />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <History3 />
                                </Column>
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={622}
                                    marginRight={2}
                                >
                                    <History3Image />
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

export default Sobre
