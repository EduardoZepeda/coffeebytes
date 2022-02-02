import { styled, connect } from 'frontity'
import { instagram } from 'react-icons-kit/fa/instagram'
import { Icon } from 'react-icons-kit'
import Link from './link'

const InstagramFollowModal = ({ state, actions }) => {
  const iconSize = 36

  return (
    <InstagramContainer>
      <h2>Más contenido en Instagram</h2>
      <p>¡No te lo pierdas! Acá publico info sobre desarrollo web cada semana.</p>
      <IconLink title='Instagram' aria-label='Enlace a Instagram' link={state.socialMedia.instagram}>
        <FollowButton><Icon style={{ marginRight: 8 }} icon={instagram} size={iconSize} />Ir a Instagram</FollowButton>
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
    background: rgb(254,218,117);
    background: linear-gradient(27deg, rgb(254, 218, 117) 0%, rgb(245, 133, 41) 30%, rgb(214, 41, 118) 67%);
    color: var(--white);
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: 0px;
    font-size: 1rem;
`
