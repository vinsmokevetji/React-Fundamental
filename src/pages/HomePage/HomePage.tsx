import HomePageBanner from "src/pages/HomePage/HomePageBanner";
import HomePageBannerBraclet from "src/pages/HomePage/HomePageBannerBraclet";
import HomePageBannerEaring from "src/pages/HomePage/HomePageBannerEaring";
import HomePageBannerNecklace from "src/pages/HomePage/HomePageBannerNecklace";
import HomePageContent from "src/pages/HomePage/HomePageContent";
import styled from "styled-components";

const HomePageContainer = styled.div`
  margin-top: 75px;
`;
const HomePage = () => {
  return (
    <HomePageContainer>
      <HomePageBanner></HomePageBanner>
      <HomePageBannerEaring></HomePageBannerEaring>
      <HomePageBannerBraclet></HomePageBannerBraclet>
      <HomePageBannerNecklace></HomePageBannerNecklace>
      <HomePageContent></HomePageContent>
    </HomePageContainer>
  );
};

export default HomePage;
