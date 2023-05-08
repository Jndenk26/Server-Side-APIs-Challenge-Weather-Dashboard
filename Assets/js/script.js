var APIKey = "11681b9f2816a844371d41b093e3463b";
var cityName = document.getElementById("location");

var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById('cityName')
//

function getGeoCode(searchTerm = "") {
  console.log(searchTerm);
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchTerm +
    "&appid=" +
    APIKey +
    "&units=imperial";
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // console.log(data.name);
      // cityName.textContent = data.name;
      return data;
    });
}

function getCurrentWeather(data = {}) {
  console.log(data);
  var queryURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${data.lat}&lon=${data.lon}&appid=${APIKey}`;
  fetch(queryURL)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => console.log(data));
}

searchForm.addEventListener("submit", (event) => {
  console.log(event.target);
  console.log(searchInput.textContent);
  // event.preventDefault();
  var data = getGeoCode(event.target.value);
  if (data) {
    getCurrentWeather(data)
  }
});
