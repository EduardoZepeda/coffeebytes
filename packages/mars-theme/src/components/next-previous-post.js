import { useEffect } from 'react'
import { connect, styled } from 'frontity'
import Link from './link'

const NextPreviousPost = ({ state, actions }) => {
  // this component requires a modification to the REST API wordpress response
  // Please consider using the following snippet in functions.php or create a wp plugin
  // https://community.frontity.org/t/next-and-previous-post/1836/17
  const data = state.source.get(state.router.link)
  const { next, previous } = state.source[data.type][data.id]

  useEffect(() => {
    if (next) actions.source.fetch(next.link)
    if (previous) actions.source.fetch(previous.link)
  }, [next, previous])

  return (
    <NextPostContainer>
      {next && <Link link={next.link}><NextButton>Siguiente Entrada</NextButton></Link>}
      {previous && <Link link={previous.link}><NextButton>Entrada Anterior</NextButton></Link>}
    </NextPostContainer>
  )
}

export default connect(NextPreviousPost)

const NextPostContainer = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 4rem 0;
`

const NextButton = styled.div`
    padding: 1rem 2rem;
    border: 1px solid var(--white);
    border-radius: 4px;
`
