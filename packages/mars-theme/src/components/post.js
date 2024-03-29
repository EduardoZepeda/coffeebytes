import { useEffect } from 'react'
import { connect, styled } from 'frontity'
import Link from './link'
import List from './list'
import FeaturedMedia from './featured-media'
import prismjs from './styles/prism-styles'
import SimilarPosts from './similar-posts'
import ReadingTime from './reading-time'
import SharerButtons from './sharer-buttons'
import MailChimpSubscribeForm from './mail-chimp-form'
import MailChimpSubscribeFormModal from './mail-chimp-form-modal'
import NextPreviousPost from './next-previous-post'
import SideProfile from './side-profile'
import Categories from './categories'

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link)
  // source.category.id.link
  // Get the data of the post.
  const post = state.source[data.type][data.id]
  // Get the data of the author.
  const author = state.source.author[post.author]
  // Get a human readable date.
  const date = new Date(post.date)
  // Get the html2react component.
  const Html2React = libraries.html2react.Component
  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch('/')
    List.preload()
  }, [])

  // Load the post, but only if the data is ready.
  return data.isReady
    ? (
      <Container css={prismjs}>
        {post.type === 'post' && <MailChimpSubscribeFormModal />}
        {post.type === 'post' && <SideProfile />}
        <Article>
          <PostInfo>
            <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            {/* Only display author and date on posts */}
            {data.isPost && (
              <section>
                <DateWrapper time='abc'>
                  {' '}
                  {date.toLocaleString('es-ES', { timeZone: 'UTC', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </DateWrapper>
                {author && (
                  <StyledLink link={author.link}>
                    <Author>
                      {' '} por <b>{author.name}</b>
                    </Author>
                  </StyledLink>
                )}
                <ReadingTime content={post.content} />
                <Categories categories={state.source.post[post.id].categories} />
              </section>
            )}
          </PostInfo>

          {/* Look at the settings to see if we should include the featured image */}
          {state.theme.featured.showOnPost && (
            <FeaturedMedia id={post.featured_media} />
          )}

          {/* Render the content using the Html2React component so the HTML is processed
          by the processors we included in the libraries.html2react.processors array. */}
          <PostContent>
            <Html2React html={post.content.rendered} />
          </PostContent>
        </Article>
        {post.type === 'post' && <NextPreviousPost id={data.id} />}
        {post.type === 'post' && <SharerButtons />}
        {post.type === 'post' && <MailChimpSubscribeForm
          formTitle='Únete'
          formDescription='✅ Más de 100 desarrolladores registrados. Tutoriales gratuitos cada semana directo en tu correo y cero spam'
                                 />}
        {post.type === 'post' && <SimilarPosts postId={data.id} />}
      </Container>)
    : null
}

export default connect(Post)

const PostInfo = styled.section`
  color: var(--secondary-text);
`

const Container = styled.div`
  width: 768px;
  margin: 0;
  padding: 24px;
  @media (max-width: 768px) {
    width: 100%;
    padding:12px;
  }
`

const Article = styled.article`
`

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: var(--title);
  line-height: 1.5em;
  font-variant: petite-caps;
`

const StyledLink = styled(Link)`
  padding: 15px 0;
`

const Author = styled.p`
  font-size: 0.9em;
  display: inline;
`

const DateWrapper = styled.time`
  font-size: 0.9em;
  display: inline;
  font-weight: bold;
`

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const PostContent = styled.section`
  color: var(--main-text);
  word-break: break-word;

  * {
    max-width: 100%;
    padding-bottom: 0px !important; /* This behavior is needed to prevent the enlargement of images caused by the 'image' preprocessor */
    border-radius: 4px; 
  }

  p {
    font-size: 20px;
    line-height: 2em;
  }

  img {
    object-fit: contain;
    object-position: center;
    position: relative !important; /* same as above */
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid var(--title);
    padding: 4px 16px;
  }

  a {
    color: var(--blue);
    text-decoration: none;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--secondary-text);
    background-color: var(--title);
    background-clip: padding-box;
    border: 1px solid var(--secondary-text);
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: var(--blue);
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid var(--blue);
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: var(--title);
    background-color: var(--blue);
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`
