import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";

const Cart = () => {
  const { isEmpty, cartTotal, items, removeItem, totalItems } = useCart();

  return (
    <div>
      <NavBar />
      <div className="courseBreadcrumb">
        <div className="container py-5 text-secondary">
          <span> Home &gt; Cart </span>
        </div>
      </div>
      <div className="secondaryBgColor py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="cart">
                {isEmpty ? (
                  <h1 className="fs-5 fw-bold">Your cart is empty</h1>
                ) : (
                  <span className="fs-5 fw-bold">
                    {totalItems} Course In Cart
                  </span>
                )}

                {items.map((i) => (
                  <div className="cart py-3">
                    <div className="cartBox d-flex  bg-white">
                      <img
                        className="w-25"
                        // width="200px"
                        src={i?.preview?.url}
                        alt="Cart"
                      />
                      <div className="p-3">
                        <p className="fs-5">{i.name}</p>
                        <p className="text-secondary">By {i.user}</p>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-5">${i.price}</p>
                          <span onClick={() => removeItem(i.id)}>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 4.2002H3.6H16.4"
                                stroke="#666575"
                                stroke-width="1.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M6.00059 4.2V2.6C6.00059 2.17565 6.16916 1.76869 6.46922 1.46863C6.76927 1.16857 7.17624 1 7.60059 1H10.8006C11.2249 1 11.6319 1.16857 11.932 1.46863C12.232 1.76869 12.4006 2.17565 12.4006 2.6V4.2M14.8006 4.2V15.4C14.8006 15.8243 14.632 16.2313 14.332 16.5314C14.0319 16.8314 13.6249 17 13.2006 17H5.20059C4.77624 17 4.36927 16.8314 4.06922 16.5314C3.76916 16.2313 3.60059 15.8243 3.60059 15.4V4.2H14.8006Z"
                                stroke="#666575"
                                stroke-width="1.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M7.60059 8.2002V13.0002"
                                stroke="#666575"
                                stroke-width="1.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M10.8018 8.2002V13.0002"
                                stroke="#666575"
                                stroke-width="1.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="CartSummery">
                <span className="fs-5 fw-bold">Summery</span>
                <div className="bg-white p-4 my-3 rounded">
                  <div className="d-flex align-items-center justify-content-between text-secondary">
                    <span>Subtotal</span>
                    <span>${cartTotal}</span>
                  </div>
                  <hr />

                  <div className="d-flex align-items-center justify-content-between fs-5 fw-bold">
                    <span>Total</span>
                    <span>${cartTotal}</span>
                  </div>
                  <Link
                    to="/checkout"
                    className="primaryBgColor mt-4 mb-2 d-block px-4 py-3 text-white text-center fw-bolder rounded text-uppercase"
                  >
                    Checkout
                  </Link>
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

export default Cart;
