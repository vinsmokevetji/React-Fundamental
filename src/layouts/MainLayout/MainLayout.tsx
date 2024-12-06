import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
type TMainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: TMainLayoutProps) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
