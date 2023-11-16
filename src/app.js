function updateWeather(response) {
  let temperatureElement = document.querySelector("#current-stats-value");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let CityElementOne = document.querySelector("#city-search-one");
  CityElementOne.innerHTML = response.data.city;
  let CityElementTwo = document.querySelector("#city-search-two");
  CityElementTwo.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "23e75f7acb80e43d1aa43c2eod7017bt";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search-input");

  searchCity(searchInput.value);
}

let citySearchElement = document.querySelector("#city-search-form");
citySearchElement.addEventListener("submit", changeCity);

searchCity("Riga");
