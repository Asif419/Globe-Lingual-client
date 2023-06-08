import { Outlet } from "react-router-dom";
import Container from '../pages/Shared/Container';
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";


const Main = () => {

  return (
    <>
      <Header></Header>
      <Container>
        <div className="min-h-[340px]">
          <div className="pt-[70px]">
            <Outlet></Outlet>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Main;