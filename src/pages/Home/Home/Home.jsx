import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";
import Header from "../../Shared/Header/Header";
import HeadLine from "../HeadLine/HeadLine";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>GlobeLingual | Home</title>
      </Helmet>

      <Banner></Banner>
      <HeadLine></HeadLine>
      <Slider></Slider>
    </>
  );
};

export default Home;