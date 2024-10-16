import React, { useState, useEffect } from "react";

const Weather = (theme) => {
  const textColor = theme === "dark" ? "text-Snow" : "text-blue-600";
  const bgColor = theme === "dark" ? "bg-DeepNightBlack" : "bg-sky-50";

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=c8f8824f82f862c7696a070f2a1a8586`;
      const response = await fetch(url);
      console.log(response);

      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <div className="p-4 font-serif text-left indent-1">
      <h1 className="text-green-300">Temps &deg; &nbsp;Today</h1>
      <input
        type="search"
        className={`InputField indent-1 text-sm ${textColor}`}
        placeholder="Enter City Name ..."
        onChange={(event) => {
          setSearch(event.target.value.toLocaleUpperCase());
        }}
      />
      {!city ? (
        <div>{/* <h4 className="text-white pr-5">Enter your city</h4> */}</div>
      ) : (
        <div>
          <div className="max-w-sm w-40 lg:max-w-45 lg:flex bg-white text-left">
            <div className="text-blue-900">
              <h2 className="text-blue-900">{search}</h2>
              <h1>{Math.round(city.temp)}&deg; F</h1>
              <h6 className="text-sm">
                low {Math.round(city.temp_min)}&deg; | high &nbsp;
                {Math.round(city.temp_max)}&deg;
                {/* {city.description} */}
              </h6>
            </div>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Weather;
