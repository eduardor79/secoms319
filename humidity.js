
fetch("data.json")
    .then(response => response.json())
    .then(data => dataToHTML(data))

function dataToHTML(data){
    string1 = data.Humidity+"%"
    var p1 = document.createElement("p")
    p1.innerHTML = string1
    var div1 = document.getElementById("mainDiv")
    div1.appendChild(p1)

}
