// Mobile menu

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav ul");


menu.addEventListener("click",()=>{

    nav.classList.toggle("active");

});




// Smooth scrolling

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("click",function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});




// Inquiry button message

const form = document.querySelector("form");


form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
    "Thank you for your inquiry. Deshet Global Investment will contact you soon."
    );

    form.reset();

});
