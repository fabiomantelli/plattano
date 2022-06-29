import React from 'react'

import { Container } from './styles'

const End: React.FC = () => {
    const current = new Date();
    const date = `${current.getFullYear()}`;

    return (
        <Container>
            <h1>{date} Plattano. Todos os direitos reservados.</h1>
        </Container>
    )
}

export default End
