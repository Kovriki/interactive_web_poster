$(document).ready(function(){
  let rotate = 0;
  $(".quater").click(function(){rotate += 90;
  $(this).css({"transform": "rotate("+rotate+"deg)"
    });
  });

  $(".btn").click(function(){
    $(".begin").addClass("hidden")
    setTimeout(function(){
      $(".begin").addClass("blocker");
      }, 300);
  });



})
