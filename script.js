// cursor
var cursor = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
cursor.style.left = dets.x-150+"px"
cursor.style.top = dets.y-150+"px"
})
var h4 = document.querySelectorAll("#nav h4")
h4.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        cursor.style.scale=0.2
        cursor.style.border ="3px solid #fff"
        cursor.style.filter="blur(0px)"
        cursor.style.backgroundColor = "transparent"
    })
    e.addEventListener("mouseleave",function(){
        cursor.style.scale=1
        cursor.style.border ="0px solid #fff"
        cursor.style.filter="blur(30px)"
        cursor.style.backgroundColor = "#3333335c"
    })
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"95px",
    scrollTrigger:{
        trigger:'#nav',
        scroller:'body',
        // markers:true,
        start:"top -10%",
        end:"top -12%",
        scrub:1
    }
    
})

gsap.to("#main",{
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:'#main',
        scroller:'body',
        // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
    
})
gsap.from("#about-us img,about-us-in",{
  
    y:70,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }

})
gsap.from(".card",{
  
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }

})
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    }
})
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });