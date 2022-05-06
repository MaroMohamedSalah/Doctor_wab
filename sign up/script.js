// add audio to first name input 
let fname = document.getElementById("fname");
let audio1 = document.getElementById("a1");
console.log(fname);
fname.onfocus = function(){
    console.log("playing")
    audio1.play();
}
fname.onblur = function(){
    console.log("paused")
    audio1.pause();
}
// add audio to secend name input 
let lname = document.getElementById("lname");
let audio2 = document.getElementById("a2");
console.log(fname);
lname.onfocus = function(){
    console.log("playing")
    audio2.play();
}
lname.onblur = function(){
    console.log("paused")
    audio2.pause();
}
//active show pass btn
let show = document.getElementById("show");
let not_show = document.getElementById("nshow");
not_show.onclick = function(){
    document.getElementById("pass").type = "text";
    document.getElementById("cpass").type = "text";
    show.style.display="block"
    not_show.style.display="none"
}
show.onclick = function(){
    document.getElementById("pass").type = "password";
    document.getElementById("cpass").type = "password";
    show.style.display="none"
    not_show.style.display="block"
}
//confierm pass
let pass = document.getElementById("pass");
let cpass = document.getElementById("cpass");
let pass1 = [];
let pass2 = [];
pass.onblur = function(){
    let x = pass.value;
    for(let i=0;i<x.length;i++){
        pass1[i] = x[i] 
    }
}
let ch=0;
let audio3 = document.getElementById("a3")
let audio4 = document.getElementById("a4")
cpass.onblur = function(){
    let y = cpass.value;
    for(let i=0;i<y.length;i++){
        pass2[i] = y[i];
    }
    console.log(pass1);
    console.log(pass2);
    for(let i=0;i<y.length;i++){
        if(pass1.length != pass2.length){
            ch++;
            // ch++;
            console.log(ch);
            if(ch===1){
                console.log("clecked 1 times")
                window.alert("password and Confirm password must be the same !");
            }else if(ch===2){
                console.log("clecked 2 times")
                window.alert("يا حلو يا جميل");
                audio3.play();
            }else if(ch===3){
                console.log("clecked 3 times")
                window.alert("يلاااهوي");
                audio4.play();
            }else{
                window.alert("password and Confirm password must be the same !");
            }
            break;
        }
        else if(pass1[i]!==pass2[i]){
            ch++;
            // ch++;
            console.log(ch);
            if(ch===1){
                console.log("clecked 1 times")
                window.alert("password and Confirm password must be the same !");
            }else if(ch===2){
                audio3.play();
                console.log("clecked 2 times")
                window.alert("يا حلو يا جميل");
            }else if(ch===3){
                console.log("clecked 3 times")
                window.alert("يلاااهوي");
                audio4.play();
            }else{
                window.alert("password and Confirm password must be the same !");
            }
            break;
        }
    }
}

// let test = document.getElementById("test");
// let ch=0;
// test.onclick = function(){
//     console.log(ch)
//     ch++;
//     if(ch===3){
//         console.log("clicked 3 times")
//     }
// }