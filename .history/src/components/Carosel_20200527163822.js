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
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="..." alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="..." alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="..." alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
