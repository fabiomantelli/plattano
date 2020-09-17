import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import { Container } from './styles'
import { ContainerIcons } from './styles.icons'

const Social: React.FC = () => {
    return (
        <>
            <Container>
                <h1>Mídias Sociais</h1>
                <ContainerIcons>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </ContainerIcons>
            </Container>
        </>
    )
}

export default Social
