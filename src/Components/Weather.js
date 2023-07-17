import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
  const [weather, setWeather] = useState();

  const display = useSelector(selectDisplay);

  let latitude = display.capitalInfo.latlng[0];
  let longitude = display.capitalInfo.latlng[1];

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${latitude}, ${longitude}` },
      headers: {
        "X-RapidAPI-Key": "3d324b4f52msh95e57087768844fp1faf5bjsnb78bf47d9206",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <table className="overview-table">
        <tr>
          <td>Conditions: </td>
          <td>{weather?.current?.condition?.text}</td>
        </tr>
        <tr>
          <td>Temperature: </td>
          <td>{weather?.current?.temp_f}</td>
        </tr>
        <tr>
          <td>Feels Like: </td>
          <td>{weather?.current?.feelslike_f}</td>
        </tr>
        <tr>
          <td>Humidity: </td>
          <td>{weather?.current?.humidity}</td>
        </tr>
        <tr>
          <td>Wind Speed: </td>
          <td>{weather?.current?.wind_mph}</td>
        </tr>
      </table>
    </div>
  );
};

export default Weather;
