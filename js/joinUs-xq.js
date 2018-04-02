$(function () {
    layui.use(['layer', 'form'], function(){
        var layer = layui.layer
            ,form = layui.form;
    });
    $('.fanhui').click(function () {
        console.log(1)
        window.location.href="加入保尊.html";
    })
})