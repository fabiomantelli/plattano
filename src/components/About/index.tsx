import React from 'react'

import { Container } from './styles'

const About: React.FC = () => {
    return (
        <Container>
            <h1>Sobre a Plattano</h1>
            <h2>
                Somos uma empresa especializada em <br />
                implementação, gestão e consultoria em infraestrutura <br /> de
                ambientes virtualizados. Nosso objetivo principal é a <br />
                continuidade do negócio de nossos clientes e <br />
                parceiros, utilizando as melhores práticas e <br />
                ferramentas de implementações de soluções, com um <br />
                suporte extremamente próximo e personalizado. <br />
                Possibilitamos que as empresas utilizem a tecnologia a <br />
                favor de seus objetivos.
            </h2>
            <button>Leia Mais</button>
        </Container>
    )
}

export default About
