$(document).ready(function(){
// 메뉴
    
    $('.menu_li, .sub_menu').on('mouseover',function(){
        $(this).addClass('menu_li_act');
        
        $('.sub_menu').addClass('sub_menu_act');
    })
    $('.menu_li, .sub_menu').on('mouseleave',function(){
        $(this).removeClass('menu_li_act');
        $('.sub_menu').removeClass('sub_menu_act')
    })
    $('.sub_li div').on('mouseover',function(){
        $(this).addClass('sub_li_act')
    })
    
    $('.sub_li div').on('mouseleave',function(){
        $(this).removeClass('sub_li_act')
    })
//슬라이드
    
    let b_index = 1;
    let b_length = $('.banner').length;
    let b_timer = 700;
    setInterval(function(){
        $('.banner').eq((b_index - 1) % b_length).animate({top:"-100%"},b_timer).animate({top:"100%"},0);
        $('.banner').eq(b_index % b_length).animate({top:0},b_timer);
        b_index++;
    },3000)
// 공지사항
    $('.title').on('click',function(){
        $('.title').removeClass('title_act');
        $(this).addClass('title_act');
        $('.container_item').removeClass('container_item_act');
        $('.container_item').eq($(this).index()).addClass('container_item_act')
    })
    
    $('.notice_li').eq(0).on('click',function(){
        $('.pan').addClass('pan_act');
        $('.modal').addClass('modal_act');
    })
    $('.m_close').on('click',function(){
        $('.pan').removeClass('pan_act');
        $('.modal').removeClass('modal_act');
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})