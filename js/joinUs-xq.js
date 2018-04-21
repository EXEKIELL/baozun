$(function () {
    layui.use(['layer', 'form'], function(){
        var layer = layui.layer
            ,form = layui.form;
    });
    $('.fanhui').click(function () {
        console.log(1)
        window.location.href="加入保尊.html";
    })
    $('#shenqing').click(function () {
        $('#shenqingWrap').css({
            "display":"flex"
        })
    })
    $('#tijiaoBtn').click(function () {
        $('#shenqingWrap').css({
            "display":"none"
        })
    })
    $('.shenqingWrite input').focusin(function (event) {
        if($(this).parent('.shenqingWrite').index()==0){
            $(this).parent('.shenqingWrite').css({
                "border":"1px solid #1471c2"
            })
            $(event.target).parent('.shenqingWrite').find('span').addClass('num2')
        }else if($(this).parent('.shenqingWrite').index()==1){
            $(this).parent('.shenqingWrite').css({
                "border":"1px solid #1471c2"
            })
            $(event.target).parent('.shenqingWrite').find('span').addClass('num2')
        }
    })
    $('.shenqingWrite input').focusout(function (event){
        if($(this).parent('.shenqingWrite').index()==0){
            $(this).parent('.shenqingWrite').css({
                "border":"1px solid #c8c8c8"
            })
            $(event.target).parent('.shenqingWrite').find('span').removeClass('num2').addClass('num1')
        }else if($(this).parent('.shenqingWrite').index()==1){
            $(this).parent('.shenqingWrite').css({
                "border":"1px solid #c8c8c8"
            })
            $(event.target).parent('.shenqingWrite').find('span').removeClass('num2').addClass('num1')
        }
    })
    $('.shenqingWrite textarea').focusin(function () {
        $(this).parent('div').css({
            border:"1px solid #1471c2"
        })
    })
    $('.shenqingWrite textarea').focusout(function () {
        $(this).parent('div').css({
            border:"1px solid #c8c8c8"
        })
    })
    $('.closeShenqing').click(function () {
        $('#shenqingWrap').css({
            "display":"none"
        })
    })
})