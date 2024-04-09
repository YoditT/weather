const apiKey = "90b6fd0c9d3bb81969658295d11c177d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name ? data.name : "Ethiopia";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"  ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";


    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        WeatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        WeatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        WeatherIcon.src = "mist.png";
    }
}
searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter" || event.keycode === 13){
        checkWeather(searchBox.value);
    }
})

checkWeather();