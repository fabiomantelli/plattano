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
                    <a
                        href="https://www.instagram.com/plattanotechnologies/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    &nbsp;&nbsp;
                    <a
                        href="https://www.facebook.com/plattanotechnologies/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    &nbsp;&nbsp;
                    <a
                        href="https://twitter.com/PlattanoVM"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    &nbsp;&nbsp;
                    <a
                        href="https://www.linkedin.com/company/plattanotechnologies/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </ContainerIcons>
            </Container>
        </>
    )
}

export default Social
