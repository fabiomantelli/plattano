import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import Header from '../components/Header'
import {
    BenefitContainer,
    BoxDefaultContainer,
    BoxItemsContainer,
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

import Trapezio from '../assets/trapezio'
import HexagonIcon from '../components/9-baas/HexagonIcon'
import CloudBackup from '../components/9-baas/CloudBackup'
import News from '../components/News'
import Email from '../components/Email'
import EnhanceBoxIcon from '../assets/9-baas/enhance/enhanceboxicon'
import DiscoverBoxIcon from '../assets/9-baas/discoverbox/discoverboxIcon'
import AccomplishBoxIcon from '../assets/9-baas/accomplishbox/accomplishBoxIcon'
import TryBoxIcon from '../assets/9-baas/trybox/tryIcon'
import Footer from '../components/Footer'

const Baas: React.FC = () => {
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
                                            <Title>
                                                Backup <br /> como Serviço
                                            </Title>
                                            <SubTitle>
                                                Adicione com a Pláttano
                                                Technologies uma camada extra de
                                                segurança e disponibilidade para
                                                suas informações. Os dados são o
                                                maior patrimônio das empresas, e
                                                por quê não dar uma atenção
                                                especial para eles?
                                            </SubTitle>
                                        </PolygonContainer>
                                        <img
                                            src="/assets/8-hyperconvergence/hyperconvergence-background.png"
                                            alt="Hyperconvergence Image"
                                            style={{
                                                position: 'absolute',
                                                width: '100%',
                                                bottom: 0,
                                                zIndex: 20
                                            }}
                                        />
                                        <img
                                            src="/assets/9-baas/notebook.png"
                                            alt="Notebook"
                                            style={{
                                                position: 'absolute',
                                                right: 0,
                                                bottom: '10vh',
                                                zIndex: 10,
                                                height: '70%',
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
                                        <Title>Backup como Serviço</Title>
                                        <SubTitle changedMediaQueries="tabletOn">
                                            Adicione com a Pláttano Technologies
                                            uma camada extra de segurança e
                                            disponibilidade para suas
                                            informações. Os dados são o maior
                                            patrimônio das empresas, e por quê
                                            não dar uma atenção especial para
                                            eles?
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
                                    <BoxDefaultContainer>
                                        <HexagonTitle>
                                            BaaS - Backup como Serviço
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Como parceira{' '}
                                            <span style={{ color: '#F48200' }}>
                                                <b>Veeam Cloud</b>
                                            </span>
                                            , podemos oferecer com toda a
                                            segurança e confiabilidade, serviços
                                            de proteção de dados em nuvem. Nossa
                                            equipe é certificada nas versões
                                            atuais da ferramenta, e treinada
                                            para gerenciar ambientes em nuvem
                                            para oferecer BaaS (Backup as a
                                            Service).
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Faça seus backups e réplicas Veeam
                                            em ambientes externos.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Vamos ser objetivos? Quem quer
                                            construir e manter um site
                                            secundário, quando se pode enviar
                                            seus backups e réplicas para um
                                            ambiente externo num provedor de
                                            serviços confiável. Deixe que os
                                            especialistas e engenheiros Veeam da
                                            Pláttano o construam e o gerenciem.
                                        </HexagonParagraph>
                                    </BoxDefaultContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                    collapse="mobileOn"
                                >
                                    <BoxDefaultContainer>
                                        <HexagonParagraph>
                                            Não importa onde seus dados estejam
                                            armazenados – você tem controle
                                            sobre eles – com criptografia AES de
                                            256 bits durante o backup, durante a
                                            transferência de dados e quando
                                            armazenados na nuvem.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Reduza a complexidade de sua
                                            infraestrutura local e fique mais
                                            protegido caso algo aconteça em seu
                                            ambiente e, além disso, libere sua
                                            equipe para trabalhar em outros
                                            projetos.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Pare de usar e gerenciar fitas,
                                            robôs e tape libraries complexas,
                                            salas cofres, pois é muito caro de
                                            se manter e difícil de manipular.
                                            Venha para o novo conceito de
                                            proteção de dados. Venha para a
                                            Plattano Cloud.
                                        </HexagonParagraph>
                                    </BoxDefaultContainer>
                                </Column>
                            </Row>

                            <Row>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                    collapse="mobileOff"
                                >
                                    <BoxDefaultContainer>
                                        <HexagonTitle>
                                            BaaS - Backup como Serviço
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Como parceira Veeam Cloud, podemos
                                            oferecer com toda a segurança e
                                            confiabilidade, serviços de proteção
                                            de dados em nuvem. Nossa equipe é
                                            certificada nas versões atuais da
                                            ferramenta, e treinada para
                                            gerenciar ambientes em nuvem para
                                            oferecer BaaS (Backup as a Service).
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Faça seus backups e réplicas Veeam
                                            em ambientes externos.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Vamos ser objetivos? Quem quer
                                            construir e manter um site
                                            secundário, quando se pode enviar
                                            seus backups e réplicas para um
                                            ambiente externo num provedor de
                                            serviços confiável. Deixe que os
                                            especialistas e engenheiros Veeam da
                                            Pláttano o construam e o gerenciem.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Não importa onde seus dados estejam
                                            armazenados – você tem controle
                                            sobre eles – com criptografia AES de
                                            256 bits durante o backup, durante a
                                            transferência de dados e quando
                                            armazenados na nuvem.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Reduza a complexidade de sua
                                            infraestrutura local e fique mais
                                            protegido caso algo aconteça em seu
                                            ambiente e, além disso, libere sua
                                            equipe para trabalhar em outros
                                            projetos.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Pare de usar e gerenciar fitas,
                                            robôs e tape libraries complexas,
                                            salas cofres, pois é muito caro de
                                            se manter e difícil de manipular.
                                            Venha para o novo conceito de
                                            proteção de dados. Venha para a
                                            Plattano Cloud.
                                        </HexagonParagraph>
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
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <Trapezio />
                                        <HexagonTitle>
                                            Proteja o que mais importa com a
                                            ajuda da Pláttano Technologies
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Na economia digital atual, as
                                            organizações estão adotando uma
                                            estratégia de múltiplas nuvens para
                                            aumentar a inovação, acelerar o
                                            tempo de entrada no mercado e
                                            otimizar os custos. Conforme as
                                            cargas de trabalho expandem e as
                                            expectativas dos usuários aumentam,
                                            QUALQUER nível de inatividade pode
                                            levar a uma perda de confiança dos
                                            clientes, danos à marca e perda de
                                            receita.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            A <b>Pláttano</b> juntamente com a
                                            <b>Veeam</b> oferece expertise em
                                            backup como serviço, também
                                            conhecida pela sigla BaaS.
                                        </HexagonParagraph>
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
                                            src="/assets/9-baas/protect.png"
                                            alt="Protect"
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
                                            src="/assets/9-baas/backup.png"
                                            alt="Backup"
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
                                            Backup externo
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Entendemos que suas necessidades de
                                            gerenciamento de dados são complexas
                                            e crescem a cada dia. Aproveite os
                                            recursos flexíveis de backup externo
                                            conosco para dominar a{' '}
                                            <span style={{ color: '#F48200' }}>
                                                regra 3-2-1
                                            </span>{' '}
                                            e manter controle e visibilidade
                                            completo dos seus dados.
                                        </HexagonParagraph>
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
                                        <HexagonParagraph>
                                            Backup e recuperação são serviços de
                                            TI dos quais toda empresa precisa,
                                            mas eles nem sempre são valorizados
                                            como “prioridades estratégicas de
                                            TI” (Mesmo que achemos que deveriam
                                            ser!). A Pláttano, como provedor de
                                            serviço oficial da Veeam pode tirar
                                            as obrigações de backup e
                                            recuperação de suas mãos, dando mais
                                            tempo para você se concentrar em
                                            iniciativas inovadoras e suas
                                            estratégicas comerciais.
                                        </HexagonParagraph>
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
                                            src="/assets/9-baas/backup-recovery.png"
                                            alt="Protect"
                                        />
                                    </ImageContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    maxWidth={1280}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <Trapezio />
                                        <HexagonTitle>Benefícios</HexagonTitle>
                                    </HexagonContainer>
                                </Column>
                            </Row>
                            <Row collapse="desktopOff">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    padding={2}
                                    maxWidth={402.67}
                                >
                                    <div>
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Ransomware Free
                                        </span>
                                    </div>
                                    <div style={{ paddingTop: '1rem' }}>
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Implantação rápida, flexível e fácil
                                        </span>
                                    </div>
                                    <div style={{ paddingTop: '1rem' }}>
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Proteção off-site 100% segura
                                        </span>
                                    </div>
                                    <div style={{ paddingTop: '1rem' }}>
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Criptografia SSL/TLS
                                        </span>
                                    </div>
                                </Column>
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    maxWidth={402.67}
                                    padding={2}
                                >
                                    <div>
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Sem VPN
                                        </span>
                                    </div>
                                    <div style={{ paddingTop: '1rem' }}>
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Economia de Storage
                                        </span>
                                    </div>
                                    <div style={{ paddingTop: '1rem' }}>
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Proteção isolada
                                        </span>
                                    </div>
                                    <div style={{ paddingTop: '1rem' }}>
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Aposentadoria de fitas LTO
                                        </span>
                                    </div>
                                </Column>
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={402.67}
                                    padding={2}
                                >
                                    <div>
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Contratos Flexíveis
                                        </span>
                                    </div>
                                    <div style={{ paddingTop: '1rem' }}>
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Baixo Opex e Capex
                                        </span>
                                    </div>
                                    <div style={{ paddingTop: '1rem' }}>
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Simplificação de suas políticas de
                                            retenção
                                        </span>
                                    </div>
                                </Column>
                            </Row>

                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    marginRight={2}
                                    padding={2}
                                    maxWidth={1280}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Ransomware Free
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            paddingTop: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Implantação rápida, flexível e fácil
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            paddingTop: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Proteção off-site 100% segura
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            paddingTop: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Criptografia SSL/TLS
                                        </span>
                                    </div>
                                </Column>
                            </Row>
                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                    padding={2}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Sem VPN
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            paddingTop: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Economia de Storage
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            paddingTop: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Proteção isolada
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            paddingTop: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Aposentadoria de fitas LTO
                                        </span>
                                    </div>
                                </Column>
                            </Row>
                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                    padding={2}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Contratos Flexíveis
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            paddingTop: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Baixo Opex e Capex
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            paddingTop: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <HexagonIcon />
                                        <span style={{ paddingLeft: '1rem' }}>
                                            Simplificação de suas políticas de
                                            retenção
                                        </span>
                                    </div>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    marginTop={2}
                                    marginLeft={2}
                                    marginRight={2}
                                    marginBottom={2}
                                    maxWidth={1280}
                                >
                                    <CloudBackup />
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
                                    marginRight={2}
                                    marginLeft={2}
                                    maxWidth={1280}
                                >
                                    <BoxItemsContainer>
                                        <EnhanceBoxIcon />
                                        <div>
                                            <h1
                                                style={{
                                                    color: '#F48200',
                                                    paddingBottom: '0.5rem'
                                                }}
                                            >
                                                Aprimore o tempo de recuperação
                                                em caso de desastre
                                            </h1>
                                            <p>
                                                Habilitamos você a enviar
                                                backups para um local externo em
                                                nossa cloud e incluimos nossa
                                                expertise em TI e os serviços
                                                necessários para você se
                                                recuperar rapidamente sem
                                                complicações.
                                            </p>
                                        </div>
                                    </BoxItemsContainer>
                                </Column>
                            </Row>
                            <Row>
                                <Column
                                    size={1}
                                    marginRight={2}
                                    marginLeft={2}
                                    maxWidth={1280}
                                >
                                    <BoxItemsContainer>
                                        <DiscoverBoxIcon />
                                        <div>
                                            <h1
                                                style={{
                                                    color: '#F48200',
                                                    paddingBottom: '0.5rem'
                                                }}
                                            >
                                                Descubra os benefícios dos
                                                modelos de preços OpEx
                                            </h1>
                                            <p>
                                                Desfrute de custos previsíveis e
                                                investimentos em baixa
                                                aceleração, para que você possa
                                                liberar verbas para o
                                                crescimento dos negócios e a
                                                inovação da TI.
                                            </p>
                                        </div>
                                    </BoxItemsContainer>
                                </Column>
                            </Row>
                            <Row>
                                <Column
                                    size={1}
                                    marginRight={2}
                                    marginLeft={2}
                                    maxWidth={1280}
                                >
                                    <BoxItemsContainer>
                                        <AccomplishBoxIcon />
                                        <div>
                                            <h1
                                                style={{
                                                    color: '#F48200',
                                                    paddingBottom: '0.5rem'
                                                }}
                                            >
                                                Cumpra requisitos complexos de
                                                conformidade normativa
                                            </h1>
                                            <p>
                                                Muitos provedores mantêm as
                                                certificações necessárias para
                                                navegar pelo labirinto de
                                                regulamentações associado à
                                                migração para a nuvem, para que
                                                você não tenha que fazer o
                                                mesmo.
                                            </p>
                                        </div>
                                    </BoxItemsContainer>
                                </Column>
                            </Row>
                            <Row>
                                <Column
                                    size={1}
                                    marginRight={2}
                                    marginLeft={2}
                                    maxWidth={1280}
                                >
                                    <BoxItemsContainer>
                                        <TryBoxIcon />
                                        <div>
                                            <h1
                                                style={{
                                                    color: '#F48200',
                                                    paddingBottom: '0.5rem'
                                                }}
                                            >
                                                Experimente a liberdade para
                                                inovar
                                            </h1>
                                            <p>
                                                Concentre-se em atender às
                                                necessidades únicas dos seus
                                                negócios, em vez de tarefas
                                                redundantes e consertos
                                                pontuais, que podem ser
                                                gerenciados de forma fácil e
                                                confiável por nossa equipe de
                                                Engenheiros Certificados.
                                            </p>
                                        </div>
                                    </BoxItemsContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row collapse="desktopOff">
                                <Column
                                    size={1}
                                    maxWidth={415}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <BenefitContainer>
                                        <HexagonTitle>
                                            375,000 clientes já podem fazer
                                            backup para a sua nuvem
                                        </HexagonTitle>
                                    </BenefitContainer>
                                </Column>
                                <Column size={1} maxWidth={830} marginRight={2}>
                                    <HexagonContainer
                                        changedMediaQueries="mobileOn"
                                        height="auto"
                                    >
                                        <HexagonParagraph>
                                            Clientes clamam por recursos que
                                            possam ajudar a ampliar
                                            infraestruturas de backup para a
                                            nuvem, mas geralmente eles não
                                            possuem o conhecimento de nuvem ou a
                                            flexibilidade de capital para
                                            estabelecer sua própria arquitetura
                                            na nuvem. Nossa infraestrutura já
                                            está pronta para você, e com alguns
                                            simples cliques configuramos
                                            eapontamos seu Veeam para nossa
                                            cloud, garantindo a proteção de seu
                                            Datacenter.
                                        </HexagonParagraph>
                                    </HexagonContainer>
                                </Column>
                            </Row>

                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    maxWidth={1280}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <HexagonContainer
                                        changedMediaQueries="mobileOn"
                                        height="auto"
                                    >
                                        <HexagonTitle>
                                            375,000 clientes já podem fazer
                                            backup para a sua nuvem
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Clientes clamam por recursos que
                                            possam ajudar a ampliar
                                            infraestruturas de backup para a
                                            nuvem, mas geralmente eles não
                                            possuem o conhecimento de nuvem ou a
                                            flexibilidade de capital para
                                            estabelecer sua própria arquitetura
                                            na nuvem. Nossa infraestrutura já
                                            está pronta para você, e com alguns
                                            simples cliques configuramos
                                            eapontamos seu Veeam para nossa
                                            cloud, garantindo a proteção de seu
                                            Datacenter.
                                        </HexagonParagraph>
                                    </HexagonContainer>
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

export default Baas
