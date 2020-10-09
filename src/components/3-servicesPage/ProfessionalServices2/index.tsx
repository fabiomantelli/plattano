import React from 'react'
import ProfessionalServices2Trapezio from '../../../assets/3-services/professionalServices2Trapezio'

import { Container } from './styles'

const ProfessionalServices2: React.FC = () => {
    return (
        <Container>
            <ProfessionalServices2Trapezio />
            <h1>Professional Services</h1>
            <p>
                Temos como meta, auxiliar nossos clientes, integrando soluções
                de nossos parceiros com serviços especializados, superando os
                desafios e obter melhores resultados para os negócios. Nossa
                metodologia de trabalho é usar das melhores práticas criadas
                pelas fabricantes, garantindo maior qualidade e eficiência na
                entrega das soluções.
            </p>
            <p>
                Trabalhamos com: Análise e Planejamento, Implantação,
                Gerenciamento de Ambientes, Full out-sourcing, Gestão
                Compartilhada e Treinamentos.
            </p>
            <button>Saiba Mais</button>
        </Container>
    )
}

export default ProfessionalServices2
