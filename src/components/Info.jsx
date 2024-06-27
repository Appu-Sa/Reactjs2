import React, { useState } from "react";
import "./info.css";

function Info({ details }) {
  return (
    <div className="container">
      <h3 className="text-center p-1 mb-3">
        Users <span style={{ color: "#8064A2" }}>Profile</span>
      </h3>
      <div className="row">
        {details.map((detail) => {
          const [isDescriptionVisible, setIsDescriptionVisible] =
            useState(false);

          // default image in-case if there is any broken image url
          const image =
            "https://as2.ftcdn.net/v2/jpg/07/17/84/71/1000_F_717847111_5dqQRbCOnSKiALUJzWHkjozKZAEQdVsf.jpg";

          const toggleDescription = () => {
            setIsDescriptionVisible(!isDescriptionVisible);
          };

          const error = (e) => {
            e.target.src = image;
          };

          return (
            <div
              className="col-lg-4 col-md-6 col-xs-12"
              id="colm"
              key={detail.profile.username}
            >
              <div className={`card ${isDescriptionVisible ? "show" : "hide"}`}>
                <div className="card-body">
                  <p
                    style={{
                      fontSize: "6px",
                      marginTop: "-15px",
                      textAlign: "end",
                      marginBottom: "5px",
                      marginRight: "-8px",
                    }}
                  >
                    Created at: {detail.createdAt.slice(0, 10)} Time:{" "}
                    {detail.createdAt.slice(11, 19)}
                  </p>
                  <div className="image-container">
                    <img
                      src={detail.avatar ? detail.avatar : image}
                      alt="alt"
                      className="img-fluid"
                      onError={error} //onError for handling any broken url
                    />
                  </div>

                  <h5 className="card-title">
                    {detail.profile.firstName} {detail.profile.lastName}
                  </h5>
                  <p>{detail.jobTitle}</p>
                  <div
                    className={`button ${
                      isDescriptionVisible ? "show" : "hide"
                    }`}
                  >
                    <ion-icon
                      name="arrow-down-circle-outline"
                      onClick={toggleDescription}
                    ></ion-icon>
                  </div>
                </div>
              </div>
              <div
                className={`description-section ${
                  isDescriptionVisible ? "show" : "hide"
                }`}
              >
                <p className="descp">Username: {detail.profile.username}</p>
                <p className="descp">Bio: {detail.Bio.slice(0, 30)}</p>
                <p className="descp">Email: {detail.profile.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Info;
