function weather(openWeaterObject) {
  const tempDetails = openWeaterObject.main;
  const wind = openWeaterObject.wind;

  const getCity = () => openWeaterObject.name;

  const getTemp = () => {
    return tempDetails.temp;
  };

  const getCloud = () => {
    return openWeaterObject.clouds.all;
  };

  const getWind = () => {
    return wind.deg;
  };

  return { getCity, getTemp, getCloud, getWind };
}

export { weather };
