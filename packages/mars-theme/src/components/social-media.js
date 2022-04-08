import { connect, styled } from 'frontity'
import Link from './link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCodeWars } from './logos/codewars'

const SocialMedia = ({ state }) => {
  const iconSize = 'lg'

  return (
    <SocialMediaContainer>
      <IconContainer>
        <IconLinkCw title='Codewars' aria-label='Enlace a Codewars' link={state.socialMedia.codewars}>
          <FontAwesomeIcon icon={faCodeWars} size={iconSize} />
        </IconLinkCw>
      </IconContainer>
      <IconContainer>
        <IconLinkIg title='Instagram' aria-label='Enlace a Instagram' link={state.socialMedia.instagram}>
          <FontAwesomeIcon icon={faInstagram} size={iconSize} />
        </IconLinkIg>
      </IconContainer>
      <IconContainer>
        <IconLinkLn title='Linkedin' aria-label='Enlace a Linkedin' link={state.socialMedia.linkedin}>
          <FontAwesomeIcon icon={faLinkedinIn} size={iconSize} />
        </IconLinkLn>
      </IconContainer>
    </SocialMediaContainer>
  )
}

export default connect(SocialMedia)

const SocialMediaContainer = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  @media screen and (max-width: 560px) {
    margin-left: 24px;
  }
`

const IconLink = styled(Link)`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display:flex;
  align-items:center;
  justify-content:space-around;
  color: white;
  margin: 0.5rem;
  &:visited {
    color: var(--white);
  }
`

const IconLinkLn = styled(IconLink)`
  background-color: #0e76a8;
`

const IconLinkIg = styled(IconLink)`
  background-color: #e1306c;
`

const IconLinkCw = styled(IconLink)`
  background-color: #b1361e;
`

const IconContainer = styled.div`
`
