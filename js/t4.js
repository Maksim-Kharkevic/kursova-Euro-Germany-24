$(document).ready(function() {

    $("li").click(function (){
        alert($(this).html())
    })


    $("#email").val('');


    $(".link-moto").click(function (){
        alert($(this).attr('href'))
    })


    $('.head-moto-img').click(function (){
        alert($(this).attr('src'))
    })

    $('#p').click (function (){
        $(this).html("<i>Зараз Функція недоступна. <br> спробуйте пізніше</i>")
    })

    $(".slide-text").click(function (){
        $('.m6').html('<img src="flag-velikobritanii-union-jack.jpg"  alt="" width="50">')
    })

    


    $('.head-moto-img').click(function(){
        $('+h3>a',this).text(function(i,origText){
            return "Ви обрали: "+origText;
        })
    })

    var count = 0;
    $('.blog-post-date').hover(
        function(){
            $('+.blog-post-info>.categorie',this).text(function(i,origText){
                if (count==0){
                    count=1
                    return "Бажаєте замовити ? "+origText;
                }
            })
            $('+.blog-post-info>.categorie',this).fadeIn(1000)
        },
        function(){
            $('+.blog-post-info>.categorie',this).fadeOut(1000)
        }
    )

    



 })