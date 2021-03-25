import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Footer from "./footer";
import ScrollUp from "./scroll-up"
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
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
        <Footer/>
        <ScrollUp/>
      </HamburguerGrid>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    background-color: #181818;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    line-height: 2rem;
  }
  a,
  a:visited {
    color: #FFF;
    text-decoration: none;
  }
`;

const HamburguerGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;


const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #181818;
`;

const Main = styled.main`
  margin: 28px;
  display: flex;
  color: #EBF6FF;
  justify-content: center;
`;