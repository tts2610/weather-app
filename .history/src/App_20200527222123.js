import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MySpinner from "./components/Spinner";
import Carosel from "./components/Carosel";
let API_KEY = process.env.REACT_APP_APIKEY;

let cities = {
  tokyo: {
    apiUrl: `https://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&appid=${API_KEY}`,
    image:
      "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/5/7/9/1/841975-1-eng-GB/Lonza-to-help-Nikon-set-up-a-contract-cell-and-gene-therapy-manufacturing-business-in-Japan.jpg",
  },
  london: {
    apiUrl: `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&id=2643741`,
    image: "https://images.alphacoders.com/470/thumb-1920-470208.jpg",
  },
  newyork: {
    apiUrl: `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&id=5039192`,
    image: "https://wallpaperplay.com/walls/full/f/c/d/267334.jpg",
  },
  miami: {
    apiUrl: `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&id=5304640`,
    image: "https://wallpaperplay.com/walls/full/d/d/5/363385.jpg",
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

  getCurrentWeather = (apiUrl, image) => {

    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            `Error ${response.status} is ${response.statusText}`
          );
          throw error;
        }
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
      cities: [
        ...this.state.cities,
        {
          locationName: result.name,
          temperature: result.main.temp,
          description: result.weather[0].description,
          image: image,
        },
      ],
    });
      })
      .catch(error => {
        alert(`Data could not be fetched ${error.message}`);
      });


    // let url_1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    let data = await fetch(apiUrl);
    let result = await data.json();
    
  };

  getCurrentCityWeather = async (lon, lat) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let result;
    try {
      let data = await fetch(url);
      result = await data.json();
      this.setState({
        cities: [
          ...this.state.cities,
          {
            locationName: result.name,
            temperature: result.main.temp,
            description: result.weather[0].description,
            image: "https://wallpaperaccess.com/full/1631415.jpg",
          },
        ],
        isLoading: false,
      });
      console.log(result);
    } catch (error) {
      alert("Error fetching weather");
    }
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition((post) => {
      this.getCurrentCityWeather(post.coords.longitude, post.coords.latitude);
    });
  };

  componentDidMount() {
    this.getLocation();
    for (var key in cities) {
      if (cities.hasOwnProperty(key)) {
        this.getCurrentWeather(cities[key].apiUrl, cities[key].image);
      }
    }
  }

  render() {
    return (
      <div className="container-fluid text-white my-auto">
        <div className="container mx-auto my-4 py-4">
          <div className="row justify-content-center text-center">
            <h1 className="col-12 display-4 my-2 py-3 title">
              Awesome Weather App
            </h1>
            {this.state.isLoading ? (
              <MySpinner />
            ) : (
              <Carosel cities={this.state.cities} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
