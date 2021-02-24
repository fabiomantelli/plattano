import React, { useState } from 'react'
import Head from 'next/head'

import Router from 'next/router';

import ScrollLock from 'react-scrolllock'

import Row from '../../styles/Row'
import Column from '../../styles/Column'
import Grid from '../../styles/Grid'

import Header from '../../components/Header'
import {
    GeneralText,
    HexagonContainer,
    ImageContainer,
    MainContainer
} from '../../styles/Containers'

import {
    HexagonParagraph,
    HexagonTitle,
    SupportTitle,
    Title
} from '../../styles/TextElements'

import Trapezio from '../../assets/trapezio'
import SupportBoxIcon from '../../assets/11-support/supportbox/supportBoxIcon'
import PurposelessBoxIcon from '../../assets/11-support/purposelessbox/purposelessBoxIcon'
import UpdatesBoxIcon from '../../assets/11-support/updatesbox/updatesBoxIcon'
import CapexBoxIcon from '../../assets/11-support/capexbox/capexBoxIcon'
import Footer from '../../components/Footer'


const Suporte: React.FC = () => {
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
                                // background={true}
                                collapse="tabletOn"
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
                                        url="/assets/11-support/support-background.png"
                                        backgroundSize="cover"
                                    >
                                        <Title style={{ fontSize: '3.5rem'}}>
                                            Licenciamento como <br />
                                            Assinatura
                                        </Title>
                                    </MainContainer>
                                </Column>
                            </Row>

                            <Row
                                background={true}
                                collapse="tabletOff"
                                polygon={true}
                                style={{ marginTop: '70px' }}
                            >
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <MainContainer
                                        changedMediaQueries="tabletOn"
                                    >
                                        <Title style={{ fontSize: '3rem'}}>
                                            Licenciamento como <br />
                                            Assinatura
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
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <Trapezio />
                                        <HexagonTitle>
                                            Cloud Service Provider
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Tenha um ambiente 100% seguro e protegido 
                                            com o Veeam suportado pelos especialistas 
                                            da Pláttano. Troque as aquisições e compras 
                                            complexas e <b> pague mensalmente</b> de acordo com 
                                            o seu consumo de licenças (<b>opEx</b>). Esse é um 
                                            novo conceito de utilização de licenciamento 
                                            e vem se tornando um padrão a cada dia. Além 
                                            de contratar a melhor solução, você ainda terá 
                                            suporte total junto ao nosso time de engenheiros 
                                            para manter seu ambiente monitorado e gerido. Diga 
                                            adeus às aberturas de chamados junto aos fabricantes 
                                            e libere seu time de TI para focar no que realmente 
                                            importa: o seu negócio.
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
                                            src="/assets/11-support/veeamcloud.png"
                                            alt="Veeam Cloud Image"
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
                                        <HexagonTitle>
                                            Vantagens de alugar suas licenças
                                            Veeam
                                        </HexagonTitle>
                                    </HexagonContainer>
                                </Column>
                            </Row>
                        </section>
                        <section>
                            <Row collapse="tabletOn">
                                <Column
                                    size={1}
                                    maxWidth={293}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <SupportBoxIcon />
                                        <SupportTitle>Suporte</SupportTitle>
                                        <p style={{ paddingTop: '1rem' }}>
                                            Ambiente suportado por nossa equipe,
                                            e sempre atualizado. Contrato
                                            contempla horas de suportes mensais
                                        </p>
                                    </HexagonContainer>
                                </Column>
                                <Column size={1} maxWidth={293} marginRight={2}>
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <PurposelessBoxIcon />
                                        <SupportTitle>
                                            Sem Fidelidade
                                        </SupportTitle>
                                        <p style={{ paddingTop: '1rem' }}>
                                            Contratos flexíveis, sem burocracia
                                            e fidelização. Não cobramos multas
                                            de cancelamento. Use pelo tempo que
                                            desejar.
                                        </p>
                                    </HexagonContainer>
                                </Column>
                                <Column size={1} maxWidth={293} marginRight={2}>
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <UpdatesBoxIcon />
                                        <SupportTitle>
                                            Atualizações
                                        </SupportTitle>
                                        <p style={{ paddingTop: '1rem' }}>
                                            Tenha acesso às melhores ferramentas
                                            sempre atualizadas. Nosso time de
                                            engenheiros juntamente com sua
                                            equipe manterá seu ambiente sempre
                                            em dia.
                                        </p>
                                    </HexagonContainer>
                                </Column>
                                <Column size={1} maxWidth={293} marginRight={2}>
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <CapexBoxIcon />
                                        <SupportTitle>
                                            Troque o CapEx pelo OpEx
                                        </SupportTitle>
                                        <p style={{ paddingTop: '1rem' }}>
                                            Pague somente pelo que consumir. Os
                                            custos mensais são calculados de
                                            acordo com seu consumo, medido por
                                            VMs ou hosts físicos protegidos.
                                        </p>
                                    </HexagonContainer>
                                </Column>
                            </Row>

                            <Row collapse="tabletOff">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                    collapse="mobileOn"
                                >
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <SupportBoxIcon />
                                        <SupportTitle>Suporte</SupportTitle>
                                        <p style={{ paddingTop: '1rem' }}>
                                            Ambiente suportado por nossa equipe,
                                            e sempre atualizado. Contrato
                                            contempla horas de suportes mensais
                                        </p>
                                    </HexagonContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    collapse="mobileOn"
                                >
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <PurposelessBoxIcon />
                                        <SupportTitle>
                                            Sem Fidelidade
                                        </SupportTitle>
                                        <p style={{ paddingTop: '1rem' }}>
                                            Contratos flexíveis, sem burocracia
                                            e fidelização. Não cobramos multas
                                            de cancelamento. Use pelo tempo que
                                            desejar.
                                        </p>
                                    </HexagonContainer>
                                </Column>
                            </Row>
                            <Row collapse="tabletOff">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                    collapse="mobileOn"
                                >
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <UpdatesBoxIcon />
                                        <SupportTitle>
                                            Atualizações
                                        </SupportTitle>
                                        <p style={{ paddingTop: '1rem' }}>
                                            Tenha acesso às melhores ferramentas
                                            sempre atualizadas. Nosso time de
                                            engenheiros juntamente com sua
                                            equipe manterá seu ambiente sempre
                                            em dia.
                                        </p>
                                    </HexagonContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    collapse="mobileOn"
                                >
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <CapexBoxIcon />
                                        <SupportTitle>
                                            Troque o CapEx pelo OpEx
                                        </SupportTitle>
                                        <p style={{ paddingTop: '1rem' }}>
                                            Pague somente pelo que consumir. Os
                                            custos mensais são calculados de
                                            acordo com seu consumo, medido por
                                            VMs ou hosts físicos protegidos.
                                        </p>
                                    </HexagonContainer>
                                </Column>
                            </Row>

                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <SupportBoxIcon />
                                        <SupportTitle>Suporte</SupportTitle>
                                        <p style={{ paddingTop: '1rem' }}>
                                            Ambiente suportado por nossa equipe,
                                            e sempre atualizado. Contrato
                                            contempla horas de suportes mensais
                                        </p>
                                    </HexagonContainer>
                                </Column>
                            </Row>
                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <PurposelessBoxIcon />
                                        <SupportTitle>
                                            Sem Fidelidade
                                        </SupportTitle>
                                        <p style={{ paddingTop: '1rem' }}>
                                            Contratos flexíveis, sem burocracia
                                            e fidelização. Não cobramos multas
                                            de cancelamento. Use pelo tempo que
                                            desejar.
                                        </p>
                                    </HexagonContainer>
                                </Column>
                            </Row>
                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <UpdatesBoxIcon />
                                        <SupportTitle>
                                            Atualizações
                                        </SupportTitle>
                                        <p style={{ paddingTop: '1rem' }}>
                                            Tenha acesso às melhores ferramentas
                                            sempre atualizadas. Nosso time de
                                            engenheiros juntamente com sua
                                            equipe manterá seu ambiente sempre
                                            em dia.
                                        </p>
                                    </HexagonContainer>
                                </Column>
                            </Row>
                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="mobileOn"
                                    >
                                        <CapexBoxIcon />
                                        <SupportTitle>
                                            Troque o CapEx pelo OpEx
                                        </SupportTitle>
                                        <p style={{ paddingTop: '1rem' }}>
                                            Pague somente pelo que consumir. Os
                                            custos mensais são calculados de
                                            acordo com seu consumo, medido por
                                            VMs ou hosts físicos protegidos.
                                        </p>
                                    </HexagonContainer>
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
                                        <HexagonTitle>
                                            Proximidade com o Cliente
                                        </HexagonTitle>
                                    </HexagonContainer>
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
                                    <GeneralText>
                                        <p>
                                            Nossa premissa básica é atuarmos
                                            próximo ao cliente e sua equipe.
                                            Criamos um canal direto entre as
                                            equipes, visando Acordo de Nível de
                                            Serviço (SLA) quase que
                                            instantaneamenter. Seu problema é
                                            solucionado rapidamente, por uma
                                            equipe de engenheirtos
                                            especializados em tecnologia. Somos
                                            pessoas que atendem pessoas.
                                        </p>
                                        <p>
                                            Como provedor de serviços oficial,
                                            temos como meta fornecer uma oferta
                                            de proteção de dados de padrão
                                            mundial aos clientes, aprimorando o
                                            tempo de recuperação em caso de
                                            desastres, reduzir os custos através
                                            de OpEx, cumprir requisitos de
                                            conformidade normativa e ter
                                            liberdade para inovar.
                                        </p>
                                    </GeneralText>
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

export default Suporte
