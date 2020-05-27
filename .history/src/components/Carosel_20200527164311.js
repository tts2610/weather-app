import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Carosel({ cities }) {
  let cityList = [];
  cities.forEach((element, index) => {
    if (index === 0) {
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
    } else
      cityList.push(
        <div className="carousel-item" key={index}>
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
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        {/* <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol> */}
        <div className="carousel-inner">{cityList}</div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
