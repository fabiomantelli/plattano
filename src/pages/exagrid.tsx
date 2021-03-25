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
    MainContainer,
    MainGeometricContainer,
    PolygonContainer
} from '../styles/Containers'
import {
    HexagonParagraph,
    HexagonTitle,
    Title
} from '../styles/TextElements'
import { ButtonElement } from '../styles/Buttons'

import Trapezio from '../assets/trapezio'
import Footer from '../components/Footer'
import Link from 'next/link'

const Vmware: React.FC = () => {
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
                                            <Title>ExaGrid</Title>
                                        </PolygonContainer>
                                        <img
                                            src="/assets/17-exagrid/background.png"
                                            alt="Background Image"
                                            style={{
                                                position: 'absolute',
                                                width: '100%',
                                                bottom: 0,
                                                zIndex: 8
                                            }}
                                        />
                                        <img
                                            src="/assets/17-exagrid/exagrid-image.png"
                                            alt="Exagrid"
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
                                        <Title>ExaGrid</Title>
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
                                            Inovação em armazenamento de backup
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            A <strong>Pláttano Technologies</strong>, sempre atenta ao que existe de melhor 
                                            e mais avançado, aliou-se também com a Exagrid Systems, empresa 
                                            de hardware de backup baseada em disco, fundada em 2002 e sediada 
                                            em Westborough, Massachusetts, com vários escritórios satélites 
                                            nos Estados Unidos, Europa e Ásia.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Especializada em fornecer armazenamento inteligente e hiperconvergente 
                                            para backup, a companhia está presente no mundo inteiro. Para o Brasil, 
                                            a novidade são appliances que já tem soluções da Veeam embutidas.
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
                                            src="/assets/17-exagrid/innovation.png"
                                            alt="Innovation Image"
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
                                            src="/assets/17-exagrid/backup.png"
                                            alt="Backup Image"
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
                                            Backup robusto
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            A ExaGrid suporta todas as tipologias de backup, incluindo 
                                            nuvem privada, datacenter externo, datacenter de terceiros, 
                                            nuvem de terceiros, nuvem pública e pode operar em um ambiente 
                                            híbrido puro. A ExaGrid também suporta uma ampla variedade de 
                                            aplicativos de backup, utilitários e despejos de banco de dados,
                                            como Veeam, Commvault, Veritas NetBackup, IBM Spectrum Protect, 
                                            HYCU, Zerto, Acronis e mais de 20 outros.
                                        <HexagonParagraph>
                                            Os apliances de armazenamento hiperconvergente da ExaGrid são 
                                            dimensionados para um backup completo e para retenção de longo 
                                            prazo.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Os dispositivos ExaGrid podem ser mesclados e combinados no 
                                            modelo Scaleout, ou seja, o sistema pode ser ampliado de forma 
                                            horizontal com qualquer outro sistema Exagrid de qualquer 
                                            tamanho ou modelo.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            O modelo scaleout permite que os clientes tenham muito mais 
                                            controle e comprem apenas o necessário permitindo o famoso 
                                            modelo “Pay as you grow”. Esta expansão permite que o sistema 
                                            de backup chegue até 32 dispositivos em um único sistema 
                                            scaleout com mais performace mesmo em ambientes com grandes 
                                            volumes de dados.
                                        </HexagonParagraph>
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
                                            O melhor appliance para você
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            A ExaGrid oferece armazenamento de backup em camadas, uma zona de 
                                            aterrissagem de cache em disco exclusiva, um repositório de retenção 
                                            de longo prazo e uma arquitetura de expansão. A zona de aterrissagem 
                                            da solução ExaGrid proporciona os backups, restaurações e recuperações 
                                            mais rápidos de VM. O repositório de retenção oferece o menor custo 
                                            para retenção a longo prazo. A arquitetura de expansão do ExaGrid 
                                            inclui dispositivos completos e garante uma janela de backup de 
                                            comprimento fixo,à medida que os dados aumentam, o que elimina as 
                                            atualizações caras de empilhadeiras e a obsolescência do produto.
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
                                            src="/assets/17-exagrid/appliance.png"
                                            alt="Appliance Image"
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

export default Vmware
