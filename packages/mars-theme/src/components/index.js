import { Global, css, connect, styled, Head } from 'frontity'
import Switch from '@frontity/components/switch'
import Header from './header'
import List from './list'
import Post from './post'
import Loading from './loading'
import Title from './title'
import PageError from './page-error'
import Footer from './footer'
import ScrollUp from './scroll-up'
import CookieConsentManager from './cookie-consent-manager'

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link)
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name='description' content={state.frontity.description} />
        <html lang={state.theme.lang} />
      </Head>

      {/* Add some global styles for the whole site, like body or a's.
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HamburguerGrid>
        <HeadContainer>
          <Header />
        </HeadContainer>

        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
        <Main>
          <Switch>
            <Loading when={data.isFetching} />
            <List when={data.isArchive} />
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
          </Switch>
        </Main>
        <Footer />
        {state.theme.askCookieConsent && <CookieConsentManager />}
      </HamburguerGrid>
      <ScrollUp />
    </>
  )
}

export default connect(Theme)

// :root {
//   --white: #FFF;
//   --dark-gray: #181818;
//   --clear-blue: #EBF6FF;
//   --mustard-yellow: #F3B433;
//   --default-black: #131313;
//   --blue: #467BF6;
//   --soft-gray: #A2A2A2;
//   --medium-gray: #495057;
//   --dark-gray-transparent: #181818DD;
//   --blue-transparent: #071f37ee;
//   --red: #B82019;
//   --ig-blue: #3b91e1;
// }

const globalStyles = css`
  :root {
    --white: #1c1c24;
    --dark-gray: #FFF;
    --clear-blue: #7a7b7f;
    --mustard-yellow: #335ea3;
    --default-black: #131313;
    --blue: #467BF6;
    --soft-gray: #A2A2A2;
    --medium-gray: #495057;
    --dark-gray-transparent: #181818DD;
    --blue-transparent: #071f37ee;
    --red: #B82019;
    --ig-blue: #3b91e1;
  }
  body {
    margin: 0;
    background-color: var(--dark-gray);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    line-height: 2rem;
  }
  a,
  a:visited {
    color: var(--white);
    text-decoration: none;
  }
`

const HamburguerGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`

const HeadContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--dark-gray);
`

const Main = styled.main`
  margin: 28px;
  display: flex;
  color: var(--clear-blue);
  justify-content: center;
`
