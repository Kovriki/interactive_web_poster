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

// $('.disco_icon').click(function(){
//   $(document).css({'background-color':'green'})
// })
//
//


$(".disco_icon").click(function (){
let bgColor= ["#00FF00", "#FF1493", "#0000FF","#2F4F4F","#87CEEB","#F0FFFF"];
let ranColor = bgColor[Math.floor(Math.random()*bgColor.length)];
$(".disco_icon").click(function(i,val){
  $('.begin, .setka, .redactor, .dragg, .final, .square_2, .square_4, .footer, .top_bar, .redactor_div, .redactor_div, .btn_dalee:hover > p').css("background-color",ranColor);
  $('.head p, .btn_dalee:hover > p, .btn_dalee:hover > arrow_mask').css('color',ranColor)
  })
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

    setTimeout(function(){
      $(".conteiner_4").removeClass("container_fill")
      $(".square_4").removeClass("fill")
    }, 300);
  })
  $(".conteiner_4").click(function(){
    $(".conteiner_4").toggleClass("container_fill")
    $(".square_4").toggleClass("fill")

    setTimeout(function(){
    $(".conteiner_2").removeClass("container_fill")
    $(".square_2").removeClass("fill")
        }, 300);
  })

  $('#btn_1').click(function(){
    // $('.container_2 .container_fill').css('display','grid')
    if ($(".container_2").hasClass("container_fill")){
      $('.redactor_div_2').css('display','grid');
    } else   {
      $('.redactor_div').css('display','grid');
    }
  })

  //   if ($(".container_4").hasClass("container_fill")){
  //     $('.redactor_div').css('display','grid')
  //   }



$("#btn_1").click(function(){
  $(".setka").addClass("hidden")
  setTimeout(function(){
    $(".setka").addClass("blocker");
    $(".setka").css("display","none");
    }, 300);

    setTimeout(function(){
      $(".redactor").removeClass(" hidden");
      $(".redactor").removeClass(" blocker");
    }, 400);

    setTimeout(function(){
      if ($(".conteiner_2").hasClass("container_fill")){
        $('.conteiner_2').clone().appendTo('#redactor_id')
      }
      else {
        $('.conteiner_4').clone().appendTo('#redactor_id');

      }
    }, 500);
});

if ($(".conteiner_2, .conteiner_4 ").hasClass("container_fill")){
  $('.btn_dalee').css({'background-color':'black',
                        'color':'white'})
}
/////
$(".redactor .top_bar .btn_dalee").click(function(){
  $(".redactor").addClass("hidden")
  setTimeout(function(){
    $(".redactor").addClass("blocker");
    $(".redactor").css("display","none");
    }, 300);

    setTimeout(function(){
      $(".dragg").removeClass(" hidden");
      $(".dragg").removeClass(" blocker");
    }, 400);


          $(".dragg").css({"display":"grid",
          "grid-template-rows": "6vw auto 6vw"
        });
        //
        // if ($(".conteiner_2").hasClass("container_fill")){
        //   $('.conteiner_2').clone().appendTo('#redactor_id')
        // }
        // else {
        //   $('.conteiner_4').clone().appendTo('#redactor_id');
        //
        // }


        $('.redactor_div').clone().appendTo('#draggable');
        $( "#draggable" ).draggable({ containment: "#containment-wrapper", scroll: false })
});
/////
// $('.redactor_div').clone().appendTo('#portable_2');

//
$(".dragg .top_bar .btn_dalee").click(function(){
  $(".dragg").addClass("hidden")
  setTimeout(function(){
    $(".dragg").addClass("blocker");
    $(".rdragg").css("display","none");
    }, 300);

    setTimeout(function(){
      $(".final").removeClass(" hidden");
      $(".final").removeClass(" blocker");
    }, 400);


          $(".dragg").css({"display":"none",
          "grid-template-rows": "6vw auto 6vw"
        });
});
$(".final .top_bar .btn_dalee").click(function(){
  $(".final").addClass("hidden")
  setTimeout(function(){
    $(".final").addClass("blocker");
    $(".final").css("display","none");
    }, 300);

    setTimeout(function(){
      $(".begin").removeClass(" hidden");
      $(".begin").removeClass(" blocker");
    }, 400);


          $(".final").css({"display":"none",
          "grid-template-rows": "6vw auto 6vw"
        });
});

////




})
