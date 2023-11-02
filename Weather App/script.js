const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error = document.querySelector(".not-found");

search.addEventListener("click", () => {

    const api = "5a8a1ea3742fb69627682f006680be01";
    const city = document.querySelector(".search-box input").value;

    if (city === "") {
        return;
    }

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`).then(response => response.json()).then(json => {

        if (json.cod === "404") {
            container.style.height = "400px";
            weatherBox.style.display = "none";
            weatherDetails.style.display = "none";
            error.style.display = "block";
            error.classList.add("fade-in");
            return;
        }
        
        error.style.display = "none";
        error.classList.remove("fade-in");

        const image = document.querySelector(".weather-box img");
        const temperature = document.querySelector(".weather-box .temperature");
        const description = document.querySelector(".description");
        const humidity = document.querySelector(".humidity span");
        const wind = document.querySelector(".wind span");

        switch (json.weather[0].main) {
            case "Clear":
                image.src = "/images/clear.png"
                break;
            case "Rain":
                image.src = "/images/rain.png"
                break;
            case "Snow":
                image.src = "/images/snow.png"
                break;
            case "Clouds":
                image.src = "/images/cloud.png"
                break;
            case "Haze":
                image.src = "/images/mist.png"
                break;
            default:
                image.src = "";
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

        weatherBox.style.display = "";
        weatherDetails.style.display = "";
        weatherBox.classList.add("fadeIn");
        weatherDetails.classList.add("fadeIn");
        container.style.height = "590px";
        
    });

});