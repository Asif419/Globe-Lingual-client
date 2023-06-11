import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>GlobeLingual | Home</title>
      </Helmet>

      <Banner></Banner>
      <Slider></Slider>
    </>
  );
};

export default Home;