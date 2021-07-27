import { ServerError } from "@frontity/source";
import capitalize from "../utils/capitalize"

// This code is taken from 
// https://github.com/frontity/frontity/blob/dev/packages/wp-source/src/libraries/handlers/postTypeArchive.ts

const searchByRelevanceHandler = ({
  type,
  endpoint
}) => async ({
  link,
  state,
  libraries,
  force
}) => {
  // This is only for backward compatibility for the moment when handlers used
  // to receive `route` instead of `link`.
  const { api, populate, parse, getTotal, getTotalPages } = libraries.source;
  const { page, query } = parse(link);
  // 1. fetch the specified page
  const response = await api.get({
    endpoint: endpoint === "posts" ? state.source.postEndpoint : endpoint,
    params: {
      search: query.s,
      orderby: "relevance",
      page,
      _embed: true,
      ...state.source.params,
    },
  });
  // 2. populate response
  const items = await populate({
    response,
    state,
    force,
  });
  if (page > 1 && items.length === 0)
    throw new ServerError(`post archive doesn't have page ${page}`, 404);

  // 3. get posts and pages count
  const total = getTotal(response, items.length);
  const totalPages = getTotalPages(response, 0);

  // returns true if next page exists
  const hasNewerPosts = page < totalPages;
  // returns true if previous page exists
  const hasOlderPosts = page > 1;

  /**
   * A helper function that helps "glue" the link back together
   * from `route`, `query` and `page`.
   *
   * @param page - The page number.
   *
   * @returns The full link for a particular page.
   */
  const getPageLink = (page) =>
    libraries.source.stringify({
      query,
      page,
    });

  // 4. add data to source
  const currentPageData = state.source.data[link];

  const newPageData = {
    type,
    items,
    total,
    totalPages,
    isArchive: true,
    isPostTypeArchive: true,
    [`is${capitalize(type)}Archive`]: true,

    // Add next and previous if they exist.
    ...(hasOlderPosts && { previous: getPageLink(page - 1) }),
    ...(hasNewerPosts && { next: getPageLink(page + 1) }),

    // Add search data if this is a search.
    ...(query.s && { isSearch: true, searchQuery: query.s }),
  };

  // This ensures the resulting type is correct.
  Object.assign(currentPageData, newPageData);
};

export default searchByRelevanceHandler;