import { connect, styled, decode } from 'frontity'
import Item from './list-item'
import Pagination from './pagination'
import EmptySearch from '../empty-search'

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link)
  return (
    <Container>
      {state.router.link.includes('?s=') && <h2>Resultados para: {state.router.link.split('=')[1]}</h2>}
      {data.items.length === 0 ? <EmptySearch /> : null}
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{' '}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id]
        // Render one Item component for each one.
        return <Item key={item.id} item={item} />
      })}
      <Pagination />
    </Container>
  )
}

export default connect(List)

const Container = styled.section`
  width: 768px;
  margin: 0;
  padding: 24px;
  list-style: none;
  @media screen and (max-width: 560px) {
      width: 100%;
  }
`

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: var(--blue);
`
