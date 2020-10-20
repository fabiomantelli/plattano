import React from 'react'

import { Container } from './styles'

const Email: React.FC = () => {
    return (
        <Container>
            <label>
                <input
                    type="email"
                    name="email"
                    placeholder="Digite seu E-mail"
                />
            </label>

            <button>Cadastrar</button>
        </Container>
    )
}

export default Email
