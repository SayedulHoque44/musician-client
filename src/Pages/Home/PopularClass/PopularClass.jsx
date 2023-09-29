import React from "react";
// Import Swiper React components
import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Rating } from "@smastrom/react-rating";
import { useQuery } from "@tanstack/react-query";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { EffectCoverflow, Pagination } from "swiper";
import { myAxios } from "../../../Hooks/useAxiosSecure";

const PopularClass = () => {
  //
  const { data: popularClass = [], isLoading } = useQuery({
    queryKey: ["popularClass"],
    queryFn: async () => {
      const response = await myAxios.get("/popularClass");
      return response.data;
    },
  });
  //
  //   console.log(popularClass);
  return (
    <div className="py-20" id="popularClass">
      <h1 className="my-3 text-4xl text-center animate__animated animate__tada">
        {" "}
        Our Popular Class
      </h1>
      <Slide direction="up" triggerOnce>
        <div className="py-20 animate__animated animate__bounceInUp">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            // centeredSlides={true}
            // slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            //
            // responsive
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              830: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1424: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper">
            {popularClass.slice(0, 6).map((item) => (
              <SwiperSlide key={item._id}>
                <div className="card w-full bg-base-100 shadow-xl">
                  <figure>
                    <img
                      className="h-[355px] w-full object-cover"
                      src={item.imageUrl}
                      alt="img"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-2xl">
                      {item.name}
                      <div className="badge badge-secondary">Popular</div>
                    </h2>

                    <p className="text-gray-500"> {item.instructorName}</p>
                    <p className="font-semibold text-warning">
                      Enrolled : {item.enrolled}{" "}
                    </p>
                    <Link to={"/classes"} className="btn bg-violet-600 mb-3">
                      See more
                    </Link>
                    <div className="flex justify-between ">
                      <p className="text-[#7c3aed] font-semibold text-xl">
                        $ {item.price}
                      </p>
                      <div className="flex">
                        {<Rating style={{ maxWidth: 95 }} value={3} readOnly />}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Slide>
    </div>
  );
};

export default PopularClass;
