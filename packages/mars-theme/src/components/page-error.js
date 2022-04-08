import { styled, connect } from 'frontity'
import Link from './link'

const description404 = (lang) => {
  <>
    {lang === 'en' ? "Why don't you check our latest posts?" : 'Pero puedes leer nuestros posts más recientes'}
    <span role='img' aria-label='confused face' />
  </>
}

const description = (
  <>
    Don&apos;t panic! Seems like you encountered an error. If this persists,
    <a href='https://community.frontity.org'> let us know </a> or try refreshing
    your browser.
  </>
)

// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link)

  const title = 'Oops! Un error feo por aquí'
  const title404 = state.theme.lang === 'en' ? '404, there are no post in english... yet ☕' : '404, no hay nada escrito aún... ☕'

  return (
    <Container>
      <Title>{data.is404 ? title404 : title}</Title>
      <Description>{data.is404 ? description404(state.theme.lang) : description}</Description>
      {state.theme.lang === 'en' ? null : <Link link='#'><RecentPostsButton>Leer entradas recientes</RecentPostsButton></Link>}
    </Container>
  )
}

export default connect(Page404)

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
  text-align: center;
`

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: var(--title);
  font-size: 3em;
  line-height: 5rem;
`

const Description = styled.div`
  line-height: 1.6em;
  color: var(--title);
  margin: 48px 0;
`

const RecentPostsButton = styled.button`
  color: var(--text-background);
  margin: 24px 0;
  background-color: var(--blue);
  border: 0px;
  padding: 1.5rem;
  border-radius: 2px;
  font-size: 1rem;
`
