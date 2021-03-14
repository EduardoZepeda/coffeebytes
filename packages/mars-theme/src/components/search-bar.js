import { connect, styled, Global } from "frontity";
import Link from "./link";
import { Icon } from 'react-icons-kit'
import { androidSearch } from 'react-icons-kit/ionicons/androidSearch'

const SearchBar = ({ state, actions }) => {
    const { isSearchBarOpen } = state.theme;

    return (
        <>
        <SearchBarContainer onClick={actions.theme.toggleSearchBar}>
          {isSearchBarOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={{ body: { overflowY: "hidden" } }} />
          </>
        ) : (
          <Icon icon={androidSearch} size={24}/>
        )}
        </SearchBarContainer>
        {isSearchBarOpen && <SearchBarOverlay id="search-bar-overlay" onClick={actions.theme.toggleSearchBar}>
            <form onSubmit={actions.theme.searchQuery}>
                <SearchInput onChange={actions.theme.setSearchQuery} placeholder={state.theme.lang==="en"? "I'm searching for...": "Quiero leer sobre..." } value={state.theme.searchQuery} id="search" type="text"/>
                <SearchButton value={state.theme.lang==="en"? "Search": "Buscar" } type="submit"/>
            </form>
        </SearchBarOverlay>}
        </>
        )

};

export default connect(SearchBar);

const SearchBarContainer = styled.div`
  color: #FFF;
  padding: 4px;
  align-self: end;
  text-align: center;
  @media (max-width: 560px) {
    margin: 16px 16px;
  }
`;

const SearchInput = styled.input`
    background-color: 0;
    border: 0px;
    color: #181818;
    padding: 1rem;
    border-radius: 2px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 1rem;
`;

const SearchButton = styled.input`
    background-color: #F3B433;
    color: #181818;
    margin: 0;
    border: 0px;
    padding: 1rem;
    padding: 1rem;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    font-size: 1rem;
`;


const SearchBarOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818CC;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

