$(document).ready(function() {

    $(".slide-btn").height(100);
    $(".slide-btn").whidth(200);



    function change_width(selectorObj ,w){
        let oldw = $(selectorObj).whidth(w);
        let rizn = w - oldw;
        $(selectorObj).whidth(w).height($(selectorObj).height()+rizn)
    }
   /*домашнє*/
   /*  2*/
    change_width(".head-moto-img", 250);
    change_width(".slide-btn", 500);

    function change_width (selectorObj, W)
    {
        $(selectorObj) . whidth (w);
    }
 /*  3*/
 change_width(".head-moto-img", 900);
 change_width(".slide-btn", 200);
 
  function change_width (selectorObj, w)
  {
    var oldw = $(selectorObj). whidth ();
    var rizn = w - oldw;
    $ (selectorObj).whidth(w).height ($(
        selectorObj).height()+ rizn);
  }

  /*  4*/
  $('.head-moto-img').click(function () {
    change_width(this);
  })
    
  function change_width(selectorObj)
  {
    var whidth = $(selectorObj).whidth ();
    var height = $(selectorObj).height ()
    $(selectorObj).whidth(whidth/2).height(height/2);
  }
     
  /*  5*/
  $('.head-moto-img').click(function(){
    var title = $ (this).attr('title');
    var whidth = $ (this).whidth();
    var height = $ (this).height();

    if (title=="")
    {
        $ (this) .whidth(whidth*1.5).height(height*1.5);
        $ (this) .attr("title","1");
    }
    else
    {
        $ (this) .whidth(whidth*1.5).height(height*1.5);
        $ (this) .attr("title","1");
    }

    /*  6*/
    $('.head-moto-img').hover (
        function () {
            var whidth = $(this).whidth();
            var height = $(this).height();
            $(this).whidth(whidth/2).height(height/2);
        },
        function () {
            var whidth = $(this).whidth();
            var height = $(this).height();
            $(this).whidth(whidth*2).height(height*2);  
        }
    )
    
    /*  7*/
    $('.head-moto-img').hover(
        function() {
           change_width_b (this);
        },
        function() {
            change_width_s(this);
        }
    )

    function change_width_b(selectorObj)
    {
        
    var whidth = $(selectorObj).whidth();
    var height = $ (selectorObj).height();
    $(selectorObj) .whidth(whidth*1.5).height(height*1.5);
 }

 function change_width_s(selectorObj)
 {
    var whidth = $(selectorObj).whidth();
    var height = $ (selectorObj).height();
    $(selectorObj) .whidth(whidth/1.5).height(height/1.5);
 }

 /*  8*/
 $('.head-moto-img').hover(
    function ()
    {
        size_obj (this) ;
    },
    function ()
    {
        $('#p').text("сховати фото");
    }
 )

 $('.head-moto-img').hover(
    function ()
    {
        size_obj (this) ;
    },
    function ()
    {
        $('#p').text("сховати фото");
    }
 )


 function size_obj(selectorObj) {
    var alt = $(selectorObj).attr('alt');
    var whidth = $ (selectorObj).whidth();
    var height = $ (selectorObj).height();

 }
        
    
  })

  /*  9*/

  $('.head-moto-img').click(
    function()
    {
        getInfoImg(this);
    }

  )

  function getInfoImg(selectorObj)
  {
    var src = $(selectorObj).attr('src');
    var whidth = $(selectorObj).whidth();
    var height = $ (selectorObj).height();
  }



})