import React from 'react'

import Row from '../../styles/Row'
import Column from '../../styles/Column'

import Contact from '../Contact'
import Where from '../Where'
import Social from '../Social'
import ServicesFooter from '../ServicesFooter'
import ProductsFooter from '../ProductsFooter'
import PartnersFooter from '../PartnersFooter'
import Copyright from '../1-indexPage/Copyright'
import Idiom from '../1-indexPage/Idiom'
import ContactIcon from '../../assets/contact/contactIcon'
import WhereIcon from '../../assets/where/whereIcon'
import SocialIcon from '../../assets/social/socialIcon'
import PlattanoWhiteIcon from '../../assets/1-index/plattanowhite/plattanowhite'
import VeeamVmwareIcon from '../../assets/footer/VeeamVmwareIcon'
import Line from '../1-indexPage/Line'

const Footer: React.FC = () => {
    return (
        <>
            <section>
                <Row position="relative" marginBottom={-10} collapse="mobileOn">
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

            <footer>
                <Row background={true} paddingTop={10} collapse="mobileOn">
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
        </>
    )
}

export default Footer
