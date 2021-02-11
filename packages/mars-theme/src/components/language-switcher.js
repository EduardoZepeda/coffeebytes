import { connect, styled } from "frontity";

const LanguageSwitcher = ({ state }) => {

    return (
        <LanguageSwitchContainer>
          <a href={state.theme.lang==="es"? "/en/": "/"} aria-current={state.theme.lang==="es"? "Cambia el lenguaje a inglés": "Change language to spanish"}>
            {state.theme.lang==="es"? "English": "Español"}</a>
        </LanguageSwitchContainer>
    )

};

export default connect(LanguageSwitcher);

const LanguageSwitchContainer = styled.div`
  display: inline-block;
  line-height: 2em;
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
`;