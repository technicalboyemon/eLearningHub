import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import BrowseCategoriesData from "./../../Data/Category.json";

const BrowseCategories = () => {
  const data = BrowseCategoriesData;
  console.log(data);
  return (
    <div className="container">
      <div className="mx-auto text-center my-5 py-5">
        <h1 className="fw-bolder">Browse Course With Top Categories</h1>
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
            className="mySwiper" >
            {data.map((i) => (
              <SwiperSlide className="CategoriesBox mx-2 border rounded my-5">
                <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                  <img width="75px" src={i.icon} alt="ICON" />
                  <span className="fw-bold py-1 d-inline-block">{i.title}</span>
                  <span className="d-inline-block text-secondary">{i.courses}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Link
          to="/courseList"
          className="primaryBgColor d-inline-block px-4 py-3 text-white fw-bolder rounded text-uppercase"
        >
          Browse All Course
        </Link>
      </div>
    </div>
  );
};

export default BrowseCategories;
