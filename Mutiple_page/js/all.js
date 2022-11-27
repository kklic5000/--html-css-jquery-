
$(document).ready(function() {

  
    $('.backtotop a').click(function(event) {
     event.preventDefault();
     $('html,body').animate({
       scrollTop: 0
     }, 2000);
    });

     // $('.dropdown').click(function (e) { 
    //   e.preventDefault()
      // $('.dropdown').toggleClass("active")
      // $('.dropdown-open').slideToggle();
  // 會一起展開

   // $('.dropdown').click(function (e) { 
    //  $(this).toggleClass("active");
   //   $(this).parent().find('dropdown-open').slideToggle();
    //  $(this).parent().siblings().find('dropdown-open').slideUp();
    //  $(this).parent().siblings().find('dropdown-open').removeClass("active")
//毫無作用


    $('.selectbar > li > a').click(function (e) { 
      e.preventDefault()
      $(this).parent().siblings().find('ul').slideUp();
      $(this).parent().find('ul').slideToggle();
    })


   });