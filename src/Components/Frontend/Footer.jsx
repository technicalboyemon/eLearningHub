import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="border-bottom border-secondary">
        <div className="container  py-3">
          <div className="row py-5 ">
            <div className="col-md-6">
              <img
                src="https://eduguard-html.netlify.app/dist/images/logo/footerlogo.png"
                alt=""
              />
              <p className="w-75 text-secondary py-1">
                Duis posuere maximus arcu eu tincidunt. Nam rutrum, nibh vitae
                tempus venenatis, ex tortor ultricies magna.
              </p>
              <p>
                <span className="text-white">
                  <span className="fs-4 mx-2">
                    <BsFacebook />
                  </span>
                  <span className="fs-4 mx-2">
                    <BsInstagram />
                  </span>
                  <span className="fs-4 mx-2">
                    <BsTwitter />
                  </span>
                  <span className="fs-4 mx-2">
                    <BsYoutube />
                  </span>
                  <span className="fs-4 mx-2">
                    <BsLinkedin />
                  </span>
                </span>
              </p>
            </div>
            <div className="col-md-2">
              <span className="d-block py-2 text-white fs-5">Company</span>
              <span className="d-block py-1 text-secondary">About Us</span>
              <span className="d-block py-1 text-secondary">Courses</span>
              <span className="d-block py-1 text-secondary">career</span>
              <span className="d-block py-1 text-secondary">Affiliate</span>
            </div>
            <div className="col-md-2">
              <span className="d-block py-2 text-white fs-5">Support</span>
              <span className="d-block py-1 text-secondary">
                Help & Supports
              </span>
              <span className="d-block py-1 text-secondary">
                Pravacy Polocy
              </span>
              <span className="d-block py-1 text-secondary">FAQs</span>
              <span className="d-block py-1 text-secondary">Contact Us</span>
            </div>
            <div className="col-md-2">
              <span className="d-block py-2 text-white fs-5">Quick Links</span>
              <span className="d-block py-1 text-secondary">Events</span>
              <span className="d-block py-1 text-secondary">
                Become a Instructor
              </span>
              <span className="d-block py-1 text-secondary">Partnerships</span>
              <span className="d-block py-1 text-secondary">Get the app</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3">
        <div className="d-flex text-secondary justify-content-between align-items-center">
          <div className="">
            <span>© 2022 - eLearning Hub. All rights reserved</span>
          </div>
          <div className="text-end">
            <span>Go To Top</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
