import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import Header from '../components/Header'
import Footer from '../components/Footer'

import {
  HexagonParagraph,
  HexagonTitle,
  MiniOrangeTitle,
  SubTitle,
  Title
} from '../styles/TextElements'

import {
  BoxDefaultContainer,
  BoxVisionContainer,
  EntireContainer,
  HexagonContainer,
  ImageContainer,
  MainContainer
} from '../styles/Containers'

const Sobre: React.FC = () => {
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
                background={true}
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
                    url="/assets/sobre/about.webp"
                    backgroundSize="cover"
                  >
                    <Title>Sobre Nós</Title>
                    <SubTitle changedMediaQueries="tabletOn">
                      Vivemos a era da virtualização, e
                      ela já está presente em nossas
                      vidas. Queremos ajudá-los a entender
                      e entrar em definitivo nesse novo
                      conceito de computação.
                    </SubTitle>
                  </MainContainer>
                </Column>
              </Row>

              <Row
                background={true}
                collapse="tabletOff"
                polygon={true}
                style={{ marginTop: '70px' }}
              >
                <Column size={1} marginLeft={2} marginRight={2}>
                  <MainContainer changedMediaQueries="tabletOn">
                    <Title>Sobre Nós</Title>
                    <SubTitle changedMediaQueries="tabletOn">
                      Vivemos a era da virtualização, e
                      ela já está presente em nossas
                      vidas. Queremos ajudá-los a entender
                      e entrar em definitivo nesse novo
                      conceito de computação.
                    </SubTitle>
                  </MainContainer>
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
                  <HexagonContainer
                    changedMediaQueries="mobileOn"
                    height="auto"
                  >
                    <HexagonTitle>
                      Sobre a Pláttano <br />
                      Technologies
                    </HexagonTitle>
                  </HexagonContainer>
                </Column>
                <Column size={1} marginRight={2} maxWidth={622}>
                  <HexagonContainer height="auto">
                    <HexagonParagraph>
                      “A <strong>Pláttano Technologies</strong> é uma empresa especializada na
                      entrega de soluções e projetos que envolvam virtualização
                      de Datacenters, proteção de dados e hiperdisponibilidade.
                      Possuímos um corpo técnico de engenheiros capaz de auxiliar
                      nossos clientes em todas as fases, desde as mais iniciais
                      como licenciamento, levantamento de requisitos e sizing, até
                      a implementação, suporte e consultoria.
                    </HexagonParagraph>

                    <HexagonParagraph>
                      Vivemos a era da virtualização, e ela já está presente em nossas
                      vidas há muito tempo. Somos cada vez mais digitais, e a segurança
                      de nossos dados não é mais item de luxo. Queremos ajudá-los a
                      entender e entrar em definitivo nesse novo conceito de computação
                      e proteção.
                    </HexagonParagraph>

                    <HexagonParagraph>
                      Nosso objetivo principal é a continuidade do negócio, utilizando
                      as melhores práticas e ferramentas de implementações de soluções,
                      com um suporte extremamente próximo e personalizado, possibilitamos
                      que as empresas utilizem a tecnologia a favor de seus objetivos.”

                    </HexagonParagraph>
                    <br />
                    <strong>Giovanni Mantelli, CEO</strong>
                    <HexagonParagraph>

                    </HexagonParagraph>
                  </HexagonContainer>
                </Column>
              </Row>

              <Row collapse="mobileOff">
                <Column
                  size={1}
                  marginTop={2}
                  marginLeft={2}
                  marginRight={2}
                  maxWidth={1280}
                >
                  <HexagonContainer
                    changedMediaQueries="mobileOn"
                    height="auto"
                  >
                    <HexagonTitle>
                      Sobre a Pláttano <br />
                      Technologies
                    </HexagonTitle>
                  </HexagonContainer>
                </Column>
              </Row>
              <Row collapse="mobileOff">
                <Column
                  size={1}
                  marginTop={2}
                  marginRight={2}
                  marginLeft={2}
                  maxWidth={1280}
                >
                  <HexagonContainer height="auto">
                    <HexagonParagraph>
                      “A <strong>Pláttano Technologies</strong> é uma empresa especializada na
                      entrega de soluções e projetos que envolvam virtualização
                      de Datacenters, proteção de dados e hiperdisponibilidade.
                      Possuímos um corpo técnico de engenheiros capaz de auxiliar
                      nossos clientes em todas as fases, desde as mais iniciais
                      como licenciamento, levantamento de requisitos e sizing, até
                      a implementação, suporte e consultoria.
                    </HexagonParagraph>

                    <HexagonParagraph>
                      Vivemos a era da virtualização, e ela já está presente em nossas
                      vidas há muito tempo. Somos cada vez mais digitais, e a segurança
                      de nossos dados não é mais item de luxo. Queremos ajudá-los a
                      entender e entrar em definitivo nesse novo conceito de computação
                      e proteção.
                    </HexagonParagraph>

                    <HexagonParagraph>
                      Nosso objetivo principal é a continuidade do negócio, utilizando
                      as melhores práticas e ferramentas de implementações de soluções,
                      com um suporte extremamente próximo e personalizado, possibilitamos
                      que as empresas utilizem a tecnologia a favor de seus objetivos.”

                    </HexagonParagraph>
                    <br />
                    <strong>Giovanni Mantelli, CEO</strong>
                    <HexagonParagraph>

                    </HexagonParagraph>
                  </HexagonContainer>
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
                    <h1>Nossos Valores</h1>
                  </EntireContainer>
                </Column>
              </Row>

              <Row collapse="tabletOn">
                <Column
                  size={1}
                  marginTop={2}
                  marginLeft={2}
                  marginBottom={2}
                  boxShadow={true}
                  maxWidth={402.67}
                >
                  <BoxVisionContainer>
                    <ImageContainer
                      style={{
                        height: 'auto',
                        display: 'block',
                        paddingTop: '2rem'
                      }}
                    >
                      <img
                        src="/assets/sobre/mission.svg"
                        alt="Mission Icon"
                      />
                    </ImageContainer>
                    <h1>Missão</h1>
                    <h2>
                      Prestar serviço de gestão
                      inteligente e alta disponibilidade
                      de dados em ambientes virtualizados,
                      entregando confiabilidade e
                      resiliência, para que nossos
                      clientes foquem em seus objetivos de
                      negócio através de um bom
                      relacionamento.
                    </h2>
                  </BoxVisionContainer>
                </Column>
                <Column
                  size={1}
                  marginTop={2}
                  marginLeft={2}
                  marginBottom={2}
                  boxShadow={true}
                  maxWidth={402.67}
                >
                  <BoxVisionContainer>
                    <ImageContainer
                      style={{
                        height: 'auto',
                        display: 'block',
                        paddingTop: '2rem'
                      }}
                    >
                      <img
                        src="/assets/sobre/vision.svg"
                        alt="Mission Icon"
                      />
                    </ImageContainer>
                    <h1>Visão</h1>
                    <h2>
                      Ser referência no mercado nacional,
                      destacando-se pelo alto grau de
                      especialização e reconhecimento,
                      através de uma equipe capacitada e
                      comprometida com a satisfação de
                      nossos clientes.
                    </h2>
                  </BoxVisionContainer>
                </Column>
                <Column
                  size={1}
                  marginTop={2}
                  marginRight={2}
                  marginBottom={2}
                  marginLeft={2}
                  boxShadow={true}
                  maxWidth={402.67}
                >
                  <BoxVisionContainer>
                    <ImageContainer
                      style={{
                        height: 'auto',
                        display: 'block',
                        paddingTop: '2rem'
                      }}
                    >
                      <img
                        src="/assets/sobre/values.svg"
                        alt="Values Icon"
                      />
                    </ImageContainer>
                    <h1>Valores</h1>
                    <h2>
                      Atuar com responsabilidade e ética,
                      comprometimento e resiliência
                      mantendo o foco em um relacionamento
                      com o cliente mais próximo do que o
                      estritamente profissional.
                    </h2>
                  </BoxVisionContainer>
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
                  <BoxVisionContainer>
                    <ImageContainer
                      style={{
                        height: 'auto',
                        display: 'block',
                        paddingTop: '2rem'
                      }}
                    >
                      <img
                        src="/assets/sobre/mission.svg"
                        alt="Mission Icon"
                      />
                    </ImageContainer>
                    <h1>Missão</h1>
                    <h2>
                      Prestar serviço de gestão
                      inteligente e alta disponibilidade
                      de dados em ambientes virtualizados,
                      entregando confiabilidade e
                      resiliência, para que nossos
                      clientes foquem em seus objetivos de
                      negócio através de um bom
                      relacionamento.
                    </h2>
                  </BoxVisionContainer>
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
                  <BoxVisionContainer>
                    <ImageContainer
                      style={{
                        height: 'auto',
                        display: 'block',
                        paddingTop: '2rem'
                      }}
                    >
                      <img
                        src="/assets/sobre/vision.svg"
                        alt="Vision Icon"
                      />
                    </ImageContainer>
                    <h1>Visão</h1>
                    <h2>
                      Ser referência no mercado nacional,
                      destacando-se pelo alto grau de
                      especialização e reconhecimento,
                      através de uma equipe capacitada e
                      comprometida com a satisfação de
                      nossos clientes.
                    </h2>
                  </BoxVisionContainer>
                </Column>
              </Row>

              <Row collapse="tabletOff">
                <Column
                  size={1}
                  marginTop={2}
                  marginRight={2}
                  marginLeft={2}
                  marginBottom={2}
                  paddingTop={1}
                  paddingRight={2}
                  paddingBottom={1}
                  paddingLeft={2}
                  boxShadow={true}
                >
                  <BoxVisionContainer>
                    <ImageContainer
                      style={{
                        height: 'auto',
                        display: 'block',
                        paddingTop: '2rem'
                      }}
                    >
                      <img
                        src="/assets/sobre/values.svg"
                        alt="Vision Icon"
                      />
                    </ImageContainer>
                    <h1>Valores</h1>
                    <h2>
                      Atuar com responsabilidade e ética,
                      comprometimento e resiliência
                      mantendo o foco em um relacionamento
                      com o cliente mais próximo do que o
                      estritamente profissional.
                    </h2>
                  </BoxVisionContainer>
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
                      Como começamos
                    </MiniOrangeTitle>
                    <HexagonTitle>História</HexagonTitle>
                    <HexagonParagraph>
                      Com o acompanhamento de tendências mundiais sobre
                      respeito ao meio ambiente, foi necessária uma
                      especialização em <strong>virtualização</strong> de
                      servidores para atender a economia de energia e redução
                      de emissão de calor. A virtualização, seja ela de serviços,
                      aplicativos ou de servidores, já deixou de ser uma tendência
                      para tornar-se uma realidade em muitos setores, seja dentro
                      ou fora da área da tecnologia. Aliada a isso, também focamos
                      na camada de segurança e disponibilidade da informação, pois
                      hoje os dados são o bem mais valioso para toda e qualquer
                      empresa e pessoa. O dado é o novo petróleo, e precisamos manter
                      sua integridade.
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
                      src="/assets/sobre/history1.webp"
                      alt="History Image"
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
                      src="/assets/sobre/history2.webp"
                      alt="History2 Image"
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
                    <HexagonParagraph>
                      Podemos definir virtualização como
                      uma forma de se executar vários
                      serviços, programas, ou até mesmo
                      sistemas operacionais em um único
                      equipamento físico. A virtualização{' '}
                      <b>possibilita </b>
                      inclusive simular hardwares
                      diferentes em um equipamento como
                      roteadores, switchs, servidores,
                      celulares, etc. Hoje, praticamente é
                      impossível fazer qualquer serviço na
                      internet sem que se tenha passado ou
                      utilizado um ou mais servidores
                      virtualizados. Um grande exemplo são
                      os serviços de{' '}
                      <b>Cloud Computing</b>, onde
                      servidores em sua maioria
                      virtualizados, formam uma grande
                      rede distribuída, havendo servidores
                      dedicados para cada serviço
                      específico.
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
                  <BoxDefaultContainer>
                    <HexagonParagraph>
                      O mundo ficou virtual, e as empresas
                      agora são <b>100% digitais</b>.
                      Disponibi lidade dos dados é item
                      obrigatório. Ninguém quer que a
                      reputação de sua marca seja afetada
                      por falhas de segurança e
                      indisponibilidade. A{' '}
                      <b>Pláttano Technologies</b>{' '}
                      trabalha de uma forma próxima de
                      você, trazendo as melhores soluções
                      do mercado para alcançarmos esses
                      objetivos vitais.
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
                      src="/assets/sobre/history3.webp"
                      alt="History3 Image"
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

export default Sobre
