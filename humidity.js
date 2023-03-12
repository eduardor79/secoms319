var humidity = document.createElement("img")
humidity.src = "./images/humidity.png"
humidity.alt = "humidity"
humidity.height = "100"

var div1 = document.getElementById("reading")
div1.insertBefore(humidity, div1.firstChild)
getData()
setInterval(getData, 2000)

function getData(){
    fetch("data.json")
        .then(response => response.json())
        .then(data => dataToHTML(data))
}
function dataToHTML(data){
    string1 = data.Humidity+"% Humidity"
    var p = document.getElementById("mainP")
    p.innerHTML = string1

}
function myfunction_onload(){
    $.ajax({
        type: "POST",
        url: "ssh.py",
    })
}
