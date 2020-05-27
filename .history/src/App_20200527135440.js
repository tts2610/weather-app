import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const API_KEY = "2fffa1dac56aeaa4810e198e2b088a34";

export default class App extends Component {
  getCurrentWeather = async (lon, lat) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    let data = await fetch(url);
    let result = await data.json();
    console.log("result ? ", result);
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition((post) => {
      this.getCurrentWeather(post.coords.longitude, post.coords.latitude);
    });
  };

  render() {
    return (
      <div className="container-fluid text-white my-auto">
        <div className="container mx-auto my-4 py-4">
          <div className="row justify-content-center text-center">
            <h1 className="col-12 display-4 my-2 py-3 text-success">
              Awesome Weather App
            </h1>
            <h2 className="col-12">Location Name</h2>
            <h3 className="col-12 text-danger">Temperature</h3>
            <h3 className="col-12">Weather Description</h3>
          </div>
        </div>
      </div>
    );
  }
}
