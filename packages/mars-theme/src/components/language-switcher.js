import { connect, styled } from 'frontity'

const LanguageSwitcher = ({ state }) => {
  return (
    <LanguageSwitchContainer>
      <a href={state.theme.lang === 'es' ? '/en/' : '/'} aria-current={state.theme.lang === 'es' ? 'Cambia el lenguaje a inglés' : 'Change language to spanish'}>
        {state.theme.lang === 'es' ? '🇺🇸 🇬🇧' : '🇲🇽 🇪🇸'}
      </a>
    </LanguageSwitchContainer>
  )
}

export default connect(LanguageSwitcher)

const LanguageSwitchContainer = styled.div`
  line-height: 2em;
  text-align: center;
  padding: 0;
  margin: 0 16px;
  color: var(--title);
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  @media (max-width: 560px) {
    margin: 16px 16px;
  }
`
