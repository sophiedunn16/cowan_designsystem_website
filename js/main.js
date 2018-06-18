$(document).ready(function() {

  // Attach Scroll to Window //
  window.sr = ScrollReveal();

  //Attach ScrollReveal to the elements //

  sr.reveal ('.show-me', { duration: 1500 });

  // Dropdown selectors //

  // $(".dropdown-section").click(function(){
  //     $(".dropdown-section").removeClass("active");
  //     $(this).addClass("active");
  //     $(".dropdown-section").not(".active").children(".dropdown-content").slideUp("2000");
  //     $(".dropdown-section.active").children(".dropdown-content").slideDown("2000");
  //     $(".navigation").addClass("appear")
  //   });

  $(".dropdown-section").click(function(){
    $(this).toggleClass("active");
    $(this).children(".dropdown-content").slideToggle('10000');
    $(".navigation").addClass("appear")
  })
  $('.identity-finder').click(function(){
    $('.identity-content').slideDown('2000');
    $('.identity-section').addClass('active');

  })
  $('.visual-language-finder').click(function(){
    $('.visual-language-content').slideDown('2000')
    $('.visual-language-section').addClass('active');
  })
  $('.collateral-finder').click(function(){
    $('.collateral-content').slideDown('2000')
    $('.collateral-section').addClass('active');
  })

    // Select all links with hashes
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
        }, 800, function() {
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


});
