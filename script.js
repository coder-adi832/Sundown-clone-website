const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var proj = document.querySelector("#projects");
var fixed = document.querySelector("#fixed-image");

proj.addEventListener("mouseenter",function(){
    fixed.style.display = "block";
})
proj.addEventListener("mouseleave",function(e){
    if(!fixed.contains(e.relatedTarget)){
        fixed.style.display = "none";
    }
})

var elem = document.querySelectorAll(".projects-contents")

elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
