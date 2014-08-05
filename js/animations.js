$(document).ready( function (){
  //appends the overlay to each button
$(".card").each( function(){
   var $this = $(this);
$this.append("<div class='ripple'></div>");


  $("#analysis .card").click(function() {
    var _this = $(this);
    window.setTimeout(function() {
      _this.parent().toggleClass('col-sm-3 col-md-3 col-lg-3').toggleClass('col-sm-9 col-md-9 col-lg-9');
      _this.find('.onclick').toggleClass('hidden')
    }, 400)
  });
});
   
   
$(".card").click(function(e){
  var $clicked = $(this);
   
  //gets the clicked coordinates
  var offset = $clicked.offset();
  var relativeX = (e.pageX - offset.left);
  var relativeY = (e.pageY - offset.top);
  var width = $clicked.width();
   
   
  var $ripple = $clicked.find('.ripple');
   
  //puts the ripple in the clicked coordinates without animation
  $ripple.addClass("notransition");
  $ripple.css({"top" : relativeY, "left": relativeX});
  $ripple[0].offsetHeight;
  $ripple.removeClass("notransition");
   
  //animates the button and the ripple
  $clicked.addClass("hovered");
  $ripple.css({ "width": width * 2, "height": width*2, "margin-left": -width, "margin-top": -width });
   
  setTimeout(function(){
  //resets the overlay and button
  $ripple.addClass("notransition");
  $ripple.attr("style", "");
  $ripple[0].offsetHeight;
  $clicked.removeClass("hovered");
$ripple.removeClass("notransition");
  }, 300 );
});
});

