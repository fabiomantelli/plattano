import React from 'react'
import Trapezio from '../../../assets/trapezio'

import { Container } from './styles'

const Updated: React.FC = () => {
    return (
        <Container>
            <Trapezio />
            <h1>
                Atualizados com as <br />
                novidades do mercado
            </h1>
            <p>
                Nosso time de especialistas comerciais, engenheiros e arquitetos
                constantemente se especializa com as novidades dessas duas
                gigantes da indústria de tecnologia para entregarmos soluções
                estratégicas e de valor, possibilitando que sua marca esteja
                sempre Always-On e competitiva no mercado.
            </p>
            <p>
                Com nosso time, você terá acesso às melhores ferramentas, com os
                melhores custos, e com profissionais dedicados e atendimento
                próximo.
            </p>
        </Container>
    )
}

export default Updated
