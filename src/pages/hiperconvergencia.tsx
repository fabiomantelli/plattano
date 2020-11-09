import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import Header from '../components/Header'
import Footer from '../components/Footer'

import {
    BenefitContainer,
    BoxContainer,
    BoxItemsContainer,
    HexagonContainer,
    ImageContainer,
    MainContainer,
    MainGeometricContainer,
    PolygonContainer
} from '../styles/Containers'

import Trapezio from '../assets/trapezio'
import {
    HexagonParagraph,
    HexagonTitle,
    SubTitle,
    Title
} from '../styles/TextElements'

import StorageBoxIcon from '../assets/8-hyperconvergence/storagebox/storageIcon'
import CapexBoxIcon from '../assets/8-hyperconvergence/capexbox/capexboxIcon'
import AlreadyBoxIcon from '../assets/8-hyperconvergence/alreadybox/alreadyboxIcon'
import EvolutionBoxIcon from '../assets/8-hyperconvergence/evolutionbox/evolutionBoxIcon'
import News from '../components/News'
import Email from '../components/Email'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Hiperconvergencia: React.FC = () => {
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
                                            <Title>
                                                Hiper&shy;convergência
                                            </Title>
                                            <SubTitle>
                                                Descubra as vantagens da
                                                utilização de soluções
                                                Hiperconvergentes da{' '}
                                                <b>VMware</b> e modernize seu
                                                Datacenter com a ajuda da{' '}
                                                <b>Pláttano Technologies</b>
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
                                            src="/assets/8-hyperconvergence/hyperconvergence-image.png"
                                            alt="Hyperconvergence Image"
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
                                        <Title>Hiper&shy;convergência</Title>
                                        <SubTitle changedMediaQueries="tabletOn">
                                            Descubra as vantagens da utilização
                                            de soluções Hiperconvergentes da{' '}
                                            <b>VMware</b> e modernize seu
                                            Datacenter com a ajuda da{' '}
                                            <b>Pláttano Technologies</b>
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
                                            src="/assets/8-hyperconvergence/hci-image.png"
                                            alt="HCI Image"
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
                                            Ao implantar HCI, abrimos portas
                                            para um Datacenter definido por
                                            Software (SDDC)
                                        </HexagonTitle>
                                        <HexagonParagraph changedMediaQueries="tabletOn">
                                            As demandas de capacidade e
                                            armazenamento estão aumentando. O
                                            hardware está ficando barato, mas o
                                            custo associado ao armazenamento e
                                            gerenciamento está aumentando,
                                            tornando-se a maior parte dos gastos
                                            das empresas.
                                        </HexagonParagraph>
                                        <HexagonParagraph changedMediaQueries="tabletOn">
                                            Não falamos mais de TERABYTES, mas
                                            sim de EXABYTES. Precisamos
                                            aproveitar mais e esmiuçar a
                                            eficiência do armazenamento. Isso
                                            tudo uma pressão com as equipes de
                                            TI, na expectativa de criarmos
                                            infraestruturas modernas e
                                            inteligentes para simplificar a
                                            entrega das soluções.
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
                                        <Trapezio />
                                        <HexagonTitle>
                                            Já virtualizamos servidores e redes.
                                            Por que não o Storage?
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Infraestruturas definidas por
                                            software ou hiperconvergentes trazem
                                            a possibilidade da automação e a
                                            nuvem hibrida.
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
                                            src="/assets/8-hyperconvergence/virtualize-image.png"
                                            alt="Virtualize Image"
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
                                            src="/assets/8-hyperconvergence/infrastructure-image.png"
                                            alt="Infrastructure Image"
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
                                            O que é infraestrutura
                                            hiperconvergente?
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Combine processamento, armazenamento
                                            e rede em um único sistema com a
                                            infraestrutura hiperconvergente
                                            (Esta solução simplificada usa
                                            software e servidores x86 para
                                            substituir o hardware de custo
                                            elevado e fins específicos. Com a
                                            infraestrutura hiperconvergente,
                                            você reduz a complexidade do data
                                            center e aumenta o dimensionamento.
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
                                            Com a hiperconvergência, todas as
                                            funções essenciais do datacenter são
                                            executadas em uma camada de software
                                            altamente integrada em vez de serem
                                            executadas em um hardware projetado
                                            para fins específicos. HCI consiste
                                            de três componentes de software:
                                            virtualização de processamento,{' '}
                                            <b>
                                                virtualização de armazenamento e
                                                gerenciamento
                                            </b>
                                            . O software de virtualização faz a
                                            abstração e criação de pools de
                                            recursos subjacentes e os aloca
                                            dinamicamente a aplicativos
                                            executados em VMs ou em contêineres
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
                                            src="/assets/8-hyperconvergence/infrastructure2-image.png"
                                            alt="Infrastructure2 Image"
                                        />
                                    </ImageContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    collapse="mobileOff"
                                    maxWidth={830}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <BenefitContainer changedMediaQueries="mobileOn">
                                        <Trapezio />
                                        <HexagonTitle>Benefícios</HexagonTitle>
                                    </BenefitContainer>
                                </Column>
                            </Row>
                            <Row>
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={415}
                                    marginLeft={2}
                                >
                                    <BenefitContainer>
                                        <Trapezio />
                                        <HexagonTitle>Benefícios</HexagonTitle>
                                    </BenefitContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={830}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <BoxContainer changedMediaQueries="mobileOn">
                                        <p>
                                            Redução de silos nos departamentos
                                            de TI. Uma equipe consegue gerenciar
                                            todo o parque, desde a camada de
                                            virtualização de servidores e rede,
                                            até o storage. Uma ferramenta
                                            central para todo o gerenciamento.
                                            Não mais interdependência para
                                            tarefas básicas.
                                        </p>
                                        <p>Integrado ao seu hypervisor</p>
                                        <p>
                                            Pronto para nuvem privada e híbrida
                                        </p>
                                        <p>
                                            Aproveite uma infraestrutura
                                            dimensionável, de alto desempenho e
                                            segura com o único software de
                                            virtualização de armazenamento
                                            integrado ao vSphere.
                                        </p>
                                        <p>
                                            Redução de custos e eliminação de
                                            silos nas equips de TI. Uma equipe
                                            gerencia todo o ambiente em único
                                            console.
                                        </p>
                                    </BoxContainer>
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
                                            src="/assets/8-hyperconvergence/environment-image.png"
                                            alt="Environment Image"
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
                                        <p>
                                            Em ambientes HCI com vSAN, você pode
                                            dimensionar sua infraestrutura de
                                            forma elástica e sem interrupções,
                                            aproveitando os servidores x86 para
                                            armazenamento.
                                        </p>
                                    </HexagonContainer>
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
                                        <StorageBoxIcon />
                                        <div>
                                            <h1>
                                                Armazenamento definido por
                                                software (SDS)
                                            </h1>
                                            <p>
                                                O SDS substitui o hardware
                                                estático e ineficiente por
                                                soluções dinâmicas, ágeis e
                                                automatizadas. Astecnologias SDS
                                                simples e inteligentes da VMware
                                                oferecem uma solução de
                                                armazenamento mais
                                                dimensionável, flexível e
                                                automatizada para os negócios e
                                                as demandas de aplicativos de
                                                hoje.
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
                                        <CapexBoxIcon />
                                        <div>
                                            <h1>CapEx e OpEx baixo</h1>
                                            <p>
                                                Baixo investimento inicial,
                                                aproveitando-se de servidores
                                                comuns, sem hardware
                                                proprietário. Serviço de entrega
                                                rápido, redução na operação e
                                                manutenção. Equipe focada na
                                                estratégia da empresa.
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
                                        <AlreadyBoxIcon />
                                        <div>
                                            <h1>Pronto para a nuvem</h1>
                                            <p>
                                                Use a HCI em qualquer lugar com
                                                o ecossistema mais amplo do
                                                setor: 18 fabricantes de
                                                servidores OEM e serviços
                                                nativos com as maiores nuvens
                                                públicas, como AWS, Azure,
                                                Google Cloud, Oracle Cloud, IBM
                                                Cloud e Alibaba Cloud.
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
                                        <EvolutionBoxIcon />
                                        <div>
                                            <h1>Evolução e Modernidade</h1>
                                            <p>
                                                O dimensionamento de datacenter
                                                pode ser um processo caro e
                                                complicado. Com sua simplicidade
                                                e capacidade de dimensionamento,
                                                o VMware vSan é capaz de atender
                                                à rápida evolução das
                                                necessidades de negócios
                                            </p>
                                        </div>
                                    </BoxItemsContainer>
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
                                    <BenefitContainer>
                                        <Trapezio />
                                        <HexagonTitle>
                                            Mas afinal, o que é o VMware vSan?
                                        </HexagonTitle>
                                    </BenefitContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <HexagonContainer
                                        changedMediaQueries="mobileOn"
                                        height="auto"
                                    >
                                        <HexagonParagraph>
                                            O vSAN é um software de
                                            virtualização de armazenamento de
                                            nível corporativo que, combinado com
                                            o vSphere, permite gerenciar o
                                            processamento e o armazenamento em
                                            uma única plataforma. Com o vSAN, é
                                            possível reduzir o custo e a
                                            complexidade do armazenamento
                                            tradicional e escolher o caminho
                                            mais fácil para a infraestrutura
                                            hiperconvergente e a nuvem híbrida.
                                            Evolua para uma solução integrada de
                                            infraestrutura hiperconvergente
                                            (HCI, pela sigla em inglês) com o
                                            vSAN a fim de melhorar a agilidade
                                            comercial, acelerar as operações e
                                            reduzir os custos.
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

export default Hiperconvergencia
