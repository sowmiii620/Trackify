var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addbutton=document.querySelector(".add-btn")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelsong=document.getElementById("cancel-song")

cancelsong.addEventListener("click",function(event){
   event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addbutton=document.getElementById("add-song")
var composername=document.getElementById("composer-name-input")
var songname=document.getElementById("song-name-input")
var textarea=document.getElementById("text-area-input")

addbutton.addEventListener("click",function(event){
    var div=document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML=`<h1>${composername.value}</h1><h2>${songname.value}</h2>
    <p>${textarea.value}</p><button onclick="deletesong(event)">Delete</button>`
    container.append(div)
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletesong(event){
    event.target.parentElement.remove()
}