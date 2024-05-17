$(document).ready(function() {

    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "fold" ,
            duration: 1000
        }
    })
  

    $("#my_button").on('click',function(event){
         event.preventDefault();
        let umovu = '';
        if ( $("input[type='checkbox']").eq(0).prop('checked') == true ) {
            umovu += 'шолом: так <br>';
        }
        
    if ( $("input[type='checkbox']").eq(1).prop('checked') == true ) {
         umovu += 'Багажник: так <br>';
    }
   
    
     if ( $("input[type='checkbox']").eq(1).prop('checked') == true ) {
        umovu += 'Багажник: так <br>';
     }
     
   
    if ( $("input[type='checkbox']").eq(2).prop('checked') == true )  {
        umovu += 'Мото одяг: так <br>';
    }

    if ($('#inch_yes').prop('checked') == true) {
        umovu += 'Страхування: так <br>';
    }else{
        umovu += 'Страхування: ні <br>';
    }

    $("#dialog").html(
        $('#motoSelect option:selected').text()+"<br>"+
        $("#custom-handle").text()+"мотоциклів "+"<br>"+
        "на такі дні " + $("#from").val() + "до" + $("#to").val() + "<br>" +
        "запланована відстань: "+$('#amount').val()+"<br"+
        "Область:"+$("#tags").val()+"<br>"+ umovu
    )

     $("#dialog").dialog("open");
    let prog_value = $("#progressbar").progresbar("value");
    if (prog_value < 100){
        alert("Вам потрібно заповнити анкетування")
    }else{
        
    }
        $("#dialog").dialog('open')


    })


    $("#tabs").tabs();



    $('#menu').dmenu();
    

    

   





})