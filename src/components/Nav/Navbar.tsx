import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

const Navbar: React.FC = () => {
    return (
        <Container>
            <>
                <Link href="/">
                    <a>Sobre</a>
                </Link>
                <Link href="/">
                    <a>Serviços</a>
                </Link>
                <Link href="/">
                    <a>Produtos</a>
                </Link>
                <Link href="/">
                    <a>Parceiros</a>
                </Link>
                <Link href="/">
                    <a>Knowledge Center</a>
                </Link>
                <Link href="/">
                    <a>Contato</a>
                </Link>
            </>
        </Container>
    )
}

export default Navbar
