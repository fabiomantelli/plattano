import React from 'react'
import Link from 'next/link'
import { ItemsIndexContainer } from '../../../styles/Containers'
import { ButtonElement } from '../../../styles/Buttons'

const Services: React.FC = () => {
    return (
        <ItemsIndexContainer>
            <h1>
                Serviços <br />
                Complementares
            </h1>
            <h2>
                Consultoria, Monitoramento, Gerenciamento de ambiente
                Desenvolvimento de Projetos Implementação, Treinamentos e
                capacitação de equipes.
            </h2>
            <div>
                <Link href="/consultoria">
                    <ButtonElement>Leia Mais</ButtonElement>
                </Link>
            </div>
        </ItemsIndexContainer>
    )
}

export default Services
