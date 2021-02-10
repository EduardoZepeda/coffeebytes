import { styled } from "frontity";
import Link from "./link";

const EmptySearch = () => {

    return (
        <>
           <h3>No encontramos nada, ¿por qué no visitas nuestras publicaciones recientes?</h3> 
           <Link link={"/"}><EmptySearchButton>Ver publicaciones recientes</EmptySearchButton></Link>
        </>
        )

};

export default EmptySearch;

const EmptySearchButton = styled.button`
    background-color: #F3B433;
    color: #181818;
    margin: 0;
    border: 0px;
    padding: 1rem;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 2px;
`;