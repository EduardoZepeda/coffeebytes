import { connect, styled } from "frontity";
import Link from "./link";
import { Icon } from 'react-icons-kit'
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub'
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin'
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter'

const SocialMedia = ({ state }) => {
    const iconSize = 24;

    return (
    <SocialMediaContainer>
        <IconContainer><IconLink aria-label="Enlace a Github" link={state.socialMedia.github}><Icon icon={socialGithub} size={iconSize}/></IconLink></IconContainer>
        <IconContainer><IconLink aria-label="Enlace a Twitter" link={state.socialMedia.twitter}><Icon icon={socialTwitter} size={iconSize}/></IconLink></IconContainer>
        <IconContainer><IconLink aria-label="Enlace a Linkedin" link={state.socialMedia.linkedin}><Icon icon={socialLinkedin} size={iconSize}/></IconLink></IconContainer>
    </SocialMediaContainer>)

};

export default connect(SocialMedia);

const SocialMediaContainer = styled.div`
  color: white;
  overflow-x: auto;
  display: inline-flex;
  @media screen and (max-width: 560px) {
    margin-left: 24px;
  }
`;

const IconLink = styled(Link)`
    margin: 0 0.7em;
`;


const IconContainer = styled.div`
   transition-duration: 0.3s;  
   &:hover {
    transform: translateY(-5px);
    transition-duration: 0.3s; 
  }
`;