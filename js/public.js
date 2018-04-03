$(function () {
    $('#navtab').find('li').click(function () {
        $(this).addClass('sel');
        $(this).siblings('li').removeClass('sel');
    })
    $('.bottom .weixin').hover(
        function () {
            $('#wx-icon').attr({
                src:'img/wenxinsel.png'
            })
        },
        function () {
            $('#wx-icon').attr({
                src:'img/wenxin.png'
            })
        }
    )
    $('.toTop').click(function () {
        $('html , body').animate({scrollTop: 0},'slow');
    })
    $(window).scroll(function (e) {
        if($(document).scrollTop()>700){
            $('.bottom').addClass('d-block')
        }else{
            $('.bottom').removeClass('d-block')
        }
    })
})