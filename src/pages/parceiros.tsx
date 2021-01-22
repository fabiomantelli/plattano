import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import Forbes from '../components/5-partners/Forbes'

import News from '../components/News'
import Email from '../components/Email'

import Header from '../components/Header'
import Footer from '../components/Footer'
import {
    ImageContainer,
    MainContainer,
    SpeedTransformationContainer,
    GeneralText,
    HexagonContainer,
    BenefitContainer
} from '../styles/Containers'

import {
    HexagonParagraph,
    HexagonTitle,
    SubTitle,
    Title
} from '../styles/TextElements'

import Whatsapp from '../components/Whatsapp'

const Parceiros: React.FC = () => {
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
                                        url="/assets/5-partners/partners-image.png"
                                        backgroundSize="cover"
                                    >
                                        <Title>Parceiros</Title>
                                        <SubTitle changedMediaQueries="tabletOn">
                                            Em um mundo competitivo, nada melhor
                                            do que estar aliado com grandes
                                            players e gigantes da indústria de
                                            TI. Por isso, a
                                            <b> Pláttano Technologies</b>{' '}
                                            aliou-se às melhores fabricantes e
                                            distribuidores. Venha para o Mundo
                                            Pláttano e esteja sempre à frente no
                                            quesito tecnologia
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
                                    <SpeedTransformationContainer>
                                        <Link href="/vmware">
                                            <img
                                                src="/assets/5-partners/vmware-logo.png"
                                                alt="VMware Logo"
                                                style={{ cursor: 'pointer' }}
                                            />
                                        </Link>
                                        <h1>
                                            Acelerando a transformação <br />
                                            digital com a Pláttano e VMware.
                                        </h1>
                                    </SpeedTransformationContainer>
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
                                        As decisões tecnológicas que você toma hoje 
                                        para seus negócios afetarão diretamente as 
                                        oportunidades que criará para o futuro. A escolha 
                                        da <b style={{ color: '#F48200'}}>Pláttano Technologies </b> 
                                        como parceira <b>VMware</b>, e com nosso vasto conhecimento na área de 
                                        infraestrutura fará com que você obtenha o máximo valor e progresso 
                                        para seus negócios por meio das soluções <b>VMware</b>.
                                        </p>
                                        <p>
                                            Somos uma empresa especializada para
                                            ajudá-lo a identificar e implementar
                                            as soluções <b>VMware</b> certas,
                                            permitindo que você obtenha o máximo
                                            valor de suas soluções para poder
                                            alcançar os objetivos de negócio o
                                            mais rápido possível. Fornecemos os
                                            mais amplos serviços e soluções para
                                            nossos clientes conjuntos.
                                        </p>
                                    </GeneralText>
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
                                            Os parceiros são conselheiros
                                            confiáveis
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            A <b>VMware </b> está comprometida em oferecer a melhor 
                                            experiência de uso para nossos clientes. Temos um 
                                            elevado nível de parceria e você pode ter certeza 
                                            de que temos os recursos, o conhecimento, as 
                                            habilidades e as ferramentas necessárias para 
                                            fornecer os serviços com êxito. Com a experiência 
                                            adquirida em centenas de projetos, aproveitamos 
                                            nosso conhecimento sólido para agregar o máximo 
                                            valor a partir das soluções da fabricante.
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
                                            src="/assets/5-partners/partnersare-image.png"
                                            alt="Partners Are Image"
                                        />
                                    </ImageContainer>
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
                                    <SpeedTransformationContainer>
                                        <Link href="/veeam">
                                            <img
                                                src="/assets/5-partners/veeam-logo.png"
                                                alt="Veeam Logo"
                                                style={{ cursor: 'pointer'}}
                                            />
                                        </Link>
                                            
                                        <h1>
                                            Soluções personalizadas <br /> com a
                                            Pláttano e Veeam.
                                        </h1>
                                    </SpeedTransformationContainer>
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
                                            A <strong>Pláttano Technologies</strong> escolheu a{' '}
                                            <Link href="/veeam">
                                                <b
                                                    style={{
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    Veeam®
                                                </b>
                                            </Link>{' '}
                                            como parceira em soluções de proteção 
                                            de dados porquê ela é a líder no segmento,  
                                            e nada melhor do que entregar aos nossos 
                                            clientes o que há de melhor. A Veeam oferece 
                                            uma plataforma única para modernizar o backup, 
                                            acelerar a nuvem híbrida e proteger seus dados. 
                                            Suas soluções são simples de instalar e executar, 
                                            flexíveis o bastante para se adequar a qualquer 
                                            ambiente e sempre confiáveis. <br /><br />
                                            Temos como meta junto à fabricante, ser o provedor 
                                            mais confiável de soluções de backup que proporcionam 
                                            gerenciamento de dados na nuvem.

                                        </p>
                                        <p>
                                        Somos parceiros oficiais, podendo auxiliar 
                                        tanto nas etapas iniciais que visam entregar 
                                        o melhor licenciamento para você, até nas 
                                        fases de implantação, apoio técnico e gestão 
                                        de sua infraestrutura. Além disso, a Pláttano 
                                        Technologies é um dos principais parceiros cloud, 
                                        atuando no seleto programa <b>VCSP </b> e <b>VASP</b>, 
                                        o que nos credencia para ofertar soluções de Backup 
                                        em Cloud (
                                            <Link href="/baas">
                                                <b
                                                    style={{
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    BaaS
                                                </b>
                                            </Link>
                                            ) e Recuperação de Desastre (
                                            <Link href="/draas">
                                                <b
                                                    style={{
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    DRaaS
                                                </b>
                                            </Link>
                                            ).
                                        </p>
                                    </GeneralText>
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
                                    <Forbes />
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
                                        <HexagonParagraph changedMediaQueries="tabletOn">
                                            A Veeam foi classificada na lista
                                            Cloud 100 da Forbes, como uma das
                                            100 melhores empresas de nuvem
                                            privada no mundo. Os vencedores
                                            foram escolhidos com base em quatro
                                            fatores:{' '}
                                            <b>
                                                valor estimado, métricas
                                                operacionais, pessoas/cultura e
                                                liderança de mercado
                                            </b>
                                            . Entre centenas de indicados, a
                                            Veeam foi escolhida por um painel de
                                            100 jurados, incluindo CEOs de
                                            muitas empresas líderes em nuvens
                                            públicas.
                                        </HexagonParagraph>
                                        <HexagonParagraph changedMediaQueries="tabletOn">
                                            &ldquo;Temos a honra de entrar na
                                            lista Cloud 100 da Forbes de novo
                                            este ano&ldquo;, disse Paul Mattes,
                                            Vice-presidente Global de Nuvem da
                                            Veeam. &ldquo;Conforme as empresas
                                            continuam impulsionando a
                                            transformação digital e exigindo
                                            disponibilidade 24.7.365, nosso
                                            grupo de nuvem se tornou o segmento
                                            de negócios com crescimento mais
                                            rápido na Veeam. Com quase 16.000
                                            VCSPs (Veeam Cloud &amp; Service
                                            Provider), em nosso ecossistema,
                                            continuamos alimentando o impulso e
                                            a demanda que esses parceiros e seus
                                            clientes geram. A Veeam abraçou
                                            totalmente o mundo das múltiplas
                                            nuvens e continuará oferecendo
                                            soluções focadas em nuvem.
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
                                            src="/assets/5-partners/cloud100-image.png"
                                            alt="Cloud100 Icon"
                                        />
                                    </ImageContainer>
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
                            <Row collapse="desktopOff">
                                <Column
                                    size={1}
                                    maxWidth={415}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <BenefitContainer>
                                        <HexagonTitle>
                                            Distribuidores
                                        </HexagonTitle>
                                    </BenefitContainer>
                                </Column>
                                <Column size={1} maxWidth={830} marginRight={2}>
                                    <HexagonContainer
                                        changedMediaQueries="mobileOn"
                                        height="auto"
                                    >
                                        <HexagonParagraph>
                                            Contamos com o apoio de nossos
                                            distribuidores especializados para
                                            ofertar nossa gama de produtos{' '}
                                            <Link href="/vmware">
                                                <b
                                                    style={{
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    VMware
                                                </b>
                                            </Link>{' '}
                                            e{' '}
                                            <Link href="/veeam">
                                                <b
                                                    style={{
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    Veeam
                                                </b>
                                            </Link>
                                            . Sempre em busca dos melhores
                                            preços, formas de pagamentos,
                                            treinamentos e facilidades nas
                                            transações, mantemos um contato
                                            próximo, visando uma entrega rápida
                                            dos produtos, licenciamentos e
                                            também no faturamento. Contar com um
                                            distribuidor confiável e ágil é de
                                            extrema importância, pois toda a
                                            comunicação entre cliente, parceiro
                                            e fabricante depende exclusivamente
                                            de um distribuidor.
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
                                            Distribuidores
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Contamos com o apoio de nossos
                                            distribuidores especializados para
                                            ofertar nossa gama de produtos
                                            <b>VMware</b> e <b>Veeam</b>. Sempre
                                            em busca dos melhores preços, formas
                                            de pagamentos, treinamentos e
                                            facilidades nas transações, mantemos
                                            um contato próximo, visando uma
                                            entrega rápida dos produtos,
                                            licenciamentos e também no
                                            faturamento. Contar com um
                                            distribuidor confiável e ágil é de
                                            extrema importância, pois toda a
                                            comunicação entre cliente, parceiro
                                            e fabricante depende exclusivamente
                                            de um distribuidor.
                                        </HexagonParagraph>
                                    </HexagonContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row collapse="tabletOn">
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    marginTop={2}
                                    maxWidth={293}
                                >
                                    <ImageContainer
                                        height="auto"
                                        justifyContent="center"
                                    >
                                        <a
                                            href="https://www.vmware.com/br.html"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src="/assets/5-partners/vmware-logo.png"
                                                alt="VMware Logo"
                                            />
                                        </a>
                                    </ImageContainer>
                                </Column>
                                <Column
                                    size={1}
                                    marginRight={2}
                                    marginTop={2}
                                    maxWidth={293}
                                >
                                    <ImageContainer
                                        height="auto"
                                        justifyContent="center"
                                    >
                                        <a
                                            href="https://www.veeam.com/br"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src="/assets/5-partners/veeam-logo.png"
                                                alt="Veeam Logo"
                                            />
                                        </a>
                                    </ImageContainer>
                                </Column>
                                <Column
                                    size={1}
                                    marginRight={2}
                                    marginTop={2}
                                    maxWidth={293}
                                >
                                    <ImageContainer
                                        height="auto"
                                        justifyContent="center"
                                    >
                                        <a
                                            href="https://www.synnexcorp.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src="/assets/5-partners/synnex-logo.png"
                                                alt="Sinnex Logo"
                                            />
                                        </a>
                                    </ImageContainer>
                                </Column>
                                <Column
                                    size={1}
                                    marginRight={2}
                                    marginTop={2}
                                    maxWidth={293}
                                >
                                    <ImageContainer
                                        height="auto"
                                        justifyContent="center"
                                    >
                                        <a
                                            href="https://www.adistec.com/br"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src="/assets/5-partners/adistec-logo.png"
                                                alt="Adistec Logo"
                                            />
                                        </a>
                                    </ImageContainer>
                                </Column>
                            </Row>

                            <Row collapse="tabletOff">
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    marginTop={2}
                                    maxWidth={293}
                                >
                                    <ImageContainer
                                        height="auto"
                                        justifyContent="center"
                                    >
                                        <a
                                            href="https://www.vmware.com/br.html"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src="/assets/5-partners/vmware-logo.png"
                                                alt="VMware Logo"
                                            />
                                        </a>
                                    </ImageContainer>
                                    <ImageContainer
                                        height="auto"
                                        justifyContent="center"
                                    >
                                        <a
                                            href="https://www.veeam.com/br"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src="/assets/5-partners/veeam-logo.png"
                                                alt="Veeam Logo"
                                            />
                                        </a>
                                    </ImageContainer>
                                </Column>
                                <Column
                                    size={1}
                                    marginRight={2}
                                    marginTop={2}
                                    maxWidth={293}
                                >
                                    <ImageContainer
                                        height="auto"
                                        justifyContent="center"
                                    >
                                        <a
                                            href="https://www.synnexcorp.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src="/assets/5-partners/synnex-logo.png"
                                                alt="Sinnex Logo"
                                            />
                                        </a>
                                    </ImageContainer>
                                    <ImageContainer
                                        height="auto"
                                        justifyContent="center"
                                    >
                                        <a
                                            href="https://www.adistec.com/br"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src="/assets/5-partners/adistec-logo.png"
                                                alt="Adistec Logo"
                                            />
                                        </a>
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

export default Parceiros
