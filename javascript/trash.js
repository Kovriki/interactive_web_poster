a='".btn_dalee"'
b='".setka"'
c='".redactor"'
$(function(skip) {
    $(b).addClass("hidden")
    setTimeout(function(){
      $(b).addClass("blocker");
      $(b).css("display","none");
      }, 300);

      setTimeout(function(){
        $(c).removeClass(" hidden");
        $(c).removeClass(" blocker");
      }, 400);
