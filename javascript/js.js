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
      $(".setka").removeClass("blocker");
  });




//   $(".conteiner_2").hover(function(){
//     $(".square_2").css("background-color": "black");
//     $(".square_2").css("border-color": "whyte");
// });
})
