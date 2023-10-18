const getWeatherByCity = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c752b89da2cff2d039a79a7e71dd07c1`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
    };
  } catch (error) {
    console.error(error);
  }
};

const getWeatherByLocation = async (latitude, longitude) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c752b89da2cff2d039a79a7e71dd07c1`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };
  } catch (error) {
    console.error(error);
  }
};

export { getWeatherByCity, getWeatherByLocation };
