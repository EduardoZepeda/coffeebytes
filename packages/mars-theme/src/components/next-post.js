import { connect, styled } from "frontity"
import Link from "./link";

const NextPost = ({ state, id }) => {
    const orderedPosts = Object.values(state.source.post).map(element=>element.id)
    const indexOfCurrentPost = orderedPosts.indexOf(id)
    const previousPost = indexOfCurrentPost < orderedPosts.length ? orderedPosts[indexOfCurrentPost - 1] : null
    const recentPost = indexOfCurrentPost >= 0 ? orderedPosts[indexOfCurrentPost + 1]: null

    return (
        <NextPostContainer>
            {recentPost && <Link link={state.source.post[recentPost].link}><NextButton>Siguiente Entrada</NextButton></Link>}
            {previousPost && <Link link={state.source.post[previousPost].link}><NextButton>Entrada Anterior</NextButton></Link>}
        </NextPostContainer>
        )

};

export default connect(NextPost);

const NextPostContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 4rem 0;
`;

const NextButton = styled.div`
    padding: 1rem 2rem;
    border: 1px solid var(--white);
    border-radius: 4px
`;