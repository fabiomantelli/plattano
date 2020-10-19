import React from 'react'
import Link from 'next/link'

import Row from '../../styles/Row'
import Column from '../../styles/Column'

import Contact from './Contact'
import Where from './Where'
import Social from './Social'
import Copyright from './Copyright'
import Idiom from './Idiom'
import ContactIcon from '../../assets/contact/contactIcon'
import WhereIcon from '../../assets/where/whereIcon'
import SocialIcon from '../../assets/social/socialIcon'
import VeeamVmwareIcon from '../../assets/footer/partners/VeeamVmwareIcon'
import Line from './Line'
import { FooterContainer } from '../../styles/Containers'
import PlattanoWhite from '../../assets/footer/plattanowhite/plattanowhite'

import { TitleFooter } from '../../styles/TextElements'

const Footer: React.FC = () => {
    return (
        <>
            <section>
                <Row position="relative" marginBottom={-10} collapse="mobileOn">
                    <Column
                        size={1}
                        background={true}
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
                        background={true}
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
                        background={true}
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
                        <FooterContainer>
                            <PlattanoWhite />
                        </FooterContainer>
                    </Column>
                    <Column
                        size={1}
                        maxWidth={293}
                        marginTop={2}
                        marginLeft={2}
                    >
                        <FooterContainer>
                            <TitleFooter>Serviços</TitleFooter>
                            <Link href="/">
                                <a>Licenciamentos</a>
                            </Link>
                            <Link href="/">
                                <a>Suporte</a>
                            </Link>
                            <Link href="/">
                                <a>Consultoria</a>
                            </Link>
                            <Link href="/">
                                <a>Implementação</a>
                            </Link>
                        </FooterContainer>
                    </Column>
                    <Column
                        size={1}
                        maxWidth={293}
                        marginTop={2}
                        marginLeft={2}
                    >
                        <FooterContainer>
                            <TitleFooter>Produtos</TitleFooter>
                            <Link href="/">
                                <a>BaaS</a>
                            </Link>
                            <Link href="/">
                                <a>DRaaS</a>
                            </Link>
                            <Link href="/">
                                <a>Intelligent Backup</a>
                            </Link>
                            <Link href="/">
                                <a>VMware</a>
                            </Link>
                            <Link href="/">
                                <a>Veeam</a>
                            </Link>
                        </FooterContainer>
                    </Column>
                    <Column
                        size={1}
                        maxWidth={293}
                        marginTop={2}
                        marginRight={2}
                        marginLeft={2}
                    >
                        <FooterContainer>
                            <TitleFooter>Nossos Parceiros</TitleFooter>
                        </FooterContainer>
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
