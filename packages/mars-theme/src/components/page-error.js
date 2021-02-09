import { styled, connect } from "frontity";
import Link from "./link";

const description404 = (
  <>
    ¿Por qué no pruebas nuestros post más recientes?{" "}
    <span role="img" aria-label="confused face">
      
    </span>
  </>
);

const description = (
  <>
    Don&apos;t panic! Seems like you encountered an error. If this persists,
    <a href="https://community.frontity.org"> let us know </a> or try refreshing
    your browser.
  </>
);

// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);

  const title = "Ops! Un error feo por aquí";
  const title404 = "404, no hay nada... ☕";

  return (
    <Container>
      <Title>{data.is404 ? title404 : title}</Title>
      <Description>{data.is404 ? description404 : description}</Description>
      <Link link={""}><RecentPostsButton>Quiero verlos</RecentPostsButton></Link>
    </Container>
  );
};

export default connect(Page404);

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: #FFF;
  font-size: 3em;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: #FFF;
  margin: 48px 0;
`;

const RecentPostsButton = styled.button`
  color: #FFF;
  margin: 24px 0;
  background-color: #F3B433;
  border: 0px;
  padding: 1.5rem;
  border-radius: 2px;
  font-size: 1rem;
`;
