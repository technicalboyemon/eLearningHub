import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import StudentData from "./../../Data/StudentSays.json";
import ReactStars from "react-rating-stars-component";

import { BsStarFill } from "react-icons/bs";

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
              },
            }}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {StudentData.map((i, index) => (
              <SwiperSlide
                key={index}
                className="StudentSaysData bg-white rounded px-4 pt-4"
              >
                <div>
                  <p className="fs-5 text-secondary">{i.description}</p>
                  <div className="d-flex py-4 align-items-center justify-content-between">
                    <div className="d-flex">
                      <div>
                        <img width='45px' className="rounded-circle" src={i.image} alt="Review" />
                      </div>
                      <div className="px-2">
                        <span className="fw-bold d-inline-block">
                          {i.title}
                        </span>
                        <br />
                        <span>{i.subtitle}</span>
                      </div>
                    </div>
                    <div>
                      <ReactStars
                        count={i.rating}
                        size={24}
                        fullIcon={<BsStarFill />}
                        // activeColor="#ffd700"
                        // style={{'color':'#ffd700'}}
                        color='#ffd700'
                        edit={false}
                      />
                    </div>
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
