import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import Header from '../components/Header'
import Footer from '../components/Footer'

import {
  HexagonContainer,
  ImageContainer,
  MainContainer
} from '../styles/Containers'

import { HexagonParagraph, HexagonTitle, Title } from '../styles/TextElements'

import Trapezio from '../assets/trapezio'

const Consultoria: React.FC = () => {
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
                polygon={true}
                style={{ marginTop: '70px' }}
                collapse="tabletOn"
              >
                <Column
                  size={1}
                  marginLeft={2}
                  marginRight={2}
                  maxWidth={1280}
                >
                  <MainContainer
                    changedMediaQueries="tabletOn"
                    url="/assets/consultoria/consultancy-background.webp"
                    backgroundSize="cover"
                  >
                    <Title>Consultoria</Title>
                  </MainContainer>
                </Column>
              </Row>

              <Row
                background={true}
                polygon={true}
                style={{ marginTop: '70px' }}
                collapse="tabletOff"
              >
                <Column
                  size={1}
                  marginLeft={2}
                  marginRight={2}
                  maxWidth={1280}
                >
                  <MainContainer
                    changedMediaQueries="tabletOn"
                  >
                    <Title>Consultoria</Title>
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
                      src="/assets/consultoria/start-your-project.webp"
                      alt="Start Your Project"
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
                      Não sabe por onde <br />
                      começar seu projeto?
                    </HexagonTitle>
                    <HexagonParagraph changedMediaQueries="tabletOn">
                      Com uma grande variedade de produtos
                      e formas de licenciamento, projetos
                      de TI podem tornar-se complexos e
                      complicados. Estamos prontos para
                      auxiliá-lo em qualquer etapa. Não
                      atuamos apenas com vendas
                      consultivas. Envolvemos toda nossa
                      equipe, desde o comercial até os
                      engenheiros de pré e pós-vendas para
                      determinarmos o que é melhor para
                      você, sempre usando as boas práticas
                      elaboradas pelas fabricantes.
                    </HexagonParagraph>
                    <HexagonParagraph changedMediaQueries="tabletOn">
                      Em todas as fases surgem diversas
                      dúvidas, e estamos aqui para
                      auxiliá-lo a entendê-las e deixar
                      todos os processos e etapas
                      transparentes.
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
                      Agregue valor na sua empresa com
                      nosso portfólio
                    </HexagonTitle>
                    <HexagonParagraph>
                      “Nosso negócio é inovação, e queremos
                      levá-la até você e sua empresa. A transformação
                      digital já está acontecendo e queremos melhorar
                      a experiência de seus usuários e equipes. Vamos
                      além da virtualização e backup. Queremos abranger
                      recursos de nuvem, processamento, rede, segurança
                      e espaços de trabalho digital. Desejamos modernizar
                      seu Datacenter. Por isso, nos especializamos cada
                      vez mais para poder apresentar-lhes o que há de melhor,
                      e queremos atuar como apoio consultivo junto às
                      organizações. Modernização é o nosso lema.”
                    </HexagonParagraph>
                    <HexagonParagraph>
                      <strong>Eduardo K. Scheffer, CIO</strong>
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
                      src="/assets/consultoria/add-value.webp"
                      alt="Add Value"
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
                      src="/assets/consultoria/updated.webp"
                      alt="Updated"
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
                      Atualizados com as <br />
                      novidades do mercado
                    </HexagonTitle>
                    <HexagonParagraph>
                      Nosso time de especialistas
                      comerciais, engenheiros e arquitetos
                      constantemente se especializa com as
                      novidades dessas duas gigantes da
                      indústria de tecnologia para
                      entregarmos soluções estratégicas e
                      de valor, possibilitando que sua
                      marca esteja sempre Always-On e
                      competitiva no mercado.
                    </HexagonParagraph>
                    <HexagonParagraph>
                      Com nosso time, você terá acesso às
                      melhores ferramentas, com os
                      melhores custos, e com profissionais
                      dedicados e atendimento próximo.
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
                      Empresa referência no Brasil
                    </HexagonTitle>
                    <HexagonParagraph>
                      A <b>Pláttano Technologies</b> é
                      referência em sua área de atuação.
                      Estamos entre os principais
                      parceiros no Brasil, e
                      constantemente nos certificamos para
                      entregar projetos com qualidade.
                      Temos grande influência e
                      proximidade com as equipes Veeam e
                      VMware no País, e anualmente
                      participamos de eventos mundiais das
                      fabricantes nos Estados Unidos.
                    </HexagonParagraph>
                    <HexagonParagraph>
                      Estamos presentes nas comunidades de
                      tecnologia em todas as redes
                      sociais, ajudando a difundir
                      conhecimento e auxiliar usuários
                      finais.
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
                      src="/assets/consultoria/reference-company.webp"
                      alt="Reference Company"
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

export default Consultoria
