import { useEffect } from 'react'
import { connect, styled } from 'frontity'
import Link from '../link'
import diggStylePagination from '../../utils/digg-style-pagination'
/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */

const Pagination = ({ state, actions }) => {
  // Get the total posts to be displayed based for the current link
  const { next, previous, route, totalPages, page, searchQuery } = state.source.get(state.router.link)
  const activePages = diggStylePagination(page, totalPages)
  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (next) actions.source.fetch(next)
  }, [])
  return (
    <div>
      {/* If there's a previous page, render this link */}
      {previous && (
        <Link link={previous}>
          <PaginationLink>← Regresar </PaginationLink>
        </Link>
      )}
      {totalPages > 0 && activePages.map(paginationPage => typeof paginationPage === 'number' ? <Link key={paginationPage} link={`${route}page/${paginationPage}/${searchQuery ? '?s=' + searchQuery : ''}`}><PaginationLink active={paginationPage === page}>{paginationPage}</PaginationLink></Link> : <PaginationLink key={paginationPage}>...</PaginationLink>)}
      {/* If there's a next page, render this link */}
      {next && (
        <Link link={next}>
          <PaginationLink> Avanzar →</PaginationLink>
        </Link>
      )}
    </div>
  )
}

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Pagination)

const PaginationLink = styled.div`
  display: inline-block;
  padding: 12px;
  background-color: ${props => props.active ? 'var(--blue)' : ''};
  color: ${props => props.active ? 'var(--text-background)' : 'var(--blue)'};
  border: 1px solid var(--blue);
  margin: 8px;
  border-radius: 4px;
`
