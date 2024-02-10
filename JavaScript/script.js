
let bars = document.querySelector(".bars");
let ul = document.querySelector("ul");

bars.addEventListener("click", () => {
    ul.classList.toggle("showdata");

    if(ul.className=="showdata"){
        document.getElementById("bar").className="fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className="fa-solid fa-bars";
    }

})





