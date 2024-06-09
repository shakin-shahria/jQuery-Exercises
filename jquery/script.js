$(document).ready(function() {
    // Show the panel with a smooth effect
    $('#showButton').on('click', function() {
      $('#panel').stop(true, true).slideDown('slow');
    });
  
    // Hide the panel with a smooth effect
    $('#hideButton').on('click', function() {
      $('#panel').stop(true, true).slideUp('slow');
    });
  
    // Toggle the panel visibility with a smooth effect
    $('#toggleButton').on('click', function() {
      $('#panel').stop(true, true).slideToggle('slow');
    });
  
    // Fade in the image with a smooth effect
    $('#fadeInButton').on('click', function() {
      $('#image').stop(true, true).fadeIn('slow');
    });
  
    // Fade out the image with a smooth effect
    $('#fadeOutButton').on('click', function() {
      $('#image').stop(true, true).fadeOut('slow');
    });
  
    // Fade toggle the image with a smooth effect
    $('#fadeToggleButton').on('click', function() {
      $('#image').stop(true, true).fadeToggle('slow');
    });
  
    // Fade to 50% opacity with a smooth effect
    $('#fadeToButton').on('click', function() {
      $('#image').stop(true, true).fadeTo('slow', 0.5);
    });
  
    // Slide down the panel with a smooth effect
    $('#slideDownButton').on('click', function() {
      $('#panel').stop(true, true).slideDown('slow');
    });
  
    // Slide up the panel with a smooth effect
    $('#slideUpButton').on('click', function() {
      $('#panel').stop(true, true).slideUp('slow');
    });
  
    // Slide toggle the panel with a smooth effect
    $('#slideToggleButton').on('click', function() {
      $('#panel').stop(true, true).slideToggle('slow');
    });
  
    // Animate the box with chaining animations
    $('#animateButton').on('click', function() {
      $('#box').stop(true, true).animate({
        width: '300px',
        height: '200px',
        opacity: 0.5
      }, 1000).animate({
        borderRadius: '50%',
        backgroundColor: '#ff0000'
      }, 1000);
    });
  
    // Stop the animation
    $('#stopButton').on('click', function() {
      $('#box').stop(true, true);
    });
  });
  