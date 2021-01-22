import React, { useState } from 'react'
import Head from 'next/head'

import Router from 'next/router';

import ScrollLock from 'react-scrolllock'

import Row from '../../styles/Row'
import Column from '../../styles/Column'
import Grid from '../../styles/Grid'
import Header from '../../components/Header'
import {
    EntireContainer,
    HexagonContainer,
    ImageContainer,
    MainContainer,
    MainGeometricContainer,
    PolygonContainer
} from '../../styles/Containers'
import {
    HexagonParagraph,
    HexagonTitle,
    ListaImage,
    ListaOrangeImage,
    SubTitle,
    Title
} from '../../styles/TextElements'

import Trapezio from '../../assets/trapezio'
import TrapezioWhite from '../../assets/trapeziowhite'
import Software from '../../components/13-vbrPage/Software'
import News from '../../components/News'
import Email from '../../components/Email'
import Footer from '../../components/Footer'

import Whatsapp from '../../components/Whatsapp'

const Vbr: React.FC = () => {
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
                    <Whatsapp />

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
                                            <Title>Veeam B&amp;R</Title>
                                            <SubTitle>
                                                Software de backup e replicação
                                                líder do setor Projetado para
                                                ser simples, flexível e
                                                confiável. Criado para a nuvem,
                                                virtual e físico. Agnóstico
                                                quanto ao hardware, e pronto
                                                para a nuvem
                                            </SubTitle>
                                        </PolygonContainer>

                                        <img
                                            src="/assets/13-vbr/vbr-image.png"
                                            alt="Workspace One Image"
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
                                        <Title>Veeam B&amp;R</Title>
                                        <SubTitle changedMediaQueries="tabletOn">
                                            Software de backup e replicação
                                            líder do setor Projetado para ser
                                            simples, flexível e confiável.
                                            Criado para a nuvem, virtual e
                                            físico. Agnóstico quanto ao
                                            hardware, e pronto para a nuvem
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
                                        <Trapezio />
                                        <HexagonTitle>
                                            Proteção de dados ampla para <br />{' '}
                                            todas as cargas de trabalho
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
                                            O Veeam® Backup &amp;
                                            Replication&trade; está preparado
                                            para enfrentar a próxima geração de
                                            desafios operacionais diretamente
                                            com um conjunto abrangente de
                                            recursos de proteção de dados de
                                            nível empresarial. Poderosa, capaz e
                                            fácil de usar, a Veeam reduz a
                                            sobrecarga operacional com a
                                            flexibilidade que se adapta aos seus
                                            negócios e a confiabilidade líder de
                                            mercado com a qual você pode contar.
                                        </HexagonParagraph>
                                    </HexagonContainer>
                                </Column>

                                <Column size={1} marginRight={2} maxWidth={622}>
                                    <HexagonContainer height="auto">
                                        <HexagonParagraph>
                                            O Veeam Backup &amp; Replication
                                            fornece disponibilidade avançada em
                                            todas as cargas de trabalho físicas,
                                            virtuais e em nuvem, com uma solução
                                            simples, flexível e confiável.
                                            Proteja seus dados, não importa a
                                            localização ou tipo de carga de
                                            trabalho:
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            <b>
                                                On-Premise, AWS, Azure, IBM
                                                Cloud, VMware, Hyper-V,
                                                Nutanix...
                                            </b>
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
                                            O Veeam® Backup &amp;
                                            Replication&trade; está preparado
                                            para enfrentar a próxima geração de
                                            desafios operacionais diretamente
                                            com um conjunto abrangente de
                                            recursos de proteção de dados de
                                            nível empresarial. Poderosa, capaz e
                                            fácil de usar, a Veeam reduz a
                                            sobrecarga operacional com a
                                            flexibilidade que se adapta aos seus
                                            negócios e a confiabilidade líder de
                                            mercado com a qual você pode contar.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            O Veeam Backup &amp; Replication
                                            fornece disponibilidade avançada em
                                            todas as cargas de trabalho físicas,
                                            virtuais e em nuvem, com uma solução
                                            simples, flexível e confiável.
                                            Proteja seus dados, não importa a
                                            localização ou tipo de carga de
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            <b>
                                                On-Premise, AWS, Azure, IBM
                                                Cloud, VMware, Hyper-V,
                                                Nutanix...
                                            </b>
                                        </HexagonParagraph>
                                    </HexagonContainer>
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
                                            src="/assets/13-vbr/advantage.png"
                                            alt="Advantage Image"
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
                                            Vantagens que vão além da Veeam!
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Ao escolher adquirir seu Veeam&reg;
                                            Backup &amp; Replication&trade; com
                                            a Pláttano Technologies, você não
                                            terá a preocupação de apenas ter
                                            comprado um produto qualquer.
                                            Trabalhamos como consultores e
                                            especialistas auxiliando nossos
                                            clientes desde as fases iniciais do
                                            projeto, partindo do melhor
                                            licenciamento ao seu ambiente, até a
                                            implantação e gestão do mesmo
                                            através das boas práticas
                                            estipuladas pela Veeam, dando ênfase
                                            aos recursos que diferenciam e dão
                                            valor ao produto.
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
                                        <HexagonTitle>
                                            Modernização de Backup
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Liberte-se do backup legado. Supere
                                            sua plataforma legada e libere um
                                            novo potencial.
                                        </HexagonParagraph>
                                        <HexagonParagraph>
                                            Ao adotar a plataforma de backup e
                                            replicação da Veeam, você tem acesso
                                            instantâneo a uma das soluções mais
                                            modernas do mercado. Isso permite
                                            liberar recursos atrelados à vasta
                                            sobrecarga da proteção de dados
                                            legada e concentrá-los nos projetos
                                            de inovação centrais dos quais você
                                            precisa.
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
                                            src="/assets/13-vbr/modernization.png"
                                            alt="Modernization Image"
                                        />
                                    </ImageContainer>
                                </Column>
                            </Row>
                        </section>
                        <section>
                            <Row
                                style={{ color: '#ffffff' }}
                                collapse="tabletOn"
                                background
                            >
                                <Column
                                    size={1}
                                    maxWidth={402.67}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HexagonContainer height="auto">
                                        <TrapezioWhite />
                                        <HexagonTitle
                                            style={{ marginBottom: '2rem' }}
                                        >
                                            Benefícios
                                        </HexagonTitle>
                                        <ListaImage>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Recursos ilimitados de
                                                capacidade de storage com o
                                                Scale-out Backup Repository™ e
                                                suporte a storage de objeto na
                                                nuvem do Veeam Cloud Tier
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Veeam DataLabs™: recuperação
                                                verificada, conformidade de
                                                segurança e sandbox virtual para
                                                testes
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Opções de backup e recuperação
                                                físicas, virtuais e em nuvem
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                API de integração de dados e API
                                                universal de storage
                                            </li>
                                        </ListaImage>
                                    </HexagonContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={402.67}
                                    marginRight={2}
                                >
                                    <HexagonContainer
                                        height="auto"
                                        style={{ marginTop: '6.8rem' }}
                                    >
                                        <ListaImage>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Veeam Explorers™ for Microsoft
                                                Exchange, Microsoft Active
                                                Directory, Microsoft SharePoint,
                                                Microsoft SQL Server e Oracle
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Restauração direta simples e em
                                                dois passos para AWS, Microsoft
                                                Azure
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Storage snapshots e integração
                                                com storage avançada
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Aceleração de WAN integrada,
                                                incluindo um modo de largura de
                                                banda alta
                                            </li>
                                        </ListaImage>
                                    </HexagonContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={402.67}
                                    marginRight={2}
                                >
                                    <HexagonContainer
                                        height="auto"
                                        style={{ marginTop: '6.8rem' }}
                                    >
                                        <ListaImage>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Gerenciamento e implantação
                                                integrados para Veeam Agents for
                                                Linux e for Microsoft Windows
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Replicação de máquina virtual
                                                (VM) baseada em imagem a partir
                                                de uma VM ou backup.
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Plug-ins corporativos para SAP
                                                HANA e Oracle RMAN
                                            </li>
                                        </ListaImage>
                                    </HexagonContainer>
                                </Column>
                            </Row>

                            <Row
                                background
                                style={{ color: '#ffffff' }}
                                collapse="tabletOff"
                            >
                                <Column
                                    size={1}
                                    maxWidth={1280}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HexagonContainer
                                        height="auto"
                                        changedMediaQueries="tabletOn"
                                    >
                                        <TrapezioWhite />
                                        <HexagonTitle
                                            style={{ marginBottom: '2rem' }}
                                        >
                                            Benefícios
                                        </HexagonTitle>
                                        <ListaImage>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Recursos ilimitados de
                                                capacidade de storage com o
                                                Scale-out Backup Repository™ e
                                                suporte a storage de objeto na
                                                nuvem do Veeam Cloud Tier
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Veeam DataLabs™: recuperação
                                                verificada, conformidade de
                                                segurança e sandbox virtual para
                                                testes
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Opções de backup e recuperação
                                                físicas, virtuais e em nuvem
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                API de integração de dados e API
                                                universal de storage
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Veeam Explorers™ for Microsoft
                                                Exchange, Microsoft Active
                                                Directory, Microsoft SharePoint,
                                                Microsoft SQL Server e Oracle
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Restauração direta simples e em
                                                dois passos para AWS, Microsoft
                                                Azure
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Storage snapshots e integração
                                                com storage avançada
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Aceleração de WAN integrada,
                                                incluindo um modo de largura de
                                                banda alta
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Gerenciamento e implantação
                                                integrados para Veeam Agents for
                                                Linux e for Microsoft Windows
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Replicação de máquina virtual
                                                (VM) baseada em imagem a partir
                                                de uma VM ou backup.
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Plug-ins corporativos para SAP
                                                HANA e Oracle RMAN
                                            </li>
                                        </ListaImage>
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
                                    <EntireContainer
                                        style={{ padding: '2rem' }}
                                    >
                                        <h1>
                                            {' '}
                                            O Veeam Backup &amp; Replication
                                            protege as <br /> seguintes cargas
                                            de trabalho:
                                        </h1>
                                    </EntireContainer>
                                </Column>
                            </Row>
                            <Row collapse="tabletOn">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HexagonContainer
                                        height="auto"
                                        style={{ alignItems: 'center' }}
                                    >
                                        <ListaOrangeImage>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem',
                                                    color: '#F48200'
                                                }}
                                            >
                                                Nuvem - AWS e Microsoft Azure
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem',
                                                    color: '#F48200'
                                                }}
                                            >
                                                Físico - Veeam Agent for
                                                Microsoft Windows e Linux
                                            </li>
                                        </ListaOrangeImage>
                                    </HexagonContainer>
                                </Column>
                                <Column size={1} maxWidth={622} marginRight={2}>
                                    <HexagonContainer
                                        height="auto"
                                        style={{ alignItems: 'center' }}
                                    >
                                        <ListaOrangeImage>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem',
                                                    color: '#F48200'
                                                }}
                                            >
                                                Virtual - VMware vSphere,
                                                Microsoft Hyper-V e Nutanix AHV
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem',
                                                    color: '#F48200'
                                                }}
                                            >
                                                Aplicações - Microsoft, Oracle e
                                                SAP
                                            </li>
                                        </ListaOrangeImage>
                                    </HexagonContainer>
                                </Column>
                            </Row>

                            <Row collapse="tabletOff">
                                <Column
                                    size={1}
                                    maxWidth={1280}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HexagonContainer height="auto">
                                        <ListaOrangeImage
                                            style={{
                                                textAlign: 'center'
                                            }}
                                        >
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Nuvem - AWS e Microsoft Azure
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Físico - Veeam Agent for
                                                Microsoft Windows e Linux
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Virtual - VMware vSphere,
                                                Microsoft Hyper-V e Nutanix AHV
                                            </li>
                                            <li
                                                style={{
                                                    paddingBottom: '1rem'
                                                }}
                                            >
                                                Aplicações - Microsoft, Oracle e
                                                SAP
                                            </li>
                                        </ListaOrangeImage>
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
                                    <Software />
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
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                    collapse="mobileOn"
                                >
                                    <ImageContainer>
                                        <img
                                            src="/assets/13-vbr/backup.png"
                                            alt="Backup Image"
                                        />
                                    </ImageContainer>
                                </Column>
                                <Column size={1} maxWidth={622} marginRight={2}>
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <Trapezio />
                                        <HexagonTitle>
                                            Backup Moderno com a tecnologia
                                            Veeam
                                        </HexagonTitle>
                                        <HexagonParagraph changedMediaQueries="tabletOn">
                                            Soluções avançadas que “simplesmente
                                            funcionam”. Nossa plataforma única,
                                            reúne todos os seus dados em um só
                                            lugar para que você possa colocá-los
                                            para trabalhar.
                                        </HexagonParagraph>
                                        <HexagonParagraph changedMediaQueries="tabletOn">
                                            <span style={{ color: '#F48200' }}>
                                                <b> Backup e recuperação: </b>
                                            </span>
                                            Esteja sempre disponível com a
                                            confiança de poder se recuperar
                                            rapidamente de qualquer situação com
                                            o <b>Veeam B&amp;R</b>
                                        </HexagonParagraph>
                                        <HexagonParagraph changedMediaQueries="tabletOn">
                                            <span style={{ color: '#F48200' }}>
                                                <b>
                                                    {' '}
                                                    Monitoramento e análise:{' '}
                                                </b>
                                            </span>
                                            Inteligência integrada para
                                            remediação e visibilidade completa
                                            do seu ambiente usando o{' '}
                                            <b>Veeam ONE</b>
                                        </HexagonParagraph>
                                        <HexagonParagraph changedMediaQueries="tabletOn">
                                            <span style={{ color: '#F48200' }}>
                                                <b>
                                                    {' '}
                                                    Automação e orquestração:{' '}
                                                </b>
                                            </span>
                                            Orquestração de recuperação
                                            inteligente e automação de
                                            reutilização de dados através do{' '}
                                            <b>
                                                Veeam Availability Orchestrator
                                            </b>
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

export default Vbr
