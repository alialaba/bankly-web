
//Navigation Interaction
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".nav");

mobileNavToggle.addEventListener("click", ()=>{
    const isExpanded = mobileNavToggle.getAttribute("aria-expanded") == 'true';
    mobileNavToggle.setAttribute("aria-expanded" , !isExpanded);
    
    //Attr that indicate whether menu shouble be visible
    nav.toggleAttribute("data-visible")

})