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
import Line from './Line'
import { FooterContainer } from '../../styles/Containers'

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
                        maxWidth={402.67}
                        // maxWidth={293}
                        marginTop={2}
                        marginLeft={2}
                    >
                        <Link href="/">
                            <img 
                                src="../assets/footer/plattanowhite-icon.svg" 
                                alt="Pláttano Logo" 
                                style={{ 
                                    cursor: 'pointer',
                                }}
                            />
                        </Link>
                    </Column>
                    {/* <Column
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
                            <Link href="/suporte">
                                <a>Suporte</a>
                            </Link>
                            <Link href="/">
                                <a>Consultoria</a>
                            </Link>
                            <Link href="/">
                                <a>Implementação</a>
                            </Link>
                        </FooterContainer>
                    </Column> */}
                    <Column
                        size={1}
                        maxWidth={402.67}
                        // maxWidth={293}
                        marginTop={2}
                        marginLeft={2}
                    >
                        <FooterContainer>
                            <TitleFooter>Produtos</TitleFooter>
                            <Link href="/produtos/baas">
                                <a>BaaS</a>
                            </Link>
                            <Link href="/produtos/draas">
                                <a>DRaaS</a>
                            </Link>
                            <Link href="/produtos/vcsp">
                                <a>Intelligent Backup</a>
                            </Link>
                            <Link href="/vmware">
                                <a>VMware</a>
                            </Link>
                            <Link href="/veeam">
                                <a>Veeam</a>
                            </Link>
                        </FooterContainer>
                    </Column>
                    <Column
                        size={1}
                        maxWidth={402.67}
                        // maxWidth={293}
                        marginTop={2}
                        marginRight={2}
                        marginLeft={2}
                    >
                        <FooterContainer>
                            <TitleFooter>Nossos Parceiros</TitleFooter>
                            <a
                                href="https://www.veeam.com/br"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{
                                        display: 'flex',
                                        cursor: 'pointer',
                                        maxWidth: '100%',
                                        paddingTop: '0.5rem'
                                    }}
                                    src="/assets/footer/veeamwhite-logo.png"
                                    alt="Veeam Logo"
                                />
                            </a>

                            <a
                                href="https://www.vmware.com/br.html"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{
                                        display: 'flex',
                                        cursor: 'pointer',
                                        maxWidth: '100%',
                                        paddingTop: '1rem'
                                    }}
                                    src="/assets/footer/vmwarewhite-icon.png"
                                    alt="VMware Logo"
                                />
                            </a>
                        </FooterContainer>
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
