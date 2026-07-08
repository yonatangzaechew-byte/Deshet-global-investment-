// Mobile menu button

const menu = document.querySelector(".menu");


menu.addEventListener("click", function(){

    alert("Menu opened");

});





// Smooth reveal animation when scrolling

const cards = document.querySelectorAll(
".product-card, .contact-box div, .about, .ceo"
);



const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}


});


},
{
threshold:0.2
}
);




cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="0.8s";


observer.observe(card);


});







// Inquiry button message


const button = document.querySelector("button");


button.addEventListener("click",()=>{


alert(
"Thank you for your inquiry. We will contact you soon."
);


});






// Current year footer


const year = new Date().getFullYear();


const copyright = document.querySelector(".copyright");


if(copyright){

copyright.innerHTML =
"© "+year+" Deshet Global Trading PLC";

}
