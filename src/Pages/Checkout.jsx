import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";

const Checkout = () => {
  return (
    <div>
      <NavBar />
      <div className="courseBreadcrumb">
        <div className="container py-5 text-secondary">
          <span> Home &gt; Checkout </span>
        </div>
      </div>
      <div className="secondaryBgColor py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="checkoutForm">
                <div className="h5 fw-bold py-2">Checkout</div>
                <div className="bg-white p-4 rounded">
                  <div>
                    <div className="row">
                      <div className="col-md-12 text-center py-3 border-bottom border-primary border-3">
                        <svg
                          width="45"
                          height="34"
                          viewBox="0 0 45 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M39.5 2H5.75C3.67893 2 2 3.67893 2 5.75V28.25C2 30.3211 3.67893 32 5.75 32H39.5C41.5711 32 43.25 30.3211 43.25 28.25V5.75C43.25 3.67893 41.5711 2 39.5 2Z"
                            stroke="#25252E"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M2 13.25H43.25"
                            stroke="#25252E"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <div className="h6 py-2">Debit Card</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="my-4 input-group-lg">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Name on Card
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Type Here"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="my-4 input-group-lg">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Card Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Type Here"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="my-4 input-group-lg">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Expiration Date (MM/YY){" "}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Type Here"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="my-4 input-group-lg">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            CVC
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Type Here"
                          />
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/checkout"
                      className="primaryBgColor mt-4 mb-2 d-block px-4 py-3 text-white text-center fw-bolder rounded text-uppercase"
                    >
                      Confirm Payment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="checkoutForm">
                <div className="h5 fw-bold py-2">Summary</div>
                <div className="bg-white p-4 rounded">
                  <div>
                    <div className="d-flex py-2">
                      <img
                        src="https://eduguard-html.netlify.app/dist/images/checkout/01.jpg"
                        alt=""
                      />
                      <div className="px-2">
                        <div className="h5">Development Course</div>
                        <div className="text-secondary">by Emon Ahmed</div>
                        <div>$23</div>
                      </div>
                    </div>
                    {/* <hr /> */}
                    <div className="d-flex py-2">
                      <img
                        src="https://eduguard-html.netlify.app/dist/images/checkout/01.jpg"
                        alt=""
                      />
                      <div className="px-2">
                        <div className="h5">Development Course</div>
                        <div className="text-secondary">by Emon Ahmed</div>
                        <div>$23</div>
                      </div>
                    </div>
                    {/* <hr /> */}
                    <div className="d-flex align-items-center justify-content-between text-secondary pt-5 pb-4">
                      <span>Subtotal</span>
                      <span>$49.99</span>
                    </div>
                    {/* <hr /> */}

                    <div className="d-flex align-items-center justify-content-between fs-5 fw-bold">
                      <span>Total</span>
                      <span>$49.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
