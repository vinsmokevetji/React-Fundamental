import { IonIcon } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import { NavLink } from "react-router-dom";
import Braclet1 from "src/assets/braclet-1.png";
import Braclet2 from "src/assets/braclet-2.png";
import Braclet3 from "src/assets/braclet-3.png";
import Braclet4 from "src/assets/braclet-4.png";
import { path } from "src/constants/path";
import styled from "styled-components";

const HomePageBannerBracletContainer = styled.div`
  width: 100%;
  height: 650px;
  border-top: 1px solid #ccc;
  background-color: ${(props) => props.theme.colors.pink};
  .banner-heading {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    font-weight: 700;
    letter-spacing: 2px;
    text-decoration: none;
    padding: 20px 10px;
    color: ${(props) => props.theme.colors.darkGrey};
  }
  .list-product {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 25px;
    .product-item {
      display: flex;
      justify-content: start;
      align-items: center;
      flex-direction: column;
      width: 300px;
      height: 550px;
      flex-shrink: 0;
      flex-grow: 1;
      gap: 20px;
      transition: 0.2s ease-in-out;
      padding-bottom: 25px;
      &-image {
        width: 100%;
        height: 450px;
        padding: 5px 8px;
        img {
          background-color: #fff;
          border-radius: 8px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &-name {
        font-size: 25px;
        font-weight: 500;
        letter-spacing: 1.5px;
      }
      &:hover {
        background-color: rgba(250, 209, 209, 0.5);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      }
    }
  }
`;
const HomePageBannerBraclet = () => (
  <HomePageBannerBracletContainer>
    <NavLink to={path.BRACELET} className="banner-heading">
      Vòng Tay <IonIcon icon={chevronForwardOutline}></IonIcon>
    </NavLink>
    <div className="list-product">
      <div className="product-item">
        <div className="product-item-image">
          <img src={Braclet1} alt="" />
        </div>
        <span className="product-item-name">Mystic Twist</span>
      </div>
      <div className="product-item">
        <div className="product-item-image">
          <img src={Braclet2} alt="" />
        </div>
        <span className="product-item-name">Silver Serenity</span>
      </div>
      <div className="product-item">
        <div className="product-item-image">
          <img src={Braclet3} alt="" />
        </div>
        <span className="product-item-name">Velvet Glow</span>
      </div>
      <div className="product-item">
        <div className="product-item-image">
          <img src={Braclet4} alt="" />
        </div>
        <span className="product-item-name">Luna Lace </span>
      </div>
    </div>
  </HomePageBannerBracletContainer>
);

export default HomePageBannerBraclet;
