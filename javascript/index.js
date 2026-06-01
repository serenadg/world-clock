
function updateTime() {
    //LA
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY")
losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss [<small>]A[</small>]")}`;

//Sydney
let sidneyElement = document.querySelector("#sydney");
let sidneyDateElement = sidneyElement.querySelector(".date");
let sidneyTimeElement = sidneyElement.querySelector(".time");
let sidneyTime = moment().tz("Australia/Sydney");
sidneyDateElement.innerHTML = sidneyTime.format("MMMM Do YYYY")
sidneyTimeElement.innerHTML = `${sidneyTime.format("h:mm:ss [<small>]A[</small>]")}`;
}

function updateCity(event) {
    let cityTimezone = event.target.value;
    let cityTime = moment().tz(cityTimezone)
    let cityName = cityTimezone.replace("_", " "). split("/")[1];
    let citiesElement = document.querySelector(".cities");
    citiesElement.innerHTML = 
        `<div class="city">
        <div><h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div></div>
    <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>`;
}

updateTime()
setInterval(updateTime, 1000)

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", updateCity);
