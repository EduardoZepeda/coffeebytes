import { styled, connect } from 'frontity'
import SocialMedia from './social-media'
import Link from './link'

const Footer = ({ state }) => {
  return (
    <FooterContainer>
      <LegalContainer>
        <Link link='/politica-de-privacidad/'>{state.theme.lang === 'en' ? 'Privacy Policy' : 'Política de privacidad'}</Link>
        <Link link='/politica-de-cookies/'>{state.theme.lang === 'en' ? 'Cookies' : 'Política de cookies'}</Link>
      </LegalContainer>
      <SocialMedia />
    </FooterContainer>
  )
}

export default connect(Footer)

const FooterContainer = styled.footer`
  display: flex;
  height: 200px;
  align-items: center;
  color: var(--white);
  background-color: var(--default-black);
  justify-content: space-around;
  flex-wrap: wrap;
`

const LegalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  font-size: 1rem;
`
