import { connect, styled } from 'frontity'
import { Icon } from 'react-icons-kit'
import { sunO } from 'react-icons-kit/fa/sunO'
import { moonO } from 'react-icons-kit/fa/moonO'

const ThemeSwitch = ({ state, actions }) => {
  const iconSize = 18
  return (
    <>
      <ToggleContainer>
        <ToggleSwitch
          onChange={(event) => actions.theme.handleToggleDarkTheme(event)}
          type='checkbox'
          id='toggle'
          checked={state.theme.themeDark}
        />
        <ToggleLabel htmlFor='toggle'>
          <IconContainer><Icon style={{ color: state.theme.themeDark ? '#161620' : 'transparent' }} icon={sunO} size={iconSize} /></IconContainer>
          <IconContainer><Icon style={{ color: state.theme.themeDark ? 'transparent' : '#161620' }} icon={moonO} size={iconSize} /></IconContainer>
        </ToggleLabel>
      </ToggleContainer>
    </>
  )
}

export default connect(ThemeSwitch)

const ToggleContainer = styled.div`
    margin-left: 24px;
`

const IconContainer = styled.div`
    margin-bottom: 3px;
`

const ToggleSwitch = styled.input`
    visibility: hidden;
    &:checked + label {
        background-color: var(--title);
        &:before {
            box-sizing: border-box;
            transform: translateX(1.5rem);
            background-color: var(--background);
        }
    }
`

const ToggleLabel = styled.label`
    display: flex;
    width: 3rem;
    height: 1.5rem;
    border: 2px solid var(--title);
    border-radius: 99em;
    position: relative;
    transform-origin: 50% 50%;
    justify-content: space-around;
    align-items: center;

    &:before {
        box-sizing: border-box;
        content: "";
        display: block;
        position: absolute;
        width: 1.1rem;
        height: 1.1rem;
        background-color: var(--title);
        border-radius: 50%;
        top: 3px;
        left: 3px;
    }
`
