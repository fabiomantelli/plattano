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

import Trapezio from '../assets/trapezio'
import Footer from '../components/Footer'

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
                      <Title>Zadara</Title>
                    </PolygonContainer>
                    <img
                      src="/assets/zadara/background.webp"
                      alt="Background"
                      style={{
                        position: 'absolute',
                        width: '100%',
                        bottom: 0,
                        zIndex: 8
                      }}
                    />
                    <img
                      src="/assets/zadara/zadara.svg"
                      alt="Zadara"
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
                    <Title>Zadara</Title>
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
                      Construído para velocidade, segurança e escalabilidade.
                    </HexagonTitle>
                    <HexagonParagraph>
                      Zadara é uma empresa de computação em nuvem fundada em 2011,
                      com sede em Irvine, Califórnia. A empresa desenvolve software
                      de computador que comercializa como armazenamento como serviço,
                      que pode ser usado para nuvem ou servidores locais, um modelo às
                      vezes chamado de nuvem privada.
                    </HexagonParagraph>
                    <HexagonParagraph>
                      Juntamente com a <strong>Pláttano Technologies</strong> aliada, o
                      Zadara Cloud Platform usa uma combinação de hardware padrão da indústria
                      e software Zadara patenteado para oferecer velocidade, segurança
                      e escalabilidade de classe empresarial - junto com a conveniência
                      da nuvem. Opere com confiança. Qualquer tipo de dados. Qualquer
                      protocolo. Qualquer local. Com Zadara, seu sistema de armazenamento
                      e gerenciamento de dados está sempre em sincronia com suas
                      necessidades.
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
                      src="/assets/zadara/construct.webp"
                      alt="Construct"
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
                      src="/assets/zadara/partnership.webp"
                      alt="Partnership"
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
                      Mais uma parceria Mundial
                    </HexagonTitle>
                    <HexagonParagraph>
                      Veeam + Pláttano + Zadara = Aliança de Sucesso!
                    </HexagonParagraph>
                    <HexagonParagraph>
                      Combine <strong>Veeam</strong> e <strong>Zadara </strong>
                      para impulsionar a disponibilidade de aplicativos e dados em
                      um modelo público flexível de backup como serviço 100% OpEx &#8212;
                      incluindo imutabilidade de dados &#8212; no local, em seu data center
                      e na nuvem.
                    </HexagonParagraph>
                    <HexagonParagraph>
                      A <strong>Pláttano</strong> realizou a parceria com a Zadara, pensando
                      lá na frente. Mais uma tecnologia robusta, pronta para entrar em seu
                      ecosistema e auxiliando na proteção off-site de seu datacenter.
                      Vamos proteger seu dado com toda a disponibilidade, resiliência e segurança
                      possível.
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
                      Casos de uso populares de backup e recuperação
                    </HexagonTitle>
                    <HexagonParagraph>
                      Simplifique ou faça backup do NAS.
                    </HexagonParagraph>
                    <HexagonParagraph>
                      Evite o tempo de inatividade do ransomware.
                    </HexagonParagraph>
                    <HexagonParagraph>
                      Proteja seus dados do Office365.
                    </HexagonParagraph>
                    <HexagonParagraph>
                      <strong>
                        Obtenha o armazenamento como serviço da Zadara no local,
                        em sua instalação de colocation e na nuvem pública.
                      </strong>
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
                      src="/assets/zadara/use-cases.webp"
                      alt="Use Cases"
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
