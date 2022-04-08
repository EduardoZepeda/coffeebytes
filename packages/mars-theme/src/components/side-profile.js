import { styled, connect } from 'frontity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import Link from './link'

const SideProfile = ({ state }) => {
  const iconSize = 'sm'
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]

  return (
    <ProfileContainer>
      <Profile>
        <ProfilePicture avatarUrl={author.avatar_urls['96']} />
        <DataContainer>
          <Author>{author.name}</Author>
          <SocialMediaLink><Link link={state.socialMedia.website}><FontAwesomeIcon icon={faGlobe} size={iconSize} /><small> Sitio web</small></Link></SocialMediaLink>
          <SocialMediaLink><Link link={state.socialMedia.twitter}><FontAwesomeIcon style={{ color: '#00acee ' }} icon={faTwitter} size={iconSize} /><small> Twitter</small></Link></SocialMediaLink>
        </DataContainer>
      </Profile>
    </ProfileContainer>
  )
}

export default connect(SideProfile)

const ProfileContainer = styled.aside`
  position: sticky;
  top: 4rem;
  @media (max-width: 1024px) {
  position: static;
  }
`

const Profile = styled.section`
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
  background-color: var(--title);
  background-image: url(${props => props.avatarUrl});
  background-size: 6rem 6rem;
  box-shadow: 5px 5px 8px 0px rgba(0,0,0,0.75);
  margin: 1rem;
`

const DataContainer = styled.div`
`

const Author = styled.div`
`

const SocialMediaLink = styled.div`
`
