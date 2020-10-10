import React from 'react'
import Trapezio from '../../../assets/trapezio/index'

import { Container } from './styles'

const Virtualize: React.FC = () => {
    return (
        <Container>
            <Trapezio />
            <h1>Já virtualizamos servidores e redes. Por que não o Storage?</h1>
            <p>
                Infraestruturas definidas por software ou hiperconvergentes
                trazem a possibilidade da automação e a nuvem hibrida.
            </p>
        </Container>
    )
}

export default Virtualize
