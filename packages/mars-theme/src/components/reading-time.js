import { styled } from 'frontity'

const ReadingTime = ({ content }) => {
  return (<ReadTime><b>Tiempo de lectura: {content ? Math.ceil(content.rendered.split(' ').length / 225) : null} minutos</b></ReadTime>)
}

export default ReadingTime

const ReadTime = styled.div`
  font-size: 0.9em;
  border: 1px solid;
  border-radius: 4px;
  padding: 0 10px;
  display: flex;
  width: max-content;
  margin-top: 14px;
  color: var(--secondary-text);
`
