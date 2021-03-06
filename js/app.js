$(document).foundation();



flowplayer(function(api){
    $('.chapter').on('click', function() {
      api.seek($(this).data('time'));
      $('.programme-item').removeClass('now-playing');
      $(this).parent().addClass('now-playing');
      api.play();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    
    api.on("seek", function(e) {
      var counter=-1;
      $(".chapter").each(function() {
      
        if(api.video.time<$(this).data('time')) {
          if(counter!=-1){
            $('.programme-item').removeClass('now-playing');
            $('.chapter:eq('+counter+')').parent().addClass('now-playing');
            return false
          } else {
            $('.programme-item').removeClass('now-playing');
              return false
          }
        } else {
          counter=counter+1;
        }      
        if (counter==($(".chapter").length-1)) {
           $('.programme-item').removeClass('now-playing');
            $('.chapter').last().parent().addClass('now-playing');
          
        }
    });
    })
    
    api.on("cuepoint", function(e) {
      console.log("checkpoint!");
      console.log(e);
            var counter=-1;
      $(".chapter").each(function() {
      
        if(api.video.time<$(this).data('time')) {
          if(counter!=-1){
            $('.programme-item').removeClass('now-playing');
            $('.chapter:eq('+counter+')').parent().addClass('now-playing');
            return false
          } else {
            $('.programme-item').removeClass('now-playing');
              return false
          }
        } else {
          counter=counter+1;
        }      
        if (counter==($(".chapter").length-1)) {
           $('.programme-item').removeClass('now-playing');
            $('.chapter').last().parent().addClass('now-playing');
          
        }
    });
  })
});

$(document).ready(function() {
  $(".owl-slider").owlCarousel();
  $(".top-channel-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      singleItem:true,
      autoPlay: 7000,
      stopOnHover: true,
      rewindSpeed: 3000,
      paginationSpeed: 3000
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
});
