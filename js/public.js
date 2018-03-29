//顶部轮播
var mySwiper1 = new Swiper('.swiper1', {
    // autoplay: 5000,//可选选项，自动滑动
    pagination:'.swiper-pagination',
    paginationClickable :true,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next'
})
//第二轮播
var mySwiper2 = new Swiper('.swiper2',{
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    slidesPerColumn: 2,
    paginationClickable: true,
    spaceBetween: 30
})

$(function () {
    $('#navtab').find('li').click(function () {
        $(this).addClass('sel');
        $(this).siblings('li').removeClass('sel');
    })
})