let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
let apiKey = "0f30e5290972eab7b9c525cbd0acc84b";

let newh1 = document.querySelector("h1");
let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let date = now.getDate();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let year = now.getFullYear();
let hours = now.getHours();

if (hours < 10) {
  hours = `0${hours}`;
}
let mins = now.getMinutes();
if (mins < 10) {
  mins = `0${mins}`;
}

newh1.innerHTML = `${day} ${date} ${month} ${hours}:${mins} ${year}`;

function showCityTemp(response) {
  console.log(response.data.main.temp);
  let cityTemp = document.querySelector("#celcius");
  cityTemp.innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#lowTemp").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#highTemp").innerHTML = Math.round(
    response.data.main.temp_max
  );
}

function showCityName(response) {
  console.log(response.data.name);
  let cityName = document.querySelector("#cityHeader");
  cityName.innerHTML = response.data.name;
}

function search(event) {
  event.preventDefault();
  let apiKey = "0f30e5290972eab7b9c525cbd0acc84b";
  let city = document.querySelector("#searchedCity").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrl).then(showCityTemp);
  axios.get(apiUrl).then(showCityName);
}

let searchForm = document.querySelector("#cityForm");
searchForm.addEventListener("submit", search);

function searchLocation(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "0f30e5290972eab7b9c525cbd0acc84b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCityTemp);
}

function locate(event) {
  event.preventDefault;
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#currentLocation");
currentLocationButton.addEventListener("click", locate);

function changeUnit(event) {
  event.preventDefault();
  let celciusElement = document.querySelector("#celcius");
  let temperature = celciusElement.innerHTML;
  celciusElement.innerHTML = "66°";
}

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", changeUnit);
