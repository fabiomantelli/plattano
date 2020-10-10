import React from 'react'
import Trapezio from '../../../assets/trapezio/index'

import { Container } from './styles'

const Infrastructure: React.FC = () => {
    return (
        <Container>
            <Trapezio />
            <h1>O que é infraestrutura hiperconvergente?</h1>
            <p>
                Combine processamento, armazenamento e rede em um único sistema
                com a infraestrutura hiperconvergente (Esta solução simplificada
                usa software e servidores x86 para substituir o hardware de
                custo elevado e fins específicos. Com a infraestrutura
                hiperconvergente, você reduz a complexidade do data center e
                aumenta o dimensionamento.
            </p>
        </Container>
    )
}

export default Infrastructure
