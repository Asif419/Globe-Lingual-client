import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import one from '../../../assets/image/language/one.jpg';
// import two from '../../../assets/image/language/two.jpg';
import three from '../../../assets/image/language/three.jpg';
import four from '../../../assets/image/language/four.jpg';

import { Pagination } from "swiper";
import { Link } from "react-router-dom";


const Slider = () => {

  return (
    <div className="text-white">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="py-10">
          <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${one})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5  text-3xl md:text-5xl font-bold">All Exciting Classes</h1>
                <p className="mb-5 sm:text-xs md:text-base">Discover a world of language learning with Globe Lingual. Our courses offer a comprehensive and immersive experience, helping you master new languages effortlessly.</p>
                <Link to='/classes'><button className="btn btn-primary">All Courses</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${four})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5  text-3xl md:text-5xl font-bold">Best Teachers</h1>
                <p className="mb-5 sm:text-xs md:text-base">At Globe Lingual, our instructors are language enthusiasts dedicated to guiding you on your language learning journey. With their expertise and passion, they create engaging and interactive lessons that make learning enjoyable.</p>
                <Link to='/instructors'><button className="btn btn-primary">Instructors</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${three})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5  text-3xl md:text-5xl font-bold">Mange Dashboard</h1>
                <p className="mb-5 sm:text-xs md:text-base">Unlock the world of languages with Globe Lingual - your destination for immersive language learning and cultural exploration.</p>
                <Link to='/dashboard'><button className="btn btn-primary">DASHBOARD</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;