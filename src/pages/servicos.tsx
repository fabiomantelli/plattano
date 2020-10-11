import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import ProfessionalServices from '../components/3-servicesPage/ProfessionalServices'
import ProfessionalServices2Image from '../assets/3-services/professionalServices2/professionalServices2Image'
import ProfessionalServices2 from '../components/3-servicesPage/ProfessionalServices2'
import News from '../components/News'
import Email from '../components/Email'
import OurServices from '../components/3-servicesPage/ourServices'
import SupportImage from '../assets/3-services/support/supportImage'
import Support from '../components/3-servicesPage/Support'
import Consultancy from '../components/3-servicesPage/Consultancy'
import CloudServices from '../components/3-servicesPage/CloudServices'
import ConsultancyImage from '../assets/3-services/consultancy/consultancyImage'
import CloudServicesImage from '../assets/3-services/cloudServices/cloudServicesImage'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Services: React.FC = () => {
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
                                    <ProfessionalServices />
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
                                    <ProfessionalServices2Image />
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <ProfessionalServices2 />
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
                                    <OurServices />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    collapse="tabletOn"
                                    maxWidth={402.67}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <SupportImage />
                                </Column>
                                <Column
                                    size={1}
                                    collapse="tabletOn"
                                    maxWidth={402.67}
                                    marginTop={2}
                                    marginRight={2}
                                >
                                    <ConsultancyImage />
                                </Column>
                                <Column
                                    size={1}
                                    collapse="tabletOn"
                                    maxWidth={402.67}
                                    marginTop={2}
                                    marginRight={2}
                                >
                                    <CloudServicesImage />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row collapse="tabletOn">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    maxWidth={402.67}
                                >
                                    <Support />
                                </Column>

                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    maxWidth={402.67}
                                >
                                    <Consultancy />
                                </Column>
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    maxWidth={402.67}
                                >
                                    <CloudServices />
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
                                >
                                    <Support />
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
                                >
                                    <Consultancy />
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
                                >
                                    <CloudServices />
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

export default Services
