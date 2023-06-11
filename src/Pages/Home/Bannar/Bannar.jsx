import React from "react";
import slideimg2 from "../../../assets/icon/undraw_compose_music_re_wpiw.svg";
import slideimg1 from "../../../assets/icon/undraw_mello_otq1.svg";
import slideimg3 from "../../../assets/icon/undraw_online_video_re_fou2.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
const Bannar = () => {
  return (
    <Swiper
      // for navigation arrow
      navigation={true}
      // for smoth
      cssMode={true}
      spaceBetween={30}
      // cursor pointer
      grabCursor={true}
      // pagination
      pagination={{
        dynamicBullets: true,
      }}
      //
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper">
      <SwiperSlide>
        <div className="min-h-screen flex ">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full items-center">
            <div className="space-y-5">
              <h1 className="text-6xl">
                Unlock the <br /> Melodies Within <br /> You
              </h1>
              <p>
                Music has the power to unleash the hidden melodies within every
                individual. Explore the world of music and discover your true
                potential. Our comprehensive learning programs cater to all
                levels, from beginners to advanced musicians
              </p>
              <button className="btn ">Explore</button>
            </div>
            <div>
              <img className="w-full" src={slideimg1} alt="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="min-h-screen flex ">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full items-center">
            <div className="space-y-5">
              <h1 className="text-6xl">
                Embark on <br /> a Harmonious <br /> Adventure
              </h1>
              <p>
                Dive into the enchanting realm of music and embark on a
                harmonious adventure. Learn to play various instruments, from
                classics like the piano and guitar to unique instruments from
                around the world. Discover the joy of creating beautiful
                melodies,
              </p>
              <button className="btn">Explore</button>
            </div>
            <div>
              <img className="w-full" src={slideimg2} alt="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="min-h-screen flex ">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full items-center">
            <div className="space-y-5">
              <h1 className="text-6xl">
                Unleash Your <br /> Creativity
              </h1>
              <p>
                Music is a canvas where you can paint your emotions, thoughts,
                and stories. Unleash your creativity and learn the art of
                songwriting and composition. Develop your unique musical voice
                and explore different genres and styles
              </p>
              <button className="btn">Explore</button>
            </div>
            <div>
              <img className="w-full" src={slideimg3} alt="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Bannar;
