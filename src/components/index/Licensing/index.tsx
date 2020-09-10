import React from 'react'

import { Container } from './styles'

import ReadMore from '../ReadMore'

const Licensing: React.FC = () => {
    return (
        <Container>
            <h1>
                Licenciamento <br /> e Consultoria
            </h1>
            <h2>
                Auxiliamos nossos clientes, <br />
                após análise inicial dos <br />
                requerimentos, qual a melhor <br />
                solução e licenciamento de <br />
                produtos para cada caso.
            </h2>
            <ReadMore />
        </Container>
    )
}
export default Licensing
