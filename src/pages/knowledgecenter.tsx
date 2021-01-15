import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'
import Header from '../components/Header'

import {
    HexagonContainer,
    ImageContainer,
    MainContainer
} from '../styles/Containers'

import {
    HexagonParagraph,
    HexagonTitle,
    SubTitle,
    Title
} from '../styles/TextElements'

import { ButtonElement } from '../styles/Buttons'
import News from '../components/News'
import Email from '../components/Email'
import Footer from '../components/Footer'

import Whatsapp from '../components/Whatsapp'

const Knowledgecenter: React.FC = () => {
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

    const router = useRouter()

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
                                        url="/assets/knowledge-center/knowledgecenter-image.png"
                                        backgroundSize="cover"
                                    >
                                        <Title>
                                            Knowledge <br /> Center
                                        </Title>
                                        <SubTitle changedMediaQueries="tabletOn">
                                            <i>“O desejo profundo da humanidade
                                            pelo conhecimento é justificativa
                                            suficiente para nossa busca
                                            contínua.”</i> <b> STEPHEN HAWKING</b>
                                        </SubTitle>
                                        <SubTitle
                                            changedMediaQueries="tabletOn"
                                            style={{ marginTop: '2rem' }}
                                        >
                                            Acompanhe a <strong>Pláttano</strong> em nosso blog
                                            oficial e tenha também acesso
                                            exclusivo aos nossos materiais
                                            exclusivos
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
                                            src="/assets/knowledge-center/documentation.png"
                                            alt="Documentation Image"
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
                                        <HexagonTitle>
                                            Documentação
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Acesse nosso conteúdo de materiais,
                                            manuais e procedimentos. Descubra
                                            como configurar nossos serviços e
                                            produtos aqui
                                        </HexagonParagraph>

                                        <ButtonElement>
                                            Saiba Mais
                                        </ButtonElement>
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
                    </main>
                    <Footer />
                </Grid>
            </ScrollLock>
        </>
    )
}

export default Knowledgecenter