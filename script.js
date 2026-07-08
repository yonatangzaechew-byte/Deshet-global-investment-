
// Mobile menu

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");


menu.addEventListener("click", ()=>{

    if(nav.style.display === "flex"){
        nav.style.display = "none";
    }
    else{
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "70px";
        nav.style.right = "20px";
        nav.style.background = "#111";
        nav.style.padding = "20px";
        nav.style.borderRadius = "15px";
    }

});




// Smooth appearance animation

const cards = document.querySelectorAll(".card, .project");


const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

    }

});

});



cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.7s";

    observer.observe(card);

});
