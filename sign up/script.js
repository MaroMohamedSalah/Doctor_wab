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
cpass.onblur = function(){
    let y = cpass.value;
    for(let i=0;i<y.length;i++){
        pass2[i] = y[i];
    }
    console.log(pass1);
    console.log(pass2);
    for(let i=0;i<y.length;i++){
        if(pass1.length != pass2.length){
            window.alert("password and Confirm password must be the same !");
            break;
        }
        else if(pass1[i]!==pass2[i]){
            window.alert("password and Confirm password must be the same !");
            break;
        }
    }
}
