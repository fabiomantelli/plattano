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
    Title
} from '../styles/TextElements'
import { ButtonElement } from '../styles/Buttons'

import Trapezio from '../assets/trapezio'
import Footer from '../components/Footer'
import Link from 'next/link'

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
                                            vSphere
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            O VMware vSphere, plataforma de virtualização líder do setor,
                                            permite que os usuários virtualizem aplicativos de dimensionamento
                                            vertical e horizontal com confiança, redefine o significado de
                                            disponibilidade e simplifica o data center virtual. O resultado é
                                            uma infraestrutura altamente disponível, resiliente e sob demanda
                                            que é a base ideal de qualquer ambiente de nuvem. Isso pode reduzir
                                            os custos do data center, aumentar o tempo de atividade do sistema
                                            e do aplicativo e simplificar consideravelmente a maneira que a TI
                                            administra o data center. O vSphere foi projetado especificamente
                                            para a próxima geração de aplicativos e funciona como o bloco de construção
                                            de base fundamental para o data center definido por software. O vSphere
                                            acelera a mudança de data centers existentes para a computação em nuvem,
                                            além de fornecer sustentação às ofertas de nuvem pública compatíveis,
                                            formando a base para o único modelo de nuvem híbrida do setor. Com o suporte
                                            de mais de 3 mil aplicativos de mais de 2 mil fornecedores de software
                                            independentes (ISVs, independent software vendors), o vSphere é a plataforma
                                            confiável para qualquer aplicativo.
                                        </HexagonParagraph>

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
                                            src="/assets/15-vmware/vmware-vsphere.png"
                                            alt="vSphere Image"
                                        />
                                    </ImageContainer>
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

export default Vmware
