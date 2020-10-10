import React from 'react'

import { Container } from './styles'

const Send: React.FC = () => {
    return (
        <Container>
            <label htmlFor="name">Seu nome</label>
            <input type="text" id="name" placeholder="Digite seu nome" />

            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" placeholder="Digite seu telefone" />

            <label htmlFor="mail">E-mail</label>
            <input type="email" id="mail" placeholder="Digite seu e-mail" />

            <label htmlFor="assunto">Assunto</label>
            <input
                list="perguntas"
                id="assunto"
                placeholder="Selecione o assunto"
            />
            <datalist id="perguntas">
                <option>Licensiamento VMware</option>
                <option>Licensiamento Veeam</option>
                <option>Renovação de Licenças</option>
            </datalist>

            <textarea
                name="comment"
                form="usrform"
                placeholder="Escreva sua mensagem"
            ></textarea>

            <button>Enviar</button>
        </Container>
    )
}

export default Send
