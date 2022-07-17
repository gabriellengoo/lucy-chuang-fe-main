

// back scroll----------------------------------------------------------------
// history.pushState(null, null, location.href);
// window.onpopstate = function(event) {
//     history.go(1);
// };







{/* <CustomView condition={browserName === "Chrome"}> */}

gsap.registerPlugin(ScrollTrigger);




  
// gsap.to('.hscroll', {
//   xPercent: -250,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".hscroll",
//     start: "top 75%",
//     end: "bottom 25%",
//     scrub: true
//   }
// })

// gsap.to('.hscroll', {
//   xPercent: -150,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".hscroll",
//     start: "top center",
//     end: "bottom top",
//     scrub: true
//   }
// })

$( window ).on('scroll', function(){

  var scrollTop = $(this).scrollTop();
  $( '.hscroll' ).css({
    transform: 'translateX('+  ( -1 * scrollTop ) +'px)',
  });

});


// ----------------------------------- time ----------------------------------------------------


$(document).ready(function() {
  // Create two variables with names of months and days of the week in the array
  var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
  var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  
  
  
  setInterval( function() {
      // Create an object newDate () and extract the second of the current time
      var seconds = new Date().getSeconds();
      // Add a leading zero to the value of seconds
      $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
      },1000);
      
  setInterval( function() {
      // Create an object newDate () and extract the minutes of the current time
      var minutes = new Date().getMinutes();
      // Add a leading zero to the minutes
      $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
      },1000);
      
  setInterval( function() {
      // Create an object newDate () and extract the clock from the current time
      var hours = new Date().getHours();
      // Add a leading zero to the value of hours
      $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
      }, 1000);
      
  }); 

// ----------------------------------- mobile support ----------------------------------------------------












// (function () {
//   var scroll = new LocomotiveScroll();
// })();

// gsap.to('.hscroll2', {
//   xPercent: -5,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".hscroll2",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true
//   }
// })





// $(window).scroll(function(){
//   $(".div.hscroll3 > div").css("opacity", 1 - $(window).scrollTop() / 250);
// });
// gsap.to('.mid', {
//   xPercent: -150,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".mid",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true,
//     scale:1,
//   }
// })



// gsap.registerPlugin(ScrollTrigger);
// const tl = gsap.timeline();
// tl.to(".mid", {
//     scrollTrigger: {
//         trigger: ".mid",
//         markers: true,
//         start: "top 20%",
//         end: "70% center",
//         scrub: true,
//     },
//     scale:1,
// });
// tl.to(".mid", {
//     scrollTrigger: {
//         trigger: ".mid",
//         markers: true,
//         start: "0% bottom",
//         end: "80% center",
//         scrub: true,
//     },
//     scale:2,
//     immediateRender: false
// });



// gsap.to('.hscroll3 > div > img', {
//   xPercent: -1,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".hscroll3",
//     start: "top center",
//     end: "bottom top",
//     scale: 0.2,
//     scrub: true
//   }
// })












// $(window).scroll(function(){
//   $(".hscroll3 > div").css("opacity", 1 - $(window).scrollTop() / 250);
// });

console.log("hey im here")











