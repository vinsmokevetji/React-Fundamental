import { IonIcon } from "@ionic/react";
import { logoFacebook, logoInstagram } from "ionicons/icons";
import Logo from "src/assets/logo.png";
import { theme } from "src/constants/theme";
import styled from "styled-components";
const FooterWrapper = styled.footer`
  background-color: #f9f9f9;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 5rem;
  padding-right: 5rem;
  border-top: 1px solid #474747;
  display: grid;
  grid-template-columns: 0.5fr 0.2fr 1fr;
  justify-content: center;
  align-items: center;
  height: 250px;
`;
const FooterLogo = styled.div`
  display: flex;
  padding-left: 50px;
  justify-content: start;
  align-items: center;
  transform: translateY(-100%);
  gap: 12px;
  min-width: 250px;
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  .logo-title {
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 1px;
    /* font-family: "Noe Display"; */
    color: #000;
    text-decoration: none;
  }
`;
const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  transform: translateY(-25%);
  span {
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.lightGrey};
  }
  .footer-social-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`;
const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 150px;
  padding-left: 50px;
  padding-right: 50px;
  .footer-container-block {
    display: flex;
    flex-direction: column;
    color: #7f7f7f;
    font-weight: 700;
    span {
      padding: 10px;
      cursor: pointer;
    }
    span:hover {
      color: ${(props) => props.theme.colors.normalGreenHover};
      transition: color 200ms ease-in-out;
    }
  }
`;

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <FooterLogo>
          <img src={Logo} alt="" />
          <div className="logo-title">Noble Gem</div>
        </FooterLogo>
        <FooterSocial>
          <span className="footer-social-title">Follow</span>
          <div className="footer-social-logo">
            <IonIcon
              size="large"
              slot="icon-only"
              icon={logoInstagram}
              color={theme.colors.lightGrey}
            ></IonIcon>
            <IonIcon
              size="large"
              slot="icon-only"
              color={theme.colors.lightGrey}
              icon={logoFacebook}
            ></IonIcon>
          </div>
        </FooterSocial>
        <FooterContainer>
          <div className="footer-container-block">
            <span className="">Help</span>
            <span className="">Status</span>
            <span className="">Careers</span>
            <span className="">Blog</span>
          </div>
          <div className="footer-container-block">
            <span className="">About</span>
            <span className="">Privacy</span>
            <span className="">Terms</span>
            <span className="">Teams</span>
          </div>
        </FooterContainer>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
