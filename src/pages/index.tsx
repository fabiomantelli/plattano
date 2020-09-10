import React, { useState } from 'react'
import Head from 'next/head'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import Toggle from '../components/Nav/Toggle'
import Sidebar from '../components/Nav/sidebar'

import Header from '../components/Header'
import Management from '../components/index/Management'
import Resources from '../components/index/Resources'
import ResorceImage from '../assets/index/resorce/resorceImage'
import DataCenter from '../components/index/DataCenter'
import DatacenterImage from '../assets/index/datacenter/datacenterImage'
import News from '../components/index/News'
import Email from '../components/index/Email'
import Market from '../components/index/Market'
import Licensing from '../components/index/Licensing'
import LicensingIcon from '../assets/index/licensing/licensing'
import Vmware from '../components/index/Vmware'
import Veeam from '../components/index/Veeam'
import AboutImage from '../assets/index/about/aboutImage'
import About from '../components/index/About'
import Contact from '../components/Contact'
import Where from '../components/Where'
import Social from '../components/Social'
import ServicesFooter from '../components/ServicesFooter'
import ProductsFooter from '../components/ProductsFooter'
import PartnersFooter from '../components/PartnersFooter'
import Copyright from '../components/index/Copyright'
import Idiom from '../components/index/Idiom'
import PlattanoLogo from '../assets/index/plattano/plattanoLogo'
import ContactIcon from '../assets/index/contact/contactIcon'
import WhereIcon from '../assets/index/where/whereIcon'
import SocialIcon from '../assets/index/social/socialIcon'
import VmwareIcon from '../assets/index/vmware/vmware'
import VeeamIcon from '../assets/index/veeam/veeam'
import PlattanoWhiteIcon from '../assets/index/plattanowhite/plattanowhite'
import VeeamVmwareIcon from '../assets/index/footer/VeeamVmwareIcon'
import Line from '../components/index/Line'

const Home: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const openHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true)
        } else {
            setSidebarOpen(false)
        }
    }

    let sidebarValue: JSX.Element
    let checked: boolean

    if (sidebarOpen) {
        sidebarValue = <Sidebar sidebar="sidebar" />
        checked = true
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

            <html>
                <body>
                    <Grid>
                        <header>
                            <Row>
                                <Column size={1}>
                                    <PlattanoLogo />
                                </Column>
                                <Column size={3} collapse="mobileoff">
                                    <Header />
                                </Column>
                                <Column size={1} collapse="mobileon">
                                    <Toggle
                                        click={openHandler}
                                        checked={checked}
                                    />
                                </Column>
                            </Row>
                        </header>

                        <Row collapse="mobileon">{sidebarValue}</Row>

                        <main>
                            <section>
                                <Row background={true}>
                                    <Column size={1}>
                                        <Management />
                                    </Column>
                                </Row>
                            </section>

                            <section>
                                <Row>
                                    <Column size={1} collapse="mobileoff">
                                        <ResorceImage />
                                    </Column>
                                    <Column size={1}>
                                        <Resources />
                                    </Column>
                                </Row>
                            </section>

                            <section>
                                <Row>
                                    <Column size={1}>
                                        <DataCenter />
                                    </Column>
                                    <Column size={1} collapse="mobileoff">
                                        <DatacenterImage />
                                    </Column>
                                </Row>
                            </section>

                            <section>
                                <Row background={true} collapse="desktopoff">
                                    <Column size={1}>
                                        <News />
                                    </Column>
                                    <Column size={1}>
                                        <Email />
                                    </Column>
                                </Row>

                                <Row background={true} collapse="desktopon">
                                    <Column size={1}>
                                        <News />
                                        <Email />
                                    </Column>
                                </Row>
                            </section>

                            <section>
                                <Row>
                                    <Column size={1}>
                                        <Market />
                                    </Column>
                                </Row>

                                <Row collapse="mobileoff">
                                    <Column
                                        size={1}
                                        marginLeft={5}
                                        marginBottom={1}
                                        paddingTop={2}
                                        paddingRight={2}
                                        paddingBottom={2}
                                        paddingLeft={2}
                                        boxShadow={true}
                                    >
                                        <LicensingIcon />
                                        <Licensing />
                                    </Column>
                                    <Column
                                        size={1}
                                        marginLeft={5}
                                        marginBottom={1}
                                        paddingTop={2}
                                        paddingRight={2}
                                        paddingBottom={2}
                                        paddingLeft={2}
                                        boxShadow={true}
                                    >
                                        <VmwareIcon />
                                        <Vmware />
                                    </Column>
                                    <Column
                                        size={1}
                                        marginRight={5}
                                        marginBottom={1}
                                        marginLeft={5}
                                        paddingTop={2}
                                        paddingRight={2}
                                        paddingBottom={2}
                                        paddingLeft={2}
                                        boxShadow={true}
                                    >
                                        <VeeamIcon />
                                        <Veeam />
                                    </Column>
                                </Row>

                                <Row collapse="mobileon">
                                    <Column
                                        size={1}
                                        marginLeft={10}
                                        marginBottom={1}
                                        marginRight={10}
                                        paddingTop={5}
                                        paddingRight={2}
                                        paddingBottom={5}
                                        paddingLeft={2}
                                        boxShadow={true}
                                    >
                                        <LicensingIcon />
                                        <Licensing />
                                    </Column>
                                </Row>

                                <Row collapse="mobileon">
                                    <Column
                                        size={1}
                                        marginTop={10}
                                        marginRight={10}
                                        marginBottom={1}
                                        marginLeft={10}
                                        paddingTop={5}
                                        paddingRight={2}
                                        paddingBottom={5}
                                        paddingLeft={2}
                                        boxShadow={true}
                                    >
                                        <VmwareIcon />
                                        <Vmware />
                                    </Column>
                                </Row>

                                <Row collapse="mobileon">
                                    <Column
                                        size={1}
                                        marginTop={10}
                                        marginRight={10}
                                        marginBottom={1}
                                        marginLeft={10}
                                        paddingTop={5}
                                        paddingRight={2}
                                        paddingBottom={5}
                                        paddingLeft={2}
                                        boxShadow={true}
                                    >
                                        <VeeamIcon />
                                        <Veeam />
                                    </Column>
                                </Row>
                            </section>

                            <section>
                                <Row marginTop={5}>
                                    <Column size={1} collapse="mobileoff">
                                        <AboutImage />
                                    </Column>
                                    <Column size={1}>
                                        <About />
                                    </Column>
                                </Row>
                            </section>

                            <section>
                                <Row
                                    collapse="mobileoff"
                                    position="relative"
                                    marginBottom={-10}
                                >
                                    <Column
                                        size={1}
                                        marginLeft={5}
                                        paddingBottom={2}
                                        padding={3}
                                        backgroundColor={true}
                                    >
                                        <ContactIcon />
                                        <Contact />
                                    </Column>
                                    <Column
                                        size={1}
                                        marginLeft={2}
                                        marginRight={2}
                                        paddingBottom={2}
                                        padding={3}
                                        backgroundColor={true}
                                    >
                                        <WhereIcon />
                                        <Where />
                                    </Column>
                                    <Column
                                        size={1}
                                        marginRight={5}
                                        paddingBottom={2}
                                        padding={3}
                                        backgroundColor={true}
                                    >
                                        <SocialIcon />
                                        <Social />
                                    </Column>
                                </Row>

                                <Row collapse="mobileon">
                                    <Column
                                        size={1}
                                        paddingBottom={2}
                                        marginRight={10}
                                        marginLeft={10}
                                    >
                                        <ContactIcon />
                                        <Contact />
                                    </Column>
                                </Row>

                                <Row collapse="mobileon">
                                    <Column
                                        size={1}
                                        paddingBottom={2}
                                        marginRight={10}
                                        marginLeft={10}
                                    >
                                        <WhereIcon />
                                        <Where />
                                    </Column>
                                </Row>

                                <Row collapse="mobileon">
                                    <Column
                                        size={1}
                                        paddingBottom={2}
                                        marginRight={10}
                                        marginLeft={10}
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
                                paddingTop={20}
                                collapse="mobileoff"
                            >
                                <Column size={1} marginTop={3} marginLeft={5}>
                                    <PlattanoWhiteIcon />
                                </Column>
                                <Column size={1} marginTop={3}>
                                    <ServicesFooter />
                                </Column>
                                <Column size={1} marginTop={3}>
                                    <ProductsFooter />
                                </Column>
                                <Column size={1} marginTop={3} marginRight={5}>
                                    <PartnersFooter />
                                    <VeeamVmwareIcon />
                                </Column>
                            </Row>

                            <Row background={true}>
                                <Column
                                    size={1}
                                    marginRight={5}
                                    marginBottom={1}
                                    marginLeft={5}
                                >
                                    <Line />
                                </Column>
                            </Row>

                            <Row background={true} collapse="mobileoff">
                                <Column size={1}>
                                    <Copyright />
                                </Column>
                                <Column size={1}>
                                    <Idiom />
                                </Column>
                            </Row>
                        </footer>
                    </Grid>
                </body>
            </html>
        </>
    )
}

export default Home
