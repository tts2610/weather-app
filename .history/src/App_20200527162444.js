import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import MySpinner from "./components/Spinner";
import Carosel from "./components/Carosel";
let API_KEY = process.env.REACT_APP_APIKEY;

let cities = {
  tokyo: {
    apiUrl: `https://api.openweathermap.org/data/2.5/weather?id=1850147&appid=${API_KEY}`,
    image:
      "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/5/7/9/1/841975-1-eng-GB/Lonza-to-help-Nikon-set-up-a-contract-cell-and-gene-therapy-manufacturing-business-in-Japan.jpg",
  },
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      isLoading: true,
    };
  }

  getCurrentWeather = async (apiUrl, image) => {
    // let url_1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    let data_1 = await fetch(apiUrl);
    let result_1 = await data_1.json();

    console.log(result_1);
  };

  // getLocation = () => {
  //   navigator.geolocation.getCurrentPosition((post) => {
  //     this.getCurrentWeather(post.coords.longitude, post.coords.latitude);
  //   });
  // };

  componentDidMount() {
    // this.getLocation();
    for (var key in cities) {
      // check if the property/key is defined in the object itself, not in parent
      if (cities.hasOwnProperty(key)) {
        // console.log(key, cities[key]);
        this.getCurrentWeather(cities[key].apiUrl, cities[key].image);
      }
    }
    // setTimeout(() => this.setState({ isLoading: false }), 3000);
  }

  render() {
    return (
      <div className="container-fluid text-white my-auto">
        <div className="container mx-auto my-4 py-4">
          <div className="row justify-content-center text-center">
            <h1 className="col-12 display-4 my-2 py-3 text-success">
              Awesome Weather App
            </h1>
            <Carosel cities={this.state.cities} />
          </div>
        </div>
      </div>
    );
  }
}
