$(document).ready(function () {

$('.slide-text h1').slideUp(2000)
$('.slide-text h1').fadeIn(3000)

$(".head-moto-img").fadeTo('slow',0.05)
$(".head-moto-img").fadeTo(7000, 1)

$('.head').slideUp(2000)
$('.head').slideUp(1000)

$('blog-post').fadeOut(1500)
$('blog-time-line').slideUp(2000)
$('blog-time-line').slideDown(3000)
$('blog-post').fadeIn(6000)



    prozor('.slide-btn' , 2000,0.3)


    $("ul.to-nav").slideUp(2000, function(){
        alert('Меню було сховано');
    })

    $('.slide-text').slideUp(2000, function (){
        zr('#my_form',2000,1000)
        prozor('.slide-btn' , 2000,0.3)
        $('.slide-text').slideDown(2000);
    })
})