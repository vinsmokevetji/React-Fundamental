import styled from "styled-components";
import Woman from "src/assets/woman-temp.jpeg";
const HomePageContentContainer = styled.div`
  border-top: 1px solid #adadad;
  background-color: #f7eee5;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
`;
const HomePageContentLeft = styled.div`
  width: 450px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;
const HomePageContentRight = styled.div`
  width: 500px;
`;
const HomePageContentHeading = styled.div`
  font-size: 35px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.normalGreenHover};
  line-height: 35px;
  padding: 10px 15px;
`;
const HomePageContentDescription = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.darkGrey};
  letter-spacing: 0.5px;
  line-height: 25px;
`;
const HomePageContent = () => {
  return (
    <HomePageContentContainer>
      <HomePageContentLeft>
        <img src={Woman} alt="" />
      </HomePageContentLeft>
      <HomePageContentRight>
        <HomePageContentHeading>TRIẾT LÝ CỦA CHÚNG TÔI</HomePageContentHeading>
        <HomePageContentDescription>
          Lấy cảm hứng từ vẻ đẹp thanh thoát của bầu trời và dựa trên sức bền bỉ
          của đất, các sản phẩm đá quý của chúng tôi được thiết kế nhẹ nhàng và
          tinh tế như không khí, nhưng được chế tác bằng vật liệu có thể vượt
          qua thử thách của thời gian. Mỗi sản phẩm đều mang trong mình bản chất
          của thiên nhiên – độc đáo, vượt thời gian và bền bỉ – để bạn có thể kỷ
          niệm những khoảnh khắc của cuộc sống bằng những món đồ trang sức tồn
          tại suốt đời.
        </HomePageContentDescription>
      </HomePageContentRight>
    </HomePageContentContainer>
  );
};

export default HomePageContent;
