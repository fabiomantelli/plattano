import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import Hamburguer from '../components/Hamburguer'
import Navbar from '../components/Navbar'

import PlattanoLogo from '../assets/plattano/plattanoLogo'
import MobileMenu from '../components/MobileMenu'
import Consultancy from '../components/7-consultancyPage/Consultancy'
import DontKnowImage from '../assets/7-consultancy/dontknow/dontKnowImage'
import DontKnow from '../components/7-consultancyPage/DontKnow'
import AddValueImage from '../assets/7-consultancy/addvalue/addValueImage'
import AddValue from '../components/7-consultancyPage/AddValue'
import UpdatedImage from '../assets/7-consultancy/updated/updatedImage'
import Updated from '../components/7-consultancyPage/Updated'
import ReferenceCompanyImage from '../assets/7-consultancy/referencecompany/referenceCompanyImage'
import ReferenceCompany from '../components/7-consultancyPage/ReferenceCompany'

import ProductsFooter from '../components/ProductsFooter'
import PartnersFooter from '../components/PartnersFooter'
import ServicesFooter from '../components/ServicesFooter'
import Line from '../components/1-indexPage/Line'
import Where from '../components/Where'
import PlattanoWhiteIcon from '../assets/1-index/plattanowhite/plattanowhite'
import ContactIcon from '../assets/contact/contactIcon'
import WhereIcon from '../assets//where/whereIcon'
import SocialIcon from '../assets/social/socialIcon'

import VeeamVmwareIcon from '../assets/footer/VeeamVmwareIcon'
import Contact from '../components/Contact'
import Social from '../components/Social'

import Copyright from '../components/1-indexPage/Copyright'
import Idiom from '../components/1-indexPage/Idiom'

const Consultoria: React.FC = () => {
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
                    <Row>
                        <Column
                            size={1}
                            maxWidth={414.67}
                            marginLeft={2}
                            marginRight={2}
                        >
                            <PlattanoLogo />
                        </Column>
                        <Column
                            size={3}
                            collapse="desktopOff"
                            maxWidth={829.33}
                            paddingLeft={2}
                            paddingRight={2}
                            marginRight={2}
                        >
                            <Navbar />
                        </Column>

                        <Column size={1} marginRight={2} collapse="mobileOff">
                            <Hamburguer click={openHandler} isActive={active} />
                            <MobileMenu isActive={active} click={openHandler} />
                        </Column>
                    </Row>

                    <main>
                        <section>
                            <Row background={true} polygon={true}>
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <Consultancy />
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
                                    <DontKnowImage />
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <DontKnow />
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
                                    <AddValue />
                                </Column>
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={622}
                                    marginRight={2}
                                >
                                    <AddValueImage />
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
                                    <UpdatedImage />
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <Updated />
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
                                    <ReferenceCompany />
                                </Column>
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={622}
                                    marginRight={2}
                                >
                                    <ReferenceCompanyImage />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row
                                position="relative"
                                marginBottom={-10}
                                collapse="mobileOn"
                            >
                                <Column
                                    size={1}
                                    backgroundColor={true}
                                    maxWidth={402.67}
                                    marginTop={2}
                                    marginLeft={2}
                                    boxShadow={true}
                                >
                                    <ContactIcon />
                                    <Contact />
                                </Column>
                                <Column
                                    size={1}
                                    backgroundColor={true}
                                    maxWidth={402.67}
                                    marginTop={2}
                                    marginLeft={2}
                                    boxShadow={true}
                                >
                                    <WhereIcon />
                                    <Where />
                                </Column>
                                <Column
                                    size={1}
                                    backgroundColor={true}
                                    maxWidth={402.67}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    boxShadow={true}
                                >
                                    <SocialIcon />
                                    <Social />
                                </Column>
                            </Row>

                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    paddingBottom={2}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    boxShadow={true}
                                >
                                    <ContactIcon />
                                    <Contact />
                                </Column>
                            </Row>

                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    paddingBottom={2}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    boxShadow={true}
                                >
                                    <WhereIcon />
                                    <Where />
                                </Column>
                            </Row>

                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    paddingBottom={2}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    marginBottom={2}
                                    boxShadow={true}
                                >
                                    <SocialIcon />
                                    <Social />
                                </Column>
                            </Row>
                        </section>
                    </main>

                    <footer>
                        <Row
                            background={true}
                            paddingTop={10}
                            collapse="mobileOn"
                        >
                            <Column
                                size={1}
                                maxWidth={293}
                                marginTop={2}
                                marginLeft={2}
                            >
                                <PlattanoWhiteIcon />
                            </Column>
                            <Column
                                size={1}
                                maxWidth={293}
                                marginTop={2}
                                marginLeft={2}
                            >
                                <ServicesFooter />
                            </Column>
                            <Column
                                size={1}
                                maxWidth={293}
                                marginTop={2}
                                marginLeft={2}
                            >
                                <ProductsFooter />
                            </Column>
                            <Column
                                size={1}
                                maxWidth={293}
                                marginTop={2}
                                marginRight={2}
                                marginLeft={2}
                            >
                                <PartnersFooter />
                                <VeeamVmwareIcon />
                            </Column>
                        </Row>

                        <Row background={true} collapse="mobileOn">
                            <Column size={1} marginBottom={1} maxWidth={1344}>
                                <Line />
                            </Column>
                        </Row>

                        <Row background={true} collapse="mobileOn">
                            <Column size={1} maxWidth={640} marginLeft={2}>
                                <Copyright />
                            </Column>
                            <Column size={1} maxWidth={640} marginRight={2}>
                                <Idiom />
                            </Column>
                        </Row>
                    </footer>
                </Grid>
            </ScrollLock>
        </>
    )
}

export default Consultoria
