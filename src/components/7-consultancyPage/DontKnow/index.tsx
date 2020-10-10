import React from 'react'
import Trapezio from '../../../assets/trapezio'

import { Container } from './styles'

const DontKnow: React.FC = () => {
    return (
        <Container>
            <Trapezio />
            <h1>
                Não sabe por onde <br />
                começar seu projeto?
            </h1>
            <p>
                Com uma grande variedade de produtos e formas de licenciamento,
                projetos de TI podem tornar-se complexos e complicados. Estamos
                prontos para auxiliá-lo em qualquer etapa. Não atuamos apenas
                com vendas consultivas. Envolvemos toda nossa equipe, desde o
                comercial até os engenheiros de pré e pós-vendas para
                determinarmos o que é melhor para você, sempre usando as boas
                práticas elaboradas pelas fabricantes.
            </p>
            <p>
                Em todas as fases surgem diversas dúvidas, e estamos aqui para
                auxiliá-lo a entendê-las e deixar todos os processos e etapas
                transparentes.
            </p>
        </Container>
    )
}

export default DontKnow
