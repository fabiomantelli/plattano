import React from 'react'
import Trapezio from '../../../assets/trapezio'

import { Container } from './styles'

const Vmware: React.FC = () => {
    return (
        <Container>
            <Trapezio />
            <h1>VMware</h1>
            <h2>Nosso negócio é a inovação</h2>
            <p>
                Confiamos na VMware porque ela está comprometida em resolver os
                problemas tecnológicos mais difíceis. Juntos com nossa parceria,
                oferecemos aos clientes a possibilidade de executar, gerenciar,
                conectar e proteger todos os seus aplicativos em qualquer nuvem,
                para que possam reduzir custos, obter eficiência e inovar mais
                rapidamente.
            </p>

            <p className="orange-color">Acelere sua transição para a nuvem</p>
            <p className="orange-color">
                Transforme seu Datacenter, rede e a segurança
            </p>
            <p className="orange-color">Fortaleça o seu Digital Workspace</p>

            <button>Saiba Mais</button>
        </Container>
    )
}

export default Vmware
