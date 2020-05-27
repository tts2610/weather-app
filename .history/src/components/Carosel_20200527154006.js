import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Carosel() {
  return (
    <div>
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
          <img class="d-block w-100" src="..." alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="..." alt="First slide" />
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
    </div>
  );
}
