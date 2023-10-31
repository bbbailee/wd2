  let start = document.querySelector ('#startbtn')
  let topMenu = document.querySelector ('#topmenu a')
  let navMenu = document.querySelector ('#topmenu')
  let section2 = document.querySelector ('#s2')
  let mainLogo = document.querySelector ('.cls-1')
  let mainLogoInner = document.querySelector ('#Layer_1')
  let navOption1 = document.querySelector ('#nav1')
  let navOption2 = document.querySelector ('#nav2')
  let navOption3 = document.querySelector ('#nav3')
  let navOption4 = document.querySelector ('#nav4')

  // when on 1st section, menu is hidden, shown rest of page // 

  //  nav font color and logo changes on sections 
  
function onScrollNav(){
  let top = window.scrollY 
  console.log (top)
  if (top <=910){
    navOption1.style.visibility = 'hidden'
    navOption2.style.visibility = 'hidden'
    navOption3.style.visibility = 'hidden'
    navOption4.style.visibility = 'hidden'
  }
  else {
    navOption1.style.visibility = 'visible'
    navOption2.style.visibility = 'visible'
    navOption3.style.visibility = 'visible'
    navOption4.style.visibility = 'visible'
  }
  if (top <=2786){
    navOption1.style.color = '#223138'
    navOption2.style.color = '#223138'
    navOption3.style.color = '#223138'
    navOption4.style.color = '#223138'
    mainLogo.style.stroke = '#223138'
    mainLogoInner.style.stroke = '#223138'

  }
  if (top >=2786){
    navOption1.style.color = '#faefdd'
    navOption2.style.color = '#faefdd'
    navOption3.style.color = '#faefdd'
    navOption4.style.color = '#faefdd'
    mainLogo.style.stroke = '#faefdd'
    mainLogoInner.style.stroke = '#faefdd'

  }
  if (top >=4645){
    navOption1.style.color = '#223138'
    navOption2.style.color = '#223138'
    navOption3.style.color = '#223138'
    navOption4.style.color = '#223138'
    mainLogo.style.stroke = '#223138'
    mainLogoInner.style.stroke = '#223138'

  } 
  if (top >=7432){
    navOption1.style.color = '#faefdd'
    navOption2.style.color = '#faefdd'
    navOption3.style.color = '#faefdd'
    navOption4.style.color = '#faefdd'
    mainLogo.style.stroke = '#faefdd'
    mainLogoInner.style.stroke = '#faefdd'

  }
}
// progress bar moves with scroll 
const progressBar = document.querySelector('.progress-bar-values');
window.onscroll = function() {myScroll(),onScrollNav() };

function myScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  progressBar.style.width = scrolled + "%";
}

// parallax bg section 7 
document.addEventListener ("mousemove", parallax)
function parallax(e){
  this.querySelectorAll (".layer").forEach(layer =>{
    
    const speed = layer.getAttribute('data-speed')
    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerHeight - e.pageY*speed)/100

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    
  })
}

  let popUpBox1 = document.querySelector ('#water')
  let popUp1 = document.querySelector ('#water p')
  let popUpAlt1 = document.querySelector ('#waterAlt p')

  let popUpBox2 = document.querySelector ('#waste')
  let popUp2 = document.querySelector ('#waste p')
  let popUpAlt2 = document.querySelector ('#wasteAlt p')

  let popUpBox3 = document.querySelector ('#plastic6')
  let popUp3 = document.querySelector ('#plastic6 p')
  let popUpAlt3 = document.querySelector ('#plastic6Alt p')

  let popUpBox4 = document.querySelector ('#susfisheries')
  let popUp4 = document.querySelector ('#susfisheries p')
  let popUpAlt4 = document.querySelector ('#susfishAlt p')

// pop up 1 
  popUpBox1.addEventListener("mouseover", function () {
    popUp1.style.display = "none"
    popUpAlt1.style.display = 'block'
  })

    
  popUpBox1.addEventListener("mouseout", function () {
    popUpAlt1.style.display = "none"
    popUp1.style.display = 'block'
  })
  
// pop up 2 
  popUpBox2.addEventListener("mouseover", function () {
    popUp2.style.display = "none"
    popUpAlt2.style.display = 'block'
  })

    
  popUpBox2.addEventListener("mouseout", function () {
    popUpAlt2.style.display = "none"
    popUp2.style.display = 'block'
  })

// pop up 3 
  popUpBox3.addEventListener("mouseover", function () {
    popUp3.style.display = "none"
    popUpAlt3.style.display = 'block'
  })
  popUpBox3.addEventListener("mouseout", function () {
    popUpAlt3.style.display = "none"
    popUp3.style.display = 'block'
  })

// pop up 4 
  popUpBox4.addEventListener("mouseover", function () {
    popUp4.style.display = "none"
    popUpAlt4.style.display = 'block'
  })

    
  popUpBox4.addEventListener("mouseout", function () {
    popUpAlt4.style.display = "none"
    popUp4.style.display = 'block'
  })

let helpPopUp1 = document.querySelector ('#popup1')
let xOut1 = document.querySelector ('#xout1')
let helpPopUp2 = document.querySelector ('#popup2')
let xOut2 = document.querySelector ('#xout2')
let helpPopUp3 = document.querySelector ('#popup3')
let xOut3 = document.querySelector ('#xout3')
let helpPopUp4 = document.querySelector ('#popup4')
let xOut4 = document.querySelector ('#xout4')

// open popups in help section 

popUpBox1.addEventListener("click", function (){
  helpPopUp1.style.visibility = "visible";
})
xOut1.addEventListener("click", function (){
  helpPopUp1.style.visibility = "hidden";
})
popUpBox2.addEventListener("click", function (){
  helpPopUp2.style.visibility = "visible";
}) 
xOut2.addEventListener("click", function (){
  helpPopUp2.style.visibility = "hidden";
})
popUpBox3.addEventListener("click", function (){
  helpPopUp3.style.visibility = "visible";
})
xOut3.addEventListener("click", function (){
  helpPopUp3.style.visibility = "hidden";
})
popUpBox4.addEventListener("click", function (){
  helpPopUp4.style.visibility = "visible";
})
xOut4.addEventListener("click", function (){
  helpPopUp4.style.visibility = "hidden";
})

// display facts 

let factBox1 = document.querySelector ('#fact1')
let factBox1p = document.querySelector ('#fact1 p')
let factBox2 = document.querySelector ('#fact2')
let factBox2p = document.querySelector ('#fact2 p')
let factBox3 = document.querySelector ('#fact3')
let factBox3p = document.querySelector ('#fact3 p')
let factBox4 = document.querySelector ('#fact4')
let factBox4p = document.querySelector ('#fact4 p')
let factBox5 = document.querySelector ('#fact5')
let factBox5p = document.querySelector ('#fact5 p')
let factBox6 = document.querySelector ('#fact6')
let factBox6p = document.querySelector ('#fact6 p')
let factBox7 = document.querySelector ('#fact7')
let factBox7p = document.querySelector ('#fact7 p')
let factBox8 = document.querySelector ('#fact8')
let factBox8p = document.querySelector ('#fact8 p')

factBox1.addEventListener("mouseover", function (){
  factBox1p.style.visibility = "visible";
})
factBox1.addEventListener("mouseout", function (){
  factBox1p.style.visibility = "hidden";
})

factBox2.addEventListener("mouseover", function (){
  factBox2p.style.visibility = "visible";
}) 
factBox2.addEventListener("mouseout", function (){
  factBox2p.style.visibility = "hidden";
})

factBox3.addEventListener("mouseover", function (){
  factBox3p.style.visibility = "visible";
})
factBox3.addEventListener("mouseout", function (){
  factBox3p.style.visibility = "hidden";
})

factBox4.addEventListener("mouseover", function (){
  factBox4p.style.visibility = "visible";
})
factBox4.addEventListener("mouseout", function (){
  factBox4p.style.visibility = "hidden";
})

factBox5.addEventListener("mouseover", function (){
  factBox5p.style.visibility = "visible";
})
factBox5.addEventListener("mouseout", function (){
  factBox5p.style.visibility = "hidden";
})

factBox6.addEventListener("mouseover", function (){
  factBox6p.style.visibility = "visible";
})
factBox6.addEventListener("mouseout", function (){
  factBox6p.style.visibility = "hidden";
})

factBox7.addEventListener("mouseover", function (){
  factBox7p.style.visibility = "visible";
})
factBox7.addEventListener("mouseout", function (){
  factBox7p.style.visibility = "hidden";
})

factBox8.addEventListener("mouseover", function (){
  factBox8p.style.visibility = "visible";
})
  
factBox8.addEventListener("mouseout", function (){
  factBox8p.style.visibility = "hidden";
})


  gsap.registerPlugin(ScrollTrigger) 
  // scroll animations 

  gsap.to("#bubble1", {
    y: -400,
    scrollTrigger: {
      trigger: "#s2",
      start: "center",
      end: "bottom",
      scrub: true,
      markers: false,
      id: "scrub",
    }
  })

  gsap.to("#bubble2", {
    x: -400,
    scrollTrigger: {
      trigger: "#s1",
      start: "center",
      end: "bottom",
      scrub: true,
      markers: false,
      id: "scrub",
    }
  })

   gsap.to("#bubble3", {
    y: -600,
    scrollTrigger: {
      trigger: "#s2",
      start: "center",
      end: "bottom",
      scrub: true,
      markers: false,
      id: "scrub",
    }
  })
  gsap.to("#bubble4", {
    y: -400,
    scrollTrigger: {
      trigger: "#s5",
      start: "center",
      end: "bottom",
      scrub: true,
      markers: false,
      id: "scrub",
    }
  })

  gsap.to("#bubble5", {
    x: -600,
    scrollTrigger: {
      trigger: "#s4",
      start: "center",
      end: "bottom",
      scrub: true,
      markers: false,
      id: "scrub",
    }
  })

   gsap.to("#bubble6", {
    y: -600,
    scrollTrigger: {
      trigger: "#s5",
      start: "center",
      end: "bottom",
      scrub: true,
      markers: false,
      id: "scrub",
    }
  })
  gsap.to("#turtle", {
    x: '1000' ,
    scrollTrigger: {
      trigger: "#s1",
      start: "center",
      end: "bottom",
      scrub: true,
      markers: false,
      id: "scrub",
    }
  })
  gsap.to("#text2", {
    x: -1200,
    scrollTrigger: {
      trigger: "#s1",
      start: "center",
      end: "bottom",
      scrub: true,
      markers: false,
      id: "scrub",
    }
  })

// section 3 star 1 (blue) 
gsap.to("#star1", {
  x: -600,
  scrollTrigger: {
    trigger: "#s2",
    start: "center",
    end: "bottom",
    scrub: true,
    markers: false,
    id: "scrub",
  }
})
gsap.to("#star2", {
  x: 400,
  scrollTrigger: {
    trigger: "#s2",
    start: "center",
    end: "bottom",
    scrub: true,
    markers: false,
    id: "scrub",
  }
})
gsap.to("#star3", {
  x: 600,
  scrollTrigger: {
    trigger: "#s2",
    start: "center",
    end: "bottom",
    scrub: true,
    markers: false,
    id: "scrub",
  }
})
// section 3 text
gsap.to("#text3", {
  x: 1100,
  scrollTrigger: {
    trigger: "#s2",
    start: "center",
    end: "bottom",
    scrub: true,
    markers: false,
    id: "scrub",
  }
})
  // section 3 img 
  gsap.to("#climateimg", {
    x: -1100,
    scrollTrigger: {
      trigger: "#s2",
      start: "center",
      end: "bottom",
      scrub: true,
      markers: false,
      id: "scrub",
    }
  })
// section 4 img 
  gsap.to("#fishingimg", {
    x: 1000,
    scrollTrigger: {
      trigger: "#s3",
      start: "center",
      end: "bottom",
      scrub: true,
      markers: false,
      id: "scrub",
    }
  })

  // section 4 text 
  gsap.to("#text4", {
    x: -1500,
    scrollTrigger: {
      trigger: "#s3",
      start: "center",
      end: "bottom",
      scrub: true,
      markers: false,
      id: "scrub",
    }
  })

    // section 4 fish 
    gsap.to("#fishies", {
      x: -3800,
      scrollTrigger: {
        trigger: "#s4",
        start: "top",
        end: "center",
        scrub: true,
        markers: false,
        id: "scrub",
      }
    })
    gsap.to("#star16", {
      x: -2000,
      rotation: 360,
      scrollTrigger: {
        trigger: "#s6",
        start: "top",
        end: "bottom",
        scrub: true,
        markers: false,
        id: "scrub",
      }
    })
    gsap.to("#star17", {
      x: -2000,
      rotation: 360,
      scrollTrigger: {
        trigger: "#s6",
        start: "top",
        end: "bottom",
        scrub: true,
        markers: false,
        id: "scrub",
      }
    })
    gsap.to("#star18", {
      x: -2000,
      rotation: 360,
      scrollTrigger: {
        trigger: "#s6",
        start: "top",
        end: "bottom",
        scrub: true,
        markers: false,
        id: "scrub",
      }
    })
    gsap.to("#text5", {
      x: 900,
      scrollTrigger: {
        trigger: "#s4",
        start: "center",
        end: "bottom",
        scrub: true,
        markers: false,
        id: "scrub",
      }
    })
    //   // section 5 img 
      gsap.to("#causeimg", {
        x: -1000,
        scrollTrigger: {
          trigger: "#s4",
          start: "center",
          end: "bottom",
          scrub: true,
          markers: false,
          id: "scrub",
        }
      })
      
  // scroll animations 
  const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    centeredSlides: true,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true,
        clickable: true,
  },
  })
