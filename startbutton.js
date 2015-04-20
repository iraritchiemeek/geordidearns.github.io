
$(document).ready(function(e){

$('#startBtn').click(function(){
  var sec = 0;

  start();
  $('.playmusic').trigger('play');

  function pad ( val ) { return val > 9 ? val : "0" + val; }

  setInterval( function(){

    $("#seconds").html(pad(++sec%60));
    $("#minutes").html(pad(parseInt(sec/60,10)));

  }, 1000);

  $(this).remove();
});



});

 $('#muteBtn').click(function(){

        $('.playmusic').trigger('pause');

            var sec = 0;
        function pad ( val ) { return val > 9 ? val : "0" + val; }
        setInterval( function(){
            $("#seconds").html(pad(++sec%60));
            $("#minutes").html(pad(parseInt(sec/60,10)));
        }, 1000);

      $(this).remove();
      });