let btn = document.querySelector(".fa-searchengin");
document.querySelector("input").addEventListener("keyup", function (e) {
  if (e.key === "Enter") btn.click(); // do the same event when clicking the search icon
});
btn.addEventListener("click", async function () {
  let city = document.querySelector("input").value;
  async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // get weather info using city name
    const data = await fetch(apiUrl);
    return data.json(); //convert to json object
  }
  const x = await getWeatherData(city); // wait until the data is fetched then do the following
  document.querySelector(".city").innerHTML = `${x.name}`;
  document.querySelector(".degree").innerHTML =
    `${Math.round(x.main.temp)}` + "°C";
  document.querySelector(".hum strong").innerHTML = `${x.main.humidity}` + "%";
  document.querySelector(".wind strong").innerHTML = `${x.wind.speed}`;
  document.querySelector(".clouds strong").innerHTML = `${x.clouds.all}`;
  document.querySelector(".UV strong").innerHTML = `${x.sys.country}`;
  if (x.weather[0].main === "Clear") {
    //change picture based on weather state
    document.querySelector("img").src =
      "assets/sunny-landscape-svgrepo-com.svg";
  } else if (x.weather[0].main === "Clouds") {
    document.querySelector("img").src = "assets/cloudy-svgrepo-com.svg";
  } else
    document.querySelector("img").src = "assets/cloud-and-rain-svgrepo-com.svg";
  console.log(x);
});
