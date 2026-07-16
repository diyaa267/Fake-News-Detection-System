// ==========================================
// Fake News Detection System - script.js
// ==========================================

console.log("Fake News Detection System Loaded");

// Smooth Scroll
document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(){

        console.log("Navigating to:", this.href);

    });

});

// Button Animation
document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.05)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

});

// Textarea Character Counter
const textarea=document.querySelector("textarea");

if(textarea){

    const counter=document.createElement("p");

    counter.style.marginTop="10px";

    counter.style.color="#555";

    textarea.parentNode.appendChild(counter);

    textarea.addEventListener("input",()=>{

        counter.innerHTML="Characters : "+textarea.value.length;

    });

}

// Fade Animation
window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    document.body.style.transition="1s";

    setTimeout(()=>{

        document.body.style.opacity="1";

    },100);

});

// Footer Year
const footer=document.querySelector("footer p");

if(footer){

    footer.innerHTML="© "+new Date().getFullYear()+" Fake News Detection System";

}