$(document).ready(function(){
                     
    $( ".fa-bars" ).on('click', function(e) {
      e.preventDefault();
      $( ".mainNav" ).toggleClass("mainNavToggle", 500);
        
    });
    
})