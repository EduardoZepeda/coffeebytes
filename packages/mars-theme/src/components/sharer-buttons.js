import { connect, styled } from "frontity";
import Link from "./link";
import { Icon } from 'react-icons-kit'
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin'
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter'
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook'

const SharerButtons = ({title, url, state}) => {
    const iconSize = 24;

    return (
        <>
            <h2>Presume lo que aprendiste en redes</h2>
            <SharersContainer>
                <IconLink aria-label="Enlace a Facebook" link={`http://www.facebook.com/sharer.php?u=${encodeURIComponent(state.source.url + url)}&t=${encodeURIComponent(title)}`}>
                    <IconContainer style={{ backgroundColor: '#3B5998' }}><Icon icon={socialFacebook} size={iconSize}/>
                    </IconContainer>
                </IconLink>
                <IconLink aria-label="Enlace a Twitter" link={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(state.source.url + url)}&via=${new URL(state.socialMedia.twitter).pathname.replace("/", "")}`}>
                    <IconContainer style={{ backgroundColor: '#00AECE' }}><Icon icon={socialTwitter} size={iconSize}/>
                    </IconContainer>
                </IconLink>
                <IconLink aria-label="Enlace a Linkedin" link={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(state.source.url + url)}`}>
                    <IconContainer style={{ backgroundColor: '#0E76A8' }}><Icon icon={socialLinkedin} size={iconSize}/>
                    </IconContainer>
                </IconLink>
            </SharersContainer>
        </>
        )

};

export default connect(SharerButtons);


const SharersContainer = styled.div`
  display: flex;
  align-items: center;
  color: #FFF;
  flex-wrap: wrap;
  margin: 3rem 0;
`;

const IconLink = styled(Link)`
    margin: 0 0.7em;
`;

const IconContainer = styled.div`
    border-radius: 5px;
    padding: 1rem;
`;