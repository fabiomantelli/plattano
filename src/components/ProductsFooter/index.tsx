import React from 'react'
import Link from 'next/link'
import { Container } from './styles'

const ProductsFooter: React.FC = () => {
    return (
        <Container>
            <h1>Produtos</h1>
            <Link href="/">
                <a>BaaS</a>
            </Link>
            <Link href="/">
                <a>DRaaS</a>
            </Link>
            <Link href="/">
                <a>Intelligent Backup</a>
            </Link>
            <Link href="/">
                <a>VMware</a>
            </Link>
            <Link href="/">
                <a>Veeam</a>
            </Link>
        </Container>
    )
}

export default ProductsFooter
