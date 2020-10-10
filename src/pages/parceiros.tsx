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
import Partners from '../components/5-partners/Partners'
import SpeedTransformation from '../components/5-partners/SpeedTransformation'
import SpeedTransformationText from '../components/5-partners/SpeedTransformationText'
import PartnersAre from '../components/5-partners/PartnersAre'
import PartnersAreImage from '../assets/5-parners/partnersAre/partnersAreImage'
import CustomSolutions from '../components/5-partners/CustomSolutions'
import CustomSolutionsText from '../components/5-partners/CustomSolutionsText'
import Forbes from '../components/5-partners/Forbes'
import Cloud100 from '../components/5-partners/Cloud100'
import Cloud100Image from '../assets/5-parners/cloud100/cloud100Image'

import News from '../components/News'
import Email from '../components/Email'
import Distributors from '../components/5-partners/Distributors'

import Contact from '../components/Contact'
import Social from '../components/Social'
import Where from '../components/Where'
import ServicesFooter from '../components/ServicesFooter'
import PartnersFooter from '../components/PartnersFooter'
import Line from '../components/1-indexPage/Line'
import ProductsFooter from '../components/ProductsFooter'

import PlattanoWhiteIcon from '../assets/1-index/plattanowhite/plattanowhite'
import ContactIcon from '../assets/contact/contactIcon'
import WhereIcon from '../assets/where/whereIcon'
import SocialIcon from '../assets/social/socialIcon'

import VeeamVmwareIcon from '../assets/footer/VeeamVmwareIcon'

import Copyright from '../components/1-indexPage/Copyright'
import Idiom from '../components/1-indexPage/Idiom'

import VmwareLogo from '../assets/5-parners/vmwareLogo/vmwareLogo'
import VeeamLogo from '../assets/5-parners/veeamlogo/veeamLogo'
import SynnexLogo from '../assets/5-parners/synnexLogo/synnexLogo'
import AdistecLogo from '../assets/5-parners/adistecLogo/adistecLogo'

const Parceiros: React.FC = () => {
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
                                    <Partners />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <SpeedTransformation />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <SpeedTransformationText />
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
                                    <PartnersAre />
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    collapse="mobileOn"
                                >
                                    <PartnersAreImage />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <CustomSolutions />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <CustomSolutionsText />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <Forbes />
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
                                    <Cloud100 />
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    collapse="mobileOn"
                                >
                                    <Cloud100Image />
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
                                    marginRight={2}
                                    marginLeft={2}
                                    maxWidth={1280}
                                >
                                    <Distributors />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row collapse="tabletOn">
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    marginTop={2}
                                    maxWidth={293}
                                >
                                    <VmwareLogo />
                                </Column>
                                <Column
                                    size={1}
                                    marginRight={2}
                                    marginTop={2}
                                    maxWidth={293}
                                >
                                    <VeeamLogo />
                                </Column>
                                <Column
                                    size={1}
                                    marginRight={2}
                                    marginTop={2}
                                    maxWidth={293}
                                >
                                    <SynnexLogo />
                                </Column>
                                <Column
                                    size={1}
                                    marginRight={2}
                                    marginTop={2}
                                    maxWidth={293}
                                >
                                    <AdistecLogo />
                                </Column>
                            </Row>

                            <Row collapse="tabletOff">
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    marginTop={2}
                                    maxWidth={293}
                                >
                                    <VmwareLogo />
                                    <VeeamLogo />
                                </Column>
                                <Column
                                    size={1}
                                    marginRight={2}
                                    marginTop={2}
                                    maxWidth={293}
                                >
                                    <SynnexLogo />
                                    <AdistecLogo />
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

export default Parceiros
