import { styled, connect } from "frontity";
import Link from "./link";

const AfterPost = ({ state }) => {

    return (
        <FollowMeContainer>
            <ProfilePicture></ProfilePicture>
            <FollowMeText><Link link={state.socialMedia.twitter}>Click aquí y sígueme en redes sociales, me ayudas a seguir creando contenido gratuito</Link></FollowMeText>
        </FollowMeContainer>
        )

};

export default connect(AfterPost);

const FollowMeContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
`;

const ProfilePicture = styled.div`
    border-radius: 50%;
    padding: 2rem;
    background-color: #FFF;
    background-image: url(https://coffeebytes.dev/wp-content/uploads/2021/06/keyo_cuadrado.jpg);
    background-size: 64px 64px;
    box-shadow: 5px 5px 8px 0px rgba(0,0,0,0.75);
`;

const FollowMeText = styled.div`
    color: #FFF;
    background-color: #3370f3;
    margin-left: 2rem;
    padding: 1rem 1rem 1rem 1.5rem;
    border-radius: 10px;
    box-shadow: 5px 5px 8px 0px rgba(0,0,0,0.75);
    &:before{
        content:"";
        position:absolute;
        border-bottom: 20px solid transparent;
        border-right: 20px solid #3370f3;
        border-top: 20px solid transparent;
        height: 0px;
        width: 0px;
        margin-left:-2.5rem;
    }
`;