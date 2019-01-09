import React, { Component } from 'react';

import './App.css';

import Titles from "./components/Titles"
import Weather from "./components/Weather"
import Form from "./components/Form"

const API_KEY ="dc20ddf2c7595a137561b8940d814055";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
}
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>

        <Titles />

        <Form getWeather={this.getWeather}/>

        <Weather />


      </div>
    );
  }
}

export default App;
