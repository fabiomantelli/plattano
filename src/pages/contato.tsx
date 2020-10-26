import React, { useState } from 'react'
import Head from 'next/head'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'

import Header from '../components/Header'
import Footer from '../components/Footer'
import {
    HelpContainer,
    MainContainer,
    SendContainer
} from '../styles/Containers'
import {
    ContactSpan,
    ContactSubTitle,
    ContactTitle,
    MiniOrangeTitle,
    SubTitle,
    Title
} from '../styles/TextElements'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Contato: React.FC = () => {
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
                                        url="/assets/6-contact/contact-image.png"
                                        backgroundSize="cover"
                                    >
                                        <Title>Contato</Title>
                                        <SubTitle changedMediaQueries="tabletOn">
                                            Procurando por licenciamento,
                                            renovações de software, serviços
                                            técnicos e suporter? Deixe sua
                                            mensagem. Logo logo um especialista
                                            dará toda a atenção necessária para
                                            atendê-lo com excelência
                                        </SubTitle>
                                    </MainContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row collapse="mobileOn">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HelpContainer>
                                        <MiniOrangeTitle>
                                            Fale Conosco
                                        </MiniOrangeTitle>
                                        <ContactTitle>
                                            Como podemos ajudar?
                                        </ContactTitle>
                                        <ContactSubTitle>
                                            Informe seus dados para que um de
                                            nossos especialistas entre em
                                            contato o mais rápido possível.
                                        </ContactSubTitle>
                                        <ContactSpan>
                                            *Atendemos em todo o Brasil
                                        </ContactSpan>
                                    </HelpContainer>
                                </Column>

                                <Column size={1} maxWidth={622} marginRight={2}>
                                    <SendContainer>
                                        <label htmlFor="name">Seu nome</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Digite seu nome"
                                        />

                                        <label htmlFor="phone">Telefone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="Digite seu telefone"
                                        />

                                        <label htmlFor="mail">E-mail</label>
                                        <input
                                            type="email"
                                            id="mail"
                                            placeholder="Digite seu e-mail"
                                        />

                                        <label htmlFor="assunto">Assunto</label>
                                        <input
                                            list="perguntas"
                                            id="assunto"
                                            placeholder="Selecione o assunto"
                                        />
                                        <datalist id="perguntas">
                                            <option>
                                                Licensiamento VMware
                                            </option>
                                            <option>Licensiamento Veeam</option>
                                            <option>
                                                Renovação de Licenças
                                            </option>
                                        </datalist>

                                        <textarea
                                            name="comment"
                                            form="usrform"
                                            placeholder="Escreva sua mensagem"
                                        ></textarea>

                                        <button>Enviar</button>
                                    </SendContainer>
                                </Column>
                            </Row>

                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <HelpContainer changedMediaQueries="mobileOn">
                                        <MiniOrangeTitle>
                                            Fale Conosco
                                        </MiniOrangeTitle>
                                        <ContactTitle>
                                            Como podemos ajudar?
                                        </ContactTitle>
                                        <ContactSubTitle>
                                            Informe seus dados para que um de
                                            nossos especialistas entre em
                                            contato o mais rápido possível.
                                        </ContactSubTitle>
                                        <ContactSpan>
                                            *Atendemos em todo o Brasil
                                        </ContactSpan>
                                    </HelpContainer>
                                </Column>
                            </Row>
                            <Row collapse="mobileOff">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                    marginTop={2}
                                >
                                    <SendContainer>
                                        <label htmlFor="name">Seu nome</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Digite seu nome"
                                        />

                                        <label htmlFor="phone">Telefone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="Digite seu telefone"
                                        />

                                        <label htmlFor="mail">E-mail</label>
                                        <input
                                            type="email"
                                            id="mail"
                                            placeholder="Digite seu e-mail"
                                        />

                                        <label htmlFor="assunto">Assunto</label>
                                        <input
                                            list="perguntas"
                                            id="assunto"
                                            placeholder="Selecione o assunto"
                                        />
                                        <datalist id="perguntas">
                                            <option>
                                                Licensiamento VMware
                                            </option>
                                            <option>Licensiamento Veeam</option>
                                            <option>
                                                Renovação de Licenças
                                            </option>
                                        </datalist>

                                        <textarea
                                            name="comment"
                                            form="usrform"
                                            placeholder="Escreva sua mensagem"
                                        ></textarea>

                                        <button>Enviar</button>
                                    </SendContainer>
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

export default Contato
