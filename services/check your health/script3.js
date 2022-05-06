// diabetes
let mg = document.getElementById("mg");
let re = document.getElementById("re");
let age = document.getElementById("age2")
    // reset and submit btn
    let reset =  document.getElementById("btn3");
    let submit =  document.getElementById("btn4");
    reset.onclick = function(){
        mg.value = "97"
    }
    submit.onclick = function(){
        if(age.value < 6){
            window.alert("you must be 6+")
        }
        else if(age.value >= 6 && age.value < 12 ){
            if(mg.value >= 80 && mg.value < 180){
                re.innerHTML = "NORMAL (6-12)"
                re.style.color = "#4eff00"
            }
        }
        else if(age.value >= 12){            
            if( mg.value >= 97 && mg.value < 155){
                re.innerHTML = "NORMAL"
                re.style.color = "#4eff00"
            }
            else if( mg.value >= 155 &&  mg.value < 184){
                re.innerHTML = "PRE-DIABETES"
                re.style.color = "#f5ff48"
            }
            else if( mg.value >= 184 &&  mg.value < 212){
                re.innerHTML = "DIABETES"
                re.style.color = "#ffc1e3"
            }
            else if( mg.value >= 212 &&  mg.value <= 268){
                re.innerHTML = "DIABETES"
                re.style.color = "#ff3ee3"
            }
            else{
                re.innerHTML = "DIABETES"
                re.style.color = "#ff029f"
            }
        }
        // print
        let print3 = document.getElementById("doctor");
        console.log(print3)
        print3.innerHTML =`
        <span class="doc">Doctor</span><span class="web">Web</span>
        <h2 class="title2">Check Your Health</h2>
        <h3 class="blood2">Diabetes:</h3>
        <h3 class="agep">Age: ${age.value}</h3>
        <h3 class="mgp">MG: ${mg.value}</h3>
        <h2 class="s">YOUR DIABETES is: <br> <p class="re2"> ${re.textContent}</p></h2>
        <h3 class="d">Date: ${Date()}</h3>
        `
        let print_btn2 = document.getElementById("print_icon2");
        print_btn2.onclick = function(){
            window.print()
            console.log("done")
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