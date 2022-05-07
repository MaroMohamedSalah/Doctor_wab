
// link pages 
// Pharmacies
let pharm = document.getElementById("pharm");
pharm.onclick = function (){
    location.href="https://mohamedhesham5200.github.io/pharma/"
}
// Chck Your Health
let check = document.getElementById("check");
check.onclick = function (){
    location.href="../services/check your health/index.html"
}
// Mediaction Guide
let med = document.getElementById("med");
med.onclick = function (){
    location.href="#"
}
// store
let store = document.getElementById("store");
store.onclick = function (){
    location.href="#"
}
// Define specialization
let def = document.getElementById("def");
def.onclick = function (){
    location.href="#"
}
// Medical obbreviations
let obb = document.getElementById("obb");
obb.onclick = function (){
    location.href="#"
}
// Viruses and Epidemics
let virus = document.getElementById("virus");
virus.onclick = function (){
    location.href="../services/virus/index.html"
}
// chat
let chat = document.getElementById("chat");
chat.onclick = function (){
    location.href="../services/chat/index.html"
}
//near
let near = document.getElementById("near");
near.onclick = function (){
    location.href="https://mahmoud7732.github.io/mahmoudproject.github.io/near-me.html"
}
// cards animation 
window.onscroll = function () {
    if(window.scrollY < 550){ //default
        pharm.style.opacity='0';
        check.style.opacity='0';
        med.style.opacity='0';
        store.style.opacity='0';
        def.style.opacity='0';
        obb.style.opacity='0';
        virus.style.opacity='0';
        chat.style.opacity='0';
    }
        else if (window.scrollY >= 550 && window.scrollY < 800 ) { //(group one)
            pharm.style.opacity='1';
            check.style.opacity='1';
            med.style.opacity='1';
            store.style.opacity='0';
            def.style.opacity='0';
            obb.style.opacity='0';
        }else if(window.scrollY >= 900 && window.scrollY < 1500 ){ //(group tow)
            pharm.style.opacity='0';
            check.style.opacity='0';
            med.style.opacity='0';
            store.style.opacity='1';
            def.style.opacity='1';
            obb.style.opacity='1';
        }else if (window.scrollY >= 1500){ //(group three)
            pharm.style.opacity='0';
            check.style.opacity='0';
            med.style.opacity='0';
            store.style.opacity='0';
            def.style.opacity='0';
            obb.style.opacity='0';
            virus.style.opacity='1';
            chat.style.opacity='1';
            near.style.opacity='1';
        }
        };

        //hover
        //Pharmacies
        let dis1 = document.getElementById("dis1");
        pharm.onmouseenter = function(){
            dis1.innerHTML =  `
            <h2>Pharmacies</h2>
            <h4>Know everything about the most famous Egyptian pharmacies</h4>
            <button id="btn">click me</button>
            `
        }
        pharm.onmouseleave = function (){
            dis1.textContent = "Pharmacies"
        }
        //Chck Your Health
        let dis2 = document.getElementById("dis2");
        check.onmouseenter = function(){
            dis2.innerHTML =  `
            <h2>Chck Your Health</h2>
            <h4>Monitor your health and make sure you are doing well</h4>
            <button id="btn">click me</button>
            `
        }
        check.onmouseleave = function (){
            dis2.textContent = "Check Your Health"
        }
        //Mediaction Guide
        let dis3 = document.getElementById("dis3");
        med.onmouseenter = function(){
            dis3.innerHTML =  `
            <h2>Mediaction Guide</h2>
            <h4>Your comprehensive guide to the right medication</h4>
            <button id="btn">click me</button>
            `
        }
        med.onmouseleave = function (){
            dis3.textContent = "Mediaction Guide"
        }
        //store
        let dis4 = document.getElementById("dis4");
        store.onmouseenter = function(){
            dis4.innerHTML =  `
            <h2>Store</h2>
            <h4>You will find all medicines and medical supplies here</h4>
            <button id="btn">click me</button>
            `
        }
        store.onmouseleave = function (){
            dis4.textContent = "Store"
        }
        //Define specialization
        let dis5 = document.getElementById("dis5");
        def.onmouseenter = function(){
            dis5.innerHTML =  `
            <h2>Define specialization</h2>
            <h4>Suffering from a disease and do not know who to go to?<br> We have your solution</h4>
            <button id="btn">click me</button>
            `
        }
        def.onmouseleave = function (){
            dis5.textContent = "Define specialization"
        }
        //Medical obbreviations
        let dis6 = document.getElementById("dis6");
        obb.onmouseenter = function(){
            dis6.innerHTML =  `
            <h2>Medical obbreviations</h2>
            <h4>All your medical abbreviations in one place</h4>
            <button id="btn">click me</button>
            `
        }
        obb.onmouseleave = function (){
            dis6.textContent = "Medical obbreviations"
        }
        //Viruses and Epidemics 
        let dis7 = document.getElementById("dis7");
        virus.onmouseenter = function(){
            dis7.innerHTML =  `
            <h2>Viruses and Epidemics </h2>
            <h4>Local and global virus and epidemic updates</h4>
            <button id="btn">click me</button>
            `
        }
        virus.onmouseleave = function (){
            dis7.textContent = "Viruses and Epidemics "
        }
        //chat
        let dis8 = document.getElementById("dis8");
        chat.onmouseenter = function(){
            dis8.innerHTML =  `
            <h2>Chat</h2>
            <h4>Talk to your doctor and check on your health</h4>
            <button id="btn">click me</button>
            `
        }
        chat.onmouseleave = function (){
            dis8.textContent = "Chat"
        }
        // near
        let dis9 = document.getElementById("dis9");
        near.onmouseenter = function(){
            dis9.innerHTML =  `
            <h2>Near Me</h2>
            <h4>We believe that communication belongs to everyone—it should be as free and flexible as we all are</h4>
            <button id="btn">click me</button>
            `
        }
        near.onmouseleave = function (){
            dis9.textContent = "Near Me"
        }