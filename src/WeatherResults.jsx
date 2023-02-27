import React from "react";

const WeatherResults = (props) => {
  if (props.data === "first render") {
    return <div className="WeatherResults">Please specify the city</div>;
  } else if (props.data === "error" || !props.data) {
    return (
      <div className="WeatherResults">
        Something went wrong, cannot display weather data :(
      </div>
    );
  } else {
    const results = [
      { name: "Temperature", value: props.data.main.temp, units: "°C" },
      { name: "Description", value: props.data.weather[0].description },
      { name: "Humidity", value: props.data.main.humidity, units: "%" },
      { name: "Wind", value: props.data.wind.speed, units: "km/h" },
    ];
    const icon = {
      alt: props.data.weather[0].main,
      src: `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`,
    };
    return (
      <div className="WeatherResults">
        <ul>
          {results.map((result, index) => {
            return (
              <li key={index}>
                {result.name} : {result.value}{" "}
                {result.units ? result.units : null}
              </li>
            );
          })}
          <li>
            <img src={icon.src} alt={icon.alt} />
          </li>
        </ul>
      </div>
    );
  }
};

export default WeatherResults;
