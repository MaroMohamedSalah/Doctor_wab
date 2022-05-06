let blood = document.getElementById("blood");
let diabetes = document.getElementById("diabetes");
let obesity = document.getElementById("obesity");
// display img when hover
blood.onmouseenter = function(){
    document.getElementById("ar1").style.opacity='1'
    document.getElementById("img1").style.opacity='1'
}
blood.onmouseleave = function(){
    document.getElementById("ar1").style.opacity='0'
    document.getElementById("img1").style.opacity='0'
}
blood.onclick = function(){
    location.href = "../check your health/blood.html"
}

diabetes.onmouseenter = function(){
    document.getElementById("ar3").style.opacity='1'
    document.getElementById("img2").style.opacity='1'
}
diabetes.onmouseleave = function(){
    document.getElementById("ar3").style.opacity='0'
    document.getElementById("img2").style.opacity='0'
}
diabetes.onclick = function(){
    location.href = "../check your health/diabetes.html"
}
obesity.onmouseenter = function(){
    document.getElementById("ar2").style.opacity='1'
    document.getElementById("img3").style.opacity='1'
}
obesity.onmouseleave = function(){
    document.getElementById("ar2").style.opacity='0'
    document.getElementById("img3").style.opacity='0'
}
obesity.onclick = function(){
    location.href = "../check your health/obesity.html"
}