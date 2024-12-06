import styled from "styled-components";

const ContactContainer = styled.div`
  margin-top: 75px;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .contact-content {
    display: flex;
    flex-direction: column;
    padding: 25px 40px;
    gap: 15px;
    .main-title {
      text-align: center;
      font-size: 30px;
      font-weight: 700;
      padding: 25px;
      color: #747474;
    }
    .contact-info {
      color: #747474;
      letter-spacing: 1px;
      line-height: 25px;
    }
  }
`;
const Contact = () => {
  return (
    <ContactContainer>
      <div className="contact-content">
        <span className="main-title">Noble Gem</span>
        <div className="contact-info">
          <strong>Địa chỉ: </strong> 624 Đ. Âu Cơ, Phường 10, Tân Bình, Hồ Chí
          Minh, Việt Nam
        </div>
        <div className="contact-info">
          <strong>Email: </strong> noblegem@gmail.com
        </div>
        <div className="contact-info">
          <strong>Phone: </strong>(123) 456-7890
        </div>
        <div className="contact-info">
          <strong>Thời gian làm việc: </strong>8:00 AM - 18:00PM
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3526945517383!2d106.63876847457504!3d10.784275959049811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4517c4d0b7%3A0xfcf7d73ad2fab64!2zNjI0IMSQLiDDgnUgQ8ahLCBQaMaw4budbmcgMTAsIFTDom4gQsOsbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1733492669277!5m2!1svi!2s"
        width={1000}
        height={500}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </ContactContainer>
  );
};

export default Contact;
