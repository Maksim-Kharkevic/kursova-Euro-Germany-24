$(document).ready(function() {

     $("#accordion").accordion({
          collapsibel: true,
            active: false,
           heighStyle: 'content'
  })



  $("#my_button").button()

  $("#clear_form").button()
  $("#clear_form").click(function(event){
     event.prevenrDafault();
    
  })

    
     



    })