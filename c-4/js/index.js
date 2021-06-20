$(document).ready(function(){
    $('.menu_li, .sub_menu_li').on('mouseover',function(){
        $(this).addClass('menu_li_act')
        $(this).find('.sub_menu_ul').addClass('sub_menu_ul_act')
    })
    $('.menu_li, .sub_menu_li').on('mouseout',function(){
        $(this).removeClass('menu_li_act')
        $(this).find('.sub_menu_ul').removeClass('sub_menu_ul_act')
    })
    // slide
    
    let b_index = 1;
    let b_length = $('.banner').length;
    setInterval(function(){
        $('.banner').eq(b_index % b_length).fadeIn(1000)
        $('.banner').eq((b_index - 1) % b_length).fadeOut(1000)
        b_index+=1;
        
    },3000)
    
    // modal
    
    $('.c_item').eq(0).on('click',function(){
        $('.modal').addClass('modal_act')
    })
    $('.l_close').on('click',function(){
      $('.modal').removeClass('modal_act')  
    })
})