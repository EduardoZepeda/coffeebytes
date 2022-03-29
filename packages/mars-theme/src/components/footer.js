import { styled, connect } from 'frontity'
import SocialMedia from './social-media'
import Link from './link'

const Footer = ({ state }) => {
  return (
    <FooterContainer>
      <SocialMedia />
      <LegalContainer>
        <Link link='/politica-de-privacidad/'>{state.theme.lang === 'en' ? 'Privacy Policy' : 'Política de privacidad'}</Link>
        <Link link='/politica-de-cookies/'>{state.theme.lang === 'en' ? 'Cookies' : 'Política de cookies'}</Link>
      </LegalContainer>
    </FooterContainer>
  )
}

export default connect(Footer)

const FooterContainer = styled.footer`
  display: flex;
  height: 200px;
  align-items: center;
  color: var(--text-background);
  background-color: var(--footer);
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 2rem;
`

const LegalContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  font-size: 1rem;
`
