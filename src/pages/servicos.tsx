import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Router from 'next/router';

import { GTMPageView } from '../utils/gtm';

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import News from '../components/News'
import Email from '../components/Email'

import Header from '../components/Header'
import Footer from '../components/Footer'

import {
    EntireContainer,
    HexagonContainer,
    ImageContainer,
    MainContainer,
    MiniBox
} from '../styles/Containers'

import {
    HexagonParagraph,
    HexagonTitle,
    SubTitle,
    Title
} from '../styles/TextElements'

import Trapezio from '../assets/trapezio'
import { ButtonElement } from '../styles/Buttons'

import Whatsapp from '../components/Whatsapp'

const Services: React.FC = () => {
    const [active, SetActive] = useState('initial')
    const [mobile, SetMobile] = useState(false)

     // Initiate GTM
     useEffect(() => {
        const handleRouteChange = (url: string) => GTMPageView(url);
        Router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

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
                    <Whatsapp />

                    <main>
                        <section>
                            <Row
                                background={true}
                                polygon={true}
                                style={{ marginTop: '70px' }}
                            >
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <MainContainer
                                        changedMediaQueries="tabletOn"
                                        url="/assets/3-services/profissionalservices-image.png"
                                        backgroundSize="cover"
                                    >
                                        <Title>
                                            Serviços <br />
                                            Profissionais
                                        </Title>
                                        <SubTitle changedMediaQueries="tabletOn">
                                            Descubra todos os serviços que a
                                            Pláttano Technologies disponibiliza
                                            em seu portfólio, com as melhores
                                            soluções da indústria de TI, e
                                            adicione uma camada de qualidade
                                            extra ao seu dia a dia, com todo o
                                            acompanhamento de nossos experts
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
                                            src="/assets/3-services/professionalservices2-image.png"
                                            alt="Professional Services2 Image"
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
                                            Professional Services
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Temos como meta, auxiliar nossos clientes integrando soluções 
                                            de nossos parceiros com serviços especializados, superando os 
                                            desafios e obter melhores resultados para os negócios. Nossa 
                                            metodologia de trabalho é usar das melhores práticas criadas 
                                            pelas fabricantes, garantindo maior qualidade e eficiência na 
                                            entrega das soluções. 
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Trabalhamos com: Análise e Planejamento, Implantação, 
                                            Gerenciamento de Ambientes, Full out-sourcing, Gestão 
                                            Compartilhada, Treinamentos.
                                        </HexagonParagraph>
                                        <Link href="/consultoria">
                                            <ButtonElement>
                                                Saiba Mais
                                            </ButtonElement>
                                        </Link>
                                    </HexagonContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row background={true} collapse="mobileOff">
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <News />
                                </Column>
                            </Row>
                            <div
                                style={{
                                    background:
                                        'linear-gradient(117.16deg, #F08F08 6.49%, #F08F08 6.49%, #E66B00 95.65%)'
                                }}
                            >
                                <Row collapse="mobileOff">
                                    <Column
                                        size={1}
                                        marginRight={2}
                                        marginLeft={2}
                                    >
                                        <News />
                                    </Column>
                                </Row>
                                <Row>
                                    <Column
                                        size={1}
                                        collapse="mobileOn"
                                        maxWidth={622}
                                        marginLeft={2}
                                        marginRight={2}
                                    >
                                        <News />
                                    </Column>

                                    <Column
                                        size={1}
                                        maxWidth={622}
                                        marginRight={2}
                                        marginLeft={2}
                                    >
                                        <Email />
                                    </Column>
                                </Row>
                            </div>
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
                                        <h1>Nossos Serviços</h1>
                                    </EntireContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    collapse="tabletOn"
                                    maxWidth={402.67}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <ImageContainer
                                        height="auto"
                                        justifyContent="center"
                                    >
                                        <img
                                            src="/assets/3-services/support-image.png"
                                            alt="Support Image"
                                        />
                                    </ImageContainer>
                                </Column>
                                <Column
                                    size={1}
                                    collapse="tabletOn"
                                    maxWidth={402.67}
                                    marginTop={2}
                                    marginRight={2}
                                >
                                    <ImageContainer
                                        height="auto"
                                        justifyContent="center"
                                    >
                                        <img
                                            src="/assets/3-services/consultancy-image.png"
                                            alt="Consultancy Image"
                                        />
                                    </ImageContainer>
                                </Column>
                                <Column
                                    size={1}
                                    collapse="tabletOn"
                                    maxWidth={402.67}
                                    marginTop={2}
                                    marginRight={2}
                                >
                                    <ImageContainer
                                        height="auto"
                                        justifyContent="center"
                                    >
                                        <img
                                            src="/assets/3-services/cloudservices-image.png"
                                            alt="Cloud Services Image"
                                        />
                                    </ImageContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row collapse="tabletOn">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    maxWidth={402.67}
                                >
                                    <MiniBox>
                                        <h1>Suporte</h1>
                                        <h2>
                                            Oferecemos horas contratuais, suporte avulso e 
                                            emergencial com os melhores especialistas do mercado, 
                                            todos certificados e com todos os requisitos para lhe 
                                            atender com excelência.
                                        </h2>
                                    </MiniBox>
                                </Column>

                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    maxWidth={402.67}
                                >
                                    <MiniBox>
                                        <h1>Consultoria</h1>
                                        <h2>
                                            Nosso time de engenheiros  de pré e pós vendas 
                                            se especializam com as novidades  para entregarmos 
                                            soluções estratégicas e de valor. 
                                        </h2>
                                    </MiniBox>
                                </Column>
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    maxWidth={402.67}
                                >
                                    <MiniBox>
                                        <h1>Serviços</h1>
                                        <div>
                                            <span
                                                style={{ paddingRight: '1rem' }}
                                            >
                                                BaaS
                                            </span>
                                            <Link href="/produtos/baas">
                                                <a>Veja mais</a>
                                            </Link>
                                        </div>

                                        <div>
                                            <span
                                                style={{ paddingRight: '1rem' }}
                                            >
                                                DRaaS
                                            </span>
                                            <Link href="/produtos/draas">
                                                <a>Veja mais</a>
                                            </Link>
                                        </div>
                                        <div>
                                            <span
                                                style={{ paddingRight: '1rem' }}
                                            >
                                                Locação de Licenças
                                                pay-as-you-go
                                            </span>
                                            <Link href="/produtos/vcsp">
                                                <a>Veja mais</a>
                                            </Link>
                                        </div>
                                        <div>
                                            <span
                                                style={{ paddingRight: '1rem' }}
                                            >
                                                Licenciamentos e Renovação de Software
                                            </span>
                                        </div>
                                    </MiniBox>
                                </Column>
                            </Row>

                            <Row collapse="tabletOff">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    paddingTop={1}
                                    paddingRight={2}
                                    paddingBottom={1}
                                    paddingLeft={2}
                                >
                                    <MiniBox>
                                        <h1>Supporte</h1>
                                        <h2>
                                            Oferecemos horas contratuais, suporte avulso e 
                                            emergencial com os melhores especialistas do mercado, 
                                            todos certificados e com todos os requisitos para lhe 
                                            atender com excelência.
                                        </h2>
                                    </MiniBox>
                                </Column>
                            </Row>

                            <Row collapse="tabletOff">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    paddingTop={1}
                                    paddingRight={2}
                                    paddingBottom={1}
                                    paddingLeft={2}
                                >
                                    <MiniBox>
                                        <h1>Consultoria</h1>
                                        <h2>
                                            Nosso time de engenheiros de pré e
                                            pós vendas se especializam com as
                                            novidades para entregarmos soluções
                                            estratégicas e de valor.
                                        </h2>
                                    </MiniBox>
                                </Column>
                            </Row>

                            <Row collapse="tabletOff">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    paddingTop={1}
                                    paddingRight={2}
                                    paddingBottom={1}
                                    paddingLeft={2}
                                >
                                    <MiniBox>
                                        <h1>Serviços</h1>
                                        <div>
                                            <span
                                                style={{ paddingRight: '1rem' }}
                                            >
                                                BaaS
                                            </span>
                                            <Link href="/produtos/baas">
                                                <a>Veja mais</a>
                                            </Link>
                                        </div>

                                        <div>
                                            <span
                                                style={{ paddingRight: '1rem' }}
                                            >
                                                DRaaS
                                            </span>
                                            <Link href="/produtos/draas">
                                                <a>Veja mais</a>
                                            </Link>
                                        </div>
                                        <div>
                                            <span
                                                style={{ paddingRight: '1rem' }}
                                            >
                                                Locação de Licenças
                                                pay-as-you-go
                                            </span>
                                            <Link href="/vcsp">
                                                <a>Veja mais</a>
                                            </Link>
                                        </div>
                                        <div>
                                            <span
                                                style={{ paddingRight: '1rem' }}
                                            >
                                                Licenciamentos e Renovação de Software
                                            </span>
                                        </div>
                                    </MiniBox>
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

export default Services
