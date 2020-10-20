import React from 'react'

import { Container } from './styles'

const Contact: React.FC = () => {
    return (
        <Container>
            <h1>Entre em Contato</h1>
            <span>(48) 3197-9877</span>
            <span>(48) 99961-0729</span>
            <span>(48) 99684-9944</span>
            <span>
                <a
                    href="mailto:contato@plattano.com.br"
                    style={{
                        color: '#161616',
                        textDecoration: 'none'
                    }}
                >
                    contato@plattano.com.br
                </a>
            </span>
        </Container>
    )
}

export default Contact
