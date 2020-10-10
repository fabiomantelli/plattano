import React from 'react'
import Trapezio from '../../../assets/trapezio'

import { Container } from './styles'

const AddValue: React.FC = () => {
    return (
        <Container>
            <Trapezio />
            <h1>Agregue valor na sua empresa com nosso portfólio</h1>
            <p>
                Nosso negócio é inovação, e queremos levá-la até você e sua
                empresa. A transformação digital já está acontecendo e queremos
                melhorar a experiência de seus usuários e equipes. Vamos além da
                virtualização e backup. Queremos abranger recursos de nuvem,
                processamento, rede, segurança e espaços de trabalho digital.
                Desejamos modernizar seu Datacenter. Por isso, nos
                especializamos cada vez mais para poder apresentar-lhes o que há
                de melhor, e queremos atuar como apoio consultivo junto às
                organizações. Modernização é o nosso lema.
            </p>
        </Container>
    )
}

export default AddValue
