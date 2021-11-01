import React, { useEffect } from 'react'
import { connect, styled } from 'frontity'
import Link from './link'
import FeaturedMedia from './featured-media'
import shuffle from '../utils/array-shuffler'
import Loading from './loading'

const SimilarPosts = ({ state, actions }) => {
  const currentUrl = state.source.get(state.router.link)
  const { categories, id } = state.source[currentUrl.type][currentUrl.id]
  // Get a random category
  const randomCategory = categories[Math.floor(Math.random() * categories.length)]
  const category = state.source.category[randomCategory]

  useEffect(() => {
    actions.source.fetch(category.link)
  }, [category])

  const data = state.source.get(category.link)
  if (data.isFetching) {
    return <Loading />
  }
  const items = data.items?.filter(post => post.id !== id)
  let posts = items?.map(({ type, id }) => state.source[type][id])
  if (posts) {
    // If the number of related posts is less than 4, fill the empty spaces with recent posts
    if (posts.length <= 3) {
      // root refers to recent posts
      const newPosts = state.source.data['/'].items
      const recentPosts = newPosts?.map(({ type, id }) => state.source[type][id]) || []
      posts = [...posts, ...recentPosts]
    }
    // There could be more than 6 posts, shuffle them
    shuffle(posts)
    return (
      <>
        <h2>Otras publicaciones que pueden interesarte</h2>
        <SimilarPostsContainer>
          {posts?.slice(0, 6).map((p) => (
            <SimilarPost key={p.id}>
              <Link link={p.link}>
                <FeaturedMedia id={p.featured_media} />
                <p>{p.title.rendered}</p>
              </Link>
            </SimilarPost>
          ))}
        </SimilarPostsContainer>
      </>
    )
  }
  return null
}

export default connect(SimilarPosts)

const SimilarPost = styled.div`
  width: 300px;
  margin: 0;
  padding: 24px;
  list-style: none;
`

const SimilarPostsContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
`
