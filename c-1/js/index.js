$(document).ready(function(){
    //메뉴
    
    $('.menu_li').on('mouseover',function(){
        $(this).find('p').addClass('menu_li_act');
        $(this).find('.sub_menu_ul').addClass('sub_menu_ul_act')  
    })
    
    $('.menu_li').on('mouseout',function(){
        $(this).find('p').removeClass('menu_li_act');
        $('.sub_menu_ul').removeClass('sub_menu_ul_act')  
    })
    $('.sub_menu_ul li').on('mouseover',function(){
        $(this).addClass('menu_li_act')
    })
    $('.sub_menu_ul li').on('mouseout',function(){
        $(this).removeClass('menu_li_act')
    })
    // slide
    
    let b_index = 1;
    let b_length= $('.banner').length;
    setInterval (function(){
        $('.banner').eq((b_index-1) % b_length).fadeOut(1000);
        $('.banner').eq(b_index % b_length).fadeIn(1000);
        b_index++;
    },3000)
    // 공지사항
    
    $('.c_title').on('click',function(){
        $('.c_title').removeClass('c_title_act');
        $(this).addClass('c_title_act');
        $('.c_content').removeClass('c_content_act')
        $('.c_content').eq($(this).index()).addClass('c_content_act')
    })
    // 모달창
    
    $('.c_content_li').eq(0).on('click',function(){
        $('.modal').addClass('modal_act')
    })
    $('.p_close').on('click', function(){
        $('.modal').removeClass('modal_act');
        
    })
    
    
    
    
    
    
})