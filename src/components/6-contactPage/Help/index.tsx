import React from 'react'

import { Container } from './styles'

const Help: React.FC = () => {
    return (
        <Container>
            <h3>Fale Conosco</h3>
            <h1>Como podemos ajudar?</h1>
            <h2>
                Informe seus dados para que um de nossos especialistas entre em
                contato o mais rápido possível.
            </h2>
            <h3 className="atendemos">*Atendemos em todo o Brasil</h3>
        </Container>
    )
}

export default Help
