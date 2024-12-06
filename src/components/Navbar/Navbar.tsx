import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "src/assets/logo.png";
import { path } from "src/constants/path";
import { styled } from "styled-components";
const NavbarWrapper = styled.div<{ $isScrolled?: boolean }>`
  background-color: ${(props) =>
    props.$isScrolled ? "#fff" : props.theme.colors.secondary};
  border-bottom: 1px solid #000;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  transition: background-color 300ms ease-in-out;
  .main-navbar {
    max-width: 1320px;
    width: 100%;
    padding: 12px 24px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .main-navbar-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
    .main-navbar-title {
      font-weight: 500;
      font-size: 32px;
      letter-spacing: 2px;
      color: #000;
      text-decoration: none;
    }
  }

  .main-navbar-list {
    display: flex;
    gap: 36px;
    align-items: center;
    list-style-type: none;
    .main-navbar-item {
      color: #000;
      font-weight: 700;
      &-link {
        color: #000;
        text-decoration: none;
        padding: 5px 15px;
        &:hover {
          color: ${(props) => props.theme.colors.normalGreenHover};
          transition: color 500ms ease-in-out;
        }
      }
    }
  }
`;
const DropdownWrapper = styled.div`
  position: relative;
  &:hover > div {
    color: ${(props) => props.theme.colors.normalGreenHover};
    transition: 0.2s ease-in-out;
    opacity: 1;
    visibility: visible;
  }
`;
const DropdownButton = styled.div`
  background-color: transparent;
  color: #000;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.colors.normalGreenHover};
    transition: color 500ms ease-in-out;
  }
`;
const DropdownMenu = styled.div`
  opacity: 0;
  visibility: hidden; /* Ẩn menu mặc định */
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;
  z-index: 1000;
  width: 250px;

  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  transition: 0.2s ease-in-out;
  .dropdown-item {
    text-decoration: none;
    padding: 15px 15px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.darkGrey};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    &:hover {
      background-color: ${(props) => props.theme.colors.whiteF5};
      color: ${(props) => props.theme.colors.normalGreenHover};
    }
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      console.log(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <NavbarWrapper $isScrolled={isScrolled}>
      <div className="main-navbar">
        <div className="main-navbar-logo">
          <img src={Logo} alt="" />
          <NavLink to={path.HOMEPAGE} className="main-navbar-title">
            Noble Gem
          </NavLink>
        </div>
        <div className="main-navbar-content">
          <ul className="main-navbar-list">
            <li className="main-navbar-item">
              <DropdownWrapper>
                <DropdownButton>
                  Trang Sức <DownOutlined />
                </DropdownButton>
                <DropdownMenu>
                  <NavLink className="dropdown-item" to={path.EARRING}>
                    Bông Tai
                    <RightOutlined />
                  </NavLink>
                  <NavLink className="dropdown-item" to={path.BRACELET}>
                    Vòng Tay <RightOutlined />
                  </NavLink>
                  <NavLink className="dropdown-item" to={path.NECKLACE}>
                    Dây Chuyền
                    <RightOutlined />
                  </NavLink>
                </DropdownMenu>
              </DropdownWrapper>
            </li>
            <li className="main-navbar-item">
              <NavLink className="main-navbar-item-link" to={path.CONTACT}>
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
