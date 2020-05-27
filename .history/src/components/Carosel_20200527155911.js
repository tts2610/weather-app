import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Carosel extends Component{
  let cityList = [];
  cities.forEach((element, index) => {
    cityList.push(
      <div className="carousel-item active" key={index}>
        <img className="d-block w-100" src={element.img} alt={element.name} />
      </div>
    );
  });

  render(){
    return (
    <div>
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">{cityList}</div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
  }
  
}
