import React from 'react'

import { Container } from './styles'

import ReadMore from '../ReadMore'

const Services: React.FC = () => {
    return (
        <Container>
            <h1>
                Serviços <br />
                Complementares
            </h1>
            <h2>
                Consultoria, Monitoramento, Gerenciamento de ambiente
                Desenvolvimento de Projetos Implementação, Treinamentos e
                capacitação de equipes.
            </h2>
            <ReadMore />
        </Container>
    )
}
export default Services
