$(document).ready(function(){
                     
    $(window).on("scroll", function() {
        console.log('scroll!');
        if($(window).scrollTop() > 40 && $(window).width()>768) {
            $(".headerContainer").addClass("active");
        } else {
           $(".headerContainer").removeClass("active");
        }
    });
    
    
    $( ".fa-bars" ).on('click', function(e) {
      e.preventDefault();
      $( ".mainNav" ).toggleClass("mainNavToggle", 500);
        
    });
    
});