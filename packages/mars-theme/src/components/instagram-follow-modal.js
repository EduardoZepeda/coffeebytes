import { styled, connect } from 'frontity'
import { instagram } from 'react-icons-kit/fa/instagram'
import { Icon } from 'react-icons-kit'
import Link from './link'

const InstagramFollowModal = ({ state, actions }) => {
  const iconSize = 36

  return (
    <InstagramContainer>
      <h2>¡Estoy en Instagram!</h2>
      <p>¡No te pierdas mis posts! Publico info sobre desarrollo web cada semana. </p>
      <IconLink title='Instagram' aria-label='Enlace a Instagram' link={state.socialMedia.instagram}>
        <FollowButton><Icon style={{ marginRight: 8 }} icon={instagram} size={iconSize} />Seguir</FollowButton>
      </IconLink>
    </InstagramContainer>
  )
}

export default connect(InstagramFollowModal)

const InstagramContainer = styled.div`
    padding: 1rem;
    border-radius: 4px;
`

const IconLink = styled(Link)`
    margin: 0 0;
`

const FollowButton = styled.button`
    background-color: var(--ig-blue);
    color: var(--white);
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: 0px;
    font-size: 1rem;
`
