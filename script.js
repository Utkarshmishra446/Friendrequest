var istatus = document.querySelector("h4")
var btn = document.querySelector("#Add")
var check = 0


btn.addEventListener("click",function(){
    if(check == 0){
    istatus.innerHTML = "Friend"
    istatus.style.color = "green"
    btn.innerHTML = "Remove friend"
    check = 1}
    else{
    istatus.innerHTML = "Stranger"
    istatus.style.color = "Red"
    btn.innerHTML = "Add friend"
    check = 0 
    }
})