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
import LicensingIcon from '../assets/index/licensing/licensing'
import Vmware from '../components/Vmware'
import Veeam from '../components/Veeam'
import AboutImage from '../assets/index/about/aboutImage'
import About from '../components/About'
import Contact from '../components/Contact'
import Where from '../components/Where'
import Social from '../components/Social'
import ServicesFooter from '../components/ServicesFooter'
import ProductsFooter from '../components/ProductsFooter'
import PartnersFooter from '../components/PartnersFooter'
import Copyright from '../components/Copyright'
import Idiom from '../components/Idiom'
import PlattanoLogo from '../assets/index/plattano/plattanoLogo'
import ContactIcon from '../assets/index/contact/contactIcon'
import WhereIcon from '../assets/index/where/whereIcon'
import SocialIcon from '../assets/index/social/socialIcon'
import VmwareIcon from '../assets/index/vmware/vmware'
import VeeamIcon from '../assets/index/veeam/veeam'
import PlattanoWhiteIcon from '../assets/index/plattanowhite/plattanowhite'
import VeeamVmwareIcon from '../assets/index/footer/VeeamVmwareIcon'

export const Grid = styled.div`
    display: grid;
`

export const Row = styled.div<{
    background?: boolean
    position?: string
    marginTop?: number
    collapse?: string
}>`
    display: flex;
    ${props =>
        props.collapse &&
        media[props.collapse](`display: none;
    `)}
    background: ${props =>
        props.background === true ? props.theme.colors.gradient : false};
    position: ${props => props.position};
    margin-top: ${props => props.marginTop}vh;
`

export const Column = styled.div<{
    size: number
    collapse?: string
    marginTop?: number
    marginRight?: number
    marginBottom?: number
    marginLeft?: number
    boxShadow?: boolean
    paddingTop?: number
    paddingRight?: number
    paddingBottom?: number
    paddingLeft?: number
}>`
    flex: ${props => props.size};
    ${props =>
        props.collapse &&
        media[props.collapse](`display: none;
    `)}

    padding-top: ${props => props.paddingTop}vw;
    padding-right: ${props => props.paddingRight}vw;
    padding-bottom: ${props => props.paddingBottom}vw;
    padding-left: ${props => props.paddingLeft}vw;
    box-shadow: ${props =>
        props.boxShadow === true
            ? '0px 10px 20px rgba(171, 171, 171, 0.15)'
            : 'none'};

    margin-top: ${props => props.marginTop}vw;
    margin-right: ${props => props.marginRight}vw;
    margin-bottom: ${props => props.marginBottom}vw;
    margin-left: ${props => props.marginLeft}vw;

    // border: green solid 1px;
`

const media = {
    desktopoff: (styles: string) => `
        @media only screen and (max-width: 1024px) {
            ${styles}
        }
    `,
    desktopon: (styles: string) => `
        @media only screen and (min-width: 1025px) {
            ${styles}
        }
    `,
    mobileoff: (styles: string) => `
        @media only screen and (max-width: 600px) {
            ${styles}
        }
    `,
    mobileon: (styles: string) => `
        @media only screen and (min-width: 601px) {
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
                <title>Plattano Technologies</title>
            </Head>

            <html>
                <body>
                    <Grid>
                        <Row>
                            <Column size={1}>
                                <PlattanoLogo />
                            </Column>
                            <Column size={3} collapse="mobileoff">
                                <Header />
                            </Column>
                        </Row>

                        <Row background={true}>
                            <Column size={1}>
                                <Management />
                            </Column>
                        </Row>

                        <Row>
                            <Column size={1} collapse="mobileoff">
                                <ResorceImage />
                            </Column>
                            <Column size={1}>
                                <Resources />
                            </Column>
                        </Row>
                        <Row>
                            <Column size={1} paddingRight={10}>
                                <DataCenter />
                            </Column>
                            <Column size={1} collapse="mobileoff">
                                <DatacenterImage />
                            </Column>
                        </Row>

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
                        <Row>
                            <Column size={1}>
                                <Market />
                            </Column>
                        </Row>
                        <Row collapse="mobileoff">
                            <Column
                                size={1}
                                marginBottom={1}
                                marginLeft={5}
                                boxShadow={true}
                                paddingTop={2}
                                paddingRight={2}
                                paddingBottom={2}
                                paddingLeft={2}
                            >
                                <LicensingIcon />
                                <Licensing />
                            </Column>
                            <Column
                                size={1}
                                marginBottom={1}
                                marginLeft={5}
                                boxShadow={true}
                                paddingTop={2}
                                paddingRight={2}
                                paddingBottom={2}
                                paddingLeft={2}
                            >
                                <VmwareIcon />
                                <Vmware />
                            </Column>
                            <Column
                                size={1}
                                marginBottom={1}
                                marginRight={5}
                                marginLeft={5}
                                boxShadow={true}
                                paddingTop={2}
                                paddingRight={2}
                                paddingBottom={2}
                                paddingLeft={2}
                            >
                                <VeeamIcon />
                                <Veeam />
                            </Column>
                        </Row>
                        <Row collapse="mobileon">
                            <Column
                                size={1}
                                marginBottom={1}
                                marginLeft={5}
                                boxShadow={true}
                                paddingTop={2}
                                paddingRight={2}
                                paddingBottom={2}
                                paddingLeft={2}
                            >
                                <LicensingIcon />
                                <Licensing />
                            </Column>
                        </Row>
                        <Row collapse="mobileon">
                            <Column
                                size={1}
                                marginBottom={1}
                                marginLeft={5}
                                boxShadow={true}
                                paddingTop={2}
                                paddingRight={2}
                                paddingBottom={2}
                                paddingLeft={2}
                            >
                                <VmwareIcon />
                                <Vmware />
                            </Column>
                        </Row>
                        <Row collapse="mobileon">
                            <Column
                                size={1}
                                marginBottom={1}
                                marginRight={5}
                                marginLeft={5}
                                boxShadow={true}
                                paddingTop={2}
                                paddingRight={2}
                                paddingBottom={2}
                                paddingLeft={2}
                            >
                                <VeeamIcon />
                                <Veeam />
                            </Column>
                        </Row>
                        <Row marginTop={5}>
                            <Column size={1} collapse="mobileoff">
                                <AboutImage />
                            </Column>
                            <Column size={1}>
                                <About />
                            </Column>
                        </Row>
                        <Row collapse="mobileoff">
                            <Column size={1} marginLeft={5} paddingBottom={2}>
                                <ContactIcon />
                                <Contact />
                            </Column>
                            <Column
                                size={1}
                                marginLeft={2}
                                marginRight={2}
                                paddingBottom={2}
                            >
                                <WhereIcon />
                                <Where />
                            </Column>
                            <Column size={1} marginRight={5} paddingBottom={2}>
                                <SocialIcon />
                                <Social />
                            </Column>
                        </Row>

                        <Row collapse="mobileon">
                            <Column size={1} marginLeft={5} paddingBottom={2}>
                                <ContactIcon />
                                <Contact />
                            </Column>
                        </Row>
                        <Row collapse="mobileon">
                            <Column
                                size={1}
                                marginLeft={2}
                                marginRight={2}
                                paddingBottom={2}
                            >
                                <WhereIcon />
                                <Where />
                            </Column>
                        </Row>
                        <Row collapse="mobileon">
                            <Column size={1} marginRight={5} paddingBottom={2}>
                                <SocialIcon />
                                <Social />
                            </Column>
                        </Row>
                        <Row background={true} collapse="mobileoff">
                            <Column
                                size={1}
                                marginLeft={5}
                                marginTop={3}
                                marginBottom={4}
                            >
                                <PlattanoWhiteIcon />
                            </Column>
                            <Column
                                size={1}
                                marginLeft={2}
                                marginTop={3}
                                marginBottom={4}
                            >
                                <ServicesFooter />
                            </Column>
                            <Column
                                size={1}
                                marginLeft={2}
                                marginTop={3}
                                marginBottom={4}
                            >
                                <ProductsFooter />
                            </Column>
                            <Column
                                size={1}
                                marginLeft={2}
                                marginRight={2}
                                marginTop={3}
                            >
                                <PartnersFooter />
                                <VeeamVmwareIcon />
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
                    </Grid>
                </body>
            </html>
        </>
    )
}

export default Home
