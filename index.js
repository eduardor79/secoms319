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
