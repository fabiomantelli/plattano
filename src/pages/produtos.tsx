import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

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

import {
  HexagonParagraph,
  HexagonTitle,
  SubTitle,
  Title
} from '../styles/TextElements'

import Trapezio from '../assets/trapezio'
import { ButtonElement } from '../styles/Buttons'

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
                    url="/assets/produtos/products.webp"
                    backgroundSize="cover"
                  >
                    <Title>Produtos</Title>
                    <SubTitle changedMediaQueries="tabletOn">
                      Nosso portfólio de produtos é
                      aprimorado a cada dia, e com eles,
                      auxiliamos nossos clientes na busca
                      pela excelência e segurança de suas
                      informações e disponibilidade. Com a
                      ajuda das fabricantes, a <strong>Pláttano
                        Technologies</strong> disponibiliza o que há
                      de melhor
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
                  marginLeft={2}
                  marginRight={2}
                >
                  <HexagonContainer changedMediaQueries="mobileOn">
                    <Trapezio />
                    <HexagonTitle>
                      Intelligent Backup Cloud
                    </HexagonTitle>
                    <h2>
                      Faça seus backups Veeam localmente
                      ou em cloud.
                    </h2>
                    <HexagonParagraph>
                      Como parceira
                      <span style={{ color: '#F48200' }}>
                        <b>
                          {' '}
                          Veeam Cloud Service Provider
                        </b>
                      </span>
                      , podemos oferecer com toda a
                      segurança e confiabilidade, serviços
                      de proteção de dados local e em{' '}
                      <b>nuvem (</b>
                      <Link href="/produtos/baas">
                        <b
                          style={{
                            cursor: 'pointer'
                          }}
                        >
                          BaaS
                        </b>
                      </Link>
                      <b>)</b> . Nossa equipe é certificada
                      nas versões atuais da ferramenta, e
                      treinada para gerenciar ambientes
                      internos e em nuvem.

                    </HexagonParagraph>
                    <HexagonParagraph>
                      Vamos ser objetivos? Quem quer construir
                      e manter um site secundário, quando se pode
                      enviar seus backups para um ambiente externo
                      num provedor de serviços confiável. Deixe
                      que os especialistas e engenheiros Veeam da
                      {' '}<b>Pláttano</b> o construam e o gerenciem.

                    </HexagonParagraph>
                    <Link href="/produtos/baas">
                      <ButtonElement>
                        Saiba Mais
                      </ButtonElement>
                    </Link>
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
                      src="/assets/produtos/intelligent-backup.webp"
                      alt="Intelligent Backup"
                    />
                  </ImageContainer>
                </Column>
              </Row>
            </section>

            <section>
              <Row>
                <Column
                  size={1}
                  maxWidth={622}
                  marginLeft={2}
                  collapse="mobileOn"
                >
                  <ImageContainer>
                    <img
                      src="/assets/produtos/advanced-disaster.webp"
                      alt="Advanced Disaster"
                    />
                  </ImageContainer>
                </Column>
                <Column
                  size={1}
                  maxWidth={622}
                  marginLeft={2}
                  marginRight={2}
                >
                  <HexagonContainer changedMediaQueries="mobileOn">
                    <Trapezio />
                    <HexagonTitle>
                      Advanced Disaster <br />
                      Recovery
                    </HexagonTitle>
                    <HexagonParagraph>
                      O{' '}
                      <Link href="/produtos/draas">
                        <b
                          style={{
                            cursor: 'pointer'
                          }}
                        >
                          DRaaS
                        </b>
                      </Link>{' '}
                      da Pláttano Technologies com a
                      tecnologia da Veeam integra seu
                      ambiente local como uma extensão
                      da infraestrutura de nuvem, fornecendo
                      recursos de replicação e failover seguros
                      e robustos para a recuperação de desastres
                      em instantes.
                    </HexagonParagraph>

                    <Link href="/produtos/draas">
                      <ButtonElement>
                        Saiba Mais
                      </ButtonElement>
                    </Link>
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
                      Intelligent Backup On-Promise
                    </HexagonTitle>
                    <HexagonParagraph>
                      Troque o <b>CapEx</b> pelo{' '}
                      <b>OpEx</b> em soluções de backup
                      conosco. Entregamos as licenças
                      Veeam para você e sua empresa no
                      formato <i>rental</i> ou aluguel mensal,
                      onde você paga pelo consumo mensal
                      no modelo <b>pay-as-you go</b>. Você
                      ainda escolhe se deseja terceirizar
                      a gestão ou fazê-la de forma
                      compartilhada.
                    </HexagonParagraph>

                    <Link href="/produtos/vcsp">
                      <ButtonElement>
                        Saiba Mais
                      </ButtonElement>
                    </Link>
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
                      src="/assets/produtos/intelligent-backup-on.webp"
                      alt="Intelligent Backup On Image"
                    />
                  </ImageContainer>
                </Column>
              </Row>
            </section>

            <section>
              <Row>
                <Column
                  size={1}
                  maxWidth={622}
                  marginLeft={2}
                  collapse="mobileOn"
                >
                  <ImageContainer>
                    <a
                      href="https://www.veeam.com/br"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/assets/produtos/veeam.svg"
                        alt="Veeam"
                      />
                    </a>
                  </ImageContainer>
                </Column>
                <Column
                  size={1}
                  maxWidth={622}
                  marginLeft={2}
                  marginRight={2}
                >
                  <HexagonContainer changedMediaQueries="mobileOn">
                    <Trapezio />
                    <HexagonTitle>Veeam</HexagonTitle>
                    <h2>Proteção é nosso objetivo</h2>
                    <HexagonParagraph>
                      Nossa expertise vai além do licenciamento e auxílio em
                      renovações de suporte. Somos uma empresa <strong>referência </strong>
                      junto à Veeam Software, e nosso corpo técnico é capaz de entregar
                      com excelência projetos de todos os portes, com acompanhamento em
                      todas as etapas, desde a aquisição do melhor produto até a implementação
                      e gestão em seu ambiente. Somos parceiros nivel GOLD, VCSP
                      e <strong>VASP</strong>.
                    </HexagonParagraph>

                    <Link href="/veeam">
                      <ButtonElement>
                        Saiba Mais
                      </ButtonElement>
                    </Link>
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
                    <HexagonTitle>VMware</HexagonTitle>
                    <h2>Nosso negócio é a inovação</h2>
                    <HexagonParagraph>
                      Confiamos na VMware porque ela está
                      comprometida em resolver os
                      problemas tecnológicos mais
                      difíceis. Juntos com nossa parceria,
                      oferecemos aos clientes a
                      possibilidade de executar,
                      gerenciar, conectar e proteger todos
                      os seus aplicativos em qualquer
                      nuvem, para que possam reduzir
                      custos, obter eficiência e inovar
                      mais rapidamente.
                    </HexagonParagraph>

                    <HexagonParagraph
                      style={{ color: '#F48200' }}
                    >
                      <b>
                        Acelere sua transição para a
                        nuvem
                      </b>
                    </HexagonParagraph>
                    <HexagonParagraph
                      style={{ color: '#F48200' }}
                    >
                      <b>
                        Transforme seu Datacenter, rede
                        e a segurança
                      </b>
                    </HexagonParagraph>
                    <HexagonParagraph
                      style={{ color: '#F48200' }}
                    >
                      <b>
                        Fortaleça o seu Digital
                        Workspace
                      </b>
                    </HexagonParagraph>

                    <Link href="/vmware">
                      <ButtonElement>
                        Saiba Mais
                      </ButtonElement>
                    </Link>
                  </HexagonContainer>
                </Column>
                <Column
                  size={1}
                  maxWidth={622}
                  marginRight={2}
                  collapse="mobileOn"
                >
                  <ImageContainer>
                    <a
                      href="https://www.vmware.com/br.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/assets/produtos/vmware.svg"
                        alt="VMware Image"
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

export default Sobre
