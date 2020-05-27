import React from "react";
import Carousel from "react-bootstrap/Carousel";
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
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
