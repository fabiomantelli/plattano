import React from 'react'
import Trapezio from '../../../assets/trapezio'

import { Container } from './styles'

const AdvancedDisaster: React.FC = () => {
    return (
        <Container>
            <Trapezio />
            <h1>
                Advanced Disaster <br />
                Recovery
            </h1>
            <p>
                O <b>DRaaS</b> da Pláttano Technologies com a tecnologia da
                Veeam integra seu ambiente local como uma extensão da
                infraestrutura de nuvem, fornecendo recursos de replicação e
                failover seguros e robustos para a recuperação de desastres.
            </p>

            <button>Saiba Mais</button>
        </Container>
    )
}

export default AdvancedDisaster
