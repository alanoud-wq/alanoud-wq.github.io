// JavaScript Document
var moveScroll;
var lastScrollTop = 0;
var delta = "5"; //where movement starts
var navbarHeigtht = $("#nav").outerHeight();

$(window).scroll(function(event){
  moveScroll = true;
});

setInterval(function(){
  if(moveScroll){
    hasScrolled();
    moveScroll = false;
  }
},250);

function hasScrolled(){
  var wScroll = $(this).scrollTop(); //current scroll value
  
  if(Math.abs(lastScrollTop - wScroll) <= delta)
    return;
  
  if(wScroll > lastScrollTop && wScroll > navbarHeigtht){
     //scroll down -> .nav-up
    $("#nav").removeClass("nav-down").addClass("nav-up");
    $("#dot").removeClass("dot-down").addClass("dot-up");
  } else {
    //scroll up -> .nav-down
    if(wScroll + $(window).height() < $(document).height()){
      $("#nav").removeClass("nav-up").addClass("nav-down");
      $("#dot").removeClass("dot-up").addClass("dot-down");
    }
  }
  
  lastScrollTop = wScroll;
};