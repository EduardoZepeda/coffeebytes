import { connect, styled } from "frontity";
import Link from "./link";
import { GrTwitter, GrLinkedin, GrGithub } from "react-icons/gr";

const SocialMedia = ({ state }) => {
    const iconSize = "1em"

    return (
    <SocialMediaContainer>
        <div><IconContainer aria-label="Enlace a Github" link={state.socialMedia.github}><GrGithub size={iconSize}/></IconContainer></div>
        <div><IconContainer aria-label="Enlace a Twitter" link={state.socialMedia.twitter}><GrTwitter size={iconSize}/></IconContainer></div>
        <div><IconContainer aria-label="Enlace a Linkedin" link={state.socialMedia.linkedin}><GrLinkedin size={iconSize}/></IconContainer></div>
    </SocialMediaContainer>)

};

export default connect(SocialMedia);

const SocialMediaContainer = styled.div`
  color: white;
  margin-top: 1em;
  overflow-x: auto;
  display: inline-flex;
  @media screen and (max-width: 560px) {
    width: 100%;
    margin-left: 24px;
  }
`;

const IconContainer = styled(Link)`
    margin: 0 0.7em;
`;