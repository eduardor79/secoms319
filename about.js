var raspberry = document.createElement("img")
var sensor = document.createElement("img")
var usb = document.createElement("img")
raspberry.src = "./images/Raspberry.jpeg"
raspberry.alt = "Raspberry Pi"
sensor.src = "./images/Sensor.jpeg"
sensor.alt = "DHT11 Sensor"
usb.src = "./images/Usb.jpeg"
usb.alt = "USB A to USB Micro B"

var div1 = document.getElementById("box1")
div1.insertBefore(raspberry, div1.firstChild)
var div2 = document.getElementById("box2")
div2.insertBefore(sensor, div2.firstChild)
var div3 = document.getElementById("box3")
div3.insertBefore(usb, div3.firstChild)

fetch("about.json")
    .then(response => response.json())
    .then(data => dataToHTML(data))

function dataToHTML(data){
    string1 = data.hardware[0].name+" is "+data.hardware[0].description+". It cost about $"+data.hardware[0].price
    string2 = data.hardware[1].name+" is "+data.hardware[1].description+". It cost about $"+data.hardware[1].price
    string3 = data.hardware[2].name+" is "+data.hardware[2].description+". It cost about $"+data.hardware[2].price
    var p1 = document.createElement("p")
    var p2 = document.createElement("p")
    var p3 = document.createElement("p")
    p1.innerHTML = string1
    p2.innerHTML = string2
    p3.innerHTML = string3
    var div1 = document.getElementById("box1text")
    var div2 = document.getElementById("box2text")
    var div3 = document.getElementById("box3text")
    div1.appendChild(p1)
    div2.appendChild(p2)
    div3.appendChild(p3)
}


