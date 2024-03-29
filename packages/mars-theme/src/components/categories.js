import { connect, styled } from 'frontity'
import Link from './link'

import React from 'react'

const Categories = ({ categories, state }) => {
  return (
    <PostCategories>
      {categories.map(singleCategory => (
        <Link key={`category${singleCategory}`} aria-label={state.source.category[singleCategory].name} link={state.source.category[singleCategory].link}>
          <Category>{state.source.category[singleCategory].name}</Category>
        </Link>
      ))}
    </PostCategories>
  )
}

export default connect(Categories)

const PostCategories = styled.section``

const Category = styled.div`
    font-size: 0.75rem;
    color: var(--text-background);
    background-color: var(--blue);
    display: inline-block;
    padding: 0rem 0.5rem;
    margin: 1rem 1rem 1rem 0rem;
    border-radius: 4px;
    `
