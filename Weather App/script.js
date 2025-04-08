// const searchBtn = document.querySelector(".btn");

// searchBtn.addEventListener("click", () => {
//   const cityName = document.querySelector("#cityName").value.trim();
//   // console.log(cityName);

//   if (!cityName) {
//     alert("Please enter the city name.");
//     return;
//   }
//   const apiKey = "27166bacf5b7df2c0fdd9a28bd406f63";
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}`;

//   checkWeather(apiUrl, apiKey);
// });

// async function checkWeather(apiUrl, apiKey) {
//   try {
//     document.querySelector(".error").style.display = `none`;
//     document.querySelector(".weather").style.display = `none`;
//     const response = await fetch(apiUrl + `&appid=${apiKey}`);
//     var data = await response.json();
//     console.log(data);
//     document.querySelector(".temp").textContent =
//       Math.round(data.main.temp) + "°c";
//     document.querySelector(".city").textContent = `${data.name}`;
//     document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
//     document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;

//     if (data.weather[0].main === "Mist") {
//       document.querySelector(".weather-icon").src = `images/mist.png`;
//     } else if (data.weather[0].main === "Clear") {
//       document.querySelector(".weather-icon").src = `images/clear.png`;
//     } else if (data.weather[0].main === "Clouds") {
//       document.querySelector(".weather-icon").src = `images/clouds.png`;
//     } else if (data.weather[0].main === "Drizzle") {
//       document.querySelector(".weather-icon").src = `images/drizzle.png`;
//     } else if (data.weather[0].main === "Humidity") {
//       document.querySelector(".weather-icon").src = `images/humidity.png`;
//     } else if (data.weather[0].main === "Rain") {
//       document.querySelector(".weather-icon").src = `images/rain.png`;
//     } else if (data.weather[0].main === "Snow") {
//       document.querySelector(".weather-icon").src = `images/snow.png`;
//     }

//     document.querySelector(".weather").style.display = `initial`;
//   } catch (error) {
//     console.error(error);
//     document.querySelector(".error").style.display = `initial`;
//   }
// }


const searchBtn = document.querySelector(".btn");

searchBtn.addEventListener("click", () => {
    const cityName = document.querySelector("#cityName").value.trim();

    if(!cityName){
        alert("Please enter the city name.");
    }

    const apiKey = "27166bacf5b7df2c0fdd9a28bd406f63";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}`;

    checkWeather(apiUrl, apiKey);
});

async function checkWeather(apiUrl, apiKey){
    try {
        document.querySelector(".error").style.display = `none`;
        document.querySelector(".weather").style.display = `none`;

        const response = await fetch(apiUrl + `&appid=${apiKey}`);

        var data = await response.json();

        // console.log(data);

        document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°c";
        document.querySelector(".city").textContent = `${data.name}`;
        document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
        document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;

        if (data.weather[0].main === "Mist") {
            document.querySelector(".weather-icon").src = `images/mist.png`;
        } else if (data.weather[0].main === "Clear") {
            document.querySelector(".weather-icon").src = `images/clear.png`;
        } else if (data.weather[0].main === "Clouds") {
            document.querySelector(".weather-icon").src = `images/clouds.png`;
        } else if (data.weather[0].main === "Drizzle") {
            document.querySelector(".weather-icon").src = `images/drizzle.png`;
        } else if (data.weather[0].main === "Humidity") {
            document.querySelector(".weather-icon").src = `images/humidity.png`;
        } else if (data.weather[0].main === "Rain") {
            document.querySelector(".weather-icon").src = `images/rain.png`;
        } else if (data.weather[0].main === "Snow") {
            document.querySelector(".weather-icon").src = `images/snow.png`;
        }
        document.querySelector(".weather").style.display = `initial`;
    } catch (error) {
        document.querySelector(".error").style.display = `initial`;
    }
}