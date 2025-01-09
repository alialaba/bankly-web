
//Selecting Elemnts
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".nav");

const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");



//Mobile Navigation  Toggle Interaction
mobileNavToggle.addEventListener("click", ()=>{
    const isExpanded = mobileNavToggle.getAttribute("aria-expanded") == 'true';
    mobileNavToggle.setAttribute("aria-expanded" , !isExpanded);
    
    //Attr that indicate whether menu shouble be visible
    nav.toggleAttribute("data-visible")

})


//Smooth scrolling
btnScroll.addEventListener("click", ()=>{
    // const s1coords = section1.getBoundingClientRect();
   section1.scrollIntoView({behavior: "smooth"})
})

//Page smooth nav scrolling
document.querySelector(".nav__list").addEventListener("click", (e)=>{
    e.preventDefault();

    //Matching strategy
    if(e.target.classList.contains("nav__link")){
      const elementAttr = e.target.getAttribute("href");
     const targetSection = document.querySelector(elementAttr);
      targetSection.scrollIntoView({behavior: "smooth"})
    
    }
})


