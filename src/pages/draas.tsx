import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import Header from '../components/Header'
import {
    BoxItemsContainer,
    HexagonContainer,
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

import Drsimple from '../components/10-draas/Drsimple'
import DrSimpleText from '../components/10-draas/DrsimpleText'
import StreamlineBoxIcon from '../assets/10-draas/streamlinebox/streamlineboxicon'
import SupportBoxIcon from '../assets/10-draas/supportbox/supportboxicon'
import RecoveryBoxIcon from '../assets/10-draas/recoverybox/recoveryboxicon'
import ProtectionBoxIcon from '../assets/10-draas/protectionbox/protectionboxicon'
import Recovery2BoxIcon from '../assets/10-draas/recoverybox2/recovery2boxicon'
import Footer from '../components/Footer'

const Draas: React.FC = () => {
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
                                            <Title>DRaaS</Title>
                                            <SubTitle>
                                                DRaaS simples e flexível como
                                                apertar um botão.
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
                                            src="/assets/10-draas/draas-image.png"
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
                                        <Title>DRaaS</Title>
                                        <SubTitle changedMediaQueries="tabletOn">
                                            DRaaS simples e flexível como
                                            apertar um botão.
                                        </SubTitle>
                                    </MainContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <HexagonTitle>
                                            DRaaS. Mais uma camada de proteção
                                            para seu Datacenter.
                                        </HexagonTitle>
                                    </HexagonContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row collapse="mobileOn">
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={622}
                                >
                                    <HexagonContainer height="auto">
                                        <HexagonParagraph>
                                            O{' '}
                                            <span style={{ color: '#F48200' }}>
                                                Advanced DRaaS
                                            </span>{' '}
                                            da Pláttano Technologies com Veeam
                                            integra seuambiente local com uma
                                            extensão da infraestrutura de nuvem,
                                            fornecendo recursos de replicação e
                                            failover seguros e robustos para a
                                            recuperação de desastres.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Nossa infraestrutura permite que
                                            suas cargas de trabalho de TI sejam
                                            replicadas de ambientes físicos ou
                                            virtuais on-premise para nossa
                                            cloud. Com anos de experiência em
                                            recuperação de desastres, podemos ir
                                            muito além do backup simples para
                                            garantir que todas as suas cargas de
                                            trabalho principais sejam protegidas
                                            e o processo de recuperação de
                                            desastres é ajustado às prioridades
                                            de negócios e às necessidades de
                                            conformidade.
                                        </HexagonParagraph>
                                    </HexagonContainer>
                                </Column>

                                <Column size={1} marginRight={2} maxWidth={622}>
                                    <HexagonContainer height="auto">
                                        <HexagonParagraph>
                                            Sabemos por experiência que os
                                            planos de recuperação de desastres
                                            são diferentes para cada
                                            organização. Nossas soluções são
                                            construídas em torno dessa premissa.
                                            Nossos experientes engenheiros e
                                            analistas ajudarão a guiá-lo por
                                            todo o processo, desde o design até
                                            a implementação. No momento do
                                            primeiro clique até o failover,
                                            estamos sempre juntos e acompanhando
                                            seus esforços.
                                        </HexagonParagraph>
                                    </HexagonContainer>
                                </Column>
                            </Row>
                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <HexagonParagraph>
                                            O{' '}
                                            <span style={{ color: '#F48200' }}>
                                                Advanced DRaaS
                                            </span>{' '}
                                            da Pláttano Technologies com Veeam
                                            integra seuambiente local com uma
                                            extensão da infraestrutura de nuvem,
                                            fornecendo recursos de replicação e
                                            failover seguros e robustos para a
                                            recuperação de desastres.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Nossa infraestrutura permite que
                                            suas cargas de trabalho de TI sejam
                                            replicadas de ambientes físicos ou
                                            virtuais on-premise para nossa
                                            cloud. Com anos de experiência em
                                            recuperação de desastres, podemos ir
                                            muito além do backup simples para
                                            garantir que todas as suas cargas de
                                            trabalho principais sejam protegidas
                                            e o processo de recuperação de
                                            desastres é ajustado às prioridades
                                            de negócios e às necessidades de
                                            conformidade.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Sabemos por experiência que os
                                            planos de recuperação de desastres
                                            são diferentes para cada
                                            organização. Nossas soluções são
                                            construídas em torno dessa premissa.
                                            Nossos experientes engenheiros e
                                            analistas ajudarão a guiá-lo por
                                            todo o processo, desde o design até
                                            a implementação. No momento do
                                            primeiro clique até o failover,
                                            estamos sempre juntos e acompanhando
                                            seus esforços.
                                        </HexagonParagraph>
                                    </HexagonContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row collapse="tabletOn">
                                <Column size={1} marginLeft={2} maxWidth={450}>
                                    <Drsimple />
                                </Column>
                                <Column size={1} marginRight={2} maxWidth={830}>
                                    <DrSimpleText />
                                </Column>
                            </Row>
                            <Row collapse="tabletOff">
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1200}
                                >
                                    <Drsimple />
                                </Column>
                            </Row>
                            <Row collapse="tabletOff">
                                <Column
                                    size={1}
                                    marginRight={2}
                                    marginLeft={2}
                                    maxWidth={1200}
                                >
                                    <DrSimpleText />
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
                                        <StreamlineBoxIcon />
                                        <div>
                                            <h1
                                                style={{
                                                    color: '#F48200',
                                                    paddingBottom: '0.5rem'
                                                }}
                                            >
                                                Agilize seus processos
                                                rapidamente
                                            </h1>
                                            <p>
                                                Quando desastres ocorrem, você
                                                precisa da capacidade e da
                                                confiança para se recuperar o
                                                mais rápido e fácil possível.
                                                Nos ambientes Pláttano Advanced
                                                DRaaS, com o poder da Veeam como
                                                motor, integramos o
                                                gerenciamento de recuperação de
                                                desastre, permitindo failover de
                                                autoatendimento e failback de
                                                suas cargas de trabalho com o
                                                clique de um botão.
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
                                        <SupportBoxIcon />
                                        <div>
                                            <h1
                                                style={{
                                                    color: '#F48200',
                                                    paddingBottom: '0.5rem'
                                                }}
                                            >
                                                Suporte personalizado e próximo
                                            </h1>
                                            <p>
                                                Momentos de desastres são
                                                complicados, nervos à flor da
                                                pele com muita emoção e
                                                complexidade. Muitas vezes, os
                                                envolvidos encontram-se
                                                indisponíveis para acionamento
                                                do failover. Nossa equipe está
                                                pronta e aguardando para atender
                                                a chamada e realizar o
                                                procedimento do failover em
                                                alguns momentos. A recuperação
                                                de desastres requer a melhor
                                                infraestrutura de tecnologia,
                                                juntamente com o suporte de um
                                                parceiro que garantirá que seus
                                                negócios estejam seguros.
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
                                        <RecoveryBoxIcon />
                                        <div>
                                            <h1
                                                style={{
                                                    color: '#F48200',
                                                    paddingBottom: '0.5rem'
                                                }}
                                            >
                                                Recuperação de Desastres de uma
                                                forma simples
                                            </h1>
                                            <p>
                                                A replicação baseada em imagem é
                                                acessível e eficiente e oferece
                                                recuperação de desastres baseada
                                                em imagem para TODAS as
                                                aplicações por meio de nossos
                                                serviços de infraestrutura de
                                                DRaaS.
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
                                        <ProtectionBoxIcon />
                                        <div>
                                            <h1
                                                style={{
                                                    color: '#F48200',
                                                    paddingBottom: '0.5rem'
                                                }}
                                            >
                                                Proteção de dados de nível
                                                corporativo ao seu alcance
                                            </h1>
                                            <p>
                                                Backup e recuperação de
                                                desastres são funções que TODA
                                                organização precisa realizar,
                                                mas geralmente uma estratégia
                                                ampla está fora do alcance de
                                                empresas que não possuem
                                                orçamento ou recursos para
                                                desenvolver e manter um
                                                repositório externo.
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
                                        <Recovery2BoxIcon />
                                        <div>
                                            <h1
                                                style={{
                                                    color: '#F48200',
                                                    paddingBottom: '0.5rem'
                                                }}
                                            >
                                                Recuperação de desastres como
                                                serviço da Pláttano Technologies
                                            </h1>
                                            <p>
                                                Definimos DRaaS ao oferecê-la
                                                como parte de uma estratégia de
                                                disponibilidade abrangente,
                                                fornecendo uma experiência de
                                                usuário consistente e reduzindo
                                                o custo geral para proteger seus
                                                dados. Oferecemos replicação
                                                baseada em imagem acessível e
                                                eficiente para uma DR
                                                verdadeira. Nossos preços são
                                                simples e diretos. Obtenha DR
                                                para qualquer carga de trabalho
                                                — é eficiente, econômica e
                                                agnóstica em relação a storage,
                                                aplicação e SO.
                                            </p>
                                        </div>
                                    </BoxItemsContainer>
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

export default Draas
