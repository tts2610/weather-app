import React from "react";
import Carousel from "react-bootstrap/Carousel";
export default function Carosel({ cities }) {
  let cityList = [];
  cities.forEach((element, index) => {
    cityList.push(
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={element.image}
          alt={element.locationName}
        />
        <Carousel.Caption className="caption">
          <div className="locationName">
            <i class="fal fa-city"></i> : {element.locationName}
          </div>
          <div className="description">
            <i class="far fa-thunderstorm-moon"></i> : {element.description}
          </div>
          <div className="temperature">
            <i class="fas fa-temperature-low"></i> : {element.temperature}&deg;C
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return <Carousel>{cityList}</Carousel>;
}
