// function skip (){
//   $(document).ready(function(){
// $('.begin, .setka').css('display','none')
// }

$(document).ready(function(){
  let rotate = 0;
  $(".quater, .red_square").click(function(){
    rotate += 90;
  $(this).css({"transform": "rotate("+rotate+"deg)"
    });
    if (rotate == 360){rotate = 0};
  });

  // if (eq1 && eq4) {
  //         $('#img3').css('opacity', '1');

  $(".btn").click(function(){
    $(".begin").addClass("hidden")
    setTimeout(function(){
      $(".begin").addClass("blocker");
      }, 300);

      setTimeout(function(){
        $(".setka").removeClass("blocker, hidden");
      }, 400);

      $(".setka").css({"display":"grid",
      "grid-template-rows": "6vw auto 6vw"
    });
  });



  $(".conteiner_2").click(function(){
    $(".conteiner_2").toggleClass("container_fill")
    $(".square_2").toggleClass("fill")
    $(".conteiner_4").removeClass("container_fill")
    $(".square_4").removeClass("fill")
  })
  $(".conteiner_4").click(function(){
    $(".conteiner_4").toggleClass("container_fill")
    $(".square_4").toggleClass("fill")
      $(".conteiner_2").removeClass("container_fill")
      $(".square_2").removeClass("fill")
  })



$(".btn_dalee").click(function(){
  $(".setka").addClass("hidden")
  setTimeout(function(){
    $(".setka").addClass("blocker");
    $(".setka").css("display","none");
    }, 300);

    setTimeout(function(){
      $(".redactor").removeClass(" hidden");
      $(".redactor").removeClass(" blocker");
    }, 400);

});

})
