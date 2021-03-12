import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";

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
  const { next, previous, totalPages, page } = state.source.get(state.router.link);
  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (next) actions.source.fetch(next);
  }, []);
  return (
    <div>
      {/* If there's a next page, render this link */}
      {previous && (
        <Link link={previous}>
          <PaginationLink>← Regresar </PaginationLink>
        </Link>
      )}
      {totalPages && [...Array(totalPages).keys()].map(paginationPage=><Link id={paginationPage} link={`/page/${paginationPage+1}/`}><PaginationLink active={paginationPage+1===page}>{paginationPage+1}</PaginationLink></Link>)}

      {/* If there's a previous page, render this link */}
      {next && (
        <Link link={next}>
          <PaginationLink> Avanzar →</PaginationLink>
        </Link>
      )}
    </div>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Pagination);

const Text = styled.em`
  display: inline-block;
  margin-top: 16px;
`;

const PaginationLink = styled.div`
  display: inline-block;
  padding: 12px;
  background-color: ${props => props.active? "#FFF": ""};
  color: ${props => props.active? "#181818": "#FFF"};
  border: 1px solid #FFF;
  margin: 8px;
  border-radius: 4px;
`;
