import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Carosel({ cities }) {
  let cityList = [];
  cities.forEach((element, index) => {
    cityList.push(
      <div className="carousel-item active" key={index}>
        <img
          className="d-block w-100"
          src={element.image}
          alt={element.locationName}
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>{element.locationName}</h5>
          <p>{element.description}</p>
        </div>
      </div>
    );
  });

  return <div></div>;
}
