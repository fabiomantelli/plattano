import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'
import {
    BoxContainer,
    BoxDefaultContainer,
    EntireContainer,
    ImageContainer,
    MainContainer,
    MainGeometricContainer,
    PolygonContainer
} from '../styles/Containers'
import { HexagonParagraph, SubTitle, Title } from '../styles/TextElements'
import Header from '../components/Header'
import News from '../components/News'
import Email from '../components/Email'

import Trapezio from '../assets/trapezio'
import Footer from '../components/Footer'

const Workspaceone: React.FC = () => {
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
                            <Row>
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                    collapse="tabletOn"
                                >
                                    <MainGeometricContainer>
                                        <PolygonContainer>
                                            <Title>WorkSpace One</Title>
                                            <SubTitle>
                                                Ofereça uma experiência
                                                envolvente para os funcionários
                                                com uma plataforma de espaço de
                                                trabalho digital baseada em
                                                inteligência
                                            </SubTitle>
                                        </PolygonContainer>

                                        <img
                                            src="/assets/12-workspaceone/workspace-image.png"
                                            alt="Workspace One Image"
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
                                        <Title>WorkSpace One</Title>
                                        <SubTitle changedMediaQueries="tabletOn">
                                            Ofereça uma experiência envolvente
                                            para os funcionários com uma
                                            plataforma de espaço de trabalho
                                            digital baseada em inteligência
                                        </SubTitle>
                                    </MainContainer>
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
                                            src="/assets/12-workspaceone/vmwareworkspaceone.png"
                                            alt="VMware WorkSpace One Image"
                                        />
                                    </ImageContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <BoxDefaultContainer>
                                        <HexagonParagraph>
                                            O VMware Workspace ™ ONE ™ é a
                                            plataforma corporativa simples e
                                            segura que entrega e gerencia
                                            qualquer aplicativo em qualquer
                                            smartphone, tablet ou laptop. Começa
                                            com o autoatendimento de nível de
                                            consumidor, acesso único à nuvem,
                                            aplicativos móveis e Windows e
                                            inclui ferramentas poderosamente
                                            integradas de e-mail, calendário,
                                            arquivo e colaboração que envolve
                                            funcionários.
                                        </HexagonParagraph>
                                    </BoxDefaultContainer>
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
                                    padding={2}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    maxWidth={1280}
                                >
                                    <EntireContainer>
                                        <Trapezio />
                                        <h1>Benefícios</h1>
                                    </EntireContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row collapse="mobileOn">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <BoxContainer changedMediaQueries="mobileOn">
                                        <p>
                                            Independente do hardware disponível,
                                            cada membro do quadro de
                                            colaboradores consegue ter
                                            acessibilidade ao sistema
                                            operacional da empresa, promovendo a
                                            maximização do envolvimento e
                                            produtividade.
                                        </p>
                                        <p>
                                            Aumento da sensação de segurança por
                                            parte dos funcionários com SSO
                                            (logon único) seguro e sem senha
                                            para aplicativos SaaS, móveis,
                                            Windows, virtuais e da Web em
                                            qualquer telefone, tablet ou laptop
                                            - tudo através de um único catálogo
                                            de aplicativos.
                                        </p>
                                    </BoxContainer>
                                </Column>
                                <Column size={1} maxWidth={622} marginRight={2}>
                                    <BoxContainer changedMediaQueries="mobileOn">
                                        <p>
                                            Gerenciamento unificado de terminais
                                            através da consolidação de silos de
                                            gerenciamento em dispositivos
                                            móveis, desktops (incluindo Windows
                                            10 e macOS), dispositivos robustos e
                                            &quot;coisas&quot;, promovendo a
                                            redução.
                                        </p>
                                        <p>
                                            Aumento da capacidade de
                                            correlacionar dados em todo o seu
                                            espaço de trabalho digital para
                                            gerar insights, análises e automação
                                            poderosa de tarefas comuns de TI que
                                            melhoram a experiência do usuário,
                                            fortalecem a segurança e reduzem os
                                            custos de TI.
                                        </p>
                                    </BoxContainer>
                                </Column>
                            </Row>

                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    maxWidth={1280}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <BoxContainer changedMediaQueries="mobileOn">
                                        <p>
                                            Independente do hardware disponível,
                                            cada membro do quadro de
                                            colaboradores consegue ter
                                            acessibilidade ao sistema
                                            operacional da empresa, promovendo a
                                            maximização do envolvimento e
                                            produtividade.
                                        </p>
                                        <p>
                                            Aumento da sensação de segurança por
                                            parte dos funcionários com SSO
                                            (logon único) seguro e sem senha
                                            para aplicativos SaaS, móveis,
                                            Windows, virtuais e da Web em
                                            qualquer telefone, tablet ou laptop
                                            - tudo através de um único catálogo
                                            de aplicativos.
                                        </p>
                                        <p>
                                            Gerenciamento unificado de terminais
                                            através da consolidação de silos de
                                            gerenciamento em dispositivos
                                            móveis, desktops (incluindo Windows
                                            10 e macOS), dispositivos robustos e
                                            &quot;coisas&quot;, promovendo a
                                            redução.
                                        </p>
                                        <p>
                                            Aumento da capacidade de
                                            correlacionar dados em todo o seu
                                            espaço de trabalho digital para
                                            gerar insights, análises e automação
                                            poderosa de tarefas comuns de TI que
                                            melhoram a experiência do usuário,
                                            fortalecem a segurança e reduzem os
                                            custos de TI.
                                        </p>
                                    </BoxContainer>
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

export default Workspaceone
