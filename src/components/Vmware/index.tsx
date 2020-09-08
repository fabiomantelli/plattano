import React from 'react'

import { Container } from './styles'

import ReadMore from '../ReadMore'

const Vmware: React.FC = () => {
    return (
        <Container>
            <h1>
                VMWARE Solution <br />
                Provider Enterprise
            </h1>
            <h2>
                A Plattano adotou a VMware <br />
                como player de virtualização <br />
                para oferecer aos clientes o <br />
                que há de melhor em <br />
                tecnologia do mercado.
            </h2>
            <ReadMore />
        </Container>
    )
}
export default Vmware
