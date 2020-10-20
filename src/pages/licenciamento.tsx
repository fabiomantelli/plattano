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
    MainContainer
} from '../styles/Containers'
import { HexagonParagraph, HexagonTitle, Title } from '../styles/TextElements'
import { ButtonElement } from '../styles/Buttons'

import Trapezio from '../assets/trapezio'
import Footer from '../components/Footer'

const Licenciamento: React.FC = () => {
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
                                        url="/assets/14-licensing/licensing-background.png"
                                        backgroundSize="cover"
                                    >
                                        <Title>
                                            Licenciamento e <br />
                                            Renovações
                                        </Title>
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
                                            Precisamos entender suas
                                            necessidades antes de tudo
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Todo projeto de TI que envolvem
                                            aquisições ou contratações de
                                            software passa por essa etapa. É
                                            crucial que todos os requisitos
                                            sejam levantados para que o melhor
                                            produto seja oferecido e aproveitado
                                            em todo o seu potencial. Requisitos
                                            bem compreendidos levam ao mundo
                                            ideal na hora da contratação,
                                            permitido o uso correto das
                                            funcionalidades do software em
                                            questão, evitando insatisfações e
                                            contratando exatamente o que é
                                            necessário, sem contar a economia de
                                            investimentos.
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
                                            src="/assets/14-licensing/weneeded.png"
                                            alt="We Needed Image"
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
                                    marginRight={2}
                                >
                                    <ImageContainer>
                                        <img
                                            src="/assets/14-licensing/renovation.png"
                                            alt="Renovation Image"
                                        />
                                    </ImageContainer>
                                </Column>
                                <Column size={1} maxWidth={622} marginRight={2}>
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <HexagonParagraph
                                            changedMediaQueries="tabletOn"
                                            style={{ marginBottom: '1rem' }}
                                        >
                                            Talvez a parte do licenciamento seja
                                            mesmo uma das etapas mais
                                            complicadas, pois as fabricantes
                                            criam e desenvolvem seus produtos
                                            com várias edições, funcionalidades
                                            e características, e o engenheiro
                                            responsável pelo estudo deve
                                            conhecer profundamente o
                                            funcionamento e as limitações de
                                            cada versão e o projeto em questão,
                                            para que o mesmo comece da forma
                                            correta, e não enfrentarmos lá na
                                            frente problemas como falhas de
                                            conformidades e decepções na entrega
                                            do produto..
                                        </HexagonParagraph>
                                        <Trapezio />
                                        <HexagonTitle>
                                            Renovações de Suporte e
                                            Subscriptions (SnS)
                                        </HexagonTitle>
                                        <HexagonParagraph changedMediaQueries="tabletOn">
                                            O SnS é como uma garantia, onde no
                                            caso de problemas técnicos, os
                                            clientes possuem acesso ao suporte
                                            técnico especializado para colocar
                                            os sistemas de produção de volta à
                                            atividade o mais rápido possível.
                                            Além disso, garantir a possibilidade
                                            de realizar atualizações e upgrades
                                            para novas versões. É uma boa
                                            prática manter o suporte em dia,
                                            ainda mais em ambientes produtivos,
                                            que fazem as organizações
                                            funcionarem.
                                        </HexagonParagraph>

                                        <ButtonElement>
                                            Saiba Mais
                                        </ButtonElement>
                                    </HexagonContainer>
                                </Column>
                            </Row>
                        </section>
                        <Footer />
                    </main>
                </Grid>
            </ScrollLock>
        </>
    )
}

export default Licenciamento
