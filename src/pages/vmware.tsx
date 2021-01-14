import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'
import Header from '../components/Header'
import {
    HexagonContainer,
    ImageContainer,
    MainContainer,
    MainGeometricContainer,
    PolygonContainer
} from '../styles/Containers'
import {
    HexagonParagraph,
    HexagonTitle,
    SubTitle,
    Title
} from '../styles/TextElements'
import { ButtonElement } from '../styles/Buttons'

import Trapezio from '../assets/trapezio'
import Footer from '../components/Footer'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Vmware: React.FC = () => {
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

                    <a
                        href="https://wa.me/5548999610729?text=Gostaria%20de%20obter%20mais%20informações%20sobre%20os%20produtos%20e%20serviços%20da%20Pláttano%20Technologies."
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            position: 'fixed',
                            bottom: '20px',
                            right: '30px'
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            size="4x"
                            style={{
                                color: '#25D366'
                            }}
                        />
                    </a>

                    <main>
                        <section>
                            <Row style={{ marginTop: '70px' }}>
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                    collapse="tabletOn"
                                >
                                    <MainGeometricContainer>
                                        <PolygonContainer>
                                            <Title>VMware</Title>
                                        </PolygonContainer>
                                        <img
                                            src="/assets/15-vmware/vmware-background.png"
                                            alt="VMware Background Image"
                                            style={{
                                                position: 'absolute',
                                                width: '100%',
                                                bottom: 0,
                                                zIndex: 8
                                            }}
                                        />
                                        <img
                                            src="/assets/15-vmware/vmware-image.png"
                                            alt="DRaaS Image"
                                            style={{
                                                position: 'absolute',
                                                right: 0,
                                                bottom: '5vh',
                                                zIndex: 10,
                                                height: '90%',
                                                width: 'auto'
                                            }}
                                        />
                                    </MainGeometricContainer>
                                </Column>
                            </Row>

                            <Row background={true} polygon={true}>
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                    collapse="tabletOff"
                                >
                                    <MainContainer changedMediaQueries="tabletOn">
                                        <Title>VMware</Title>
                                    </MainContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <Trapezio />
                                        <HexagonTitle>
                                            Hiper&shy;convergência
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Descubra as vantagens da utilização
                                            de soluções Hiperconvergentes da
                                            VMware e modernize seu Datacenter
                                            com a ajuda da Pláttano
                                            Technologies.
                                        </HexagonParagraph>
                                        <Link href="/hiperconvergencia">
                                            <ButtonElement>
                                                Saiba Mais
                                            </ButtonElement>
                                        </Link>
                                    </HexagonContainer>
                                </Column>
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={622}
                                    marginRight={2}
                                >
                                    <ImageContainer>
                                        <img
                                            src="/assets/15-vmware/hyperconvergence.png"
                                            alt="Hyperconvergence Image"
                                        />
                                    </ImageContainer>
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
                                    <ImageContainer>
                                        <img
                                            src="/assets/15-vmware/workspaceone.png"
                                            alt="Workspace One Image"
                                        />
                                    </ImageContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <Trapezio />
                                        <HexagonTitle>
                                            WorkSpace One
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            O VMware Workspace&trade; ONE&trade;
                                            é a plataforma corporativa simples e
                                            segura que entrega e gerencia
                                            qualquer aplicativo em qualquer
                                            smartphone, tablet ou laptop.
                                        </HexagonParagraph>
                                        <Link href="/workspaceone">
                                            <ButtonElement>
                                                Saiba Mais
                                            </ButtonElement>
                                        </Link>
                                    </HexagonContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            {/* <Row>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <Trapezio />
                                        <HexagonTitle>Edições</HexagonTitle>
                                        <HexagonParagraph>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </HexagonParagraph>
                                        <ButtonElement>
                                            Saiba Mais
                                        </ButtonElement>
                                    </HexagonContainer>
                                </Column>
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={622}
                                    marginRight={2}
                                >
                                    <ImageContainer>
                                        <img
                                            src="/assets/15-vmware/edition.png"
                                            alt="Edition Image"
                                        />
                                    </ImageContainer>
                                </Column>
                            </Row> */}
                        </section>
                    </main>
                    <Footer />
                </Grid>
            </ScrollLock>
        </>
    )
}

export default Vmware
