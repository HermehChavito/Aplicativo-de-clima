// Variáveis e seleção de elementos
const apikey = "e63caa74c568eae8d123884b5911b677"
const apiCountryURL = "https://countryflagsapi.com/png/"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")

const weatherContainer  = document.querySelector("#weather-data")

const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    return data
}

const showWeatherData = async(city) => {
    const data = await getWeatherData(city)
    
    cityElement.innerHTML = data.name
    tempElement.innerHTML = `${data.main.temp}&deg;C`
    descElement.innerHTML = data.weather[0].description
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    humidityElement.innerHTML = `${data.main.humidity}%`
    windElement.innerHTML = `${data.wind.speed}km/h`

    weatherContainer.classList.remove("hide")

    console.log(data)
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const city = cityInput.value

    showWeatherData(city)
})