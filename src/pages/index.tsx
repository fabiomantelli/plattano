import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import Header from '../components/Header'

import Reference from '../components/home/Reference'
import Services from '../components/home/Services'

import Footer from '../components/Footer'
import {
  BoxDefaultContainer,
  EntireContainer,
  ImageContainer,
  ModernityContainer
} from '../styles/Containers'

import {
  HexagonParagraph,
  HexagonTitle,
  MainSubTitle,
  MainTitle,
  MiniOrangeTitle
} from '../styles/TextElements'

import { ButtonElement } from '../styles/Buttons'
import Consulting from '../components/home/Consulting'

const Home: React.FC = () => {
  const [active, SetActive] = useState('initial')
  const [mobile, SetMobile] = useState(false)

  const openHandler = () => {
    if (active === 'active') {
      SetActive('not-active')
      SetMobile(false)
    } else {
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
                style={{ marginTop: '70px' }}
              >
                <Column size={1}>
                  <ModernityContainer>
                    <MainTitle>
                      Modernidade para seu Datacenter
                    </MainTitle>
                    <MainSubTitle>
                      Tenha acesso às melhores e mais
                      modernas soluções de virtualização,
                      hiperconvergência, proteção de
                      dados, e hiperdisponibilidade de
                      Datacenters com as tecnologias da
                      Veeam e VMware. Tudo em um único
                      local com a equipe da Pláttano
                      Technologies, parceira oficial no
                      Brasil.
                    </MainSubTitle>
                  </ModernityContainer>
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
                      src="/assets/home/team-image.webp"
                      alt="Team Image"
                    />
                  </ImageContainer>
                </Column>
                <Column
                  size={1}
                  maxWidth={622}
                  marginRight={2}
                  marginLeft={2}
                >
                  <BoxDefaultContainer>
                    <MiniOrangeTitle>
                      Parceiro Licenciado Veeam, VMware e Zadara
                    </MiniOrangeTitle>
                    <HexagonTitle>
                      Equipe Especializada
                    </HexagonTitle>
                    <HexagonParagraph>
                      Com nossos níveis avançados de parceria
                      com os grandes players do mercado em nossa
                      área de Virtualização e Backup, somos capazes
                      de proporcionar entrega de projetos com valor
                      agregado e qualidade extrema para nossos clientes,
                      fazendo com que seu retorno de investimento seja o
                      mais adequado e rápido.
                    </HexagonParagraph>
                    <Link href="/parceiros">
                      <ButtonElement>
                        Saiba Mais
                      </ButtonElement>
                    </Link>

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
                  <BoxDefaultContainer>
                    <MiniOrangeTitle>
                      Respiramos VMware e Veeam
                    </MiniOrangeTitle>
                    <HexagonTitle>
                      Datacenter definido por software
                      always-ON
                    </HexagonTitle>
                    <HexagonParagraph>
                      Com as soluções da <strong>VMware</strong> e <strong>Veeam</strong>, as
                      organizações criam experiências excepcionais
                      ao mobilizar tudo, reagir a oportunidades mais
                      rapidamente com dados e aplicativos modernos
                      hospedados em nuvens híbridas, públicas e
                      privadas e com toda a segurança e proteção
                      desejada. Simplifique a TI, concentrando
                      recursos em inovação ao invés de manutenção.
                    </HexagonParagraph>
                  </BoxDefaultContainer>
                </Column>
                <Column
                  size={1}
                  collapse="mobileOn"
                  maxWidth={622}
                  marginRight={2}
                >
                  <ImageContainer>
                    <img
                      src="/assets/home/datacenter-image.webp"
                      alt="Datacenter Image"
                    />
                  </ImageContainer>
                </Column>
              </Row>
            </section>

            <section>
              <Row>
                <Column
                  size={1}
                  padding={2}
                  marginTop={2}
                  marginRight={2}
                  marginLeft={2}
                  maxWidth={1280}
                >
                  <EntireContainer>
                    <h3>Soluções</h3>
                    <h1 style={{ textAlign: 'center' }}>
                      As melhores soluções do mercado
                      <br />
                      para sua empresa
                    </h1>
                  </EntireContainer>
                </Column>
              </Row>

              <Row collapse="tabletOn">
                <Column
                  size={1}
                  marginTop={2}
                  marginLeft={2}
                  boxShadow={true}
                  maxWidth={402.67}
                >
                  <img
                    style={{ padding: '2rem 0 0 2rem' }}
                    src="/assets/home/consulting.svg"
                    alt="Consulting Icon"
                  />
                  <Consulting />
                </Column>
                <Column
                  size={1}
                  marginTop={2}
                  marginLeft={2}
                  boxShadow={true}
                  maxWidth={402.67}
                >
                  <img
                    style={{ padding: '2rem 0 0 2rem' }}
                    src="/assets/home/reference.svg"
                    alt="Reference Icon"
                  />
                  <Reference />
                </Column>
                <Column
                  size={1}
                  marginTop={2}
                  marginRight={2}
                  marginLeft={2}
                  boxShadow={true}
                  maxWidth={402.67}
                >
                  <img
                    style={{ padding: '2rem 0 0 2rem' }}
                    src="/assets/home/services.svg"
                    alt="Reference Icon"
                  />
                  <Services />
                </Column>
              </Row>

              <Row collapse="tabletOff">
                <Column
                  size={1}
                  marginTop={2}
                  marginRight={2}
                  marginLeft={2}
                  paddingTop={1}
                  paddingRight={2}
                  paddingBottom={1}
                  paddingLeft={2}
                  boxShadow={true}
                >
                  <img
                    style={{
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                    src="/assets/home/consulting.svg"
                    alt="Consulting Icon"
                  />
                  <Consulting />
                </Column>
              </Row>

              <Row collapse="tabletOff">
                <Column
                  size={1}
                  marginTop={2}
                  marginRight={2}
                  marginLeft={2}
                  paddingTop={1}
                  paddingRight={2}
                  paddingBottom={1}
                  paddingLeft={2}
                  boxShadow={true}
                >
                  <img
                    style={{
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                    src="/assets/home/reference.svg"
                    alt="Reference Icon"
                  />
                  <Reference />
                </Column>
              </Row>

              <Row collapse="tabletOff">
                <Column
                  size={1}
                  marginTop={2}
                  marginRight={2}
                  marginLeft={2}
                  paddingTop={1}
                  paddingRight={2}
                  paddingBottom={1}
                  paddingLeft={2}
                  boxShadow={true}
                >
                  <img
                    style={{
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                    src="/assets/home/services.svg"
                    alt="Reference Icon"
                  />
                  <Services />
                </Column>
              </Row>
            </section>

            <section>
              <Row marginTop={2}>
                <Column
                  size={1}
                  collapse="mobileOn"
                  maxWidth={622}
                  marginLeft={2}
                >
                  <ImageContainer>
                    <img
                      src="/assets/home/reason.webp"
                      alt="About Image"
                    />
                  </ImageContainer>
                </Column>
                <Column
                  size={1}
                  maxWidth={622}
                  marginRight={2}
                  marginLeft={2}
                >
                  <BoxDefaultContainer>
                    <HexagonTitle>Nossa razão</HexagonTitle>
                    <HexagonParagraph>
                      Sendo uma empresa especializada em
                      implementação, gestão e consultoria
                      em infraestrutura de ambientes
                      virtualizados, queremos prover a
                      continuidade do negócio de nossos
                      clientes utilizando as melhores
                      práticas e ferramentas de
                      implementações de soluções, com um
                      suporte extremamente próximo e
                      personalizado, possibilitamos que as
                      empresas utilizem a tecnologia a
                      favor de seus objetivos.
                    </HexagonParagraph>
                    <Link href="/sobre">
                      <ButtonElement>Leia Mais</ButtonElement>
                    </Link>
                  </BoxDefaultContainer>
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

export default Home
