$(document).ready(function() {
    $(".slide-btn").animate({width: '500px'}, 1000 )

    $(".slide-text > h1").animate({fontSize : '100px'}, 1500)

    $(".top-nav").animate({
        marginRing : '200px',
        fontSize: '20px'
    }, 1000)

    


   

    $(".blog-post-date").mouseenter(function(){
        $("+.blog-post-info>.post-head", this).animate({
            marginLeft: '300px',
            opacity: '0.4',
            fontSize: '0.7em'
        });
        $(">span",this).animate({
            width: "120px",
            height: "120px"
        })
    })

    $(".blog-post-date").mouseleave(function(){
        $("+.blog-post-info>.post-head", this).animate({
            marginLeft: '0',
            opacity: '1',
            fontSize: '1em'
        });
        $(">span",this).animate({
            width: "90px",
            height: "90px"
        })
    })






})