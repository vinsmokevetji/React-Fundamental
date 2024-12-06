import styled from "styled-components";
import BannerBackground from "src/assets/banner-background.jpg";
const HomePageBannerContainer = styled.div`
  position: relative;
`;
const HomePageBannerLeft = styled.div`
  width: 100%;
  right: 0;
  top: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const HomePageBannerHeading = styled.div`
  font-size: 35px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 45px;
  font-family: "Roboto Mono";
`;
const HomePageBannerDescription = styled.div`
  padding-top: 10px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.lightGrey};
  line-height: 35px;
`;
const HomePageBannerRight = styled.div`
  width: 650px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  padding: 50px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HomePageBanner = () => {
  return (
    <HomePageBannerContainer>
      <HomePageBannerLeft>
        <img src={BannerBackground} alt="" />
      </HomePageBannerLeft>
      <HomePageBannerRight>
        <HomePageBannerHeading>
          Trang sức cao cấp lấy cảm hứng từ thiên nhiên
        </HomePageBannerHeading>
        <HomePageBannerDescription>
          Noble Gem là thương hiệu trang sức cao cấp lấy cảm hứng từ vẻ đẹp của
          bầu trời và sự bền bỉ của đất. Các sản phẩm của Noble Gem được thiết
          kế với sự tinh tế và nhẹ nhàng, mang đến cho người đeo vẻ đẹp thanh
          lịch và sang trọng.
        </HomePageBannerDescription>
      </HomePageBannerRight>
    </HomePageBannerContainer>
  );
};

export default HomePageBanner;
