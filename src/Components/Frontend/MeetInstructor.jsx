import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import InstructorData from "./../../Data/Instructor.json";

const MeetInstructor = () => {
  return (
    <div className="py-5">
      <div className="container py-3">
        <h1 className="text-center fw-bolder">Meet Our Best Instructor</h1>
        <div>
          <div>
            <Swiper
              watchSlidesProgress={true}
              slidesPerView={2}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  // spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  // spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  // spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              {InstructorData.map((i) => (
                <SwiperSlide className="mx-2 my-5">
                  <div>
                    <img
                      className="w-100 h-100 position-relative"
                      src={i.image}
                      alt="Instructor"
                    />
                    <div className="instructorInfo p-3 border border-top-0">
                      <span className="fw-bold fs-5">{i.title}</span> <br />
                      <span className="d-inline-block text-secondary">
                        {i.subtitle}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetInstructor;