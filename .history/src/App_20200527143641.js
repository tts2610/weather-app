import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
let API_KEY = process.env.REACT_APP_APIKEY;

export default class App extends Component {
  state = {
    weatherResult: {
      locationName: "",
      temperature: "",
      description: "",
    },
  };
  // constructor(props) {
  //   super(props);
  //   // this.state = {weatherResult:null}
  // }

  getCurrentWeather = async (lon, lat) => {
    let url_1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let url_2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;
    let data_1 = await fetch(url_1);
    let result_1 = await data_1.json();
    let data_2 = await fetch(url_2);
    let result_2 = await data_2.json();
    this.setState({
      weatherResult: {
        locationName: result_1.name,
        temperature: [result_1.main.temp, result_2.main.temp],
        description: result_1.weather[0].description,
      },
    });

    console.log(result_1);
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition((post) => {
      this.getCurrentWeather(post.coords.longitude, post.coords.latitude);
    });
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return (
      <div className="container-fluid text-white my-auto">
        <div className="container mx-auto my-4 py-4">
          <div className="row justify-content-center text-center">
            <h1 className="col-12 display-4 my-2 py-3 text-success">
              Awesome Weather App
            </h1>
            <h2 className="col-12">{this.state.weatherResult.locationName}</h2>
            <h3 className="col-12 text-danger">
              {this.state.weatherResult.temperature[0]}&deg;C /{" "}
              {this.state.weatherResult.temperature[1]}&deg;F
            </h3>
            <h3 className="col-12">{this.state.weatherResult.description}</h3>
          </div>
        </div>
      </div>
    );
  }
}
