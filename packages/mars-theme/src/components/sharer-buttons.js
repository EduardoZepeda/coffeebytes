import { connect, styled } from 'frontity'
import Link from './link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const SharerButtons = ({ state }) => {
  const iconSize = '1x'
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const url = post.link
  const title = post.title.rendered
  return (
    <ShareContent>
      <TypographyH2>Comparte este contenido</TypographyH2>
      <SharersContainer>
        <IconLink aria-label='Enlace a Facebook' link={`http://www.facebook.com/sharer.php?u=${encodeURIComponent(state.source.url + url)}&t=${encodeURIComponent(title)}`}>
          <IconContainer style={{ backgroundColor: '#3B5998' }}>
            <FontAwesomeIcon icon={faFacebookF} size={iconSize} />
          </IconContainer>
        </IconLink>
        <IconLink aria-label='Enlace a Twitter' link={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(state.source.url + url)}&via=${new URL(state.socialMedia.twitter).pathname.replace('/', '')}`}>
          <IconContainer style={{ backgroundColor: '#00AECE' }}>
            <FontAwesomeIcon icon={faTwitter} size={iconSize} />
          </IconContainer>
        </IconLink>
        <IconLink aria-label='Enlace a Linkedin' link={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(state.source.url + url)}`}>
          <IconContainer style={{ backgroundColor: '#0E76A8' }}>
            <FontAwesomeIcon icon={faLinkedinIn} size={iconSize} />
          </IconContainer>
        </IconLink>
      </SharersContainer>
    </ShareContent>
  )
}

export default connect(SharerButtons)

const TypographyH2 = styled.p`
  font-size: 30px;
  line-height: 32px
`

const ShareContent = styled.section`
`

const SharersContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--text-background);
  flex-wrap: wrap;
  margin: 3rem 0;
`

const IconLink = styled(Link)`
    margin-right: 2em;

`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 5px;
  width: 4rem;
  height: 5rem;
`
