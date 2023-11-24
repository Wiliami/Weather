const key = "d90ff67156bc289cf5e79d6be28f583f"

function dataOnScreen(data) {
    if (data.name) {
        showError.style.display = 'none';
        document.querySelector(".city").innerHTML = "Clima em " + data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector(".prev").innerHTML = data.weather[0].description
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`  
        

     

    } else {
        showError.style.display = 'block';
    }
}

async function citySearch(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    dataOnScreen(data)

}

function convertToTime() {};

const currentTime = new Date();
const currentHour = currentTime.getHours();

const sunriseTime = convertToTime(sunrise);
const sunsetTime = convertToTime(sunset);

const isDay = currentHour > sunriseTime && currentTime < sunsetTime;





function btnsearch() {
    const city = document.querySelector(".input-city").value

    citySearch(city)
}

//Enter to search
document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.querySelector(".input-city")

    inputElement.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault()
            btnsearch()
        }
    })
})
