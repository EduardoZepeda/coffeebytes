import { connect, styled } from 'frontity'
import Link from '../link'
import FeaturedMedia from '../featured-media'
import ReadingTime from '../reading-time'
import Categories from '../categories'
import encloseUrlInAnchorNoFollow from '../../utils/enclose-url-inside-anchor'
/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author]
  const date = new Date(item.date)
  const media = state.source.attachment[item.featured_media]

  return (
    <article>
      <Link aria-label={item.title.rendered} link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <PostMetadata>
        {/* If the post has an author, we render a clickable author text. */}
        <PublishDate>
          {' '}
          <b>El {date.toLocaleString('es-ES', { timeZone: 'UTC', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</b>
        </PublishDate>
        {author && (
          <StyledLink link={author.link}>
            <AuthorName>
              {' '} por <b>{author.name}</b>
            </AuthorName>
          </StyledLink>
        )}
      </PostMetadata>

      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {}
      <ReadingTime content={item.content} />
      <Categories categories={item.categories} />
      {state.theme.featured.showOnList && (
        <>
          <Link aria-label={item.title.rendered} link={item.link}>
            <FeaturedMedia id={item.featured_media} />
          </Link>
          {media.caption && <Credits dangerouslySetInnerHTML={{ __html: encloseUrlInAnchorNoFollow(media.caption.rendered) }} />}
        </>
      )}

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <>
          <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
          <Link link={item.link}>
            <ReadMore>Leer más</ReadMore>
          </Link>
        </>

      )}
    </article>
  )
}

// Connect the Item to gain access to `state` as a prop
export default connect(Item)

const PostMetadata = styled.div`
  color: var(--secondary-text);
`

const ReadMore = styled.div`
    display: inline-block;
    border-radius: 2px;
    padding: 14px;
    margin-bottom: 28px;
    background-color: var(--background);
    color: var(--main-text);
    border: 1px solid var(--main-text);
    font-size: 1rem;
`

const Title = styled.h2`
  font-size: 2rem;
  color: var(--title);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`

const AuthorName = styled.span`
  font-size: 0.9em;
`

const StyledLink = styled(Link)`
  padding: 15px 0;
`

const PublishDate = styled.span`
  font-size: 0.9em;
`

const Excerpt = styled.div`
  line-height: 1.6em;
`
const Credits = styled.div`
  font-size: 0.85em;
  color: var(--secondary-text);
`
