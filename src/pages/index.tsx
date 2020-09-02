import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import Header from '../components/Header'
import Management from '../components/Management'
import ResourcesImage from '../assets/index/resourcesImage'
import Resources from '../components/Resources'
import DataCenter from '../components/DataCenter'
import DatacenterImage from '../assets/index/datacenterImage'
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
import PlattanoImage from '../assets/index/plattanoImage'
import ContactIcon from '../assets/index/contactIcon'
import WhereIcon from '../assets/index/whereIcon'
import SocialIcon from '../assets/index/socialIcon'

export const Grid = styled.div`
    display: grid;
`

export const Row = styled.div<{ background?: boolean }>`
    display: flex;
    background: ${props =>
        props.background === true ? props.theme.colors.gradient : false};
`

export const Column = styled.div<{ size: number; collapse?: string }>`
    flex: ${props => props.size};
    ${props =>
        props.collapse &&
        media[props.collapse](`display: none;
    `)}
    border: green solid 1px;
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
                            <ResourcesImage />
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
                        <Column size={1}>
                            <Licensing />
                        </Column>
                        <Column size={1}>
                            <Vmware />
                        </Column>
                        <Column size={1}>
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
                        <Column size={1}>
                            <ContactIcon />
                            <Contact />
                        </Column>
                        <Column size={1}>
                            <WhereIcon />
                            <Where />
                        </Column>
                        <Column size={1}>
                            <SocialIcon />
                            <Social />
                        </Column>
                    </Row>
                    <Row background={true}>
                        <Column size={1}>
                            <h1>Plattano Logo</h1>
                        </Column>
                        <Column size={1}>
                            <ServicesFooter />
                        </Column>
                        <Column size={1}>
                            <ProductsFooter />
                        </Column>
                        <Column size={1}>
                            <PartnersFooter />
                        </Column>
                    </Row>
                    <Row>
                        <End />
                    </Row>
                </Grid>
            </body>
        </>
    )
}

export default Home
