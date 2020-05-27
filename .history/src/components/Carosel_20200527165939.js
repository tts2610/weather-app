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
          <h1>{element.locationName}</h1>
          <p>{element.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return <Carousel>{cityList}</Carousel>;
}
