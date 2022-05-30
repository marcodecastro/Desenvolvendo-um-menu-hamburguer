var w = window.innerWidth,
    h = window.innerHeight,
    scrolled = false;

window.addEventListener("resize", resize);
function resize() {
  if (w != window.innerWidth) {
    w = window.innerWidth;
  }
  if (h != window.innerHeight) {
    h = window.innerHeight;
    checkScroll();
  }
}

$("#top").find(".selector").click(function() {
  var $id = $(this).attr("id");
  var $anchor = $($id).offset();
  $("body").animate({ scrollTop: $anchor.top }, "slow");
  return false;
});

$(document).ready(function() {
  var scroll_pos = 0;
  $(document).scroll(function() {
    checkFirstScroll();
    checkScroll();
  });
});

function checkScroll() {
  scroll_pos = $(this).scrollTop();
  if (scroll_pos < h - 30) {
    $("#top").css("color", "white");
    $(".selector").removeClass("hover-light").addClass("hover-dark");
  }
  if (scroll_pos > h - 30) {
    $("#top").css("color", "#939393");
    $(".selector").removeClass("hover-dark").addClass("hover-light");
  }
}

function checkFirstScroll() {
  if (scrolled == false) {
    $("#top").fadeIn(2000);
    scrolled = true;
  }
}