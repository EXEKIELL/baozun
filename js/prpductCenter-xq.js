$(function () {
    //缩略图轮播
    var mySwiper = new Swiper('.swiper1',{
        direction:'vertical',
        slidesPerView:5,
        spaceBetween:10
    })
    $('.swiper1-wrap').find('div').click(function () {
        $(this).addClass('sel');
        $(this).siblings('div').removeClass('sel');
        // var src = $(this).find('img').attr('src');
        // $('.bigImg').find('img').attr({
        //     src:src
        // })
    })
})