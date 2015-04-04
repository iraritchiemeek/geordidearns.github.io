$(document).ready(function() {

   var mouseX = 0, mouseY = 0, limitX = 1250-15, limitY = 600-15;
$(window).mousemove(function(e){
   mouseX = Math.min(e.pageX, limitX);
   mouseY = Math.min(e.pageY, limitY);
});

// cache the selector
var follower = $(".follower");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 50;
    yp += (mouseY - yp) / 50;
    follower.css({left:xp, top:yp});

}, 30);
});