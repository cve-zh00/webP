


function toggle(){
    var sec =document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}

window.addEventListener('scroll',function(){
    var value = window.scrollY;
    let moon = document.getElementById('moon');
    let mountain = document.getElementById('mountain');
    let road = document.getElementById('road');
    let text = document.getElementById('content_text');
    let bg = document.getElementById('bg');
    
    bg.style.top = value * 0.5 + 'px';
    moon.style.left= -value * 0.75 + 'px';
    mountain.style.top = value * 0.15 + 'px';
    moon.style.top = value * 0.8 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
    
})



gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});


    
