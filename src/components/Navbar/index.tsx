import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

const Navbar: React.FC = () => {
    return (
        <Container>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
            <Link href="/servicos">
                <a>Serviços</a>
            </Link>
            <Link href="/produtos">
                <a>Produtos</a>
            </Link>
            <Link href="/parceiros">
                <a>Parceiros</a>
            </Link>
            <Link href="/">
                <a>Knowledge Center</a>
            </Link>
            <Link href="/contato">
                <a>Contato</a>
            </Link>
        </Container>
    )
}

export default Navbar
