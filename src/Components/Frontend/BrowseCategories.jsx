import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const BrowseCategories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
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
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="mySwiper"
          >
            {category.map((i, index) => (
              <SwiperSlide
                key={index}
                className="CategoriesBox mx-2 border rounded my-5"
              >
                <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                  <img className="categoryIcon" width="75px" src={i.preview} alt="ICON" />
                  <span className="fw-bold py-2 h5 d-inline-block">{i.category}</span>
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
