import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { useQuery } from "@tanstack/react-query";
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
    <div className="py-20" data-theme="dark">
      <h1 className="my-3 text-4xl text-center"> Our Popular Class</h1>
      <div className="py-20">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper">
          {popularClass.slice(0, 6).map((item) => (
            <SwiperSlide key={item._id}>
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-[200px] w-full object-cover"
                    src={item.imageUrl}
                    alt="img"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-secondary">Popular</div>
                  </h2>
                  <p className="font-semibold">Enrolled : {item.enrolled} </p>
                  <p></p>
                  <p>Instructor Name : {item.instructorName}</p>
                  <Link to={"/classes"} className="btn bg-violet-600 mb-3">
                    See more
                  </Link>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">rating: 4.5</div>
                    <div className="badge badge-outline">
                      Price : {item.price}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularClass;
