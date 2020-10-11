import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import Products from '../components/4-productsPage/Products'
import IntelligentBackup from '../components/4-productsPage/IntelligentBackup'
import IntelligentBackupImage from '../assets/4-products/intelligentBackup/intelligentBackupImage'
import AdvancedDisasterImage from '../assets/4-products/advancedDisasterImage/advancedDisasterImage'
import AdvancedDisaster from '../components/4-productsPage/AdvancedDisaster'
import IntelligentBackupOnImage from '../assets/4-products/intelligentBackupOn/intelligentBackupOnImage'
import IntelligentBackupOn from '../components/4-productsPage/IntelligentBackupOn'
import News from '../components/News'
import Email from '../components/Email'
import Veeam from '../components/4-productsPage/Veeam'
import VeeamImage from '../assets/4-products/veeamImage/veeamImage'
import Vmware from '../components/4-productsPage/Vmware'
import VmwareImage from '../assets/4-products/vmwareImage/vmwareImage'

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
                            <Row background={true} polygon={true}>
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <Products />
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
                                    <IntelligentBackup />
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    collapse="mobileOn"
                                >
                                    <IntelligentBackupImage />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    collapse="mobileOn"
                                >
                                    <AdvancedDisasterImage />
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <AdvancedDisaster />
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
                                    <IntelligentBackupOn />
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    collapse="mobileOn"
                                >
                                    <IntelligentBackupOnImage />
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
                                    collapse="mobileOn"
                                >
                                    <VeeamImage />
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <Veeam />
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
                                    <Vmware />
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    collapse="mobileOn"
                                >
                                    <VmwareImage />
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
