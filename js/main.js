$(document).ready(function() {


	// Smoot Scroll

	$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

    // Paralax one
    var controller = new ScrollMagic.Controller();

    // Build Scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement:'#finding'
    })
    .setClassToggle('#finding','fade-in')
    .addTo(controller);

    // Paralax Two
    var ourScene = new ScrollMagic.Scene({
        triggerElement:'#finding2'
    })
    .setClassToggle('#finding2','fade-in')
    .addTo(controller);

     // Paralax Tree
    var ourScene = new ScrollMagic.Scene({
        triggerElement:'#finding3'
    })
    .setClassToggle('#finding3','fade-in')
    .addTo(controller); 

     // Paralax Four
    
     var ourScene = new ScrollMagic.Scene({
         triggerElement:'#finding4'
     })
     .setClassToggle('#finding4','fade-in')
     .addTo(controller); 

     // Paralax Five
 
     var ourScene = new ScrollMagic.Scene({
         triggerElement:'#finding5',
         duration :400
     })
     .setClassToggle('#finding5','fade-in')
     .addTo(controller); 

    // Slider
});
