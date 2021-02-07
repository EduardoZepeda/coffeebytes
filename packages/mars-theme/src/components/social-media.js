import { connect, styled } from "frontity";
import Link from "./link";
import { GrTwitter, GrLinkedin, GrGithub } from "react-icons/gr";

const SocialMedia = ({ state }) => {
    const iconSize = "1.5em"

    return (
    <SocialMediaContainer>
        <div><IconContainer link={state.socialMedia.github}><GrGithub size={iconSize}/></IconContainer></div>
        <div><IconContainer link={state.socialMedia.twitter}><GrTwitter size={iconSize}/></IconContainer></div>
        <div><IconContainer link={state.socialMedia.linkedin}><GrLinkedin size={iconSize}/></IconContainer></div>
    </SocialMediaContainer>)

};

export default connect(SocialMedia);

const SocialMediaContainer = styled.div`
  color: white;
  display: flex;
  justify-content: flex-start;
  margin: 1em 0;
  overflow-x: auto;
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const IconContainer = styled(Link)`
    margin: 0 0.7em;
`;