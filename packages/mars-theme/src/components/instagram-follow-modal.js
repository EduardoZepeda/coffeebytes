import { styled, connect } from 'frontity'
import { socialInstagram } from 'react-icons-kit/ionicons/socialInstagram'
import { Icon } from 'react-icons-kit'
import Link from './link'

const InstagramFollowModal = ({ state, actions }) => {
  const iconSize = 36

  return (
    <InstagramContainer>
      <h2>¡Contenido gratis en Instagram!</h2>
      <p>Allí también publico contenido que puede servirte muchísimo. ¡Dale click al botón de seguir!</p>
      <IconLink title='Instagram' aria-label='Enlace a Instagram' link={state.socialMedia.instagram}>
        <FollowButton><Icon style={{ marginRight: 8 }} icon={socialInstagram} size={iconSize} />Seguir</FollowButton>
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
