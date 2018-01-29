
$(document).ready(function() {

  $(".menu-link").click(function(e) {
    e.preventDefault();

    $(".menu-overlay").toggleClass("open");
    $(".menu").toggleClass("open");
  });

  const $body = $('body');

  $(window).on('mouseover', function (e) {
      const {pageX: x, pageY: y} = e; // Destructuring

      const size = (Math.random() * 5) + 'em';
      const $bubble = $('<div class="bubble"></div>').css({
        left: x,
        top: y,
        width: size,
        height: size
      }).appendTo($body);

      $bubble.animate({top: -200}, 3000, function () {
        $bubble.remove(); // Clean up after ourselves to conserve memory.
      });
    });

});
