import React, { useState, useEffect } from "react";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=c8f8824f82f862c7696a070f2a1a8586`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <div className="p-4 font-serif">
      <input
        type="search"
        className="InputField"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {!city ? (
        <div>
          <h3>
            <b>No Data Found</b>
          </h3>
        </div>
      ) : (
        <div>
          <div>
            <h2 text-blue-300>
              <i></i>
              {search}
            </h2>
            <h1>{city.temp}&nbsp; F</h1>
            <h3>
              {city.temp_min} min | {city.temp_max} max
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
