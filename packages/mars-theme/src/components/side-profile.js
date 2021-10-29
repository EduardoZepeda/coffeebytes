import { styled, connect } from 'frontity'
import { Icon } from 'react-icons-kit'
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin'
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter'
import { iosEmail } from 'react-icons-kit/ionicons/iosEmail'
import Link from './link'

const SideProfile = ({ state }) => {
  const iconSize = 18
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]

  return (
    <ProfileContainer>
      <Profile>
        <ProfilePicture avatarUrl={author.avatar_urls['96']} />
        <DataContainer>
          <Author><strong>{author.name}</strong></Author>
          <SocialMediaLink><Link link={state.socialMedia.email}><Icon icon={iosEmail} size={iconSize} /><small> Email</small></Link></SocialMediaLink>
          <SocialMediaLink><Link link={state.socialMedia.twitter}><Icon icon={socialTwitter} size={iconSize} /><small> Twitter</small></Link></SocialMediaLink>
          <SocialMediaLink><Link link={state.socialMedia.linkedin}><Icon icon={socialLinkedin} size={iconSize} /><small> Linkedin</small></Link></SocialMediaLink>
        </DataContainer>
      </Profile>
    </ProfileContainer>
  )
}

export default connect(SideProfile)

const ProfileContainer = styled.div`
  position: sticky;
  top: 4rem;
  @media (max-width: 1024px) {
  position: static;
  }
`

const Profile = styled.div`
  color: var(--soft-gray);
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    margin-left: 0;
    position: inherit;
    }
  margin-left: -200px;
  position: absolute;
`

const ProfilePicture = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: var(--white);
  background-image: url(${props => props.avatarUrl});
  background-size: 6rem 6rem;
  box-shadow: 5px 5px 8px 0px rgba(0,0,0,0.75);
  margin: 1rem;
  opacity: 0.7;
`

const DataContainer = styled.div`
`

const Author = styled.div`
color: var(--white);
`

const SocialMediaLink = styled.div`
a{
  color: var(--soft-gray);
}
`
