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
import ThemeSwitch from './theme-switch'

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
      <Global styles={state.theme.themeDark ? globalStylesDark : globalStylesLight} />

      {/* Add the header of the site. */}
      <ThemeSwitch />
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

const commonCss = `
    @font-face {
      font-family: 'Nunito';
      src: url('/fonts/Nunito.woff2') format('woff2');
      font-display: fallback;
    }
    body {
      margin: 0;
      background-color: var(--background);
      font-family: 'Arimo', sans;
      font-size: 20px;
      line-height: 2rem;
      @media (min-width: 768px) { 
        font-family: 'Nunito', sans;
      }
    }
    a,
    a:visited {
      color: inherit;
    text-decoration: none;
    }
    textarea:focus, input:focus{
      outline: 1px solid var(--blue);
    }
`

const globalStylesDark = css`
  :root {
    --white: #FFF;
    --dark: #111;
    --blue: #467BF6;
    --red: #B82019;
    --title: var(--white);
    --background: #1c1c1c;
    --main-text: var(--white);
    --secondary-text: #A2A2A2;
    --text-background: var(--white);
    --footer: var(--dark);
    --overlay: #181818DD;
    --blue-transparent: #071f37fa;
    }
    ${commonCss}
  `

const globalStylesLight = css`
  :root {
    --white: #FFF;
    --title: #161620;
    --dark: #111;
    --blue: #467BF6;
    --red: #B82019;
    --overlay: #181818DD;
    --background: var(--white);
    --main-text: #292a2a;
    --secondary-text: #696869;
    --text-background: var(--white);
    --footer: var(--dark);
    --blue-transparent: #071f37fa;
  }
  ${commonCss}
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
  background-color: var(--background);
  `

const Main = styled.main`
  margin: 28px;
  display: flex;
  color: var(--main-text);
  justify-content: center;
  `
