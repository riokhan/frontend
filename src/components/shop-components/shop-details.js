import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class ShopDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__shop-details-area pb-10">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                <div className="ltn__blog-meta">
                  <ul>
                    <li className="ltn__blog-category">
                      <Link to="#">Featured</Link>
                    </li>
                    <li className="ltn__blog-category">
                      <Link className="bg-orange" to="#">
                        For Rent
                      </Link>
                    </li>
                    <li className="ltn__blog-date">
                      <i className="far fa-calendar-alt" />
                      May 19, 2021
                    </li>
                    <li>
                      <Link to="#">
                        <i className="far fa-comments" />
                        35 Comments
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="row" style={{ marginBottom: "20px" }}>
                  <div className="col-lg-8">
                    <h1>Diamond Manor Apartment</h1>
                    <label>
                      <span className="ltn__secondary-color">
                        <i className="flaticon-pin" />
                      </span>{" "}
                      Belmont Gardens, Chicago
                    </label>
                  </div>
                  <div className="col-lg-4">
                    <div className="btn-wrapper">
                      <h2>Rent $25000 /month</h2>

                      <Link to="/tour-booking" className="theme-btn-1 btn btn-effect-1">
                        Tour
                      </Link>
                      <span className="go-top">
                        <Link to="#" className="theme-btn-1 btn btn-effect-1">
                          Apply
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="ltn__neighbour-tab-wrap">
                      <div className="ltn__tab-menu ltn__tab-menu-3--- ltn__tab-menu-4 ltn__tab-menu-top-right-- text-uppercase--- text-center">
                        <div className="nav">
                          <a
                            className="active show"
                            data-bs-toggle="tab"
                            href="#liton_tab_4_1"
                          >
                            <img
                              src={publicUrl + "assets/img/neighbour/1.jpg"}
                              alt="#"
                            />
                          </a>
                          <a data-bs-toggle="tab" href="#liton_tab_4_2">
                            <img
                              src={publicUrl + "assets/img/neighbour/2.jpg"}
                              alt="#"
                            />
                          </a>
                          <a data-bs-toggle="tab" href="#liton_tab_4_3">
                            <img
                              src={publicUrl + "assets/img/neighbour/3.jpg"}
                              alt="#"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="tab-content">
                        <div
                          className="tab-pane fade active show"
                          id="liton_tab_4_1"
                        >
                          <div className="ltn__neighbour-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-8">
                                <div className="neighbour-apartments-img">
                                  <img
                                    src={
                                      publicUrl + "assets/img/neighbour/1.jpg"
                                    }
                                    alt="#"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="ltn__search-by-place-item neighbour-apartments-item">
                                  <div className="search-by-place-img">
                                    <Link to="/product-details">
                                      <img
                                        src={
                                          publicUrl +
                                          "assets/img/product-3/3.jpg"
                                        }
                                        alt="#"
                                      />
                                    </Link>
                                    <div className="search-by-place-badge">
                                      <ul>
                                        <li>9 Properties</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="search-by-place-info go-top">
                                    <h4>
                                      <Link to="/product-details">
                                        Shopping Center
                                      </Link>
                                    </h4>
                                    <label>
                                      <span className="ltn__secondary-color">
                                        1,500m{" "}
                                      </span>
                                      / 21 min. walk
                                    </label>
                                    <div className="search-by-place-brief">
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore Enim ullamco
                                        laboris.
                                      </p>
                                    </div>
                                    <div className="search-by-place-btn ">
                                      <Link to="/product-details">
                                        View Property{" "}
                                        <i className="flaticon-right-arrow" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div>
                          <button
                            type="submit"
                            className="btn theme-btn-1"
                            style={{
                              padding: "15px 230px",
                              fontSize: "18px",
                              borderRadius: "10px",
                            }}
                          >
                            Tour
                          </button>
                          <button
                            type="submit"
                            className="btn theme-btn-1"
                            style={{
                              padding: "15px 230px",
                              fontSize: "18px",
                              borderRadius: "10px",
                            }}
                          >
                            Apply
                          </button>
                        </div> */}

                        <div className="tab-pane fade" id="liton_tab_4_2">
                          <div className="ltn__neighbour-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-8">
                                <div className="neighbour-apartments-img">
                                  <img
                                    src={
                                      publicUrl + "assets/img/neighbour/2.jpg"
                                    }
                                    alt="#"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="ltn__search-by-place-item neighbour-apartments-item">
                                  <div className="search-by-place-img">
                                    <Link to="/product-details">
                                      <img
                                        src={
                                          publicUrl +
                                          "assets/img/product-3/2.jpg"
                                        }
                                        alt="#"
                                      />
                                    </Link>
                                    <div className="search-by-place-badge">
                                      <ul>
                                        <li>9 Properties</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="search-by-place-info go-top">
                                    <h4>
                                      <Link to="/product-details">
                                        Medical Hospital
                                      </Link>
                                    </h4>
                                    <label>
                                      <span className="ltn__secondary-color">
                                        1,500m{" "}
                                      </span>
                                      / 21 min. walk
                                    </label>
                                    <div className="search-by-place-brief">
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore Enim ullamco
                                        laboris.
                                      </p>
                                    </div>
                                    <div className="search-by-place-btn ">
                                      <Link to="/product-details">
                                        View Property{" "}
                                        <i className="flaticon-right-arrow" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="tab-pane fade" id="liton_tab_4_3">
                          <div className="ltn__neighbour-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-8">
                                <div className="neighbour-apartments-img">
                                  <img
                                    src={
                                      publicUrl + "assets/img/neighbour/3.jpg"
                                    }
                                    alt="#"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="ltn__search-by-place-item neighbour-apartments-item">
                                  <div className="search-by-place-img">
                                    <Link to="/product-details">
                                      <img
                                        src={
                                          publicUrl +
                                          "assets/img/product-3/4.jpg"
                                        }
                                        alt="#"
                                      />
                                    </Link>
                                    <div className="search-by-place-badge">
                                      <ul>
                                        <li>9 Properties</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="search-by-place-info go-top">
                                    <h4>
                                      <Link to="/product-details">
                                        Children Playland
                                      </Link>
                                    </h4>
                                    <label>
                                      <span className="ltn__secondary-color">
                                        1,500m{" "}
                                      </span>
                                      / 21 min. walk
                                    </label>
                                    <div className="search-by-place-brief">
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore Enim ullamco
                                        laboris.
                                      </p>
                                    </div>
                                    <div className="search-by-place-btn ">
                                      <Link to="/product-details">
                                        View Property{" "}
                                        <i className="flaticon-right-arrow" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <h4 className="title-2">Description</h4>
                <p>
                  Massa tempor nec feugiat nisl pretium. Egestas fringilla
                  phasellus faucibus scelerisque eleifend donec Porta nibh
                  venenatis cras sed felis eget velit aliquet. Neque volutpat ac
                  tincidunt vitae semper quis lectus. Turpis in eu mi bibendum
                  neque egestas congue quisque. Sed elementum tempus egestas sed
                  sed risus pretium quam. Dignissim sodales ut eu sem. Nibh
                  mauris cursus mattis molestee iaculis at erat pellentesque. Id
                  interdum velit laoreet id donec ultrices tincidunt.
                </p>
                <p>
                  To the left is the modern kitchen with central island, leading
                  through to the unique breakfast family room which feature
                  glass walls and doors out onto the garden and access to the
                  separate utility room.
                </p> */}

                {/* <div className="widget ltn__author-widget">
                  <div className="property-detail-feature-list clearfix">
                    <ul>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-home-2" />
                          <div>
                            <h6>1 Bed Room</h6>
                            <small>20 x 16 sq feet</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div> */}

                <div className="row ltn__custom-gutter--- justify-content-center go-top">
                  {/* <div className="col-lg-2 col-sm-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                      <div className="ltn__feature-icon">
                        <img
                          src={publicUrl + "assets/img/icons/icon-img/21.png"}
                          alt="#"
                        />
                      </div>
                      <div className="ltn__feature-info">
                        <h3>
                          <Link to="/service-details">1 Bed Room</Link>
                        </h3>
                        <p>20 x 16 sq feet</p>
                      </div>
                    </div>
                  </div> */}

                  <div class="col-lg-2 col-sm-3 col-6">
                    <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                      <div class="ltn__feature-icon">
                        <img
                          src={publicUrl + "assets/img/rent/Vectorbed.svg"}
                          alt="#"
                        />
                      </div>
                      <div class="ltn__feature-info">
                        <h6>
                          <b>
                            <Link to="#">1 Bed Room</Link>
                          </b>
                          <br />
                          20 x 16 sq feet
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-3 col-6">
                    <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                      <div class="ltn__feature-icon">
                        {/* <img
                          src={publicUrl + "assets/img/icons/icon-img/21.png"}
                          alt="#"
                        /> */}
                        <img
                          src={publicUrl + "assets/img/rent/Group 70bath.svg"}
                          alt="#"
                        />
                      </div>
                      <div class="ltn__feature-info">
                        <h6>
                          <b>
                            <Link to="#">2 Bathrooms</Link>
                          </b>
                          <br />
                          20 x 16 sq feet
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-3 col-6">
                    <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                      <div class="ltn__feature-icon">
                        <img
                          src={publicUrl + "assets/img/rent/Group 81area.svg"}
                          alt="#"
                        />
                      </div>
                      <div class="ltn__feature-info">
                        <h6>
                          <b>
                            <Link to="/service-details">1327 Sq ft</Link>
                          </b>
                          <br />
                          20 x 16 sq feet
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-3 col-6">
                    <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                      <div class="ltn__feature-icon">
                        <img
                          src={
                            publicUrl + "assets/img/rent/Group 125movein.svg"
                          }
                          alt="#"
                        />
                      </div>
                      <div class="ltn__feature-info">
                        <h6>
                          <b>
                            <Link to="#">Apr 15 2023</Link>
                          </b>
                          <br />
                          20 x 16 sq feet
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-3 col-6">
                    <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                      <div class="ltn__feature-icon">
                        <img
                          src={
                            publicUrl +
                            "assets/img/rent/washing-machine 1laundry.svg"
                          }
                          alt="#"
                        />
                      </div>
                      <div class="ltn__feature-info">
                        <h6>
                          <b>
                            <Link to="/service-details">In Unit</Link>
                          </b>
                          <br />
                          20 x 16 sq feet
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-3 col-6">
                    <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                      <div class="ltn__feature-icon">
                        <img
                          src={publicUrl + "assets/img/rent/11.png"}
                          alt="#"
                        />
                      </div>
                      <div class="ltn__feature-info">
                        <h6>
                          <b>
                            <Link to="#">Restrictions</Link>
                          </b>
                          <br />
                          20 x 16 sq feet
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="title-2">Floor Plans</h4>
                {/* APARTMENTS PLAN AREA START */}
                <div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
                  <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
                    <div className="nav">
                      <a data-bs-toggle="tab" href="#liton_tab_3_1">
                        First Floor
                      </a>
                      <a
                        className="active show"
                        data-bs-toggle="tab"
                        href="#liton_tab_3_2"
                      >
                        Second Floor
                      </a>
                      <a data-bs-toggle="tab" href="#liton_tab_3_3">
                        Third Floor
                      </a>
                      <a data-bs-toggle="tab" href="#liton_tab_3_4">
                        Top Garden
                      </a>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade" id="liton_tab_3_1">
                      <div className="ltn__apartments-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="apartments-plan-img">
                              <img
                                src={publicUrl + "assets/img/others/10.png"}
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
                              <h2>First Floor</h2>
                              <p>
                                Enimad minim veniam quis nostrud exercitation
                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                aetetur adipisicing elit sedo eiusmod
                                tempor.Incididunt labore et dolore magna aliqua.
                                sed ayd minim veniam.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade active show"
                      id="liton_tab_3_2"
                    >
                      <div className="ltn__product-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="apartments-plan-img">
                              <img
                                src={publicUrl + "assets/img/others/10.png"}
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
                              <h2>Second Floor</h2>
                              <p>
                                Enimad minim veniam quis nostrud exercitation
                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                aetetur adipisicing elit sedo eiusmod
                                tempor.Incididunt labore et dolore magna aliqua.
                                sed ayd minim veniam.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="liton_tab_3_3">
                      <div className="ltn__product-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="apartments-plan-img">
                              <img
                                src={publicUrl + "assets/img/others/10.png"}
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
                              <h2>Third Floor</h2>
                              <p>
                                Enimad minim veniam quis nostrud exercitation
                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                aetetur adipisicing elit sedo eiusmod
                                tempor.Incididunt labore et dolore magna aliqua.
                                sed ayd minim veniam.
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="product-details-apartments-info-list  section-bg-1">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="apartments-info-list apartments-info-list-color mt-40---">
                                    <ul>
                                      <li>
                                        <label>Total Area</label>{" "}
                                        <span>2800 Sq. Ft</span>
                                      </li>
                                      <li>
                                        <label>Bedroom</label>{" "}
                                        <span>150 Sq. Ft</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="apartments-info-list apartments-info-list-color mt-40---">
                                    <ul>
                                      <li>
                                        <label>Belcony/Pets</label>{" "}
                                        <span>Allowed</span>
                                      </li>
                                      <li>
                                        <label>Lounge</label>{" "}
                                        <span>650 Sq. Ft</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="liton_tab_3_4">
                      <div className="ltn__product-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="apartments-plan-img">
                              <img
                                src={publicUrl + "assets/img/others/10.png"}
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
                              <h2>Top Garden</h2>
                              <p>
                                Enimad minim veniam quis nostrud exercitation
                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                aetetur adipisicing elit sedo eiusmod
                                tempor.Incididunt labore et dolore magna aliqua.
                                sed ayd minim veniam.
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="product-details-apartments-info-list  section-bg-1">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="apartments-info-list apartments-info-list-color mt-40---">
                                    <ul>
                                      <li>
                                        <label>Total Area</label>{" "}
                                        <span>2800 Sq. Ft</span>
                                      </li>
                                      <li>
                                        <label>Bedroom</label>{" "}
                                        <span>150 Sq. Ft</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="apartments-info-list apartments-info-list-color mt-40---">
                                    <ul>
                                      <li>
                                        <label>Belcony/Pets</label>{" "}
                                        <span>Allowed</span>
                                      </li>
                                      <li>
                                        <label>Lounge</label>{" "}
                                        <span>650 Sq. Ft</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* APARTMENTS PLAN AREA END */}
                <h4 className="title-2">Property Video</h4>
                <div
                  className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
                  data-bs-bg={publicUrl + "assets/img/product-3/home6.jpg"}
                >
                  <a
                    className="ltn__video-icon-2 ltn__video-icon-2-border---"
                    href="https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0"
                    data-rel="lightcase:myCollection"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                {/* Tagcloud Widget */}
                <div
                  className="widget ltn__tagcloud-widget go-top"
                  style={{ padding: "20px", borderRadius: "20px" }}
                >
                  <h4 className="ltn__widget-title ltn__widget-title-border-2">
                    Facilities included within Rent
                  </h4>
                  <ul>
                    <li>
                      <Link>Heat</Link>
                    </li>
                    <li>
                      <Link>Hot Water</Link>
                    </li>
                    <li>
                      <Link>Electricity</Link>
                    </li>
                    <li>
                      <Link>Gas</Link>
                    </li>
                    <li>
                      <Link>Water</Link>
                    </li>
                    <li>
                      <Link>Sewer</Link>
                    </li>
                    <li>
                      <Link>Trash Collection</Link>
                    </li>
                    <li>
                      <Link>Snow Removal</Link>
                    </li>
                    <li>
                      <Link>Gardener</Link>
                    </li>
                    <li>
                      <Link>Garden Area</Link>
                    </li>
                    <li>
                      <Link>Cable TV</Link>
                    </li>
                    <li>
                      <Link>Furnishings</Link>
                    </li>
                    <li>
                      <Link>Air Conditioning</Link>
                    </li>
                    {/* <li>
                      <Link to="/blog-grid">Body Color</Link>
                    </li> */}
                  </ul>
                </div>
                {/* Author Widget */}
                <div
                  className="widget ltn__author-widget"
                  style={{ padding: "20px", borderRadius: "20px" }}
                >
                  <div className="property-detail-feature-list clearfix">
                    <ul>
                      <li>
                        <div className="property-detail-feature-list-item">
                          {/* <i className="flaticon-home-2" /> */}
                          <img
                            src={publicUrl + "assets/img/rent/money.svg"}
                            alt="#"
                            style={{
                              borderRadius: "0px",
                              marginBottom: "0px",
                              marginRight: "7px",
                              width: "40px",
                            }}
                          />
                          <div>
                            <h6>Move in Payments</h6>
                            <small>
                              Get an idea about how much this property will cost
                              you upfront...
                            </small>
                          </div>
                          <i
                            className="flaticon-right-arrow"
                            style={{ marginRight: "50px" }}
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="ltn__author-widget-inner text-center">
                    <img
                      src={publicUrl + "assets/img/rent/money.svg"}
                      alt="Image"
                    />

                    <h5>Move in Payments</h5>
                    {/* <small>Traveller/Photographer</small> */}

                  {/* <p>
                      Get an idea about how much this property will cost you
                      upfront...
                    </p> */}
                  {/* </div> */}
                </div>
                {/* <div className="widget ltn__author-widget">
                  <div className="ltn__author-widget-inner text-center">
                    <img
                      src={publicUrl + "assets/img/rent/money.png"}
                      alt="Image"
                    />

                    <h5>Move in Payments</h5>
                    {/* <small>Traveller/Photographer</small> */}

                {/* <p>
                      Get an idea about how much this property will cost you
                      upfront...
                    </p>
                  </div>
                </div> */}

                <div
                  className="widget ltn__author-widget"
                  style={{ padding: "20px", borderRadius: "20px" }}
                >
                  <div className="ltn__author-widget-inner text-center">
                    {/* <h4 className="title-2">Location</h4> */}
                    <div className="property-details-google-map mb-10">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        frameBorder={0}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex={0}
                      />
                    </div>
                    {/* <h5>Rosalina D. Willaimson</h5>
                    <small>Traveller/Photographer</small> */}
                    {/* <div className="product-ratting">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star-half-alt" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-star" />
                          </a>
                        </li>
                        <li className="review-total">
                          {" "}
                          <a href="#"> ( 1 Reviews )</a>
                        </li>
                      </ul>
                    </div> */}

                    <div className="property-detail-feature-list clearfix">
                      <ul>
                        <li>
                          <div className="property-detail-feature-list-item">
                            <img
                              src={
                                publicUrl + "assets/img/rent/Vectortransit.svg"
                              }
                              alt="#"
                              style={{
                                borderRadius: "0px",
                                marginBottom: "0px",
                                marginRight: "7px",
                              }}
                            />
                            {/* <i className="flaticon-home-2" /> */}
                            <div>
                              <h6>Transit: 50 minutes</h6>
                              {/* <small>20 x 16 sq feet</small> */}
                            </div>
                          </div>
                        </li>
                        <br />
                        <li>
                          <div className="property-detail-feature-list-item">
                            <img
                              src={
                                publicUrl + "assets/img/rent/Group 138walk.svg"
                              }
                              alt="#"
                              style={{
                                borderRadius: "0px",
                                marginBottom: "0px",
                                marginRight: "7px",
                              }}
                            />

                            <div>
                              <h6>Walking: 47 minutes</h6>
                            </div>
                          </div>
                        </li>
                        <br />
                        <li>
                          <div className="property-detail-feature-list-item">
                            <img
                              src={
                                publicUrl +
                                "assets/img/rent/distance 1distance.svg"
                              }
                              alt="#"
                              style={{
                                borderRadius: "0px",
                                marginBottom: "0px",
                                marginRight: "7px",
                              }}
                            />

                            {/* <i className="flaticon-heart" /> */}
                            <div>
                              <h6>Distance: 2.1 miles</h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Form Widget */}
                <div
                  className="widget ltn__form-widget"
                  style={{ padding: "20px", borderRadius: "20px" }}
                >
                  <h4 className="ltn__widget-title ltn__widget-title-border-2">
                    Drop Message For Book
                  </h4>
                  <form>
                    <input
                      type="text"
                      name="yourname"
                      placeholder="Your Name*"
                    />
                    <input
                      type="text"
                      name="youremail"
                      placeholder="Your e-Mail*"
                    />
                    <textarea
                      name="yourmessage"
                      placeholder="Write Message..."
                      defaultValue={""}
                    />
                    <button type="submit" className="btn theme-btn-1">
                      Send Messege
                    </button>
                  </form>
                </div>

                {/* Popular Post Widget */}
                <div
                  className="widget ltn__popular-post-widget go-top"
                  style={{ padding: "20px", borderRadius: "20px" }}
                >
                  <h4 className="ltn__widget-title ltn__widget-title-border-2">
                    Latest Blogs
                  </h4>
                  <ul>
					

                    <li>
                      <div className="popular-post-widget-item clearfix">
                        <div className="popular-post-widget-img">
                          <Link to="#">
                            <img
                              src={publicUrl + "assets/img/team/6.jpg"}
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="popular-post-widget-brief">
                          <h6>
                            <Link to="#">
                              Lorem ipsum dolor sit cing elit, sed do.
                            </Link>
                          </h6>
                          <div className="ltn__blog-meta">
                            <ul>
                              <li className="ltn__blog-date">
							  <Link to="#">
                                  <i className="far fa-calendar-alt" />
                                  June 22, 2020
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="popular-post-widget-item clearfix">
                        <div className="popular-post-widget-img">
                          <Link to="#">
                            <img
                              src={publicUrl + "assets/img/team/7.jpg"}
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="popular-post-widget-brief">
                          <h6>
                            <Link to="#">
                              Lorem ipsum dolor sit cing elit, sed do.
                            </Link>
                          </h6>
                          <div className="ltn__blog-meta">
                            <ul>
                              <li className="ltn__blog-date">
							  <Link to="#">
                                  <i className="far fa-calendar-alt" />
                                  June 22, 2020
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="popular-post-widget-item clearfix">
                        <div className="popular-post-widget-img">
                          <Link to="#">
                            <img
                              src={publicUrl + "assets/img/team/8.jpg"}
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="popular-post-widget-brief">
                          <h6>
                            <Link to="#">
                              Lorem ipsum dolor sit cing elit, sed do.
                            </Link>
                          </h6>
                          <div className="ltn__blog-meta">
                            <ul>
                              <li className="ltn__blog-date">
							  <Link to="#">
                                  <i className="far fa-calendar-alt" />
                                  June 22, 2020
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Banner Widget */}
                <div className="widget ltn__banner-widget d-none go-top">
                  <Link to="/shop">
                    <img src={publicUrl + "assets/img/banner/2.jpg"} alt="#" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopDetails;
