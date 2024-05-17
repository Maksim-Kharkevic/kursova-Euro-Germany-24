$(document).ready(function() {



/* 
   $('#about-moto').addClass('new');


   $('#about-moto').prepend('<p class="fon_yellow">Цей абзац доданий за допомогою методу prepend</p>')
   $('#about-moto').append('<p class="fon_yellow">Цей абзац доданий за допомогою методу prepend</p>')
   $('#about-moto').before('<p class="fon_yellow">Цей абзац доданий за допомогою методу prepend</p>')
   $('#about-moto').after('<p class="fon_yellow">Цей абзац доданий за допомогою методу prepend</p>')
 */
/* 
   $('li').hover(
    function () {
        $(this).toggleClass(svitlo)
    }
   ) */

  /*  $('.head-moto-img').click(function(){
    $(this).clone().prependTo('.koshik-wrapper');
    $('.koshik-wrapper').addClass('full-koshik');
    $(this).remove();
    $('.koshik-wrapper').addClass('full-koshik');
   }) */

   $('.head-moto-img').click(function(){
    let moto = $(this);
    $('.koshik-wrapper-items').each(
        function(){
            if(moto.attr('nomer') == $(this).attr('nomer'))
            {
                $(this).html(moto.clone().dblclick(function(){
                    $(this).remove();
                    rahunok();
                }));
                moto.remove();
                $('.koshik-wrapper').addClass('full-koshik');
            }
        }
        
    )
    rahunok();
   })

  function rahunok(){
    let count = 0;
    let suma = 0;
    $('.koshik-wrapper-items>.head-moto-img').each(
        function(){
            count++
            suma= suma+ parseInt($(this).attr('price'));
        }
    )
    $("#suma").html("Всього <b>"+count+"</b> мотоциклів на суму <b>"+suma+"</b> грн")
    if(count>0){
        $('.koshik-wrapper').addClass('full-koshik');
    }else{
        $('.koshik-wrapper').removeClass('full-koshik');
    }
  }








})