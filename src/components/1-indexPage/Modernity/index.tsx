import React from 'react'
import Link from 'next/link'
import { Container } from './styles'

const Modernity: React.FC = () => {
    return (
        <Container>
            <h1>Modernidade para seu Datacenter</h1>
            <h2>
                Tenha acesso às melhores e mais modernas soluções de
                virtualização, hiperconvergência, proteção de dados,
                e-hiperdisponibilidade de Datacenters com as tecnologias da
                Veeam e VMware. Tudo em um único local com a equipe da Pláttano
                Technologies, parceira oficial no Brasil.
            </h2>

            <Link href="/hiperconvergencia">
                <button>Saiba Mais</button>
            </Link>
        </Container>
    )
}

export default Modernity
