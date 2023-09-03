const searchBtn = document.getElementById("btn")
const container = document.getElementById("container")

searchBtn.addEventListener("click", ()=>{
    if(!container.classList.contains("open")){
        container.classList.add("open")
    }else{
        container.classList.remove("open")
    }

})