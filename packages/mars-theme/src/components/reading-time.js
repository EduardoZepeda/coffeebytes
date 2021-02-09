import { styled } from "frontity";

const ReadingTime = ({ content }) => {

    return (<ReadTime><b>Tiempo de lectura: {content ? Math.ceil(content.rendered.split(" ").length/160): null} minutos</b></ReadTime>)

};

export default ReadingTime

const ReadTime = styled.p`
  color: #A2A2A2;
  font-size: 0.9em;
  margin: 0;
`;