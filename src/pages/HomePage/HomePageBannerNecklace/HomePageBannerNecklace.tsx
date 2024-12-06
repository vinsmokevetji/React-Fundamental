import { IonIcon } from "@ionic/react";
import { NavLink } from "react-router-dom";
import { path } from "src/constants/path";
import styled from "styled-components";
import { chevronForwardOutline } from "ionicons/icons";
import Necklace1 from "src/assets/necklace-1.png";
import Necklace2 from "src/assets/necklace-2.png";
import Necklace3 from "src/assets/necklace-3.png";
import Necklace4 from "src/assets/necklace-4.png";

const HomePageBannerNecklaceContainer = styled.div`
  width: 100%;
  height: 650px;
  background-color: ${(props) => props.theme.colors.whiteF5};
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
          border-radius: 8px;
          background-color: #fff;
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
        background-color: rgba(230, 227, 227, 0.5);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      }
    }
  }
`;
const HomePageBannerNecklace = () => {
  return (
    <HomePageBannerNecklaceContainer>
      <NavLink to={path.NECKLACE} className="banner-heading">
        Dây Chuyền <IonIcon icon={chevronForwardOutline}></IonIcon>
      </NavLink>
      <div className="list-product">
        <div className="product-item">
          <div className="product-item-image">
            <img src={Necklace1} alt="" />
          </div>
          <span className="product-item-name">Ocean Breeze</span>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <img src={Necklace2} alt="" />
          </div>
          <span className="product-item-name">Forest Harmony</span>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <img src={Necklace3} alt="" />
          </div>
          <span className="product-item-name">Sunset Glow</span>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <img src={Necklace4} alt="" />
          </div>
          <span className="product-item-name">Moonlit Path</span>
        </div>
      </div>
    </HomePageBannerNecklaceContainer>
  );
};

export default HomePageBannerNecklace;
