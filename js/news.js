$(function () {
    $('.page1').find('li').click(function () {
        var index = $(this).index();
        var length = $('.page1').find('li').length;
        if(index != 0 && index != length-1){
            $(this).addClass('disabled');
            $(this).find('a').addClass('sel')
            $(this).siblings('li').removeClass('disabled');
            $(this).siblings('li').find('a').removeClass('sel')
        }else if(index == 0){
            console.log($.inArray("disabled",$(this).siblings('li')))
        }
    })
    $('.list1>a,.list3>button').click(function () {
        window.location.href="新闻中心-详情.html";
    })
})