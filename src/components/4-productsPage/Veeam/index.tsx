import React from 'react'
import Trapezio from '../../../assets/trapezio'

import { Container } from './styles'

const Veeam: React.FC = () => {
    return (
        <Container>
            <Trapezio />
            <h1>Veeam</h1>
            <h2>Proteção é nosso objetivo</h2>
            <p>
                Nossa expertise vai além do licenciamento e auxílio em
                renovações de suporte. Somos uma empresa referência junto à
                Veeam Software e sua equipe mundial, e nosso corpo técnico é
                capaz de entregar com excelência projetos de todos os portes,
                com acompanhamento em todas as etapas, desde a aquisição do
                melhor produto até a implementação e gestão em seu ambiente.
            </p>

            <button>Saiba Mais</button>
        </Container>
    )
}

export default Veeam
