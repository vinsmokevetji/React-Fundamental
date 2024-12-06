import { IonIcon } from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";
import { NavLink } from "react-router-dom";
import Earing1 from "src/assets/earing-1.jpeg";
import Earing2 from "src/assets/earing-2.jpeg";
import Earing3 from "src/assets/earing-3.jpeg";
import Earing4 from "src/assets/earing-4.jpeg";

import { path } from "src/constants/path";
import styled from "styled-components";
const EaringPageContainer = styled.div`
  margin-top: 75px;
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 25px 50px;

    .product-item {
      padding: 5px 10px;
      border: 1px solid #d7d7d7;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
      padding-bottom: 25px;
      transition: 200ms ease-in-out;
      &:hover {
        background-color: ${(props) => props.theme.colors.whiteF2};
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
          rgba(0, 0, 0, 0.23) 0px 3px 6px;
      }
    }
  }
`;
const EaringPage = () => {
  return (
    <EaringPageContainer>
      <NavLink to={path.EARRING} className="banner-heading">
        Bông Tai <IonIcon icon={chevronDownOutline}></IonIcon>
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
        <div className="product-item">
          <div className="product-item-image">
            <img src={Earing2} alt="" />
          </div>
          <span className="product-item-name">Olive Drops</span>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <img src={Earing4} alt="" />
          </div>
          <span className="product-item-name">Sylvan Drops</span>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <img src={Earing1} alt="" />
          </div>
          <span className="product-item-name">Solara Orbs</span>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <img src={Earing3} alt="" />
          </div>
          <span className="product-item-name">Crystal Orbs</span>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <img src={Earing3} alt="" />
          </div>
          <span className="product-item-name">Olive Drops</span>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <img src={Earing1} alt="" />
          </div>
          <span className="product-item-name">Sylvan Drops</span>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <img src={Earing4} alt="" />
          </div>
          <span className="product-item-name">Solara Orbs</span>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <img src={Earing2} alt="" />
          </div>
          <span className="product-item-name">Crystal Orbs</span>
        </div>
      </div>
    </EaringPageContainer>
  );
};

export default EaringPage;
