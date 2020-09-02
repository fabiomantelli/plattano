import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import Header from '../components/Header'
import Management from '../components/Management'
import Resources from '../components/Resources'
import ResorceImage from '../assets/index/resorce/resorceImage'
import DataCenter from '../components/DataCenter'
import DatacenterImage from '../assets/index/datacenter/datacenterImage'
import News from '../components/News'
import Email from '../components/Email'
import Market from '../components/Market'
import Licensing from '../components/Licensing'
import Vmware from '../components/Vmware'
import Veeam from '../components/Veeam'
import AboutImage from '../assets/index/aboutImage'
import About from '../components/About'
import Contact from '../components/Contact'
import Where from '../components/Where'
import Social from '../components/Social'
import ServicesFooter from '../components/ServicesFooter'
import ProductsFooter from '../components/ProductsFooter'
import PartnersFooter from '../components/PartnersFooter'
import End from '../components/End'
import PlattanoImage from '../assets/index/plattano/plattanoImage'
import ContactIcon from '../assets/index/contactIcon'
import WhereIcon from '../assets/index/whereIcon'
import SocialIcon from '../assets/index/socialIcon'
import LicensingIcon from '../assets/index/licensing'
import VmwareIcon from '../assets/index/vmware'
import VeeamIcon from '../assets/index/veeam'
import PlattanoWhiteIcon from '../assets/index/plattanowhite'

export const Grid = styled.div`
    display: grid;
`

export const Row = styled.div<{ background?: boolean; position?: string }>`
    display: flex;
    background: ${props =>
        props.background === true ? props.theme.colors.gradient : false};
    position: ${props => props.position};
`

export const Column = styled.div<{
    size: number
    collapse?: string
    marginTop?: number
    marginRight?: number
    marginBottom?: number
    marginLeft?: number
}>`
    flex: ${props => props.size};
    ${props =>
        props.collapse &&
        media[props.collapse](`display: none;
    `)}

    margin-top: ${props => props.marginTop}vw;
    margin-right: ${props => props.marginRight}vw;
    margin-bottom: ${props => props.marginBottom}vw;
    margin-left: ${props => props.marginLeft}vw;

    // border: green solid 1px;
`

const media = {
    mobile: (styles: string) => `
        @media only screen and (max-width: 600px) {
            ${styles}
        }
    `,
    desktop: (styles: string) => `
        @media only screen and (max-width: 1024px) {
            ${styles}
        }
    `
}

export const Footer = styled.footer`
    color: #161616;
`

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Plattano</title>
            </Head>

            <body>
                <Grid>
                    <Row>
                        <Column size={1}>
                            <PlattanoImage />
                        </Column>
                        <Column size={3}>
                            <Header />
                        </Column>
                    </Row>

                    <Row background={true}>
                        <Column size={1}>
                            <Management />
                        </Column>
                    </Row>

                    <Row>
                        <Column size={1}>
                            <ResorceImage />
                        </Column>
                        <Column size={1}>
                            <Resources />
                        </Column>
                    </Row>
                    <Row>
                        <Column size={1}>
                            <DataCenter />
                        </Column>
                        <Column size={1}>
                            <DatacenterImage />
                        </Column>
                    </Row>

                    <Row background={true}>
                        <Column size={1}>
                            <News />
                        </Column>
                        <Column size={1}>
                            <Email />
                        </Column>
                    </Row>
                    <Row>
                        <Column size={1}>
                            <Market />
                        </Column>
                    </Row>
                    <Row>
                        <Column
                            size={1}
                            marginTop={5}
                            marginBottom={5}
                            marginLeft={5}
                        >
                            <LicensingIcon />
                            <Licensing />
                        </Column>
                        <Column
                            size={1}
                            marginTop={5}
                            marginBottom={5}
                            marginLeft={5}
                        >
                            <VmwareIcon />
                            <Vmware />
                        </Column>
                        <Column
                            size={1}
                            marginTop={5}
                            marginRight={5}
                            marginBottom={5}
                            marginLeft={5}
                        >
                            <VeeamIcon />
                            <Veeam />
                        </Column>
                    </Row>
                    <Row>
                        <Column size={1}>
                            <AboutImage />
                        </Column>
                        <Column size={1}>
                            <About />
                        </Column>
                    </Row>
                    <Row>
                        <Column size={1} marginLeft={5}>
                            <ContactIcon />
                            <Contact />
                        </Column>
                        <Column size={1} marginLeft={2} marginRight={2}>
                            <WhereIcon />
                            <Where />
                        </Column>
                        <Column size={1} marginRight={5}>
                            <SocialIcon />
                            <Social />
                        </Column>
                    </Row>
                    <Row background={true}>
                        <Column
                            size={1}
                            marginLeft={5}
                            marginTop={5}
                            marginBottom={5}
                        >
                            <PlattanoWhiteIcon />
                        </Column>
                        <Column
                            size={1}
                            marginLeft={2}
                            marginTop={5}
                            marginBottom={5}
                        >
                            <ServicesFooter />
                        </Column>
                        <Column
                            size={1}
                            marginLeft={2}
                            marginTop={5}
                            marginBottom={5}
                        >
                            <ProductsFooter />
                        </Column>
                        <Column
                            size={1}
                            marginLeft={2}
                            marginRight={2}
                            marginTop={5}
                        >
                            <PartnersFooter />
                        </Column>
                    </Row>
                    <Row background={true}>
                        <End />
                    </Row>
                </Grid>
            </body>
        </>
    )
}

export default Home
