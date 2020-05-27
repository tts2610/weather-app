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
  london: {
    apiUrl: `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&id=2643741`,
    image: "https://images.alphacoders.com/470/thumb-1920-470208.jpg",
  },
  newyork: {
    apiUrl: `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&id=5039192`,
    image: "https://wallpaperplay.com/walls/full/f/c/d/267334.jpg",
  },
  miami: {
    apiUrl: `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&id=5304640`,
    image:
      "data:image/jpeg;base64,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",
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
    this.setState({
      cities: [
        ...this.state.cities,
        {
          locationName: result_1.name,
          temperature: result_1.main.temp,
          description: result_1.weather[0].description,
          image: image,
        },
      ],
      isLoading: false,
    });
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
