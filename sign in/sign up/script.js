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