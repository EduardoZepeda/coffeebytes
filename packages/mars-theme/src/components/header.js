import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

const Description = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  color: #F3B433;
  font-family: sans;
  font-weight: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
