
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
updateTime()
setInterval(updateTime, 1000)


