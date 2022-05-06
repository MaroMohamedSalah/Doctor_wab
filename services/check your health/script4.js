// script blood
let waight = document.getElementById("sys");
let re = document.getElementById("re");
let age = document.getElementById("age");
let height = document.getElementById("height"); 
    // submit btn
    let submit =  document.getElementById("btn2");
    submit.onclick = function(){
        if(age.value < 18){
            window.alert("you must be 18+");
        }else{
            if(height.value >= 147.3 && height.value < 149.9){
                if(waight.value >= 35 && waight.value < 40.2 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 40.2 && waight.value < 52 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 54.5 && waight.value < 63.6 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 65.9 && waight.value < 84.1 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 88.6 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 149.9 && height.value < 152.4){
                if(waight.value >= 36 && waight.value < 41.5 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 41.2 && waight.value < 52 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 56.2 && waight.value < 56.2 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 68.2 && waight.value < 88.6 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 90.9 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 154.9 && height.value < 157.4){
                if(waight.value >= 38.5 && waight.value < 45.5 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 45.5 && waight.value < 59.1 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 61.4 && waight.value < 70.5 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 72.7 && waight.value < 93.2 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 96.5 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 157.4 && height.value < 160){
                if(waight.value >= 39.6 && waight.value < 45.5 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 47.4 && waight.value < 61.4 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 63.6 && waight.value < 72.7 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 75 && waight.value < 97.7 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 99 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 160 && height.value < 162.5){
                if(waight.value >= 41 && waight.value < 45.5 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 47.7 && waight.value < 63.3 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 65.9 && waight.value < 75 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 77.3 && waight.value < 100 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 102.3 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 162.5 && height.value < 165.1){
                if(waight.value >= 37.2 && waight.value < 43 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 45.5 && waight.value < 56.8 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 59.1 && waight.value < 68.2 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 70.5 && waight.value < 90.8 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 93.2 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 167.6 && height.value < 170.1){
                if(waight.value >= 45 && waight.value < 50 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 52.3 && waight.value < 68.8 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 70.5 && waight.value < 84.1 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 86.4 && waight.value < 109.5 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 111.6 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 170.1 && height.value < 172.7){
                if(waight.value >= 46.2 && waight.value < 52.3 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 54.5 && waight.value < 70.5 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 72.7 && waight.value < 86.4 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 88.6 && waight.value < 112.9 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 115.7 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 172.7 && height.value < 175.2){
                if(waight.value >= 47.7 && waight.value < 54.5 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 56.8 && waight.value < 72.7 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 75 && waight.value < 88.6 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 90.9 && waight.value < 116.2 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 119.2 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 175.2 && height.value < 177.8){
                if(waight.value >= 49 && waight.value < 56.8 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 59.1 && waight.value < 75 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 77.3 && waight.value < 90.9 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 93.2 && waight.value < 119.6 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 122.7 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 177.8 && height.value < 180.3){
                if(waight.value >= 50.5 && waight.value < 56.8 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 59.1 && waight.value < 77.3 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 79.5 && waight.value < 93.2 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 96.5 && waight.value < 123.2 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 126.2 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 180.3 && height.value < 182.8){
                if(waight.value >= 52 && waight.value < 59.1 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 61.4 && waight.value < 79.5 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 81.8 && waight.value < 96.5 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 97.7 && waight.value < 176.7 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 130 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 182.8 && height.value < 185.4){
                if(waight.value >= 53.3 && waight.value < 61.4 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 63.6 && waight.value < 81.8 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 84.1 && waight.value < 100 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 102.3 && waight.value < 130.2 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 133.5 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 185.4 && height.value < 187.8){
                if(waight.value >= 55 && waight.value < 61.4 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 63.6 && waight.value < 84.1 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 86.1 && waight.value < 102.3 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 104.5 && waight.value < 134 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 137.5 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 187.8 && height.value < 190.5){
                if(waight.value >= 56.5 && waight.value < 63.6 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 65.9 && waight.value < 86.1 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 88.6 && waight.value < 104.5 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 106.8 && waight.value < 137.6 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 141.1 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 190.5 && height.value < 193){
                if(waight.value >= 58 && waight.value < 65.9 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 68.2 && waight.value < 88.6 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 90.9 && waight.value < 106.8 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 109.1 && waight.value < 141.4 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 145 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
            if(height.value >= 190.5){
                if(waight.value >= 59.5 && waight.value < 69.5 ){
                    re.innerHTML = "Underweight"
                    re.style.color = "hsl(196deg 99% 49%)"
                }
                if(waight.value >= 70.5 && waight.value < 90.9 ){
                    re.innerHTML = "Normal"
                    re.style.color = "hsl(113deg 98% 57%)"
                }
                if(waight.value >= 93.2 && waight.value < 107.9 ){
                    re.innerHTML = "Overwaight"
                    re.style.color = "hsl(60deg 100% 50%)"
                }
                if(waight.value >= 111.6 && waight.value < 145.2 ){
                    re.innerHTML = "obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
                if(waight.value >= 149 ){
                    re.innerHTML = "Extreme Obese"
                    re.style.color = "hsl(37deg 100% 50%)"
                }
            }
        }
        console.log(re.textContent)
            // print
            let print2 = document.getElementById("doctor");
            print2.innerHTML =`
            <span class="doc">Doctor</span><span class="web">Web</span>
            <h2 class="title2">Check Your Health</h2>
            <h3 class="blood2">Diabetes:</h3>
            <h3 class="agep">Age: ${age.value}</h3>
            <h3 class="mgp">waight: ${waight.value}</h3>
            <h3 class="hp">height: ${height.value} CM</h3>
            
            <h2 class="s">YOUR OBESITY is: <br> <p class="re2"> ${re.textContent}</p></h2>
            <h3 class="d">Date: ${Date()}</h3>
            `
            let print_btn = document.getElementById("print_icon");
            print_btn.onclick = function(){
                window.print()
            }
    }
    // go to back
    let btn = document.getElementById("return");
    let back = document.getElementById("back");
    btn.onclick = function(){
        location.href = "../check your health/index.html"
    }
    btn.onmouseenter = function(){
        back.style.opacity = '1';
    }
    btn.onmouseleave = function(){
        back.style.opacity = '0';
    }