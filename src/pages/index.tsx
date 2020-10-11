import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import Modernity from '../components/1-indexPage/Modernity'
import Team from '../components/1-indexPage/Team'
import TeamImage from '../assets/1-index/team/teamImage'
import DataCenter from '../components/1-indexPage/DataCenter'
import DatacenterImage from '../assets/1-index/datacenter/datacenterImage'
import News from '../components/News'
import Email from '../components/Email'
import Market from '../components/1-indexPage/Market'
import Licensing from '../components/1-indexPage/Licensing'
import LicensingIcon from '../assets/1-index/licensing/licensing'
import Reference from '../components/1-indexPage/Reference'
import Services from '../components/1-indexPage/Services'
import ReasonImage from '../assets/1-index/reason/reasonImage'
import Reason from '../components/1-indexPage/Reason'

import ReferenceIcon from '../assets/1-index/reference/reference'
import ServicesIcon from '../assets/1-index/services/services'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home: React.FC = () => {
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
                            <Row background={true}>
                                <Column size={1}>
                                    <Modernity />
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
                                    <TeamImage />
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <Team />
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
                                    <DataCenter />
                                </Column>
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={622}
                                    marginRight={2}
                                >
                                    <DatacenterImage />
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
                                    padding={2}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    maxWidth={1280}
                                >
                                    <Market />
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
                                    <LicensingIcon />
                                    <Licensing />
                                </Column>
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    boxShadow={true}
                                    maxWidth={402.67}
                                >
                                    <ReferenceIcon />
                                    <Reference />
                                </Column>
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    boxShadow={true}
                                    maxWidth={402.67}
                                >
                                    <ServicesIcon />
                                    <Services />
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
                                    <LicensingIcon />
                                    <Licensing />
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
                                    <ReferenceIcon />
                                    <Reference />
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
                                    <ServicesIcon />
                                    <Services />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row marginTop={2}>
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={622}
                                    marginLeft={2}
                                >
                                    <ReasonImage />
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <Reason />
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

export default Home
