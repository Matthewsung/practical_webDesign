$(document).ready(function(){
    $('.menu_li, .sub_menu_ul').on('mouseover',function(){
        $(this).addClass('menu_li_act')
        $('.sub_menu_ul').addClass('sub_menu_ul_act')
        
    })
    $('.menu_li, .sub_menu_ul').on('mouseout',function(){
        $(this).removeClass('menu_li_act')
        $('.sub_menu_ul').removeClass('sub_menu_ul_act')
        
    })
    $('.sub_menu_li p').on('mouseover',function(){
        $(this).addClass('sub_menu_li_act')
    })
    
    $('.sub_menu_li p').on('mouseout',function(){
        $(this).removeClass('sub_menu_li_act')    
    })
    
    // slide
    
    let b_index = 1;
    let b_length = $('.banner').length;
    
    setInterval(function(){
        $('.banner').eq(b_index % b_length).fadeIn(1000);
        $('.banner').eq((b_index - 1) % b_length).fadeOut(1000);
        b_index++;
    },2000)
    
    $('.c_item li:first-child').on('click',function(){
        $('.modal').addClass('modal_act')
        
    })
    $('.l_close').on('click',function(){
        $('.modal').removeClass('modal_act')
    })
    
    
    $('.gal_item').on('mouseover',function(){
        $(this).find('img').css({opacity:"0.7"})
    })
    
    $('.gal_item').on('mouseout',function(){
        $(this).find('img').css({opacity:"1"})
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})