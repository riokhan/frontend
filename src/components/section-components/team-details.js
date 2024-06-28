import React, { Component } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
 
class TeamDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }
 
  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
 
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
 
    return (
      <div className="ltn__team-details-area mb-120">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="property-details-left mb-40">
                <h2>1572 Tremont St., #2, (Mission Hill)</h2>
                <div className="property-images">
                  <img
                    src={publicUrl + "assets/img/neighbour/3.jpg"}
                    alt="Property Image 1"
                  />
                  {/* <div className="small-images">
                    <img
                      src={publicUrl + "assets/img/team/1.jpg"}
                      alt="Property Image 2"
                    />
                    <img
                      src={publicUrl + "assets/img/team/2.jpg"}
                      alt="Property Image 3"
                    />
                    <img
                      src={publicUrl + "assets/img/team/3.jpg"}
                      alt="Property Image 4"
                    />
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-6">
                    <p>Rent: $4900/month</p>
                  </div>
                  <div className="col-6">
                    <p>Move-in Date: Sep 1, 2024</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <button
                    className="btn btn-primary"
                    style={{ borderRadius: "10px" }}
                  >
                    Go to property
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="request-viewing">
                <h4>Request a viewing</h4>
                <p>Submit new viewing request</p>
                <p>
                  Pick all preferred time slots (Can select multiple options)
                </p>
                <h4>Pick Date </h4>
 
                <div className="row ltn__category-slider-active--- slick-arrow-1  ">
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "108px",
                      height: "90px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                      border: "2px solid #FF5A3C",
                    }}
                  >
                    <Link
                      to="#/team-details#/shop"
                      style={{ padding: "12px 24px 25px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Sat
                      </span>
                      <h3
                        className="category-title"
                        style={{ fontSize: "28px", marginTop: "0px" }}
                      >
                        29
                      </h3>
                    </Link>
                  </div>
 
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "123px",
                      height: "90px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                      border: "2px solid #FF5A3C",
                    }}
                  >
                    <Link
                      to="#/team-details#/shop"
                      style={{ padding: "12px 24px 25px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Sun
                      </span>
                      <h3
                        className="category-title"
                        style={{ fontSize: "28px", marginTop: "0px" }}
                      >
                        {" "}
                        30
                      </h3>
                    </Link>
                  </div>
 
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "123px",
                      height: "90px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                      border: "2px solid #FF5A3C",
                    }}
                  >
                    <Link
                      to="#/team-details#/shop"
                      style={{ padding: "12px 24px 25px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Mon
                      </span>
                      <h3
                        className="category-title"
                        style={{ fontSize: "28px", marginTop: "0px" }}
                      >
                        {" "}
                        1
                      </h3>
                    </Link>
                  </div>
 
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "108px",
                      height: "90px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                      border: "2px solid #FF5A3C",
                    }}
                  >
                    <Link
                      to="#/team-details#/shop"
                      style={{ padding: "12px 24px 25px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Tue
                      </span>
                      <h3
                        className="category-title"
                        style={{ fontSize: "28px", marginTop: "0px" }}
                      >
                        {" "}
                        2
                      </h3>
                    </Link>
                  </div>
 
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "108px",
                      height: "90px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                      border: "2px solid #FF5A3C",
                    }}
                  >
                    <Link
                      to="#/team-details#/shop"
                      style={{ padding: "12px 24px 25px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Wed
                      </span>
                      <h3
                        className="category-title"
                        style={{ fontSize: "28px", marginTop: "0px" }}
                      >
                        {" "}
                        3
                      </h3>
                    </Link>
                  </div>
 
                  {/* <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "123px",
                      height: "100px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link to="#/shop">
                      <span class="category-title">
                        Wed
                        <br />3
                      </span>
                    </Link>
                  </div> */}
 
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "108px",
                      height: "90px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                      border: "2px solid #FF5A3C",
                    }}
                  >
                    <Link
                      to="#/team-details#/shop"
                      style={{ padding: "12px 24px 25px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Thu
                      </span>
                      <h3
                        className="category-title"
                        style={{ fontSize: "28px", marginTop: "0px" }}
                      >
                        {" "}
                        4
                      </h3>
                    </Link>
                  </div>
 
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "108px",
                      height: "90px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                      border: "2px solid #FF5A3C",
                    }}
                  >
                    <Link
                      to="#/team-details#/shop"
                      style={{ padding: "12px 24px 25px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Fri
                      </span>
                      <h3
                        className="category-title"
                        style={{ fontSize: "28px", marginTop: "0px" }}
                      >
                        {" "}
                        5
                      </h3>
                    </Link>
                  </div>
                </div>
                <h4 style={{ marginTop: "10px" }}>
                  Pick Time (Eastern Time Zone/ EST){" "}
                </h4>
                <div className="row ltn__category-slider-active--- slick-arrow-1 ">
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "91px",
                      height: "54px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link
                      to
                      href="#/team-details#/shop"
                      style={{ padding: "16px 0px 0px" }}
                    >
                      <span
                        className="category-title"
                        style={{ fontSize: "14px" }}
                      >
                        10:00 am
                      </span>
                    </Link>
                  </div>
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "91px",
                      height: "54px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link
                      to
                      href="#/team-details#/shop"
                      style={{ padding: "16px 0px 0px" }}
                    >
                      <span
                        className="category-title"
                        style={{ fontSize: "14px" }}
                      >
                        10:30 am
                      </span>
                    </Link>
                  </div>
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "91px",
                      height: "54px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link
                      to
                      href="#/team-details#/shop"
                      style={{ padding: "16px 0px 0px" }}
                    >
                      <span
                        className="category-title"
                        style={{ fontSize: "14px" }}
                      >
                        11:00 am
                      </span>
                    </Link>
                  </div>
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "91px",
                      height: "54px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link
                      to
                      href="#/team-details#/shop"
                      style={{ padding: "16px 0px 0px" }}
                    >
                      <span
                        className="category-title"
                        style={{ fontSize: "14px" }}
                      >
                        11:30 am
                      </span>
                    </Link>
                  </div>
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "91px",
                      height: "54px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link
                      to
                      href="#/team-details#/shop"
                      style={{ padding: "16px 0px 0px" }}
                    >
                      <span
                        className="category-title"
                        style={{ fontSize: "14px" }}
                      >
                        12:00 pm
                      </span>
                    </Link>
                  </div>
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "91px",
                      height: "54px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link
                      to
                      href="#/team-details#/shop"
                      style={{ padding: "16px 0px 0px" }}
                    >
                      <span
                        className="category-title"
                        style={{ fontSize: "14px" }}
                      >
                        12:30 pm
                      </span>
                    </Link>
                  </div>
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "91px",
                      height: "54px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link
                      to
                      href="#/team-details#/shop"
                      style={{ padding: "16px 0px 0px" }}
                    >
                      <span
                        className="category-title"
                        style={{ fontSize: "14px" }}
                      >
                        01:00 pm
                      </span>
                    </Link>
                  </div>
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "91px",
                      height: "54px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link
                      to
                      href="#/team-details#/shop"
                      style={{ padding: "16px 0px 0px" }}
                    >
                      <span
                        className="category-title"
                        style={{ fontSize: "14px" }}
                      >
                        01:30 pm
                      </span>
                    </Link>
                  </div>
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "91px",
                      height: "54px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link
                      to
                      href="#/team-details#/shop"
                      style={{ padding: "16px 0px 0px" }}
                    >
                      <span
                        className="category-title"
                        style={{ fontSize: "14px" }}
                      >
                        02:00 pm
                      </span>
                    </Link>
                  </div>
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "91px",
                      height: "54px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link
                      to
                      href="#/team-details#/shop"
                      style={{ padding: "16px 0px 0px" }}
                    >
                      <span
                        className="category-title"
                        style={{ fontSize: "14px" }}
                      >
                        02:30 pm
                      </span>
                    </Link>
                  </div>
 
                  <div
                    className="ltn__category-item ltn__category-item-5 text-center"
                    style={{
                      width: "91px",
                      height: "54px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link
                      to
                      href="#/team-details#/shop"
                      style={{ padding: "16px 0px 0px" }}
                    >
                      <span
                        className="category-title"
                        style={{ fontSize: "14px" }}
                      >
                        03:00 pm
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-large btn-primary mt-50"
                style={{ borderRadius: "15px" }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default TeamDetails;
 