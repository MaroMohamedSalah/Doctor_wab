let covid = document.getElementById("covid");
let covid_img = document.getElementById("icon");
covid.onmouseenter = function(){
    covid_img.innerHTML = `
    <h1>
    COVID-19
    </h1>
    <h3>
    517 <span>Million</span>
    </h3>`
}
covid_img.onmouseleave = function(){
    covid_img.innerHTML = `<img src="../virus/image/planet-earth-as-a-coronavirus-epidemic-sick-vector-30569806.jpg" alt="">`
}

let info = document.getElementById("info");
let icon2 = document.getElementById("icon2");
info.onmouseenter = function(){
    icon2.innerHTML = `
    <h1>
    Influenza
    </h1>`
}
info.onmouseleave = function(){
    icon2.innerHTML = `<img src="../virus/image/download.jfif" alt="">`
}

let plague = document.getElementById("plague");
let icon3 = document.getElementById("icon3");
plague.onmouseenter = function(){
    icon3.innerHTML = `
    <h1>
    Plague
    </h1>`
}
plague.onmouseleave = function(){
    icon3.innerHTML = `<img src="../virus/image/images.jfif" alt="">`
}