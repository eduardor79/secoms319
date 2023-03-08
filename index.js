
fetch("data.json")
    .then(response => response.json())
    .then(data => dataToHTML(data))

function dataToHTML(data){
    string1 = data.Temperature+" degrees F"
    string2 = data.TemperatureC+" degrees C"
    var p1 = document.createElement("p")
    var p2 = document.createElement("p")
    p1.innerHTML = string1
    p2.innerHTML = string2
    var div1 = document.getElementById("mainDiv")
    var div2 = document.getElementById("mainDiv")
    div1.appendChild(p1)
    div2.appendChild(p2)

}