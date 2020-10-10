import React from 'react'

import { Container } from './styles'

import ReadMore from '../../ReadMore'

const Licensing: React.FC = () => {
    return (
        <Container>
            <h1>
                Licenciamento <br /> e Consultoria
            </h1>
            <h2>
                Auxiliamos nossos clientes, após análise inicial dos
                requerimentos, qual a melhor solução e licenciamento de produtos
                para cada caso.
            </h2>
            <ReadMore />
        </Container>
    )
}
export default Licensing
