import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import Header from '../components/Header'

import News from '../components/News'

import Reference from '../components/1-indexPage/Reference'
import Services from '../components/1-indexPage/Services'

import Footer from '../components/Footer'
import {
    BoxDefaultContainer,
    EntireContainer,
    ImageContainer,
    ModernityContainer
} from '../styles/Containers'

import {
    HexagonParagraph,
    HexagonTitle,
    MainSubTitle,
    MainTitle,
    MiniOrangeTitle
} from '../styles/TextElements'

import { ButtonElement, MainButton } from '../styles/Buttons'
import Consulting from '../components/1-indexPage/Consulting'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

declare global {
    interface Window {
        RDStationForms: any
    }
}

const Home: React.FC = () => {
    const [active, SetActive] = useState('initial')
    const [mobile, SetMobile] = useState(false)

    useEffect(() => {
        new window.RDStationForms(
            'email-6ba5ba65524d58557361',
            'UA-116458599-1'
        ).createForm()
    }, [active])

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
                <script
                    type="text/javascript"
                    src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
                ></script>
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
                            <Row
                                background={true}
                                style={{ marginTop: '70px' }}
                            >
                                <Column size={1}>
                                    <ModernityContainer>
                                        <MainTitle>
                                            Modernidade para seu Datacenter
                                        </MainTitle>
                                        <MainSubTitle>
                                            Tenha acesso às melhores e mais
                                            modernas soluções de virtualização,
                                            hiperconvergência, proteção de
                                            dados, e-hiperdisponibilidade de
                                            Datacenters com as tecnologias da
                                            Veeam e VMware. Tudo em um único
                                            local com a equipe da Pláttano
                                            Technologies, parceira oficial no
                                            Brasil.
                                        </MainSubTitle>

                                        <Link href="/hiperconvergencia">
                                            <MainButton>Saiba Mais</MainButton>
                                        </Link>
                                    </ModernityContainer>
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
                                            src="/assets/1-index/team-image.png"
                                            alt="Team Image"
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
                                        <MiniOrangeTitle>
                                            Parceiro Licenciado
                                        </MiniOrangeTitle>
                                        <HexagonTitle>
                                            Equipe Especializada
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Com nossos níveis avançados de
                                            parceria com os grandes players do
                                            mercado em nossa área, somos capazes
                                            de proporcionar entrega de projetos
                                            com valor agregado e qualidade
                                            extrema para nossos clientes,
                                            fazendo com que seu retorno de
                                            investimento seja o mais adequado e
                                            rápido.
                                        </HexagonParagraph>
                                        <ButtonElement>
                                            Saiba Mais
                                        </ButtonElement>
                                    </BoxDefaultContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <BoxDefaultContainer>
                                        <MiniOrangeTitle>
                                            Respiramos VMware
                                        </MiniOrangeTitle>
                                        <HexagonTitle>
                                            Data center definido por software
                                            always-ON
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Com as soluções VMware e Veeam, as
                                            organizações criam experiências
                                            excepcionais ao mobilizar tudo,
                                            reagir a oportunidades mais
                                            rapidamente com dados e aplicativos
                                            modernos hospedados em nuvens
                                            híbridas, públicas e privadas.
                                            Simplifuqe a TI, concentrando
                                            recursos em inovação ao invés de
                                            manutenção.
                                        </HexagonParagraph>
                                        <ButtonElement>
                                            Saiba Mais
                                        </ButtonElement>
                                    </BoxDefaultContainer>
                                </Column>
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={622}
                                    marginRight={2}
                                >
                                    <ImageContainer>
                                        <img
                                            src="/assets/datacenter/datacenter-image.png"
                                            alt="Datacenter Image"
                                        />
                                    </ImageContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row background={true} collapse="mobileOff">
                                <Column size={1} marginRight={2} marginLeft={2}>
                                    <News />
                                </Column>
                            </Row>
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

                            <Row background={true}>
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
                                    <div
                                        role="main"
                                        id="email-6ba5ba65524d58557361"
                                    ></div>
                                    {/* <Email /> */}
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
                                        <h3>Soluções</h3>
                                        <h1>
                                            As melhores soluções do mercado
                                            <br />
                                            para sua empresa
                                        </h1>
                                    </EntireContainer>
                                </Column>
                            </Row>

                            <Row collapse="tabletOn">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    boxShadow={true}
                                    maxWidth={402.67}
                                >
                                    <img
                                        style={{ padding: '2rem 0 0 2rem' }}
                                        src="/assets/1-index/consulting-icon.png"
                                        alt="Consulting Icon"
                                    />
                                    <Consulting />
                                </Column>
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    boxShadow={true}
                                    maxWidth={402.67}
                                >
                                    <img
                                        style={{ padding: '2rem 0 0 2rem' }}
                                        src="/assets/1-index/reference-icon.png"
                                        alt="Reference Icon"
                                    />
                                    <Reference />
                                </Column>
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginLeft={2}
                                    boxShadow={true}
                                    maxWidth={402.67}
                                >
                                    <img
                                        style={{ padding: '2rem 0 0 2rem' }}
                                        src="/assets/1-index/services-icon.png"
                                        alt="Reference Icon"
                                    />
                                    <Services />
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
                                    boxShadow={true}
                                >
                                    <img
                                        style={{ padding: '2rem 0 0 2rem' }}
                                        src="/assets/1-index/consulting-icon.png"
                                        alt="Consulting Icon"
                                    />
                                    <Consulting />
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
                                    boxShadow={true}
                                >
                                    <img
                                        style={{
                                            display: 'block',
                                            marginLeft: 'auto',
                                            marginRight: 'auto'
                                        }}
                                        src="/assets/1-index/reference-icon.png"
                                        alt="Reference Icon"
                                    />
                                    <Reference />
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
                                    boxShadow={true}
                                >
                                    <img
                                        style={{
                                            display: 'block',
                                            marginLeft: 'auto',
                                            marginRight: 'auto'
                                        }}
                                        src="/assets/1-index/services-icon.png"
                                        alt="Reference Icon"
                                    />
                                    <Services />
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row marginTop={2}>
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={622}
                                    marginLeft={2}
                                >
                                    <ImageContainer>
                                        <img
                                            src="/assets/about/about-image.png"
                                            alt="About Image"
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
                                        <HexagonTitle>Nossa razão</HexagonTitle>
                                        <HexagonParagraph>
                                            Sendo uma empresa especializada em
                                            implementação, gestão e consultoria
                                            em infraestrutura de ambientes
                                            virtualizados, queremos prover a
                                            continuidade do negócio de nossos
                                            clientes utilizando as melhores
                                            práticas e ferramentas de
                                            implementações de soluções, com um
                                            suporte extremamente próximo e
                                            personalizado, possibilitamos que as
                                            empresas utilizem a tecnologia a
                                            favor de seus objetivos.
                                        </HexagonParagraph>
                                        <ButtonElement>Leia Mais</ButtonElement>
                                    </BoxDefaultContainer>
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

export default Home
