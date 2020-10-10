import React from 'react'

import { Container } from './styles'

const BenefitsBoxes: React.FC = () => {
    return (
        <Container>
            <p id="reduction-p">
                Redução de silos nos departamentos de TI. Uma equipe consegue
                gerenciar todo o parque, desde a camada de virtualização de
                servidores e rede, até o storage. Uma ferramenta central para
                todo o gerenciamento. Não mais interdependência para tarefas
                básicas.
            </p>
            <p>Integrado ao seu hypervisor</p>
            <p>Pronto para nuvem privada e híbrida</p>
            <p>
                Aproveite uma infraestrutura dimensionável, de alto desempenho e
                segura com o único software de virtualização de armazenamento
                integrado ao vSphere.
            </p>
            <p>
                Redução de custos e eliminação de silos nas equips de TI. Uma
                equipe gerencia todo o ambiente em único console.
            </p>
        </Container>
    )
}

export default BenefitsBoxes
