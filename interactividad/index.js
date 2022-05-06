let acercaDeScroll;
$(document).ready(function(){
    if($(window).width() > 800){
     //logo animación
    $("#logo").css({
        opacity: "0",
        top: "3vh"
    });
    $("#logo").animate({
        opacity: "1",
        top: "0"
    }, 1200);

    $(window).on("scroll", function(){
       let scroll = $(window).scrollTop();
       let logoScroll = scroll / 3;
        acercaDeScroll =`-${logoScroll}px`;
       $("#logo").css({
           top: logoScroll
       });

       $(".acercaDe__textoContainer").css({
           top: acercaDeScroll
       })
    });

    //nav animación
    let a=1100;
    $(".nav__items").each(function(){
        $(this).css({
            top: "-4rem"
        });
        $(this).animate({
            top: "0"
        }, a);
        a+=200;
    })   
    }else{
        false;
    }
})