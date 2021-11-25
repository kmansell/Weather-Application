let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=sydney";
let apiKey = "0f30e5290972eab7b9c525cbd0acc84b";

function showTemperature(response) {
  console.log(response);
}

axios.get(`${apiURL}&appid=${apiKey}&&units=metric`).then(showTemperature);
