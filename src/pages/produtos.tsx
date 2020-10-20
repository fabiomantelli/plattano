import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import News from '../components/News'
import Email from '../components/Email'

import Header from '../components/Header'
import Footer from '../components/Footer'

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

import Trapezio from '../assets/trapezio'
import { ButtonElement } from '../styles/Buttons'
import Link from 'next/link'

const Sobre: React.FC = () => {
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
                            <Row background={true} polygon={true}>
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <MainContainer
                                        changedMediaQueries="tabletOn"
                                        url="/assets/4-products/products-image.png"
                                        backgroundSize="cover"
                                    >
                                        <Title>Produtos</Title>
                                        <SubTitle changedMediaQueries="tabletOn">
                                            Nosso portfólio de produtos é
                                            aprimorado a cada dia, e com eles,
                                            auxiliamos nossos clientes na busca
                                            pela excelência e segurança de suas
                                            informações e disponibilidade. Com a
                                            ajuda das fabricantes, a Pláttano
                                            Technologies disponibiliza o que há
                                            de melhor
                                        </SubTitle>
                                    </MainContainer>
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
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <Trapezio />
                                        <HexagonTitle>
                                            Intelligent Backup Cloud
                                        </HexagonTitle>
                                        <h2>
                                            Faça seus backups Veeam localmente
                                            ou em cloud.
                                        </h2>
                                        <HexagonParagraph>
                                            Como parceira
                                            <span style={{ color: '#F48200' }}>
                                                <b>
                                                    {' '}
                                                    Veeam Cloud Service Provider
                                                </b>
                                            </span>
                                            , podemos oferecer com toda a
                                            segurança e confiabilidade, serviços
                                            de proteção de dados local e em{' '}
                                            <b>nuvem (BaaS)</b>. Nossa equipe é
                                            certificada nas versões atuais da
                                            ferramenta, e treinada para
                                            gerenciar ambientes internos e em
                                            nuvem.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Vamos ser objetivos? Quem quer
                                            construir e manter um site
                                            secundário, quando se pode enviar
                                            seus backups para um ambiente
                                            externo num provedor de serviços
                                            confiável. Deixe que os
                                            especialistas e engenheiros Veeam da{' '}
                                            <b>Pláttano</b> o construam e o
                                            gerenciem.
                                        </HexagonParagraph>
                                        <Link href="/baas">
                                            <ButtonElement>
                                                Saiba Mais
                                            </ButtonElement>
                                        </Link>
                                    </HexagonContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    collapse="mobileOn"
                                >
                                    <ImageContainer>
                                        <img
                                            src="/assets/4-products/intelligentbackup-image.png"
                                            alt="Intelligent Backup Image"
                                        />
                                    </ImageContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    collapse="mobileOn"
                                >
                                    <ImageContainer>
                                        <img
                                            src="/assets/4-products/advanceddisaster-image.png"
                                            alt="Advanced Disaster Image"
                                        />
                                    </ImageContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <Trapezio />
                                        <HexagonTitle>
                                            Advanced Disaster <br />
                                            Recovery
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            O <b>DRaaS</b> da Pláttano
                                            Technologies com a tecnologia da
                                            Veeam integra seu ambiente local
                                            como uma extensão da infraestrutura
                                            de nuvem, fornecendo recursos de
                                            replicação e failover seguros e
                                            robustos para a recuperação de
                                            desastres.
                                        </HexagonParagraph>

                                        <Link href="/draas">
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
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <Trapezio />
                                        <HexagonTitle>
                                            Intelligent Backup On-Promise
                                        </HexagonTitle>
                                        <h2>
                                            Faça seus backups Veeam localmente
                                            ou em cloud.
                                        </h2>
                                        <HexagonParagraph>
                                            Troque o <b>CapEx</b> pelo{' '}
                                            <b>OpEx</b> em soluções de backup
                                            conosco. Entregamos as licenças
                                            Veeam para você e sua empresa no
                                            formato rental ou aluguel mensal,
                                            onde você paga pelo consumo mensal
                                            no modelo <b>pay-as-you go</b>. Você
                                            ainda escolhe se deseja terceirizar
                                            a gestão ou fazê-la de forma
                                            compartilhada
                                        </HexagonParagraph>

                                        <Link href="/">
                                            <ButtonElement>
                                                Saiba Mais
                                            </ButtonElement>
                                        </Link>
                                    </HexagonContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    collapse="mobileOn"
                                >
                                    <ImageContainer>
                                        <img
                                            src="/assets/4-products/intelligentbackupon-image.png"
                                            alt="Intelligent Backup On Image"
                                        />
                                    </ImageContainer>
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
                                    maxWidth={622}
                                    marginLeft={2}
                                    collapse="mobileOn"
                                >
                                    <ImageContainer>
                                        <img
                                            src="/assets/4-products/veeam-image.png"
                                            alt="Veeam Image"
                                        />
                                    </ImageContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <Trapezio />
                                        <HexagonTitle>Veeam</HexagonTitle>
                                        <h2>Proteção é nosso objetivo</h2>
                                        <HexagonParagraph>
                                            Nossa expertise vai além do
                                            licenciamento e auxílio em
                                            renovações de suporte. Somos uma
                                            empresa referência junto à Veeam
                                            Software e sua equipe mundial, e
                                            nosso corpo técnico é capaz de
                                            entregar com excelência projetos de
                                            todos os portes, com acompanhamento
                                            em todas as etapas, desde a
                                            aquisição do melhor produto até a
                                            implementação e gestão em seu
                                            ambiente.
                                        </HexagonParagraph>

                                        <Link href="/veeam">
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
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <Trapezio />
                                        <HexagonTitle>VMware</HexagonTitle>
                                        <h2>Nosso negócio é a inovação</h2>
                                        <HexagonParagraph>
                                            Confiamos na VMware porque ela está
                                            comprometida em resolver os
                                            problemas tecnológicos mais
                                            difíceis. Juntos com nossa parceria,
                                            oferecemos aos clientes a
                                            possibilidade de executar,
                                            gerenciar, conectar e proteger todos
                                            os seus aplicativos em qualquer
                                            nuvem, para que possam reduzir
                                            custos, obter eficiência e inovar
                                            mais rapidamente.
                                        </HexagonParagraph>

                                        <HexagonParagraph
                                            style={{ color: '#F48200' }}
                                        >
                                            <b>
                                                Acelere sua transição para a
                                                nuvem
                                            </b>
                                        </HexagonParagraph>
                                        <HexagonParagraph
                                            style={{ color: '#F48200' }}
                                        >
                                            <b>
                                                Transforme seu Datacenter, rede
                                                e a segurança
                                            </b>
                                        </HexagonParagraph>
                                        <HexagonParagraph
                                            style={{ color: '#F48200' }}
                                        >
                                            <b>
                                                Fortaleça o seu Digital
                                                Workspace
                                            </b>
                                        </HexagonParagraph>

                                        <Link href="/vmware">
                                            <ButtonElement>
                                                Saiba Mais
                                            </ButtonElement>
                                        </Link>
                                    </HexagonContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    collapse="mobileOn"
                                >
                                    <ImageContainer>
                                        <img
                                            src="/assets/4-products/vmware-image.png"
                                            alt="VMware Image"
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

export default Sobre
