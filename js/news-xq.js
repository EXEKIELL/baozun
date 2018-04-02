$(function () {
    $('.info-bottom>div').click(function () {
        $(this).addClass('sel');
        $(this).siblings('div').removeClass('sel')
    })
})