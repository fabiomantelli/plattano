import React from 'react'
import Trapezio from '../../../assets/trapezio'

import { Container } from './styles'

const ReferenceCompany: React.FC = () => {
    return (
        <Container>
            <Trapezio />
            <h1>
                Empresa referência no <br />
                Brasil
            </h1>
            <p>
                A <b>Pláttano Technologies</b> é referência em sua área de
                atuação. Estamos entre os principais parceiros no Brasil, e
                constantemente nos certificamos para entregar projetos com
                qualidade. Temos grande influência e proximidade com as equipes
                Veeam e VMware no País, e anualmente participamos de eventos
                mundiais das fabricantes nos Estados Unidos.
            </p>
            <p>
                Estamos presentes nas comunidades de tecnologia em todas as
                redes sociais, ajudando a difundir conhecimento e auxiliar
                usuários finais.
            </p>
        </Container>
    )
}

export default ReferenceCompany
