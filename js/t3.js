$(document).ready(function() {

    $('.slide-btn').click(function (){
        alert('була натиснута кнопка з класом slide-btn')
    })

   
 $(".head-moto-img").click(function (){
        $(this).fadeToggle(2000)
}) 

    $(".header").mouseenter(function() {
      $('.slide-text').slideUp(2000);
    })
    $(".header").mouseleave(function() {
        $('.slide-text').slideDown(2000);
      })
  

      $('.slide-btn').click(function(){
        $(this).text("Оберіть мотоцикл нижче на сторінці")
      })
    
     let text1 = 'Подивитись фото'
     let text2 = 'Сховати фото'

      $('#p').click(function (){
        $(".head-moto-img").slideToggle(2000);
        if($('#p').text()!=text1){
            $('#p').text(text1)
           }else{
            $('#p').text(text2)
        }
      })

      $('.blog-post-date').hover(
        function(){
           $("+.blog-post-info>.categorie",this).fadeIn();
        },
        function(){
            $("+.blog-post-info>.categorie",this).fadeOut();
         }

     )


     $(".contatct-active").click(function(){
        if( $('.m6>a').text()=='eng'){
            $('.m1>a').text('Home');
            $('.m2>a').text('Motorcycles, ');
            $('.m3>a').text('Sale');
            $('.m4>a').text('Forum');
            $('.m5>a').text('Contacts');
            $('.m6>a').text('ua');
        }else{  
            $('.m1>a').text('Головна');
            $('.m2>a').text('Мотоцикл');
            $('.m3>a').text('Розпродаж');
            $('.m4>a').text('Форум');
            $('.m5>a').text('Контакти');
            $('.m6>a').text('eng');

        }
     })
      
})