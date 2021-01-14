import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'
import Header from '../components/Header'
import {
    EntireContainer,
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
import { ButtonElement } from '../styles/Buttons'
import Footer from '../components/Footer'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Veeam: React.FC = () => {
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
                                            <Title>Veeam</Title>
                                            <SubTitle>
                                                A Veeam® oferece vários produtos
                                                para as suas necessidades de
                                                proteção de dados, no local e/ou
                                                na nuvem, incluindo: VMware,
                                                Hyper-V e Nutanix AHV para VMs;
                                                AWS, Azure e outras cargas de
                                                trabalho em nuvem nativa;
                                                servidores físicos e estações de
                                                trabalho; aplicações
                                                corporativas; e dados de NAS.​
                                            </SubTitle>
                                        </PolygonContainer>
                                        <img
                                            src="/assets/16-veeam/veeam-background.png"
                                            alt="VMware Background Image"
                                            style={{
                                                position: 'absolute',
                                                width: '100%',
                                                bottom: 0,
                                                zIndex: 8
                                            }}
                                        />
                                        <img
                                            src="/assets/16-veeam/veeam-image.png"
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
                                        <Title>Veeam</Title>
                                        <SubTitle changedMediaQueries="tabletOn">
                                            A Veeam® oferece vários produtos
                                            para as suas necessidades de
                                            proteção de dados, no local e/ou na
                                            nuvem, incluindo: VMware, Hyper-V e
                                            Nutanix AHV para VMs; AWS, Azure e
                                            outras cargas de trabalho em nuvem
                                            nativa; servidores físicos e
                                            estações de trabalho; aplicações
                                            corporativas; e dados de NAS.​
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
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <Trapezio />
                                        <HexagonTitle>
                                            Veeam Backup &amp; Replication
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            O Veeam&reg; Backup &amp;
                                            Replication&trade; oferece
                                            disponibilidade para TODAS as suas
                                            cargas de trabalho em nuvem,
                                            virtuais e físicas. Com um console
                                            de gerenciamento simples, é possível
                                            obter facilmente backup, recuperação
                                            e replicação rápidos, flexíveis e
                                            confiáveis para todas as suas
                                            aplicações e dados.
                                        </HexagonParagraph>
                                        <Link href="/vbr">
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
                                            src="/assets/16-veeam/veeamreplication.png"
                                            alt="Veeam Replication Image"
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
                                            src="/assets/16-veeam/veeamavailability.png"
                                            alt="Veeam Availability Image"
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
                                            Veeam Availability Suite
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            O Veeam&reg; Availability
                                            Suite&trade; é a principal solução
                                            da Veeam que torna o gerenciamento
                                            de dados simples, flexível e
                                            confiável. Acabe com o estresse da
                                            manutenção dos seus dados, removendo
                                            os processos manuais associados a
                                            monitoramento, recuperação e
                                            proteção de dados, conformidade e
                                            proteção contra ransomware. A Veeam
                                            economiza seu tempo e seu dinheiro,
                                            enquanto também possibilita que você
                                            foque menos em backups e mais em
                                            impulsionar seu negócio.
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
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <Trapezio />
                                        <HexagonTitle>
                                            Veeam Backup Essentials
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            A melhor solução de backup e
                                            recuperação para pequenas empresas.
                                            Oferece a experiência de
                                            gerenciamento unificado com
                                            monitoramento e geração de
                                            relatórios. <br /> <br />
                                            Proteja e monitore suas
                                            cargas de trabalho físicas, virtuais
                                            e na nuvem, com baixa sobrecarga
                                            operacional.
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
                                            src="/assets/16-veeam/veeambackup.png"
                                            alt="Veeam Backup Image"
                                        />
                                    </ImageContainer>
                                </Column>
                            </Row>
                            <Row>
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={1280}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <EntireContainer style={{ height: 'auto' }}>
                                        <iframe
                                            src="https://wcs-veeamproducts-plattanotecnologia.swcontentsyndication.com/VeeamProduct-Homepage-BR"
                                            style={{
                                                height: '290vh',
                                                width: '100%',
                                                border: 'none'
                                            }}
                                        />
                                    </EntireContainer>
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

export default Veeam
