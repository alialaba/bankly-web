
//Selecting Elemnts
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".nav");

const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container")
const  tabsContent = document.querySelectorAll(".operations__content");


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



//Tabbed component
tabsContainer.addEventListener("click", (e)=>{

   const clicked = e.target.closest(".operations__tab");

   //Guard clause
   if(!clicked) return;


//remove active classes
tabs.forEach(tab => tab.classList.remove("operations__tab--active"))
tabsContent.forEach(content => content.classList.remove("operations__content--active"))

//Activate tab area
clicked.classList.add("operations__tab--active")

//Activate content area 
let contentEl = document.querySelector(`.operations__content--${clicked.dataset.tab}`);
contentEl.classList.add("operations__content--active")
})

//Fade Animation
function handleHover(e){
    if(e.target.classList.contains("nav__link")){
        const link = e.target;
        const linkSiblings = link.closest(".nav__list").querySelectorAll(".nav__link");
        linkSiblings.forEach(linkSibling =>{
         if(linkSibling !== link) linkSibling.style.opacity = this;
        })
 
     }
}
document.querySelector(".nav__list").addEventListener("mouseover", handleHover.bind(0.5) )

document.querySelector(".nav__list").addEventListener("mouseout", handleHover.bind(1))