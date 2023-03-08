getData()
setInterval(getData, 2000)

function getData(){
    fetch("data.json")
        .then(response => response.json())
        .then(data => dataToHTML(data))
}
function dataToHTML(data){
    string1 = data.Humidity+"%"
    var p = document.getElementById("mainP")
    p.innerHTML = string1

}
function myfunction_onload(){
    $.ajax({
        url: "ssh.py",
        context: document.body
    })
}
