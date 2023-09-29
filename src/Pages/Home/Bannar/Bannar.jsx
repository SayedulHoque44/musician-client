import "animate.css";
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
import { Typewriter } from "react-simple-typewriter";
import { Autoplay, Navigation, Pagination } from "swiper";
const Bannar = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        ' text-[#7c3aed] ">' +
        (index + 1) +
        "</span>"
      );
    },
  };
  return (
    <Swiper
      // for navigation arrow
      loop={true}
      navigation={true}
      // for smoth
      cssMode={true}
      spaceBetween={30}
      // cursor pointer
      grabCursor={true}
      // pagination
      pagination={pagination}
      //
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper">
      <SwiperSlide>
        <div className="min-h-screen md:max-h-screen flex overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full items-center">
            <div className="pt-8 space-y-5 animate__animated animate__fadeInLeftBig px-5 md:pt-0">
              <h1 className="md:text-6xl text-2xl md:mr-48">
                <Typewriter
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  cursorColor="#7c3aed"
                  words={["Unlock the Melodies Within You"]}
                />
              </h1>

              <p className="text-xs md:text-[17px] tracking-wide leading-6 ">
                Music has the power to unleash the hidden melodies within every
                individual. Explore the world of music and discover your true
                potential. Our comprehensive learning programs cater to all
                levels, from beginners to advanced musicians
              </p>
              <button className="btn ">Explore</button>
            </div>

            <div className="flex items-center justify-center">
              <img
                className="h-80  animate__animated animate__fadeInRightBig"
                src={slideimg1}
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="min-h-screen md:max-h-screen flex overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full items-center">
            <div className="pt-8 space-y-5 animate__animated animate__fadeInLeftBig px-5 md:pt-0">
              <h1 className="md:text-6xl text-2xl md:mr-48">
                <Typewriter
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  cursorColor="#7c3aed"
                  words={["Embark on a Harmonious Adventure"]}
                />
              </h1>
              <p className="text-xs md:text-[17px] tracking-wide leading-6">
                Dive into the enchanting realm of music and embark on a
                harmonious adventure. Learn to play various instruments, from
                classics like the piano and guitar to unique instruments from
                around the world. Discover the joy of creating beautiful
                melodies,
              </p>
              <button className="btn">Explore</button>
            </div>

            <div className="flex items-center justify-center">
              <img
                className="h-80 animate__animated animate__fadeInRightBig"
                src={slideimg2}
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="min-h-screen md:max-h-screen flex overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full items-center">
            <div className="pt-8 space-y-5 animate__animated animate__fadeInLeftBig px-5 md:pt-0">
              <h1 className="md:text-6xl text-2xl md:mr-48">
                <Typewriter
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  cursorColor="#7c3aed"
                  words={["Unleash Your Creativity"]}
                />
              </h1>
              <p className="text-xs md:text-[17px] tracking-wide leading-6">
                Music is a canvas where you can paint your emotions, thoughts,
                and stories. Unleash your creativity and learn the art of
                songwriting and composition. Develop your unique musical voice
                and explore different genres and styles
              </p>
              <button className="btn">Explore</button>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="h-80 animate__animated animate__fadeInRightBig"
                src={slideimg3}
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Bannar;
