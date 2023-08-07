import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { useQuery } from "@tanstack/react-query";
import { Slide } from "react-awesome-reveal";
import { EffectCube, Pagination } from "swiper";
import { myAxios } from "../../../Hooks/useAxiosSecure";
const PopularInstructor = () => {
  //
  //
  const { data: pupularInstructor = [], isLoading } = useQuery({
    queryKey: ["pupularInstructor"],
    queryFn: async () => {
      const response = await myAxios.get("/pupularInstructor");
      return response.data;
    },
  });
  //
  //   console.log(pupularInstructor);
  return (
    <div className="py-20 overflow-hidden" id="popularInstructor">
      <h1 className="my-3 text-4xl text-center"> Our Popular Instructor</h1>
      <Slide direction="up" triggerOnce>
        <div className="py-20 ">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper md:w-1/2 w-[80%]">
            {pupularInstructor.slice(0, 6).map((item) => (
              <SwiperSlide key={item._id}>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                  <figure className=" md:h-[400px] h-[300px]">
                    <img
                      className="w-full object-cover"
                      src={item.image}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.Name}</h2>
                    <p>
                      Music is the greatest communication in the world. Even if
                      people don't understand the language that you're singing
                      in, they still know good music when they hear it
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Details</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/*  */}
          </Swiper>
        </div>
      </Slide>
    </div>
  );
};

export default PopularInstructor;
