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

import StorageBoxIcon from '../assets/hyperconvergencia/storagebox/storageIcon'
import CapexBoxIcon from '../assets/hyperconvergencia/capexbox/capexboxIcon'
import CloudBoxIcon from '../assets/hyperconvergencia/cloudbox/cloudboxIcon'
import EvolutionBoxIcon from '../assets/hyperconvergencia/evolutionbox/evolutionBoxIcon'

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
                      src="/assets/hiperconvergencia/background.webp"
                      alt="Hyperconvergence"
                      style={{
                        position: 'absolute',
                        width: '100%',
                        bottom: 0,
                        zIndex: 20
                      }}
                    />
                    <img
                      src="/assets/hiperconvergencia/hyperconvergence.webp"
                      alt="Hyperconvergence"
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
                      src="/assets/hiperconvergencia/hci.webp"
                      alt="HCI"
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
                      Infraestruturas definidas por software ou hiperconvergentes
                      trazem a possibilidade da automação e a nuvem hibrida. O vSAN
                      é um software de virtualização de armazenamento de nível
                      corporativo que, combinado com o vSphere, permite gerenciar o
                      processamento e o armazenamento em uma única plataforma. Com o vSAN,
                      é possível reduzir o custo e a complexidade do armazenamento
                      tradicional e escolher o caminho mais fácil para a infraestrutura
                      hiperconvergente e a nuvem híbrida. Evolua para uma solução
                      integrada de infraestrutura hiperconvergente com o vSAN para
                      melhorar a agilidade comercial, acelerar as operações e reduzir
                      os custos.
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
                      src="/assets/hiperconvergencia/storage.webp"
                      alt="Storage"
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
                      src="/assets/hiperconvergencia/infrastructure.webp"
                      alt="Infrastructure"
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
                      elevado e fins específicos). Com a
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
                      src="/assets/hiperconvergencia/infrastructure2.webp"
                      alt="Infrastructure2"
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
                      src="/assets/hiperconvergencia/vsan.webp"
                      alt="VSan"
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
                      Em ambientes HCI com vSAN, você pode dimensionar
                      sua infraestrutura de forma elástica e sem interrupções,
                      aproveitando os servidores x86 para armazenamento além
                      de simplificar a gestão de seu parque e diminuir o espaço
                      físico em seu Datacenter.
                    </p>
                  </HexagonContainer>
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
                      <h1 style={{ color: '#F48200' }}>
                        Armazenamento definido por
                        software (SDS)
                      </h1>
                      <br />
                      <p>
                        O SDS substitui o hardware
                        estático e ineficiente por
                        soluções dinâmicas, ágeis e
                        automatizadas. As tecnologias SDS
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
                      <h1 style={{ color: '#F48200' }}>CapEx e OpEx baixo</h1>
                      <br />
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
                    <CloudBoxIcon />
                    <div>
                      <h1 style={{ color: '#F48200' }}>Pronto para a nuvem</h1>
                      <br />
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
                      <h1 style={{ color: '#F48200' }}>Evolução e Modernidade</h1>
                      <br />
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
                    <HexagonTitle style={{ color: '#F48200' }}>
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
                      Para entender de maneira rápida o que é a
                      tecnologia VMware vSAN  (Virtual SAN) e
                      como funciona, a fabricante afirma oficialmente:
                      “O WMware vSAN é uma solução de armazenamento
                      compartilhada simples e de nível corporativo para
                      uma infraestrutura hiperconvergente, otimizada
                      para desempenho de tudo em flash”.
                    </HexagonParagraph>
                    <HexagonParagraph>
                      Explicando esse conceito, é uma tecnologia que
                      utiliza os discos locais dos servidores Vsphere
                      ESXI para armazenar as VMs com bastante performance,
                      eliminando assim a necessidade de adquirir Storages
                      caros, você terá uma redução de até 50% do TCO
                      (Custo Total de Propriedade) comparado com soluções
                      atuais de armazenamento.
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
