import { styled, connect, Global } from 'frontity'
import { CloseIcon, HamburgerIcon } from './menu-icon'
import MenuModal from './menu-modal'

function MobileMenu ({ state, actions }) {
  const { isMobileMenuOpen } = state.theme
  return (
    <>
      <MenuToggle onClick={actions.theme.handleToggleMobileMenu}>
        {isMobileMenuOpen
          ? (
            <>
              {/* Add some style to the body when menu is open,
              to prevent body scroll */}
              <Global styles={{ body: { overflowY: 'hidden' } }} />
              <CloseIcon size='20px' />
            </>)
          : (
            <HamburgerIcon size='24px' />
            )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal />}
    </>
  )
}

const MenuToggle = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  background: transparent;
  border: 0;
  color: var(--title);
  z-index: 5;
  height: 40px;
  width: 40px;
  display: none;

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default connect(MobileMenu)
