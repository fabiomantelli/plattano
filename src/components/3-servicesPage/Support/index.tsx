import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

const Support: React.FC = () => {
    return (
        <Container>
            <h1>Supporte</h1>
            <h2>
                Oferecemos horas contratuais, suporte avulso e emergencial com
                os melhores especialistas.
            </h2>
            <Link href="/">
                <a>Veja mais</a>
            </Link>
        </Container>
    )
}
export default Support
