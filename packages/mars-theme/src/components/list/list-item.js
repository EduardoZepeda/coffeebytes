import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import ReadingTime from "../reading-time";
/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <article>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <div>
        {/* If the post has an author, we render a clickable author text. */}
        <PublishDate>
          {" "}
          <b>El {date.toLocaleString('es-ES', { timeZone: 'UTC', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</b>
        </PublishDate>
        {author && (
          <StyledLink link={author.link}>
            <AuthorName>
              {" "} por <b>{author.name}</b>
            </AuthorName>
          </StyledLink>
        )}
      </div>

      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
       {}
      <ReadingTime content={item.content}/>
      {state.theme.featured.showOnList && (
              <Link link={item.link}>
                <FeaturedMedia id={item.featured_media}/>
              </Link>
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
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const ReadMore = styled.div`
    display: inline-block;
    border: 1px solid #FFF;
    border-radius: 2px;
    padding: 14px;
    margin-bottom: 28px;
`

const Title = styled.h2`
  font-size: 2rem;
  color: #FFF;
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const AuthorName = styled.span`
  color: #A2A2A2;
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: #A2A2A2;
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: #EBF6FF;
`;
