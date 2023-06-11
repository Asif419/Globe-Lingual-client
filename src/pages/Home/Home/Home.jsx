import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";
import HeadLineTwo from "../HeadLine/HeadLineTwo";
import PopularClasses from "../PopularClass/PopularClasses";
import HeadLine from "../Headline/Headline";
import HeadLineThree from "../HeadLine/HeadLineThree";
import Reviews from "../Reviews/Reviews";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>GlobeLingual | Home</title>
      </Helmet>

      <Banner></Banner>
      <HeadLine></HeadLine>
      <Slider></Slider>
      <HeadLineTwo></HeadLineTwo>
      <PopularClasses></PopularClasses>
      <HeadLineThree></HeadLineThree>
      <Reviews></Reviews>
    </>
  );
};

export default Home;