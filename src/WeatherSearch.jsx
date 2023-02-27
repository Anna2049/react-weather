import React, { useState } from "react";
import WeatherResults from "./WeatherResults";
import axios from "axios";

const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [results, setResults] = useState("first render");
  useState(null);
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (city.trim().length === 0) {
      //useState(null);
    } else {
      const key = "13e9496ba2a5643119025f905a5f6396";
      const units = "metric";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=${units}&appid=${key}`;
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setResults(response.data);
        })
        .catch(function (error) {
          console.error(error);
          setResults("error");
        });
    }
  }
  return (
    <div className="WeatherSearch">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city"
          autoComplete="off"
          onChange={updateCity}
        />
        <button type="submit">Search</button>
      </form>
      <WeatherResults data={results} />
    </div>
  );
};

export default WeatherSearch;
