import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'
import Header from '../components/Header'

import {
  EntireContainer,
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

import { ButtonElement } from '../styles/Buttons'

import Footer from '../components/Footer'
import Ebooks from '../components/Ebooks'

const Knowledgecenter: React.FC = () => {
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

  const router = useRouter()

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
                    url="/assets/knowledge-center/knowledgecenter-image.png"
                    backgroundSize="cover"
                  >
                    <Title>
                      Knowledge <br /> Center
                    </Title>
                    <SubTitle changedMediaQueries="tabletOn">
                      <i>“O desejo profundo da humanidade
                        pelo conhecimento é justificativa
                        suficiente para nossa busca
                        contínua.”</i> <b> STEPHEN HAWKING</b>
                    </SubTitle>
                    <SubTitle
                      changedMediaQueries="tabletOn"
                      style={{ marginTop: '2rem' }}
                    >
                      Acompanhe a <strong>Pláttano</strong> em nosso blog
                      oficial e tenha também acesso
                      exclusivo aos nossos materiais
                      exclusivos
                    </SubTitle>
                  </MainContainer>
                </Column>
              </Row>
            </section>

            <section>
              <Row>
                <Column
                  size={1}
                  maxWidth={402.67}
                  marginLeft={2}
                  marginRight={2}
                >
                  <HexagonContainer changedMediaQueries="mobileOn" height="auto">
                    <HexagonTitle>
                      Nosso Portfólio
                    </HexagonTitle>
                    <HexagonParagraph>
                      Descubra mais sobre nossos produtos e expertises
                    </HexagonParagraph>

                    <ButtonElement>
                      <a
                        href="https://plattano-site.s3.amazonaws.com/knowledge-center/PORTFOLIO.pdf"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none', color: '#fff' }}
                      >Portfólio</a>
                    </ButtonElement>
                  </HexagonContainer>
                </Column>
                <Column
                  size={1}
                  maxWidth={402.67}
                  marginRight={2}
                  collapse="mobileOn"
                >
                  <HexagonContainer changedMediaQueries="mobileOn" height="auto">
                    <HexagonTitle>
                      Compliance
                    </HexagonTitle>
                    <HexagonParagraph>
                      Código de ética e conduta
                    </HexagonParagraph>

                    <ButtonElement>
                      <a
                        href="https://plattano-site.s3.amazonaws.com/knowledge-center/CODIGO_ETICA_CONDUTA.pdf"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none', color: '#fff' }}
                      >Ética</a>
                    </ButtonElement>
                  </HexagonContainer>
                </Column>
                <Column
                  size={1}
                  maxWidth={402.67}
                  marginRight={2}
                  collapse="mobileOn"
                >
                  <HexagonContainer changedMediaQueries="mobileOn" height="auto">
                    <HexagonTitle>
                      Política de Privacidade
                    </HexagonTitle>
                    <HexagonParagraph>
                      Tratamento e uso de dados pessoais
                    </HexagonParagraph>

                    <ButtonElement>
                      <a
                        href="https://plattano-site.s3.amazonaws.com/knowledge-center/POLITICA_EXTERNA_DE_PRIVACIDADE_DE_DADOS.pdf"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none', color: '#fff' }}
                      >Privacidade</a>
                    </ButtonElement>
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
                  <HexagonContainer changedMediaQueries="mobileOn">
                    <HexagonTitle>
                      Compliance
                    </HexagonTitle>
                    <HexagonParagraph>
                      Código de ética e conduta
                    </HexagonParagraph>

                    <ButtonElement>
                      <a
                        href="https://plattano-site.s3.amazonaws.com/knowledge-center/CODIGO_ETICA_CONDUTA.pdf"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none', color: '#fff' }}
                      >Ética</a>
                    </ButtonElement>
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
                  <HexagonContainer changedMediaQueries="mobileOn">
                    <HexagonTitle>
                      Política de Privacidade
                    </HexagonTitle>
                    <HexagonParagraph>
                      Tratamento e uso de dados pessoais
                    </HexagonParagraph>

                    <ButtonElement>
                      <a
                        href="https://plattano-site.s3.amazonaws.com/knowledge-center/POLITICA_EXTERNA_DE_PRIVACIDADE_DE_DADOS.pdf"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none', color: '#fff' }}
                      >Privacidade</a>
                    </ButtonElement>
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
                      src="/assets/knowledge-center/documentation.png"
                      alt="Documentation Image"
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
                    <HexagonTitle>
                      Blog
                    </HexagonTitle>
                    <HexagonParagraph>
                      Acesse o blog da Pláttano Technologies e acompanhe
                      todas as as novidades.
                    </HexagonParagraph>

                    <ButtonElement>
                      <a
                        href="http://blog.plattano.com.br"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none', color: '#fff' }}
                      >Acessar</a>
                    </ButtonElement>
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
                  <HexagonContainer height="auto" changedMediaQueries="mobileOn">
                    <EntireContainer>
                      <h1>Materiais Gratuitos e e-books</h1>
                    </EntireContainer>
                  </HexagonContainer>

                  <Ebooks />
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

export default Knowledgecenter
