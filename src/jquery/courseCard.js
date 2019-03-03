import $ from "jquery";
$(document).ready(function() {
  $(".like").click(function() {
    $(".like").css({
      color: "blue"
    });
  });
  $(".view-comments").click(function() {
    $(window).scrollTop(800);
  });
});
