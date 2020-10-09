import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

const Consultancy: React.FC = () => {
    return (
        <Container>
            <h1>Consultoria</h1>
            <h2>
                Nosso time de especialistas se especializam com as novidades
                para entregarmos soluções estratégicas e de valor.
            </h2>
            <Link href="/">
                <a>Veja mais</a>
            </Link>
        </Container>
    )
}
export default Consultancy
