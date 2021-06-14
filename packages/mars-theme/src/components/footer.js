import { styled, connect } from "frontity";
import SocialMedia from "./social-media";
import Link from "./link";

const Footer = ({state}) => {

    return (
        <FooterContainer>
            <PrivacyPolicy><Link link={"/politica-de-privacidad/"}>{state.theme.lang==="en"? "Privacy Policy": "Política de privacidad"}</Link></PrivacyPolicy>
            <SocialMedia/>
        </FooterContainer>
        )

};

export default connect(Footer);


const FooterContainer = styled.footer`
  display: flex;
  height: 200px;
  align-items: center;
  color: #FFF;
  background-color: #131313;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const PrivacyPolicy = styled.div`
  margin: 1rem;
  font-size: 1rem;
`;
