// *********** This handler requires YARPP Plugin ****************
// This code is taken from
// https://github.com/frontity/frontity/blob/dev/packages/wp-source/src/libraries/handlers/postTypeArchive.ts

const relatedPostHandler = ({
  type
}) => async ({
  link,
  state,
  libraries,
  force,
  params
}) => {
  const { populate, api } = libraries.source
  const response = await api.get({
    // This endpoint is created by YARPP Plugin
    endpoint: `/yarpp/v1/related/${params.post_id}`,
    params: {
      limit: 6,
      context: 'view',
      _embed: true
    }
    // context: view is required so post content is obtained from response
    // otherwise a version without content will be saved in state.source.post[id]
    // provoking an error when a related post link is clicked
  })
  // Populate response
  const postItems = await populate({
    response,
    state,
    force
  })
  const currentRelatedPosts = state.source.data[link]

  Object.assign(currentRelatedPosts, {
    items: postItems,
    type: type,
    isPostTypeArchive: true,
    isPostArchive: true
  })
}

export default relatedPostHandler
