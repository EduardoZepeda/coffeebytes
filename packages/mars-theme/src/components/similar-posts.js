import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import FeaturedMedia from "./featured-media";
import shuffle from "../utils/array-shuffler";

// In a React component that uses "connect":
const SimilarPosts = ({ state, actions, post }) => {
  // 1. fetch data related to a path
  // With this useEffect we make the call to fetch
  // only the first time the component is rendered.
  // When the data is fetched, the state is updated with the new data
  // so the component is re-rendered and "data" will get proper content

  const randomCategory = post.categories[Math.floor(Math.random() * post.categories.length)];
  const randomCategoryLink = state.source.category[randomCategory]["link"];

  useEffect(() => {
    actions.source.fetch(randomCategoryLink);
  }, [randomCategoryLink]);

  // 2. get data from frontity state
  const data = state.source.get(randomCategoryLink);
  // 3. get entities from frontity state
  if (data.isCategory) {
    // the category entity
    const latestPostsData = state.source.data['/']
    const category = state.source.category[data.id];
    // posts from that category
    const posts = data.items.map(({ type, id }) => state.source[type][id]).filter(({id}) => id!==post.id);
    if(latestPostsData.items && posts.length<=1){
      const latestPosts = latestPostsData.items.map(({ type, id }) => state.source[type][id]).filter(({id}) => id!==post.id);
      posts.push(...latestPosts)
    }
    // 4. render!
    shuffle(posts);
    return (
      <>
        <h2>Otras publicaciones que pueden interesarte</h2>
        <SimilarPostsContainer>
        {posts.slice(0,4).map((p) => (<SimilarPost key={p.id}><Link link={p.link}>
          <FeaturedMedia id={p.featured_media} />
          <p>{p.title.rendered}</p></Link></SimilarPost>
        ))}
        </SimilarPostsContainer>
      </>
    );
  }
  return null;
};

export default connect(SimilarPosts);


const SimilarPost = styled.div`
  width: 300px;
  margin: 0;
  padding: 24px;
  list-style: none;
`;

const SimilarPostsContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
`;