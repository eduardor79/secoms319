var temp1 = document.createElement("img")
temp1.src = "./images/weather.png"
temp1.alt = "weather"
temp1.height = "100"
var div1 = document.getElementById("reading1")
div1.insertBefore(temp1, div1.firstChild)

var temp2 = document.createElement("img")
temp2.src = "./images/weather.png"
temp2.alt = "weather"
temp2.height = "100"
var div2 = document.getElementById("reading2")
div2.insertBefore(temp2, div2.firstChild)



getData()
setInterval(getData, 2000)

function getData(){
    fetch("data.json")
        .then(response => response.json())
        .then(data => dataToHTML(data))
}
function dataToHTML(data){
    string1 = data.Temperature+" degrees F"
    string2 = data.TemperatureC+" degrees C"
    var p1 = document.getElementById("mainP1")
    var p2 = document.getElementById("mainP2")
    p1.innerHTML = string1
    p2.innerHTML = string2

}
function myfunction_onload(){
    $.ajax({
        type: "POST",
        url: "ssh.py",
    })
}
