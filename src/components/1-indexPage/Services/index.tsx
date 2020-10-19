import React from 'react'
import Link from 'next/link'
import { ItemsIndexContainer } from '../../../styles/Containers'

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
                <span>Leia mais</span>
                <Link href="/">
                    <img
                        src="/assets/1-index/arrow-icon.png"
                        alt="Arrow Icon"
                        style={{ marginLeft: '15px', cursor: 'pointer' }}
                    />
                </Link>
            </div>
        </ItemsIndexContainer>
    )
}

export default Services
