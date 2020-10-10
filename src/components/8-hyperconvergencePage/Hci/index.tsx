import React from 'react'
import Trapezio from '../../../assets/trapezio/index'

import { Container } from './styles'

const Hci: React.FC = () => {
    return (
        <Container>
            <Trapezio />
            <h1>
                Ao implantar HCI, abrimos portas para um Datacenter definido por
                Software (SDDC)
            </h1>
            <p>
                As demandas de capacidade e armazenamento estão aumentando. O
                hardware está ficando barato, mas o custo associado ao
                armazenamento e gerenciamento está aumentando, tornando-se a
                maior parte dos gastos das empresas.
            </p>
            <p>
                Não falamos mais de TERABYTES, mas sim de EXABYTES. Precisamos
                aproveitar mais e esmiuçar a eficiência do armazenamento. Isso
                tudo uma pressão com as equipes de TI, na expectativa de
                criarmos infraestruturas modernas e inteligentes para
                simplificar a entrega das soluções.
            </p>
        </Container>
    )
}

export default Hci
