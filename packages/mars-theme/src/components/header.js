import { connect, styled } from 'frontity'
import Link from './link'
import Nav from './nav'
import MobileMenu from './menu'

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link='/'>
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  )
}

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header)

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: var(--title);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Title = styled.h2`
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  color: var(--title);
  @media (max-width: 768px) {
    margin-top: 4rem;
    margin-left: 1.5rem;
  }
`

const Description = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: var(--secondary-text);
  font-family: sans;
  font-weight: normal;
  @media (max-width: 768px) {
    margin-left: 1.5rem;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`
