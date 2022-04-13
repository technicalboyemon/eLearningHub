import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import StudentData from "./../../Data/StudentSays.json";

const StudentsSays = () => {
  return (
    <div className="StudentSays py-5">
      <div className="container py-4">
        <h1 className="fw-bolder text-center">
          What Our Students Says <br /> About Our Services
        </h1>
        <div className="py-5 studentDataSwiper">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                // spaceBetween: 20,
              }
            }}
            spaceBetween={30}
            freeMode={true}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {StudentData.map((i) => (
              <SwiperSlide className="StudentSaysData bg-white rounded px-4 pt-4">
                <div>
                  <p className="fs-5 text-secondary">{i.description}</p>
                  <div className="d-flex py-4 align-items-center justify-content-between">
                    <div className="d-flex">
                      <div>
                        <img className="rounded-circle" src={i.image} alt="" />
                      </div>
                      <div className="px-2">
                        <span className="fw-bold d-inline-block">
                          {i.title}
                        </span>
                        <br />
                        <span>{i.subtitle}</span>
                      </div>
                    </div>
                    <div>{i.rating}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default StudentsSays;
