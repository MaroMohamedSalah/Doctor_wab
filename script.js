// dark theme 
let r = document.querySelector(':root');
let dark = document.getElementById("dark");
let white = document.getElementById("white")
dark.onclick = function(){
        white.style.display="block"
        r.style.setProperty('--backGround' , 'black')
        r.style.setProperty('--font-color' , 'white')
}
white.onclick = function(){
        white.style.display='none'
        r.style.setProperty('--backGround' , 'white')
        r.style.setProperty('--font-color' , '#525e62')
}
// go to sign up
let btn1 = document.getElementById("btn1");
btn1.onclick =  function (){
        location.href="../sign up/index.html"
}
// go to "Explore our services"
let btn2 = document.getElementById("btn2");
btn2.onclick =  function (){
        location.href="../services/index.html"
}
let btn3 = document.getElementById("btn3");
btn3.onclick =  function (){
        location.href="../services/index.html"
}
//go to more qustions
let btn4 = document.getElementById("btn4");
btn4.onclick =  function (){
        location.href="#"
}
btn4.onmouseenter =  function (){
        btn4.textContent = "Contact Us"
}
btn4.onmouseleave = function(){
        btn4.textContent = "Do You Have Questions?"
}
//create "go to top" btn

let toTop = document.getElementById("toTop");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
};

toTop.onclick = function (){
        window.scrollTo({
                top : 0 ,
                left : 0,
                behavior : "smooth"
        })
}
//add Emergency Numbers when hover
        //police
        let police = document.getElementById("police");
        let c = document.getElementById("c");
        police.onmouseenter =  function (){
                this.innerHTML = `<span id="co-t">122</span> <i id="co" class="fa-solid fa-copy"></i>`
                let copy = document.getElementById("co")
                document.getElementById("co").onclick = function (){
                        copy.style.display="none"
                        document.getElementById("co-t").textContent = "copied !"
                }
        }
        police.onmouseleave = function(){
                police.textContent = "police"
        }
        //Ambulance
        let Ambulance = document.getElementById("amb");
        Ambulance.onmouseenter =  function (){
                this.innerHTML = `<span id="co-t">123</span> <i id="co" class="fa-solid fa-copy"></i>`
                let copy = document.getElementById("co")
                document.getElementById("co").onclick = function (){
                        copy.style.display="none"
                        document.getElementById("co-t").textContent = "copied !"
                }
        }
        Ambulance.onmouseleave = function(){
                Ambulance.textContent = "Ambulance"
        }
        //Fire
        let fire = document.getElementById("fire");
        fire.onmouseenter =  function (){
                this.innerHTML = `<span id="co-t">180</span> <i id="co" class="fa-solid fa-copy"></i>`
                let copy = document.getElementById("co")
                document.getElementById("co").onclick = function (){
                        copy.style.display="none"
                        document.getElementById("co-t").textContent = "copied !"
                }
        }
        fire.onmouseleave = function(){
                fire.textContent = "Fire"
        }