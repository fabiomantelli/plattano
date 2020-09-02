import React from 'react'
import Link from 'next/link'
import { Container } from './styles'

const ServicesFooter: React.FC = () => {
    return (
        <Container>
            <h1>Serviços</h1>
            <Link href="/">
                <a>Licenciamentos</a>
            </Link>
            <Link href="/">
                <a>Suporte</a>
            </Link>
            <Link href="/">
                <a>Consultoria</a>
            </Link>
            <Link href="/">
                <a>Implementação</a>
            </Link>
        </Container>
    )
}

export default ServicesFooter
