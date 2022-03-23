import React, { useEffect } from 'react'
import { connect, styled } from 'frontity'
import Link from './link'
import FeaturedMedia from './featured-media'
import Loading from './loading'

const SimilarPosts = ({ state, actions, postId }) => {
  useEffect(() => {
    actions.source.fetch(`post/${postId}/related`)
  }, [postId])

  const data = state.source.get(`post/${postId}/related`)

  if (data.items === undefined) {
    return null
  }
  if (data.isFetching) {
    return <Loading />
  }
  const relatedPosts = data.items.map(({ type, id }) => {
    const p = state.source[type][id]
    return (
      <SimilarPost key={p.id}>
        <Link link={p.link}>
          <FeaturedMedia id={p.featured_media} />
          <p>{p.title.rendered}</p>
        </Link>
      </SimilarPost>
    )
  })

  return (
    <SimilarPostsContainer>
      <TypographyH2 as='p'>Otras publicaciones que pueden interesarte</TypographyH2>
      {relatedPosts}
    </SimilarPostsContainer>
  )
}

export default connect(SimilarPosts)

const TypographyH2 = styled.p`
      font-size: 30px;
      line-height: 32px
      `

const SimilarPost = styled.div`
      width: 300px;
      margin: 0;
      padding: 24px;
      list-style: none;
      `

const SimilarPostsContainer = styled.aside`
      display:flex;
      flex-wrap: wrap;
      `
