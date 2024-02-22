const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


async function checkweather(city){
const apiKey = "23de015d811e810c86ee0c95067ddbfc";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const response = await fetch(`${apiurl} &q=${city} &appid=${apiKey}`);
const data = await response.json();
console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";


if(data.weather[0].main === "Clouds"){
    weathericon.src = "clouds.png"
}else if(data.weather[1].main === "Clear"){
    weathericon.src = "Clear.png"
}
else if(data.weather[2].main === "Rain"){
    weathericon.src = "Rain.png"
}
else if(data.weather[3].main === "Drizzle"){
    weathericon.src = "Drizzle.png"
}
else if(data.weather[4].main === "Mist"){
    weathericon.src = "Mist.png"
}
}
searchBtn.addEventListener("click",()=>{ 
    checkweather(searchBox.value);
});

