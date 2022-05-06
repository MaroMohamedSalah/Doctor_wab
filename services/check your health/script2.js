// script blood
let sys = document.getElementById("sys");
let dia = document.getElementById("dia"); 
let re = document.getElementById("re");
let age = document.getElementById("age")
    // reset and submit btn
    let reset =  document.getElementById("btn1");
    let submit =  document.getElementById("btn2");
    reset.onclick = function(){
        sys.value = "120"
        dia.value = "70"
    }
    submit.onclick = function(){
        if(age.value < 18){
            window.alert("you must be 18+")
        }
        else if( sys.value < 120 && dia.value < 80){
            re.innerHTML = "NORMAL"
            re.style.color = "rgb(166, 206, 57)"
        }
        else if( sys.value >= 120 &&  sys.value < 129  && dia.value < 80){
            re.innerHTML = "ELEVATED"
            re.style.color = "rgb(255, 236, 0)"
        }
        else if( (sys.value >= 130 &&  sys.value < 139)  || (dia.value >= 80 && dia.value < 90 )){
            re.innerHTML = "HIGH BLOOD PRESSURE (HYPERTENSION) STAGE 1"
            re.style.color = "rgb(255, 182, 0)"
        }
        else if( (sys.value >= 140 &&  sys.value <= 180)  || (dia.value >= 90 && dia.value <= 120 )){
            re.innerHTML = "HIGH BLOOD PRESSURE (HYPERTENSION) STAGE 2"
            re.style.color = "rgb(186, 58, 2)"
        }
        if( sys.value > 180  || dia.value > 120 ){
            re.innerHTML = "HYPERTENSIVE CRISIS (consult your doctor immediately)"
            re.style.color = "rgb(153, 7, 17)"
        }
        // print
        let print2 = document.getElementById("doctor");
        print2.innerHTML =`
        <span class="doc">Doctor</span><span class="web">Web</span>
        <h2 class="title2">Check Your Health</h2>
        <h3 class="blood2">Blood Pressure:</h3>
        <h3 class="agep">Age: ${age.value}</h3>
        <h3 class="sysp">SYS: ${sys.value}</h3>
        <h3 class="diap">DIA: ${dia.value}</h3>
        <h2 class="s">YOUR BLOOD PRESSURE is: <br> <p class="re2"> ${re.textContent}</p></h2>
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