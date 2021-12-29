let InBut = document.querySelectorAll("input");

onfocus = function removePlaceHolder() {
  if (InBut.placeholder == "Your Name") {
    InBut.placeholder ==" ";
  }
}
//<!--plugin swiper.js-->

    var swiper = new Swiper('.swiper-container', {  
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch:0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      loop:true,  // to rebeat all chefs

      autoplay: {  // to play alone
          delay:2500,
          disableOnInteraction: false,
      }
      
    });


// <!--plugin vanilla-tilt.js-->
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400
});

// hide place holder from contact

let inbut1 = document.getElementById("text");
let inbut2 = document.getElementById("email");
let inbut3 = document.getElementById("message");


inbut1.onfocus = function () {
    
    if (inbut1.placeholder == "Your Name") {
        this.placeholder = " "
    }
};

inbut2.onfocus = function () {
    
    if (inbut2.placeholder == "Your Email") {
        this.placeholder = " "
    }
};

inbut3.onfocus = function () {
    
    if (inbut3.placeholder == "Your Message") {
        this.placeholder = " "
    }
};

inbut1.onblur = function () {
    
    if (inbut1.placeholder == " ") {
        this.placeholder = "Your Name"
    }
};

inbut2.onblur = function () {
    
    if (inbut2.placeholder == " ") {
        this.placeholder = "Your Email"
    }
};

inbut3.onblur = function () {
    
    if (inbut3.placeholder == " ") {
        this.placeholder = "Your Message"
    }
}

