import { connect, styled } from 'frontity'
import Link from './link'
import { Icon } from 'react-icons-kit'
import { linkedin } from 'react-icons-kit/fa/linkedin'
import { instagram } from 'react-icons-kit/fa/instagram'
import { githubAlt } from 'react-icons-kit/fa/githubAlt'
import { Codewars } from './logos/codewars'

const SocialMedia = ({ state }) => {
  const iconSize = 22

  return (
    <SocialMediaContainer>
      <IconContainer><IconLinkGh title='Github' aria-label='Enlace a Github' link={state.socialMedia.github}><Icon icon={githubAlt} size={iconSize} /></IconLinkGh></IconContainer>
      <IconContainer><IconLinkIg title='Instagram' aria-label='Enlace a Instagram' link={state.socialMedia.instagram}><Icon icon={instagram} size={iconSize} /></IconLinkIg></IconContainer>
      <IconContainer><IconLinkLn title='Linkedin' aria-label='Enlace a Linkedin' link={state.socialMedia.linkedin}><Icon icon={linkedin} size={iconSize} /></IconLinkLn></IconContainer>
      <IconContainer><IconLinkCw title='Codewars' aria-label='Enlace a Codewars' link={state.socialMedia.codewars}><Icon style={{ color: '#FFF' }} icon={Codewars} size={iconSize} /></IconLinkCw></IconContainer>
    </SocialMediaContainer>
  )
}

export default connect(SocialMedia)

const SocialMediaContainer = styled.section`
  display: flex;
  height: 3rem;
  justify-content: center;
  align-content: center;
  align-items: center;
  @media screen and (max-width: 560px) {
    margin-left: 24px;
  }
`

const IconLink = styled(Link)`
  padding: 0.5rem 0.6rem;
  border-radius: 100%;
  color: white;
  margin: 0.5rem;
`

const IconLinkLn = styled(IconLink)`
  background-color: #0e76a8;
`

const IconLinkIg = styled(IconLink)`
  background-color: #e1306c;
`

const IconLinkGh = styled(IconLink)`
  background-color: #333;
`

const IconLinkCw = styled(IconLink)`
  background-color: #b1361e;
`

const IconContainer = styled.div`
`
