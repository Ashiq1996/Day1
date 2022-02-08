
// var a = document.querySelector(#alert-btn)

// =========== alert starts ================== 
function btn1(){
    alert("Are you sure?");
}

// =========== alert ends ==================

$(function(){

    $('.btn13').click(function(){
        $('.inSide').animate({left :'200px'}, 1000);
        $('.inSide').animate({left :'500px', top:'200px'}, 1000);
        $('.inSide').animate({left :'200px', top:'500px'}, 1000);
        $('.inSide').animate({left :'0', top:'200px'}, 1000);
        $('.inSide').animate({left :'200px', top:'0'}, 1000);
        $('.inSide').animate({left :'500px', top:'200px'}, 1000);
        $('.inSide').animate({left :'200px', top:'500px'}, 1000);
        $('.inSide').animate({left :'0', top:'200px'}, 1000);
        $('.inSide').animate({left :'200px', top:'0'}, 1000);
    });
    

    $('.pop-up').hide();
    $('.pop-up').fadeIn(1000);

    $('.close-button').click(function (e) { 

      $('.pop-up').fadeOut(700);
      $('#overlay').removeClass('blur-in');
      $('#overlay').addClass('blur-out');
      e.stopPropagation();
        
    });



});