

$(document).ready(function(){
    $('nav > div > ul > li > a').click(function(){
        $('nav .bg').fadeOut(200);
        $(this).parents('li').find('.bg').fadeIn(100);
        $('.upline:not(:visible)').fadeIn(100);
        
        var w = 0;
        var idx = $(this).parents('li').index();
        
        $.each($('nav > div > ul > li'), function(i,e){
            if(i < idx){
               w = w + $(e).width(); 
            }
            
            if(i == idx){
                w = w + ($(e).width() / 2) + 3;
            }
            
            
        });
        
        
        $('.line .arrow').animate({
                marginLeft:w
            }, 300);
        
        console.log($(this).parents('li').index());
    });
    
    
    $('.owl-carousel').owlCarousel({
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        autoplay: false
    });
    
});

$(function(){
  $(document).click(function(event) {
    if ($(event.target).closest("nav > div > ul").length) return;
    $("nav .bg").hide();
    $('.upline').hide();
    event.stopPropagation();
  });
});