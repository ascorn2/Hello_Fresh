// Slick Slider------------------------------------------------------------------
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow:3,
    });

});
//Header active-----------------------------------------------------------------
(function (){
    const header = document.querySelector('.header');
    window.onscroll= () => {
        if (window.pageYOffset > 50) {
            header.classList.add ('header_active');
        } 
        else {
            header.classList.remove('header_active')
        };
    };
}())

//Accordion---------------------------------------------------------------------- 
const accordionBtn = document.getElementsByClassName("accordion_btn");
let accordionItt;

for (accordionItt = 0; accordionItt < accordionBtn.length; accordionItt++) {
    accordionBtn[accordionItt].addEventListener("click", 
        function() {
            this.classList.toggle("active_accordion_btn");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight){panel.style.maxHeight = null;} 
            else {panel.style.maxHeight = panel.scrollHeight + "px";}
  });
}

