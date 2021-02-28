import { styled, connect } from "frontity";

const AfterPost = ({ state }) => {

    return (
        <>
            <h2>¿Quieres aprender más?</h2>
            <p>Sígueme en Twitter y te aviso cuando tenga nuevo contenido disponible. ¡Es gratis!</p>
            <FollowButton><a href={state.socialMedia.twitter} className="twitter-follow-button" data-size="large" data-show-screen-name="false" data-lang="es" data-show-count="false">Seguir a Eduardo Zepeda</a></FollowButton>
        </>
        )

};

export default connect(AfterPost);


const FollowButton = styled.button`
    padding: 1rem 1.5rem;
    background-color: #3370f3;
    border: 0px solid;
    border-radius: 4px;
`;