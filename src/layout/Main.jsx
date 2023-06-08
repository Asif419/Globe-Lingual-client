import { Outlet } from "react-router-dom";
import Container from '../pages/Shared/Container/Container';
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Main = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>GlobeLingual | Home</title>
      </Helmet>

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