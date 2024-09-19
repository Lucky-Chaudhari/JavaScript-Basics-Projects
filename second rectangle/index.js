window.addEventListener("mousemove",function(details){
  var rect = document.querySelector(".rect");
  var xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100+rect.getBoundingClientRect().width/2,
    window.innerWidth - (100 +rect.getBoundingClientRect().width/2),
    details.clientX ,
  );

  // gsap is used to moving the mouse with objects on x and y axis
  gsap.to('.rect',{
    left: xval  ,
    ease:Power3,
  })
})