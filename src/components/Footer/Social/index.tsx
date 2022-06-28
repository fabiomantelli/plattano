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
import { IconProp } from '@fortawesome/fontawesome-svg-core'

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
            <FontAwesomeIcon icon={faInstagram as IconProp} size="2x" />
          </a>
          &nbsp;&nbsp;
          <a
            href="https://www.facebook.com/plattanotechnologies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook as IconProp} size="2x" />
          </a>
          &nbsp;&nbsp;
          <a
            href="https://twitter.com/PlattanoVM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter as IconProp} size="2x" />
          </a>
          &nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/company/plattanotechnologies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin as IconProp} size="2x" />
          </a>
        </ContainerIcons>
      </Container>
    </>
  )
}

export default Social
