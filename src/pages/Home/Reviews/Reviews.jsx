import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import quotation from '../../../assets/icon/quotation-marks.png';

const Reviews = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img className="h-4 w-4" src={quotation} alt="" />
            <h2 className="text-center">Globe Lingual has transformed my language learning journey. The engaging courses and supportive community!</h2>
            <hr className="my-5" />
            <div className="mb-5 flex justify-between items-center">
              <div className="flex-row">
                <p className="font-extrabold text-base">Asif Shahariar</p>
                <p className="text-sm">Engineer</p>
              </div>
              <div>
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <img src="https://i.ibb.co/yS1J0kV/asif.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="h-4 w-4" src={quotation} alt="" />
            <h2 className="text-center">Learning with Globe Lingual has been a game-changer for me. The interactive lessons and dedicated instructors</h2>
            <hr className="my-5" />
            <div className="mb-5 flex justify-between items-center">
              <div className="flex-row">
                <p className="font-extrabold text-base">David Beckham</p>
                <p className="text-sm">Footballer</p>
              </div>
              <div>
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <img src="https://i.ibb.co/sQWY0vv/anonymous.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="h-4 w-4" src={quotation} alt="" />
            <h2 className="text-center">Globe Lingual is the best language learning platform I have come across. The personalized attention and guidance from everyone</h2>
            <hr className="my-5" />
            <div className="mb-5 flex justify-between items-center">
              <div className="flex-row">
                <p className="font-extrabold text-base">Emily Johnson</p>
                <p className="text-sm">Nurse</p>
              </div>
              <div>
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <img src="https://i.ibb.co/Cm4YfDL/photo.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="h-4 w-4" src={quotation} alt="" />
            <h2 className="text-center">I am impressed with the quality of teaching at Globe Lingual. The lessons are well-structured and the instructors.</h2>
            <hr className="my-5" />
            <div className="mb-5 flex justify-between items-center">
              <div className="flex-row">
                <p className="font-extrabold text-base">John Smith</p>
                <p className="text-sm">Architect</p>
              </div>
              <div>
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <img src="https://i.ibb.co/q5hwqD5/photo-1573547429441-d7ef62e04b63.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="h-4 w-4" src={quotation} alt="" />
            <h2 className="text-center">lobe Lingual exceeded my expectations. The instructors are patient, supportive, and create a positive learning environment.</h2>
            <hr className="my-5" />
            <div className="mb-5 flex justify-between items-center">
              <div className="flex-row">
                <p className="font-extrabold text-base">Sophia Davis</p>
                <p className="text-sm">Baby Sitter</p>
              </div>
              <div>
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <img src="https://i.ibb.co/6mtDfZX/Owl.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Reviews;