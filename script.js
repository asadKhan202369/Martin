
function navbutton(){
    document.querySelectorAll(".button")
.forEach(function(elem){
     elem.addEventListener("mouseenter",function(val){
        var tl = gsap.timeline();
        tl.
        to(".button1 .b1",{
            y:"-50",
            ease:Expo.easeInout,
            duration:.2
        })
        .to(".button2",{
            delay:-.5,
            width:"100%",
            ease:Expo.easeInout,
            duration:.3
        })
        .to(".button2 .b2",{
            delay:-.3,
            y:0,
            ease:Expo.easeInout,
            duration:.5
        })
       
        
        
     })
})
document.querySelectorAll(".button")
.forEach(function(elem){
     elem.addEventListener("mouseleave",function(val){
        var tl = gsap.timeline();
        tl.
        to(".button2 .b2",{
            y:"100%",
            ease:Expo.easeInout,
            duration:.5
        })
        .to(".button2",{
            delay:-.3,
            width:"0%",
            ease:Expo.easeInout,
            duration:.5
        })
        .to(".button1 .b1",{
            delay:-.5,
            y:"0",
            ease:Expo.easeInout,
            duration:.5
        })
        
        
        
        
     })
})
}

function textbutton(){
    document.querySelectorAll(".scroll")
.forEach(function(elem){
     elem.addEventListener("mouseenter",function(val){
        var tl = gsap.timeline();
        tl.
        to(".scroll1 h5",{
            y:"-50",
            ease:Expo.easeInout,
            // duration:.5
        })
        .to(".scroll1 img",{
            delay:-.5,
            y:"50",
            ease:Expo.easeInout,
            duration:.2
        })
        .to(".scroll2",{
            delay:-.3,
            width:"100%",
            ease:Expo.easeInout,
            duration:.2
        })
        .to(".scroll2 h5,i",{
            opacity:1,
            delay:-.1,
            y:0,
            ease:Expo.easeInout,
            duration:.2
        })        
     })
})
document.querySelectorAll(".scroll")
.forEach(function(elem){
     elem.addEventListener("mouseleave",function(val){
        var tl = gsap.timeline();
        tl.
        to(".scroll2 h5",{
            y:"200%",
            opacity:0,
            ease:Expo.easeInout,
            duration:.2
        })
        .to(".scroll2 i",{
            delay:-.3,
            y:"-200%",
            opacity:0,
            ease:Expo.easeInout,
            duration:.2
        })

        .to(".scroll2",{
            delay:-.1,
            width:"0%",
            ease:Expo.easeInout,
            duration:.2
        })
        .to(".scroll1 h5,img",{
            delay:-.2,
            y:"0",
            ease:Expo.easeInout,
            duration:.2
        })  
     })
})
}

function frontpageAnimation(){

    var tl = gsap.timeline();
    tl.
    to("#fs .img img",{
        delay:1,
        y:-200,
        ease:Expo.easeInout
    })
    .to("#fs",{
        width:"0%",
        ease:Expo.easeInout
    })
    .to("#part1 #text h1,p",{
        x:0,
        ease:Expo.easeInout,
        duration:.5
    })
    .to("#part1 #text .scroll",{
        delay:-.5,
        y:0,
        ease:Expo.easeInout,
        duration:.5
    })
    .to("#part1 #nav img,h3,.button",{
        y:0,
        ease:Expo.easeInout,
        duration:.5
    })
    .to("#part1 #bottom #l,#r",{
        delay:-.3,
        y:0,
        ease:Expo.easeInout,
        duration:.5
    })

}
 

function scrollTrigger(){

gsap.to("#part2 #h1s h1,#part2 #h5 h5",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#part2",
       start:"top 50%",
    },
    y:0,
    stagger:.1,
    ease:Expo.easeInout,
    duration:.5
})
gsap.from("#h1s h1",{
    scrollTrigger:{
        trigger:"#part6",
       scroller:"body",
       start:"top 50%",
    },
    y:100,
    stagger:.1,
    ease:Expo.easeInout,
    duration:.5
})
gsap.from("#part2 #section1 .photu",{
    scrollTrigger:{
        trigger:"#part2",
       scroller:"body",
       start:"top 50%",
    },
    opacity:0,
    ease:Expo.easeInout,
    duration:.5
})

gsap.from("#part2 #section2 .c1",{
    scrollTrigger:{
        trigger:"#part2",
       scroller:"body",
       start:"top 20%",
    },
    y:-300,
    ease:Expo.easeInout,
    duration:1
})
gsap.from("#part2 .scroll",{
    scrollTrigger:{
        trigger:"#part2",
       scroller:"body",
       start:"top 20%",
    },
    x:300,
    ease:Expo.easeInout,
    duration:2
})
gsap.to("#part6 .h1s h1",{
    scrollTrigger:{
        trigger:"#part6",
       scroller:"body",
       start:"top 40%",
    },
    y:0,
    ease:Expo.easeInout,
    duration:1
})
gsap.to("#part6 #s3e2",{
    scrollTrigger:{
        trigger:"#part6",
       scroller:"body",
       start:"top 40%",
    },
    opacity:1,
    ease:Expo.easeInout,
    duration:.5
}
)
}
function move(){

    const card = document.querySelectorAll(".card");

     const cardrows = document.querySelectorAll("#rows .r1")
    .forEach(function(elem){
       const totalWidth = elem.getBoundingClientRect().width;
       const totalHeight = elem.getBoundingClientRect().height;

    elem.addEventListener("mousemove",function(dets){
        card.forEach(function(val){
            val.style.transform = `translate(${-(dets.x - (totalWidth/2))/(totalWidth/100)}%,${((dets.y - 402 - 35)/4.03)/2}%)`;
        })

   })
  })
}

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
      });
}

function horizontal(){
    gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});
}



move();
horizontal();
swiper();
frontpageAnimation();
navbutton();
textbutton();
scrollTrigger();