import React from 'react'

import { Container } from './styles'

const Email: React.FC = () => {
    return (
        <Container>
            <label>
                <input type="text" name="Digite seu E-mail" />
            </label>

            <input type="submit" value="Cadastrar" />
        </Container>
    )
}

export default Email
