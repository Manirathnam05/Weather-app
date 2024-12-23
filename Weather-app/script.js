

const ApiKey ="dbe3c550841166dab2f67e5c7eb1c4aa";
const ApiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchinput = document.querySelector("#inputs");
const searchbtn = document.querySelector("#btn");
const climateicon = document.querySelector(".climate-icon");
const searchError = document.querySelector("#search-error");

async function checkWeather(city){
    try {
        const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
    if (!response.ok) {
            throw new Error("City not found");
    }
    const data = await response.json();
    console.log(data);

    document.querySelector(".humidity").textContent=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    document.querySelector("#temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector("#city").innerHTML= data.name;

    if (data.weather[0].main == "Clouds") {
        climateicon.src = "./Assests/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        climateicon.src = "./Assests/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
        climateicon.src = "./Assests/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        climateicon.src = "./Assests/mist.png";
    } else if (data.weather[0].main == "Snow") {
        climateicon.src = "./Assests/snow.png";
    } else if (data.weather[0].main == "Rain") {
        climateicon.src = "./Assests/rain.png";
    }

    document.querySelector(".climate").style.display="block";
    
  } catch (error) {
    searchError.innerHTML ="Invalid! weather data..";
    console.log(error);
    alert(error)
    
  }
}

searchbtn.addEventListener("click",()=>{
    const city = searchinput.value.trim();
    if(city){
        checkWeather(city);
    }
    else(
        alert("please enter a city name..")
    )
   
});



