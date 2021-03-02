// function skip (){
//   $(document).ready(function(){
//
//
// }

$(document).ready(function(){




  let rotate = 0;
  $(".quater, .red_square").click(function(){
    rotate += 90;
  $(this).css({"transform": "rotate("+rotate+"deg)"
    });
  if rotate == 360
  });

  $(".btn").click(function(){
    $(".begin").addClass("hidden")
    setTimeout(function(){
      $(".begin").addClass("blocker");
      }, 300);

      setTimeout(function(){
        $(".setka").removeClass("blocker, hidden");
      }, 400);
      // $(document).css({"background":"white"})

      // $(".setka").removeClass("blocker");
      $(".setka").css({"display":"grid",
      "grid-template-rows": "6vw auto 6vw"
    });
  });
  $(".conteiner_2").click(function(){
    $(".conteiner_2").toggleClass("container_fill")
    $(".square_2").toggleClass("fill")
  })
  $(".conteiner_4").click(function(){
    $(".conteiner_4").toggleClass("container_fill")
    $(".square_4").toggleClass("fill")
  })

//объявляем count = '0'
// после клика на контейнер2 или контейнер4
// count+=1
//

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
//   $(".conteiner_2").hover(function(){
//     $(".square_2").css("background-color": "black");
//     $(".square_2").css("border-color": "whyte");
// });
})
