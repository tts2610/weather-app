import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
let API_KEY = process.env.REACT_APP_APIKEY;
let cities = {
  tokyo: {
    apiUrl: `https://api.openweathermap.org/data/2.5/weather?id=1850147&appid=${API_KEY}`,
    image:
      "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/5/7/9/1/841975-1-eng-GB/Lonza-to-help-Nikon-set-up-a-contract-cell-and-gene-therapy-manufacturing-business-in-Japan.jpg",
  },
};
export default class Carosel extends Component {
  //     cityList = [];
  //   cities.forEach((element, index) => {
  //     cityList.push(
  //       <div className="carousel-item active" key={index}>
  //         <img className="d-block w-100" src={element.img} alt={element.name} />
  //       </div>
  //     );
  //   });

  componentDidMount() {
    for (var key in cities) {
      // check if the property/key is defined in the object itself, not in parent
      if (cities.hasOwnProperty(key)) {
        console.log(key, cities[key]);
      }
    }
  }

  getCurrentWeather = async () => {
    let data_1 = await fetch();
    let result_1 = await data_1.json();
  };

  render() {
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
        {/* <div className="carousel-inner">{cityList}</div> */}
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
    );
  }
}
