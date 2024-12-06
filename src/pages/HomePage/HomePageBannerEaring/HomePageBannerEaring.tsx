import { IonIcon } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import { NavLink } from "react-router-dom";
import Earing1 from "src/assets/earing-1.jpeg";
import Earing2 from "src/assets/earing-2.jpeg";
import Earing3 from "src/assets/earing-3.jpeg";
import Earing4 from "src/assets/earing-4.jpeg";
import { path } from "src/constants/path";
import styled from "styled-components";
const HomePageBannerEaringContainer = styled.div`
  width: 100%;
  height: 650px;
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
      padding-bottom: 25px;
      transition: 0.2s ease-in-out;
      &-image {
        width: 100%;
        height: 450px;
        padding: 5px 8px;
        img {
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
        background-color: ${(props) => props.theme.colors.whiteF2};
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      }
    }
  }
`;

const HomePageBannerEaring = () => {
  return (
    <HomePageBannerEaringContainer>
      <NavLink to={path.EARRING} className="banner-heading">
        Bông Tai <IonIcon icon={chevronForwardOutline}></IonIcon>
      </NavLink>
      <div className="list-product">
        <div className="product-item">
          <div className="product-item-image">
            <img src={Earing1} alt="" />
          </div>
          <span className="product-item-name">Olive Drops</span>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <img src={Earing2} alt="" />
          </div>
          <span className="product-item-name">Sylvan Drops</span>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <img src={Earing3} alt="" />
          </div>
          <span className="product-item-name">Solara Orbs</span>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <img src={Earing4} alt="" />
          </div>
          <span className="product-item-name">Crystal Orbs</span>
        </div>
      </div>
    </HomePageBannerEaringContainer>
  );
};

export default HomePageBannerEaring;
